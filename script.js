const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const button = document.getElementById('btnCalcular');
const pResult = document.getElementById('resultado');

button.addEventListener('click', btnOnClick)

function btnOnClick() {
    let result = Number(input1.value) + Number(input2.value)
    pResult.innerText = `El resultado es: ${result}`;
}


