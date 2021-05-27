<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/apfjunior/video-maker">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/apfjunior/video-maker">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/apfjunior/video-maker">
  <a href="https://github.com/apfjunior">
    <img alt="Made by Antonino Praxedes" src="https://img.shields.io/badge/created%20by-Antonino%20Praxedes-blue">
  </a>
</p>

:film_projector: A minha versão do projeto, ao invés de usar o software proprietário da Adobe (After Effects) do projeto original, ajustei para uso de renderização e efeitos com 02 softwares livres para aplicação de efeitos e conversão do vídeo: [Videoshow](https://www.npmjs.com/package/videoshow) e [FFmpeg](https://www.ffmpeg.org/) respectivamente. Rodando em qualquer sistema operacional, inclusive no linux, onde o software da Adobe não é compatível oficialmente nessa plataforma.

## Sobre o projeto :bulb:

Trata-se de uma POC (Prova de conceito) do projeto de código-aberto do [Filipe Deschamps](https://www.youtube.com/watch?v=kjhu1LEmRpY), onde basicamente o usuário informa algum tema de pesquisa para o vídeo, depois escolhe o filtro de entrada: "Who is", "What is" ou "The history of". Onde a API de busca no Wikipedia da [Algorithmia](https://algorithmia.com/), utilizará da Machine Learning para efetuar o resumo com base no filtro escolhido anteriormente pelo usuário. 

Com o resumo salvo, a próxima etapa será extrair do conteúdo, os metadados e as "keywords" com o uso da API de [Natural Language Understanding](https://www.ibm.com/br-pt/cloud/watson-natural-language-understanding) da Inteligência Artificial Watson da IBM. 

Após as "keywords" coletadas, serão utilizadas como base na busca das imagens, utilizando a API do Google Search/Image. Pois a ideia é lançar a imagem referenciando a legenda sobre o tema durante o vídeo.

Com as imagens organizadas, será aplicado um template prefixados no vídeo, convertendo as imagens extraídas, o resumo recolhido na primeira fase, renderizando o vídeo ao formato ".mp4".

Com o vídeo renderizado, será aplicada a API do YouTube, possibilitando o login com as credenciais para Upload do vídeo automaticamente no canal do YouTube, já incluindo os campos obrigatórios do vídeo como título, descrição e Thumbnail. (Por default, fica como vídeo "não listado"). 

Todas essas etapas: / Recolher conceito / Download Imagens / Renderização Vídeo / Upload YouTube / poderão ser utilizadas separademente.

## :information_source: How To Use

Por ser uma POC, necessitará das chaves das API's utilizadas no projeto. Clicando [aqui](https://github.com/filipedeschamps/video-maker), será direcionado ao README do projeto original com os passos para configuração.

Na minha adapação para ferramenta FREE, precisará das dependências:

```bash
# Videoshow
$ npm i videoshow

# FFmpeg
$ npm install ffmpeg

# @ffmpeg-installer/ffmpeg
$ npm install --save @ffmpeg-installer/ffmpeg

# @ffprobe-installer/ffprobe
$ npm install --save @ffprobe-installer/ffprobe

# Open
$ npm install open
```
Demais dependências utilizadas:

```bash
# Readline
$ npm install readline-sync

## Algorithmia Market Place Machine Learning
$ npm i algorithmia

# Natural Language Understanding
$ npm i watson-developer-cloud and 
$ npm i ibm-watson

# Google APIs
$ npm i googleapis

# Image Downloader
$ npm i image-downloader

# ImageMagick
https://imagemagick.org/script/download.php

# GM
$ npm i gm

# Express
$ npm i express
```

## ScreenShots

<p align="center">
  <img alt="videoMaker" src="screenshots/01.png" width="90%">
  <img alt="videoMaker" src="screenshots/02.png" width="90%">
  <img alt="videoMaker" src="screenshots/03.png" width="90%">
  <img alt="videoMaker" src="screenshots/04.png" width="90%">
  <img alt="videoMaker" src="screenshots/05.png" width="90%">
  <img alt="videoMaker" src="screenshots/06.png" width="90%">
  <img alt="videoMaker" src="screenshots/07.png" width="90%">
  <img alt="videoMaker" src="screenshots/08.png" width="90%">
  <img alt="videoMaker" src="screenshots/09.png" width="90%">
</p>

<p>Check it out Youtube: https://www.youtube.com/watch?v=_Ht4KIq9mko&feature=youtu.be</p>

### :recycle: Como contribuir

- Fork esse repositório;
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`


## :memo:  License

MIT License - Veja [LICENSE](https://opensource.org/licenses/MIT) para mais detalhes.

---
**Created by Antonino Praxedes!  👋🏻 [Get in touch!](https://www.linkedin.com/in/antoninopraxedes/)**

