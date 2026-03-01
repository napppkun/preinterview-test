import { describe, test, expect } from 'vitest'
import { mergeTwo } from '../src/mergeTwo.js'

describe('mergeTwo', () => {
    describe('output correctness', () => {
        test.each([
            { a: [],        b: [],        expected: [],              label: 'both empty' },
            { a: [],        b: [1, 2, 3], expected: [1, 2, 3],      label: 'left empty' },
            { a: [1, 2, 3], b: [],        expected: [1, 2, 3],      label: 'right empty' },
            { a: [1, 3, 5], b: [2, 4, 6], expected: [1, 2, 3, 4, 5, 6], label: 'interleaving' },
            { a: [1, 2, 3], b: [4, 5, 6], expected: [1, 2, 3, 4, 5, 6], label: 'all of first smaller' },
            { a: [4, 5, 6], b: [1, 2, 3], expected: [1, 2, 3, 4, 5, 6], label: 'all of second smaller' },
            { a: [1, 2, 2], b: [2, 3],    expected: [1, 2, 2, 2, 3],    label: 'duplicates across arrays' },
            { a: [1, 2, 3], b: [1, 2, 3], expected: [1, 1, 2, 2, 3, 3], label: 'identical arrays' },
            { a: [1, 10, 20], b: [5],     expected: [1, 5, 10, 20],     label: 'different lengths' },
            { a: [-5, -1, 3], b: [-4, 0, 4], expected: [-5, -4, -1, 0, 3, 4], label: 'negative numbers' },
        ])('merges $label', ({ a, b, expected }) => {
            expect(mergeTwo(a, b)).toEqual(expected)
        })
    })

    test('output length equals sum of both input lengths', () => {
        const a = [1, 3, 5, 7]
        const b = [2, 4, 6]
        expect(mergeTwo(a, b).length).toBe(a.length + b.length)
    })
})