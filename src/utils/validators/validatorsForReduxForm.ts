export const required = (value: string) => {
    if (value) return undefined
    return 'Required'
}

export const maxLengthTC = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    }
}

export const minLengthTC = (minLength: number) => (value: string) => {
    if (value && value.length < minLength) {
        return `Min length is ${minLength} symbols`
    }
}

// export const maxLength = (value: string) => {
//     if (value && value.length > 30) {
//         return 'Max length is 30 symbols'
//     }
// }