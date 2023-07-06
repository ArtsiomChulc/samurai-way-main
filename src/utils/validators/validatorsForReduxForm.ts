export const required = (value: string) => {
    if (value) return undefined
    return 'Required'
}

export const mailError = (value: string) => {
    if (!value) {
        return  'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
    }

}
// (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))

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