import path from 'node:path';
import { PassThrough } from 'node:stream';
import gerarAudioPeloTexto from './modules/gerarAudioPeloTexto';
import adicionarBackgroundAudio from './modules/adicionarBackgroundAudio';
import backgroundAudioOptions from './json/backgroundAudioOptions';

(async () => {
  try {
    const texto = "Olá, tudo bem? Acho que sim, né?";
    const backgroundOption = "party_background";
    const audioStream = await gerarAudioPeloTexto(texto);

    const speechStream = new PassThrough();
    await audioStream.pipe(speechStream);

    console.log('Áudio do ElevenLabs salvo com sucesso!');

    const backgroundAudioPath = path.resolve(__dirname, `./audios/${backgroundAudioOptions[backgroundOption]}`);
    const caminhoAudioEditado = path.resolve(__dirname, './out/final_output.mp3');
    const volumeBackground = "0.1"

    // Agora mistura com o áudio de fundo
    adicionarBackgroundAudio(speechStream, backgroundAudioPath, volumeBackground, caminhoAudioEditado);

  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
})();
