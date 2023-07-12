function testaPalavra(palavra, letra) {
    if(palavra[0].toLowerCase() === letra.toLowerCase()) {
        return true;
    }

    return false;
}

console.log(testaPalavra("Luiz", "l"))