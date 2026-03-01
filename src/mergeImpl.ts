import type { IMerge } from './IMerge.js';
import  { verifyArrayOrder } from './verifyArrayOrder.js'
import { reverseArray } from './reverseArray.js'
import { mergeTwo } from './mergeTwo.js';

export class mergeImpl implements IMerge {
    merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {

        // if collection_1, collection_2, and collection_3 are not empty
        // verify collection_1 is in ascending order
        if (collection_1.length > 0) {
            if (!verifyArrayOrder.verifyAscending(collection_1)) {
                throw new Error("collection_1 is not in ascending order")
            }
        }
        // verify collection_2 is in ascending order
        if (collection_2.length > 0) {
            if (!verifyArrayOrder.verifyAscending(collection_2)) {
                throw new Error("collection_2 is not in ascending order")
            }
        }
        // verify collection_3 is in descending order
        if (collection_3.length > 0) {
            if (!verifyArrayOrder.verifyDescending(collection_3)) {
                throw new Error("collection_3 is not in descending order")
            }
        }
        
        // sort collection_3 in ascending order
        const sorted_collection_3 = reverseArray(collection_3)

        // merge collection_1 and collection_2
        const merged_collection_12 = mergeTwo(collection_1, collection_2)

        // merge sorted_collection_12 and sorted_collection_3
        const result = mergeTwo(merged_collection_12, sorted_collection_3)

        return result;
    }
}