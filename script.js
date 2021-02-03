let contador = document.getElementById("contador");
let maxim = document.getElementById("maxim");
let count = 0;


function aumentar(){
    if (count < maxim.value) {
        count++;
        contador.innerHTML = count; 
    }
}

function reducir(){
    if (count >0) {
        count--;
        contador.innerHTML = count; 
    }
}

function selection(){
    maxim.value.set(0, 999999);
    console.log(selection);
}
