import { celciusToFahrenheit } from "./conversion/celcius-to-fahrenheit.js"
import { celciusToKelvin } from "./conversion/celcius-to-kelvin.js"
import { celciusToReamur } from "./conversion/celcius-to-reamur.js"


async function main() {
    const suhuCelcius = 40

    let hasilKonversiSuhu = 0

    hasilKonversiSuhu = await celciusToFahrenheit(suhuCelcius)
    console.log("Hasil konversi suhu Celcius ke Fahrenheit: ", hasilKonversiSuhu)

    hasilKonversiSuhu = await celciusToReamur(suhuCelcius)
    console.log("Hasil konversi suhu Celcius ke Reamur: ", hasilKonversiSuhu)
    
    hasilKonversiSuhu = await celciusToKelvin(suhuCelcius)
    console.log("Hasil konversi suhu Celcius ke Kelvin: ", hasilKonversiSuhu)


}

main()