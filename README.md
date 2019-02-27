# Processo seletivo MJV - Frond Ent

## Requisitos

### Node.js e NPM
Instale o gerenciador de pacotes NPM [clicando aqui](https://www.npmjs.com/get-npm), automaticamente também é instalado o Node.js. Para verificar se foi instalado corretamente digite no seu terminal/CMD o comando `npm -v`, que retornará a versão que foi instalada.
### AngularCLI
Feito isso, instale o AngularCLI digitando no terminal `npm install -g @angular/cli`.


## Preparar token de autenticação
A API utilizada para acesso aos dados do Spotify precisam de autenticação via token, esse gerado a partir do login com uma conta do serviço de streaming. Para receber o token, entre [nesse link](https://developer.spotify.com/console/get-search-item/?q=tania%20bowra&type=artist&market=&limit=&offset=) e clique em "GET TOKEN" na parte inferior da página, na janela que será exibida clique "REQUEST TOKEN" e aceite a permissão do Spotify. Copie o conteúdo do input ao lado do botão "GET TOKEN" e cole-o em: src/app/services/spotify.service.ts, na linha 8:
	
	private  token  =  "TOKEN";
O token gerado pelo Spotify tem expiração curta, após alguns minutos é necessário gerar um novo token e fazer novamente o processo.

## Preparar e rodar aplicação

Navegue até o diretório do repositório clonado pelo terminal/CMD e digite `npm install` para carregar as dependências do projeto. Agora digite `ng serve` para rodar a aplicação em um servidor de desenvolvimento. Após a mensagem de compilação bem sucedida abra o navegador e digite `localhost:4200` para acessar a aplicação.

## O que foi feito ?

Artista: Exibir artistas que correspondem à palavra digitada, exibindo imagem, nome, gênero(s), popularidade (Hot, Cool, Regular, Underground) e link para abrir a página do artista no Spotify. Ao clicar no artista listado é exibido os 5 últimos álbuns dele.

Álbum: Exibir álbuns que correspondem à palavra digitada, exibindo capa do álbum, nome, artista(s) e link para abrir o álbum no Spotify. Ao clicar no nome do álbum é exibida suas faixas, duração, e se disponível um prévia de 30 segundos da música.

Música: Exibe faixas que correspondem à palavra digitada, com sua imagem, nome, nome do álbum, artista(s), duração e link para página do Spotify.

## Observações

Todo o projeto está adaptado para responsividade em desktops e smarthphones, clique [aqui](https://drive.google.com/drive/folders/1LvjPVpmh6Mx_hOGpcDFU7FsieG0h_uEa?usp=sharing) para ver capturas de tela. A função de login será implementada posteriormente para facilidade de uso, bem como um PWA. Para imagens foi utilizado o banco de imagens [Freepik](https://www.freepik.com/) e para ícones [Font Awesome](https://fontawesome.com/).
