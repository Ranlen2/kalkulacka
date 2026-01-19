function getInputs() {
    const a = parseFloat(document.getElementById("vstup1").value);
    const b = parseFloat(document.getElementById("vstup2").value);

    if (isNaN(a) || isNaN(b)) {
        throw "Zadejte prosím dvě čísla.";
    }

    return { a, b };
}

function setResult(text) {
    document.getElementById("vysledek").innerHTML = text;
}

document.getElementById("tlPlus").onclick = () => {
    try {
        const { a, b } = getInputs();
        setResult(`Výsledek: ${a + b}`);
    } catch (e) {
        setResult(e);
    }
};

document.getElementById("tlMinus").onclick = () => {
    try {
        const { a, b } = getInputs();
        setResult(`Výsledek: ${a - b}`);
    } catch (e) {
        setResult(e);
    }
};

document.getElementById("tlKrat").onclick = () => {
    try {
        const { a, b } = getInputs();
        setResult(`Výsledek: ${a * b}`);
    } catch (e) {
        setResult(e);
    }
};

document.getElementById("tlDeleno").onclick = () => {
    try {
        const { a, b } = getInputs();
        if (b === 0) {
            throw "Nelze dělit nulou.";
        }
        setResult(`Výsledek: ${a / b}`);
    } catch (e) {
        setResult(e);
    }
};
