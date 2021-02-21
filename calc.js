// User-settings, modifyable by range sliders given on bottom of page
let e = 2;
let r = 37;

let R = 37;  // default renewable%, TODO: change based on region
const D = 2952297.502;  // default value, 37% renewable
const E = 9419724;  // 0% EV-adoption

let result = 0;

function handleEChange(v) {
    e = v;
    
    calc();
}

function handleRChange(v) {
    r = v;
    calc();
}

function calc() {
    document.getElementById("electric_val").innerHTML = `${e}%`;
    document.getElementById("renewable_val").innerHTML = `${r}%`;
    let e_100 = D*(100-r)/(100-R);
    result = e_100 + (E-e_100)*(100-e)/100;
}

function resetToDefault() {
    document.getElementById("electric").value = e;
    document.getElementById("renewable").value = r;
    calc();
}

window.addEventListener("DOMContentLoaded", resetToDefault);