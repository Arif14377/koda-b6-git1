import { celciusToFahrenheit } from "./conversion/celcius-to-fahrenheit.js"
import { celciusToKelvin } from "./conversion/celcius-to-kelvin.js"
import { celciusToReamur } from "./conversion/celcius-to-reamur.js"
import { inputCelcius, rl } from "./utils/input.js"


async function main() {
    while (true) {
        try {
            let hasilKonversiSuhu = 0
    
            const suhuCelcius = await inputCelcius()
        
            hasilKonversiSuhu = await celciusToFahrenheit(suhuCelcius)
            console.log("Hasil konversi suhu Celcius ke Fahrenheit: ", hasilKonversiSuhu)
        
            hasilKonversiSuhu = await celciusToReamur(suhuCelcius)
            console.log("Hasil konversi suhu Celcius ke Reamur: ", hasilKonversiSuhu)
            
            hasilKonversiSuhu = await celciusToKelvin(suhuCelcius)
            console.log("Hasil konversi suhu Celcius ke Kelvin: ", hasilKonversiSuhu)
    
            rl.close()
    
        } catch (error) {
            console.log(error)
            continue
        }

        break

    }
    



}

main()