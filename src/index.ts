import fs from 'node:fs';
import path from 'node:path';
import gerarAudioPeloTexto from './modules/gerarAudioPeloTexto';
import adicionarBackgroundAudio from './modules/adicionarBackgroundAudio';
import backgroundAudioOptions from './json/backgroundAudioOptions';

(async () => {
  try {
    const texto = "Olá, este é apenas um teste de uma pessoa falando em uma festa.";
    const backgroundOption = "party_background"; 
    const audioStream = await gerarAudioPeloTexto(texto);

    // Salva o áudio gerado como um arquivo temporário
    const caminhoAudioGeradoElevenLabs = path.resolve(__dirname, './ElevenLabs_Audios/elevenlabs_speech.mp3');
    const speechWriteStream = fs.createWriteStream(caminhoAudioGeradoElevenLabs);

    audioStream.pipe(speechWriteStream);

    speechWriteStream.on('finish', () => {
      console.log('Áudio do ElevenLabs salvo com sucesso!');

      // Resolve o caminho completo para o áudio de fundo selecionado
      const backgroundAudioPath = path.resolve(__dirname, `./audios/${backgroundAudioOptions[backgroundOption]}`);

      // Agora mistura com o áudio de fundo
      adicionarBackgroundAudio(caminhoAudioGeradoElevenLabs, backgroundAudioPath);
    });

    speechWriteStream.on('error', (err) => {
      console.error('Erro ao salvar o áudio do ElevenLabs:', err);
    });
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
})();
