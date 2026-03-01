import { describe, test, expect } from 'vitest'
import { reverseArray } from '../src/reverseArray'

describe('reverseArray', () => {
    describe('output correctness', () => {
        test.each([
            { input: [],           expected: [],           label: 'empty array' },
            { input: [7],          expected: [7],          label: 'single element' },
            { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5], label: 'strictly descending' },
            { input: [4, 4, 2, 1], expected: [1, 2, 4, 4], label: 'duplicates' },
            { input: [3, 3, 3],    expected: [3, 3, 3],    label: 'all same values' },
            { input: [0, -2, -5],  expected: [-5, -2, 0],  label: 'negative numbers' },
        ])('reverses $label correctly', ({ input, expected }) => {
            expect(reverseArray(input)).toEqual(expected)
        })
    })

    test('does not mutate the original array', () => {
        const input = [3, 2, 1]
        reverseArray(input)
        expect(input).toEqual([3, 2, 1])
    })
})