export function codeGenerator(codeLength: number): number[] {
    /*
    Generate a random code of length codeLength
    @param codeLength: number
    @return number[]
    */
    let code = []
    for (let i = 0; i < codeLength; i++) {
        code.push(Math.floor(Math.random() * 6))
    }
    return code
}