export async function celciusToKelvin(c) {
    if (isNaN(c)) {
        const err = new Error("Parameter bukan angka.")
        throw err
        return
    }
    const kelvin = c + 273.15
    return kelvin
}