import { describe, test, expect } from 'vitest'
import { mergeImpl } from '../src/mergeImpl.js'

describe('mergeImpl', () => {
    const merger = new mergeImpl()

    describe('output correctness', () => {
        test.each([
            {
                c1: [1, 4, 7], c2: [2, 5, 8], c3: [9, 6, 3],
                expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                label: 'typical arrays'
            },
            {
                c1: [], c2: [], c3: [],
                expected: [],
                label: 'all empty'
            },
            {
                c1: [1, 2, 3], c2: [], c3: [],
                expected: [1, 2, 3],
                label: 'collection_1 only'
            },
            {
                c1: [], c2: [1, 2, 3], c3: [],
                expected: [1, 2, 3],
                label: 'collection_2 only'
            },
            {
                c1: [], c2: [], c3: [3, 2, 1],
                expected: [1, 2, 3],
                label: 'collection_3 only'
            },
            {
                c1: [2, 5], c2: [], c3: [4, 1],
                expected: [1, 2, 4, 5],
                label: 'collection_1 and collection_3'
            },
            {
                c1: [], c2: [2, 5], c3: [4, 1],
                expected: [1, 2, 4, 5],
                label: 'collection_2 and collection_3'
            },
            {
                c1: [2], c2: [1], c3: [3],
                expected: [1, 2, 3],
                label: 'single elements'
            },
            {
                c1: [1, 3, 3], c2: [2, 3], c3: [3, 2, 1],
                expected: [1, 1, 2, 2, 3, 3, 3, 3],
                label: 'duplicates across all three'
            },
            {
                c1: [0, 0], c2: [0], c3: [0, 0],
                expected: [0, 0, 0, 0, 0],
                label: 'all zeros'
            },
            {
                c1: [-5, -1, 3], c2: [-4, 0], c3: [4, 2, -2],
                expected: [-5, -4, -2, -1, 0, 2, 3, 4],
                label: 'negative numbers'
            },
        ])('merges $label into ascending order', ({ c1, c2, c3, expected }) => {
            expect(merger.merge(c1, c2, c3)).toEqual(expected)
        })
    })

    test('output length equals total number of input elements', () => {
        const c1 = [1, 3, 5]
        const c2 = [2, 4]
        const c3 = [9, 7, 6]
        expect(merger.merge(c1, c2, c3).length).toBe(c1.length + c2.length + c3.length)
    })

    test('result is always in non-decreasing order (large arrays)', () => {
        const c1 = Array.from({ length: 100 }, (_, i) => i * 3)
        const c2 = Array.from({ length: 100 }, (_, i) => i * 3 + 1)
        const c3 = Array.from({ length: 100 }, (_, i) => 299 - i * 3)
        const result = merger.merge(c1, c2, c3)
        expect(result.length).toBe(300)
        for (let i = 1; i < result.length; i++) {
            expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]!)
        }
    })

    describe('validation errors', () => {
        test.each([
            {
                c1: [3, 1, 2], c2: [], c3: [],
                error: 'collection_1 is not in ascending order',
                label: 'collection_1 not ascending'
            },
            {
                c1: [], c2: [3, 1, 2], c3: [],
                error: 'collection_2 is not in ascending order',
                label: 'collection_2 not ascending'
            },
            {
                c1: [], c2: [], c3: [1, 2, 3],
                error: 'collection_3 is not in descending order',
                label: 'collection_3 not descending'
            },
        ])('throws when $label', ({ c1, c2, c3, error }) => {
            expect(() => merger.merge(c1, c2, c3)).toThrow(error)
        })
    })
})