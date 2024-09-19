import { ElevenLabsClient } from 'elevenlabs';

const gerarAudioPeloTexto = async (texto: string) => {
  const elevenlabs = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY
  });

  try {
    // Gera o áudio do ElevenLabs
    const audioStream = await elevenlabs.generate({
      voice: 'Will',
      text: texto,
      model_id: 'eleven_multilingual_v2'
    });

    return audioStream;
  } catch (error) {
    console.error('Erro ao gerar áudio pelo ElevenLabs:', error);
    throw error;
  }
};

export default gerarAudioPeloTexto;
