export const getNumberArString = (length, fn = i => i , limit) => {
    return Array.from({ length }, (_, i) => fn(length - 1 - i)).map(item => String(item)).splice(0, limit)
}