# EUROAPP - EuroMillions Lottery Web Service

Este repositório contém o código do webservice para o **EUROAPP**, uma aplicação de geração de números para o EuroMilhões. O objetivo deste projeto é permitir o deploy de um serviço na plataforma **Render.com**.

## Funcionalidades

- Geração de números e estrelas para o EuroMillions
- Salvamento das combinações em formato JSON
- Disponibilização do serviço via API

## Deploy

Este webservice está configurado para ser implantado automaticamente na **Render.com**.

### Como dar deploy:

1. Crie uma conta no [Render.com](https://render.com/).
2. Conecte o repositório GitHub ao Render.
3. Escolha a opção "Web Service" e selecione o branch desejado.
4. Defina as variáveis de ambiente necessárias (se houver).
5. Clique em "Deploy".

## Uso

Após o deploy, o serviço pode ser acessado através de uma API. Exemplo de chamada:

```bash
curl -X GET https://your-app-on-render.com/euromillions
```

## Tecnologias

- **Node.js** para o backend
- **Express** como framework web
- **JSON** para armazenamento de dados
- **Render.com** para hospedagem

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

