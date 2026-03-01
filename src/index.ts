import { mergeImpl } from './mergeImpl.js'

const merger = new mergeImpl()

// Basic demo
const result = merger.merge(
  [1, 4, 7],
  [2, 5, 8],
  [9, 6, 3]
)
console.log('Input:')
console.log('  collection_1 (asc): [1, 4, 7]')
console.log('  collection_2 (asc): [2, 5, 8]')
console.log('  collection_3 (desc):[9, 6, 3]')
console.log('Output:', result)
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Edge cases
console.log('\nEdge cases:')
console.log('All empty:      ', merger.merge([], [], []))
console.log('Negatives:      ', merger.merge([-5, -1, 3], [-4, 0], [4, 2, -2]))
console.log('With duplicates:', merger.merge([1, 3, 3], [2, 3], [3, 2, 1]))

// Error handling demo
console.log('\nError handling:')
try {
  merger.merge([3, 1, 2], [], [])
} catch (e) {
  console.log('Caught expected error:', (e as Error).message)
}