import ffmpeg from 'fluent-ffmpeg';
import path from 'node:path';

const adicionarBackgroundAudio = (caminhoAudioGeradoElevenLabs: any, backgroundOption: string, volumeBackground: string = "0.5") => {
  const caminhoAudioEditado = path.resolve(__dirname, '../out/final_output.mp3');
  const backgroundAudioPath = path.resolve(__dirname, backgroundOption);

  ffmpeg()
    .input(caminhoAudioGeradoElevenLabs)  // Áudio gerado pelo ElevenLabs
    .input(backgroundAudioPath)  // Áudio de fundo
    .complexFilter([
      // Reduz o volume do áudio de fundo para 10%
      `[1:a]volume=${volumeBackground}[a1]`, 
      // Mistura o áudio principal (fala) com o áudio de fundo reduzido
      '[0:a][a1]amix=inputs=2:duration=shortest'
    ])
    .output(caminhoAudioEditado)
    .on('end', () => {
      console.log('Áudio final combinado com sucesso!');
    })
    .on('error', (err) => {
      console.error('Erro ao combinar os áudios:', err);
    })
    .run();
};

export default adicionarBackgroundAudio;
