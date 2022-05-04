// // uma função sem return é uma subrotina.
// function escreve(nome, sobrenome) {
// const a = sobrenome;
// if (a === undefined) {
//     console.log("a é undefined");
//     console.log("Valor de a", a, "\n");
//     console.log("Valor de sobrenome", sobrenome, "\n");
// }
//     console.log(`${nome} ${sobrenome}`);
// }

// escreve("Glaucio");

// // função nominal que retorna valor.
// function soma(a,b) {
//     return Number(a) + Number(b);
// }

// const resultado = soma(1,2);

// console.log(soma(3,5));


// // função anônima como expressão de função
// const exibe = function(x){
//     return `Exbindo parâmetro ${x}`
// }


// console.log(exibe(" -x- "));


// objeto global
let empresa = this; // window

const aluno = {
    nome:'Glaucio',
    matricula: 123,
    executar: function() {
        return `Exbindo de dentro de um método ${this.one}`;
    },
};

console.log(aluno.executar());
console.log(aluno.nome);

console.log("Quem é o this no contexto global", empresa);

function globalObj() {
    return this;
}
document.write("<h2>Escrevendo no body</h2>");
document.write(globalObj());

// Arrow function
const novaFuncao = (a,b) => {
    console.log("Chamado de dentro de uma arrow function");
    console.log(`Exbindo o valor de ${a}`);
    console.log("Exibindo o total de caracteres " + b.lenght);
    
};

const funcao3 = (a) =>
    console.log(`Exibindo o total de caracteres de ${a.lenght}`);

    funcao3("Glaucio Daniel");


    const carros = (primeiro, segundo, ...restante) =>{
        console.log( `Os carros informados foram: ${primeiro}, ${segundo}. Todos os demais são ${restante.join(
            ", "
            )}`
          );
       };
 carros(
     "DelRey",
     "Brasilia",
     "Belina",
     "Fusca",
     "Variant",
     "Parati",
     "Monza",
     "scort",
     "fiat 147",
     "D-20",
     "Kombi",
     "BMW",
     "Opala",
     "Gurgel",
     "Maverick",
     "Marea",
 );
 const frutas = ["Guaraná", "Cupuaçu", "Açai"];
 const todasFrutas = [...frutas, "banana", "abacaxi"];

 console.log("Todas as frutas", todasFrutas);

 let a = 50;
 let b = 100;

 const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
 console.log("Exibindo o primeiro: ", primeiro);
 console.log("Exibindo o resto: ", resto);

 const meuArray = [10, 20, 30, 40];
 console.log(meuArray, meuArray.join(" - "));

//  const [...p, q] = meuArray;
//  console.log("exibindo o quarto elemento", q);
 const [q, ...p] = meuArray.reverse();
 console.log(p.reverse());
 
    




// globalObj().alert("vai Corinthias!");





// function quemEoThis() {
//     console.log(this === window);
// }

// function quemEoThisEstrito() {
//     "use strict";
//     console.log("strict");
//     console.log(this === window);
//     }

// quemEoThis();
// // quemEoThisEstrito();

// function Exibe2() {
//     this.a = 50;
// }

// const novoObjeto = new Exibe2();
// console.log(novoObjeto.a);



