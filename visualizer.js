function rnd(i) {
    return Math.random() * i;
}

function init() {
    let vis = document.getElementById("vis");
    let bg = document.getElementById("bg");
    const N = 100;
    let e = document.getElementById("electric").value;
    let gas = result / E;
    let t = Math.floor(N * (1 - gas));
    bg.style.opacity = gas;
    for (let i = 0; i < N; ++i) {
        let speed = (4+rnd(12))*(window.innerWidth/1920);
        let obj = document.createElement("object");
        obj.data = i < e ? "greencar.svg" : "redcar.svg";
        obj.width = 100;
        obj.style = `
            animation: move_${Math.floor(rnd(5))} ${speed}s linear ${rnd(3)}s infinite;
            opacity: ${(t != 0 && i % (N/t) < 1) ? 0.25 : 1};
        `;
        vis.appendChild(obj);
    }
}

function resetVisualization() {
    let vis = document.getElementById("vis");
    while (vis.firstChild)
        vis.removeChild(vis.firstChild);
    init();
}

let timer;
window.addEventListener("resize", () => {
    timer && clearTimeout(timer);
    timer = setTimeout(resetVisualization, 1000);
});
window.addEventListener("DOMContentLoaded", init);