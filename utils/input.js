import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export const rl = readline.createInterface({input, output})

export async function inputCelcius() {
    const celcius = Number(await rl.question("\nMasukkan suhu celcius: "))

    if (isNaN(celcius)) {
        const error = new Error("Inputan suhu bukan angka.")
        throw error
    }

    return celcius
}