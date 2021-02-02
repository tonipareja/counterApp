let contador = document.getElementById("contador");
let count = 0;

function aumentar(){
    count++;
    contador.innerHTML = count;
}

function reducir(){
    if (count >0) {
        count--;
        contador.innerHTML = count; 
    }
}
