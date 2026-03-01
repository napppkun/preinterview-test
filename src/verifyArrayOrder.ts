export class verifyArrayOrder {
    static verifyAscending(collection: number[]): boolean {
        for (let i = 1; i < collection.length; i++) {
            const current = collection[i] as number // avoid undefined type error
            const previous = collection[i - 1] as number // avoid undefined type error
            if (current < previous) {
                return false
            }
        }
        return true
    }

    static verifyDescending(collection: number[]): boolean {
        for (let i = 1; i < collection.length; i++) {
            const current = collection[i] as number // avoid undefined type error
            const previous = collection[i - 1] as number // avoid undefined type error
            if (current > previous) {
                return false
            }
        }
        return true
    }

}