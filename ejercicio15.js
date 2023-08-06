// escribe tu función acá
const transcribir = (adn) => {
    const adnArray = adn.split("")

    for (let i = 0; i < adnArray.length; i++) {
        switch (adnArray[i]) {
            case "A":
                adnArray[i] = "U"
                break;
            case "C":
                adnArray[i] = "G"
                break;
            case "G":
                adnArray[i] = "C"
                break;
            case "T":
                adnArray[i] = "A"
                break;
            default:
                break;
        }
    }
    const arn = adnArray.join("")
    return arn
}
// código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"