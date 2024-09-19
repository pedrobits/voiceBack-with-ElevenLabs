# VoiceBack

VoiceBack é uma ferramenta que transforma texto em áudio natural utilizando a API do ElevenLabs e o aprimora com uma faixa de fundo através do FFmpeg. Ideal para criar conteúdos de áudio que soam mais realistas e envolventes, o projeto ilustra um fluxo eficiente de processamento de áudio, desde a geração inicial até a mistura final com o áudio de fundo.
## Descrição

Este projeto realiza as seguintes tarefas:
1. **Geração de Áudio**: Converte texto em áudio usando a API do ElevenLabs.
2. **Processamento de Áudio**: Mistura o áudio gerado com um áudio de fundo especificado.
3. **Saída Final**: Salva o áudio combinado em um arquivo MP3.

## Funcionalidades

- **Geração de Áudio**: Utiliza a API do ElevenLabs para gerar áudio a partir de texto.
- **Mistura de Áudio**: Usa FFmpeg para combinar o áudio gerado com um áudio de fundo, permitindo ajuste no volume do fundo.
- **Configuração Modular**: Permite definir opções de áudio de fundo e caminhos de saída de forma flexível.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/pedrobits/voiceback.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd voiceback
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione a chave da API do ElevenLabs:
     ```plaintext
     ELEVENLABS_API_KEY=Sua_Chave_Aqui
     ```

## Uso

1. **Geração e Processamento de Áudio**:
   - O arquivo `index.ts` contém o fluxo principal do processo.
   - Altere o texto e as opções de áudio conforme necessário no arquivo `index.ts`.

2. **Executar o Projeto**:
   - Para desenvolvimento:
     ```bash
     npm run dev
     ```
   - Para construção e execução:
     ```bash
     npm start
     ```

## Estrutura do Projeto

- **`src/index.ts`**: Arquivo principal que gera o áudio e mistura com o áudio de fundo.
- **`src/modules/gerarAudioPeloTexto.ts`**: Módulo para gerar áudio a partir de texto usando a API do ElevenLabs.
- **`src/modules/adicionarBackgroundAudio.ts`**: Módulo para adicionar o áudio de fundo ao áudio gerado usando FFmpeg.
- **`src/json/backgroundAudioOptions.ts`**: Configuração das opções de áudio de fundo.

## Dependências

- **elevenlabs**: Biblioteca para interagir com a API do ElevenLabs.
- **fluent-ffmpeg**: Biblioteca para processamento de áudio e vídeo com FFmpeg.
- **ffmpeg-static**: Versão estática do FFmpeg para facilitar a execução.

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
