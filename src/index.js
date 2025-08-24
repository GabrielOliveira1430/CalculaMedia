const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Digite sua primeira nota: ' , (nota1) => {
    readline.question('Digite sua segunda nota: ', (nota2) => {

        let n1 = parseFloat(nota1);
        let n2 = parseFloat(nota2);

        if(isNaN(n1) || isNaN(n2)){
            console.log('Erro: Você deve digitar números validos')
        }else{
            let media = (n1 + n2) /2;
            console.log(`Média: ${media}`);
        

        if(media >= 7 ){
            console.log('Aluno aprovado')
        }else{console.log('Aluno reprovado')
        }
        }

        readline.close()
    
    })
})