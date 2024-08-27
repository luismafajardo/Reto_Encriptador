//Por medio de esta aplicación se encripta y desencripta los valores introducidos por el usuario

function encriptarTexto() {
//Esta función encripta la palabra introducida por el usuario
//convirtiéndola en una nueva palabra
    let expresionInicial;
    let textAreaEncript = document.getElementById('areaEncriptada');
    expresionInicial = textAreaEncript.value;
    let matrizEncriptada = [];
    for (i=0;i<expresionInicial.length;i++) {
        let a = expresionInicial.charCodeAt(i);
        a = 4*a - 351;
        matrizEncriptada.push(a);
    }
    expresionEncriptada = String.fromCharCode.apply(null,matrizEncriptada);
    document.getElementById('areaDesencriptada').value = expresionEncriptada;
}

function desencriptarTexto() {
//Esta función desencripta una palabra encriptada introducida por el usuario
//permitiéndole visualizar la palabra real.
//Por ejemplo, puede copiar y pegar el resultado obtenido al encriptar una palabra
//en el primer cuadro de texto y oprimir "Desencriptar" para comprobar qué sucede.
    let expresionEncriptada;
    let textAreaEncript = document.getElementById('areaEncriptada');
    expresionEncriptada = textAreaEncript.value;    
    let matrizDesencriptada = [];
    for (i=0;i<expresionEncriptada.length;i++) {
        let a = expresionEncriptada.charCodeAt(i);
        a = (a + 351) / 4;
        matrizDesencriptada.push(a);
    }
    expresionDesencriptada = String.fromCharCode.apply(null,matrizDesencriptada);
    document.getElementById('areaDesencriptada').value = expresionDesencriptada;    
}