import ffmpeg from 'fluent-ffmpeg';
import { Transform } from 'node:stream';

const adicionarBackgroundAudio = (speechAudio: Transform, backgroundAudioPath: string, volumeBackground = "0.1", caminhoAudioEditado: string) => {
  ffmpeg()
    .input(speechAudio)
    .input(backgroundAudioPath)
    .complexFilter([
      `[1:a]volume=${volumeBackground}[a1]`, 
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