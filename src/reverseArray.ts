export function reverseArray (collection: number[]): number[] {
    const len = collection.length
    const sorted: number[] = new Array(len).fill(0)
    // collection_3 already sorted from max to min(0)
    // only need to reverse it to min to max 
    for (let i=0; i < len; i++) {
        sorted[i] = collection[len - 1 - i] as number // avoid undefined type error
    }
    return sorted
}