var janela;

var dados = [
    {
        maquina: 'Dolce Gusto', 
        capsula: 'Caixa 16 capsulas',
        foto:  './img/CapsulaDulceGusto.jpg' ,
        protudo1: 'Expresso 96g - R$24,00',
        produto2: 'Descafeinado 96g - R$21,00' ,
    },

    {
        maquina: 'Senseo', 
        capsula: 'Caixa 18 capsulas',
        foto:  './img/SenseoIntenso.jpg' ,
        protudo1: 'Classico 120g - R$14,00',
        produto2: 'Intenso 120g - R$14,00' ,
    },

    {
        maquina: 'Nespresso', 
        capsula: 'Caixa 20 capsulas',
        foto:  './img/capsulanespresso.jpg' ,
        protudo1: 'Livanto - R$35,00',
        produto2: 'Ristretto - R$42,00' ,
        produto3: 'Vanilio - R$46,00'
    },

]

function abrirJanela(maquina) {
    janela = window.open("", "", "width=280, height=430, popup")


    for(var i = 0; i <= 2; i++) {
        if(dados[i].maquina == maquina) {
            janela.document.write(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" type="text/css" href="css/sitecafe_p1.css" >
                <title>Janela Produto</title>
            </head>
            <body>
            <section id="janela">
                <h1>${dados[i].maquina}</h1>
                <h3>${dados[i].capsula}</h3>
                <img src="${dados[i].foto}" class="foto-capsula"/>
                <ul>
                    <li>${dados[i].protudo1}</li>
                    <li>${dados[i].produto2}</li>
                </ul>
                <button onclick="window.close()">Fechar</button>
            </section>    
        
            <script src="./js/saches.js"></script>
            </body>
            </html>
            `)
        }
    }
}