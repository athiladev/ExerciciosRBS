// Só roda no Browser
function decode(str) {
    try {
        return atob(str)
    } catch (e) {
        return str
    }
}

decode('RXhlcmNpY2lv') // Exercício
