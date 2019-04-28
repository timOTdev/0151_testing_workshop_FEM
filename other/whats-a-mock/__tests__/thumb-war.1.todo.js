// // FIRST ITERATION
// // monkey-patching
// import thumbWar from '../thumb-war'
// // import the utils module (see hint #1 at the bottom of the file)
// import * as utils from '../utils'

// test('returns winner', () => {
//   // keep track of the original `getWinner` utility function (see hint #2)
//   const originalGetWinner = utils.getWinner

//   // overwrite the utils.getWinner function with
//   // our own that always returns the second player (see hint #3)
//   utils.getWinner = (p1, p2) => p2

//   const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
//   // change this assertion to be more for a specific player
//   // (like 'Kent C. Dodds', see hint #4):
//   expect(winner).toBe('Kent C. Dodds')

//   // restore the originalGetWinner function so other tests don't break
//   // (see hint #5)
//   utils.getWinner = originalGetWinner
// })





// // SECOND ITERATION
// import thumbWar from '../thumb-war'
// import * as utils from '../utils'

// test('returns winner', () => {
//   const originalGetWinner = utils.getWinner

//   utils.getWinner = (...args) => {
//     utils.getWinner.mock.calls.push(args)
//     return args[1]
//   }
//   utils.getWinner.mock = { calls: [] }

//   const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
//   expect(utils.getWinner.mock.calls).toHaveLength(2)
//   utils.getWinner.mock.calls.forEach(args => {
//     expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
//   })

//   utils.getWinner = originalGetWinner
// })





// // THIRD ITERATION
// import thumbWar from '../thumb-war'
// import * as utils from '../utils'

// test('returns winner', () => {
//   const originalGetWinner = utils.getWinner

//   utils.getWinner = jest.fn((p1, p2) => p2)

//   const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
//   expect(winner).toBe('Kent C. Dodds')
//   expect(utils.getWinner).toHaveBeenCalledTimes(2)
//   utils.getWinner.mock.calls.forEach(args => {
//     expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
//   })

//   utils.getWinner = originalGetWinner
// })





// // FOURTH ITERATION
// import thumbWar from '../thumb-war'
// import * as utils from '../utils'

// test('returns winner', () => {
//   jest.spyOn(utils, 'getWinner')
//   utils.getWinner = jest.fn((p1, p2) => p2)

//   const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
//   expect(winner).toBe('Kent C. Dodds')
//   expect(utils.getWinner).toHaveBeenCalledTimes(2)
//   utils.getWinner.mock.calls.forEach(args => {
//     expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
//   })
// })





// FIFTH ITERATION
import thumbWar from '../thumb-war'
import * as utilsMock from '../utils'

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p2),
  }
})

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2)
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })
})


/*

Hints below:






See answers in the solution file



































Hint #1:

import * as utils from '../utils'





Hint #2:

const originalGetWinner = utils.getWinner






Hint #3:

utils.getWinner = functionThatAlwaysReturnsPlayer2






Hint #4:

expect(winner).toBe('Kent C. Dodds')






Hint #5:

utils.getWinner = originalGetWinner

 */
