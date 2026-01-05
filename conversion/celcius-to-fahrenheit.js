export async function celciusToFahrenheit(c) {
    if (isNaN(c)) {
        const err = new Error("Parameter bukan angka.")
        throw err
        return
    }
    const fahrenheit = (c * 1.8) + 32.0
    return fahrenheit
}