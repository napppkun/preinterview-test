export function mergeTwo(collection_1: number[], collection_2: number[]): number[] {
    const merged_collection: number[] = []
    let i = 0
    let j = 0
    while (i < collection_1.length && j < collection_2.length) {
        const current1 = collection_1[i] as number // avoid undefined type error
        const current2 = collection_2[j] as number // avoid undefined type error
        if (current1 <= current2) {
            merged_collection.push(current1)
            i++
        } else {
            merged_collection.push(current2)
            j++
        }
    }
    while (i < collection_1.length) merged_collection.push(collection_1[i++]!)
    while (j < collection_2.length) merged_collection.push(collection_2[j++]!)
    return merged_collection
}