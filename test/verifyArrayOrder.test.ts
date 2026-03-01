import { describe, test, expect } from 'vitest'
import { verifyArrayOrder } from '../src/verifyArrayOrder'

describe('verifyArrayOrder', () => {
    describe('verifyAscending', () => {
        test('returns true for empty array', () => {
            expect(verifyArrayOrder.verifyAscending([])).toBe(true)
        })
        test('returns true for single element', () => {
            expect(verifyArrayOrder.verifyAscending([5])).toBe(true)
        })
        test('returns true for strictly ascending array', () => {
            expect(verifyArrayOrder.verifyAscending([1, 2, 3, 4, 5])).toBe(true)
        })
        test('returns true when array contains duplicate adjacent values', () => {
            expect(verifyArrayOrder.verifyAscending([1, 1, 2, 3])).toBe(true)
        })
        test('returns false for descending array', () => {
            expect(verifyArrayOrder.verifyAscending([5, 4, 3, 2, 1])).toBe(false)
        })
        test('returns false when one element is out of order', () => {
            expect(verifyArrayOrder.verifyAscending([1, 3, 2, 4])).toBe(false)
        })
        test('handles negative numbers in ascending order', () => {
            expect(verifyArrayOrder.verifyAscending([-5, -3, 0, 2])).toBe(true)
        })
        test('returns false for negative numbers in wrong order', () => {
            expect(verifyArrayOrder.verifyAscending([-1, -5, 0])).toBe(false)
        })
    })

    describe('verifyDescending', () => {
        test('returns true for empty array', () => {
            expect(verifyArrayOrder.verifyDescending([])).toBe(true)
        })
        test('returns true for single element', () => {
            expect(verifyArrayOrder.verifyDescending([5])).toBe(true)
        })
        test('returns true for strictly descending array', () => {
            expect(verifyArrayOrder.verifyDescending([5, 4, 3, 2, 1])).toBe(true)
        })
        test('returns true when array contains duplicate adjacent values', () => {
            expect(verifyArrayOrder.verifyDescending([3, 3, 2, 1])).toBe(true)
        })
        test('returns false for ascending array', () => {
            expect(verifyArrayOrder.verifyDescending([1, 2, 3, 4, 5])).toBe(false)
        })
        test('returns false when one element is out of order', () => {
            expect(verifyArrayOrder.verifyDescending([5, 3, 4, 1])).toBe(false)
        })
        test('handles negative numbers in descending order', () => {
            expect(verifyArrayOrder.verifyDescending([2, 0, -3, -5])).toBe(true)
        })
    })
})