export async function celciusToReamur(c) {
    if (isNaN(c)) {
        const err = new Error("Parameter bukan angka.")
        throw err
        return
    }
    const reamur = c * 0.8
    return reamur
}