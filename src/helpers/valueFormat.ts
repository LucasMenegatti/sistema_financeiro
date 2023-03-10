export const valueFormat = (value: number) => {
    let int = Math.floor(value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    let frac = String(Math.abs(Math.floor((value%1)*100)))
    return `${int},${frac.padStart(2, '0')}`
}

