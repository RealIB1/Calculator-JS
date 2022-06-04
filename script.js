function calculatorScreen(val) {
    const max = Math.max(val.length, document.getElementById("screen").value.length);

    if (val ==="x") {
        val.replace(/x/i, "*");
    }

    document.getElementById("screen").value += val;

    if (max >  15) {
        document.getElementById("screen").value = "Max: 15 digits" + " ";
    }

}

function solve() {
    let x = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(x);
}

function clr() {
    document.getElementById("screen").value = "";
}