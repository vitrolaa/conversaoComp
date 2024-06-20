const metros = document.getElementById('op1').value;
const cm = document.getElementById('op2').value;
const mm = document.getElementById('op3').value;
const polegada = document.getElementById('op4').value;



function convert() {
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;
    const valor = parseFloat(document.getElementById("valorCv").value);
    let resultado;

    if (de === 'op1' && para === 'op2') {
        resultado = valor * 100; // metros p centimetros //
    } else if (de === 'op2' && para === 'op1') {
        resultado = valor / 100; // centimetros p metros //
    } else if (de === 'op1' && para === 'op3') {
        resultado = valor * 1000; // metros p milímetros //
    } else if (de === 'op3' && para === 'op1') {
        resultado = valor / 1000; // milimetros p metros //
    } else if (de === 'op2' && para === 'op3') {
        resultado = valor * 10; // centimetros p milimetros //
    } else if (de === 'op3' && para === 'op2') {
        resultado = valor / 10; // milimetros p centímetros //
    } else if (de === 'op1' && para === 'op4') {
        resultado = valor * 39.3701; // metros p polegadas //
    } else if (de === 'op4' && para === 'op1') {
        resultado = valor / 39.3701; // polegadas p metros //
    } else if (de === 'op2' && para === 'op4') { 
        resultado = valor * 0.393701; // centimetros p polegadas //
    } else if (de === 'op4' && para === 'op2') {
        resultado = valor / 0.393701; // polegadas p centimetros //
    } else if (de === 'op3' && para === 'op4') {
        resultado = valor * 0.0393701 // milimetros p polegadas //
    } else if (de === 'op4' && para === 'op3') {
        resultado = valor / 0.0393701; // polegadas p milimetros //
    } else {
        resultado = valor; // unidade iguais //
    }

    document.getElementById('mensagem').value = resultado;
}


