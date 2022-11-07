/*

Carne - 400gr por pessoa + de 6 horas - 650gr
Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
Suco - 1000ml por pessoa + 6 horas - 1500ml
Crianças valem por 0,5

*/

let man = document.getElementById('man');
let woman = document.getElementById('woman');
let kid = document.getElementById('kid');
let time = document.getElementById('time');
let btn = document.getElementById('btn');

let tCarne = document.getElementById('tCarne');
let tCerveja = document.getElementById('tCerveja');
let tSuco = document.getElementById('tSuco');
let tCarvao = document.getElementById('tCarvao');

let modal = document.getElementById('modal');
let close = document.getElementById('close');

close.onclick = function () {
    modal.style.visibility = 'hidden';
}

function total() {
    if ((man.value == 0) && (woman.value == 0) && (kid.value == 0) && (time.value == 0)) {
        modal.style.visibility = 'hidden';
    } else {
        modal.style.visibility = 'visible';

        let tPessoas =  (parseInt(man.value) + parseInt(woman.value)) + (parseInt(kid.value) / 2);
        let tAdultos =  (parseInt(man.value) + parseInt(woman.value));

        let sit1 = (tPessoas * 400) / 1000;
        let sit2 = (tPessoas * 650) / 1000;

        if (time.value < 6) {    
            tCarne.innerText = sit1 + ' KG';
            tCerveja.innerText = (tAdultos * 1200)/1000 + ' L';
            tSuco.innerText = (tPessoas * 1000)/1000 + ' L';
            tCarvao.innerText = (sit1 * 1.5).toFixed(1) + ' KG';
        } else {
            tCarne.innerText = sit2 + ' KG';
            tCerveja.innerText = (tAdultos * 2000)/1000 + ' L';
            tSuco.innerText = (tPessoas * 1500)/1000 + ' L';
            tCarvao.innerText = (sit2 * 1.5).toFixed(1) + ' KG';
        }
    }
}

btn.addEventListener("click", total);