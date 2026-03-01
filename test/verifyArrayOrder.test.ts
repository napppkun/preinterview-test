import { describe, test, expect } from 'vitest'
import { verifyArrayOrder } from '../src/verifyArrayOrder'

describe('verifyArrayOrder', () => {
    describe('verifyAscending', () => {
        test.each([
            { input: [], expected: true, label: 'empty array' },
            { input: [5], expected: true, label: 'single element' },
            { input: [1, 2, 3], expected: true, label: 'strictly ascending' },
            { input: [1, 1, 2], expected: true, label: 'duplicates' },
            { input: [3, 2, 1], expected: false, label: 'descending' },
        ])('returns $expected for $label', ({ input, expected }) => {
            expect(verifyArrayOrder.verifyAscending(input)).toBe(expected)
        })
    })

    describe('verifyDescending', () => {
        test.each([
            { input: [], expected: true, label: 'empty array' },
            { input: [5], expected: true, label: 'single element' },
            { input: [5, 4, 3], expected: true, label: 'strictly descending' },
            { input: [3, 3, 2], expected: true, label: 'duplicates' },
            { input: [1, 2, 3], expected: false, label: 'ascending' },
        ])('returns $expected for $label', ({ input, expected }) => {
            expect(verifyArrayOrder.verifyDescending(input)).toBe(expected)
        })
    })
})