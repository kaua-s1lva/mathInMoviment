const form = document.querySelector('form');

form.addEventListener('submit', event => {
    var i, j;
    event.preventDefault();

    const equacao = (document.querySelector('#equacao')).value;
    console.log(equacao);

    const termos = equacao.split('');
    for (i = 0; i <= 5; i++) {
        console.log(termos[i]);
    }

    //CALCULANDO A SEQUENCIA DE FIBONNACCI
    const n = parseInt(termos[5]);

    var matriz = [], m = 1;

    for (i = 0; i <= n; i++) {
        matriz[i] = [];
        for (var j = 0; j <= n; j++) {
            matriz[i][j] = 0;
        }
    }

    for (i = 0; i <= n; i++) {
        for (j = 0; j <= n; j++) {
            if (i == j || j == 0) {
                matriz[i][j] = 1;
            } else if (j < m) {
                matriz[i][j] = matriz[i - 1][j] + matriz[i - 1][j - 1];
            }
        }
        m += 1;
    }

    //CALCULANDO A EQUACAO
    var vetor = [];
    var equacaofinal = [termos[1], termos[3]];
    var calculofinal = []

    vetor = matriz[n];

    console.log("o valor de vetor é: " + vetor);

    for (i = 0; i <= n; i++) {
        if (isNaN(equacaofinal[0]) && isNaN(equacaofinal[1])) {
            console.log("(x + y)");
            calculofinal[i] = vetor[i] + " * " + equacaofinal[0] + "^" + (n-i) + " * " + equacaofinal[1] + "^" + i;
        } else if (isNaN(equacaofinal[0])) {
            console.log("(x + 2)");
            calculofinal[i] = vetor[i] * (equacaofinal[1]**i) + equacaofinal[0] + "^" + (n-i);
            if (i==0) {
                calculofinal[i] = equacaofinal[0] + "^" + (n-i);
            }
        } else if (isNaN(equacaofinal[1])) {
            console.log("(2 + x)");
            calculofinal[i] = vetor[i] * (equacaofinal[0] ** (n-i)) + equacaofinal[1] + "^" + i;
            if (i==n) {
                calculofinal[i] = equacaofinal[1] + "^" + i;
            }
        } else {
            console.log("erro");
        }
    }
    console.log(calculofinal);

    //LIMPANDO O VALOR DA VAR CALCULOFINAL

    for (i=0; i<=n; i++) {
        while (calculofinal[i].indexOf('^1') >= 0) {
            calculofinal[i] = calculofinal[i].replace('^1', '');
        }
        while (calculofinal[i].indexOf('1 * ') >= 0) {
            calculofinal[i] = calculofinal[i].replace('1 * ', '');
        }
        while (calculofinal[i].indexOf(equacaofinal[0] + '^0') >= 0) {
            calculofinal[i] = calculofinal[i].replace(equacaofinal[0] + '^0', '');
        }
        while (calculofinal[i].indexOf(equacaofinal[1] + '^0') >= 0) {
            calculofinal[i] = calculofinal[i].replace(equacaofinal[1] + '^0', '');
        }
    }

    calculofinal[0] = calculofinal[0].replace(' * ', '');
    calculofinal[n] = calculofinal[n].replace(' * ', '');

    


    console.log(calculofinal);

    console.log("valor se positivos ou negativo: " + termos[2]);

    var resultado = '';
    if (termos[2] == '+') {
        resultado = calculofinal.join(' + ');
    } else if (termos[2] == '-') {
        var sinais = [];
        for (i=0; i<=n; i++) {
            if (i%2 == 0) {
                sinais[i] = ' + ';
            } else {
                sinais[i] = ' - ';
            }
        }
        for (i=0; i<=n; i++) {
            resultado += sinais[i] + calculofinal[i];
        }
        resultado = resultado.replace('+', '');
    }
    console.log(sinais);

    console.log(resultado);

    document.getElementById("resultado").innerHTML = resultado;

})