"use strict"

/*
linear congruential generator (LCG)
===================================

    Xn+1 = (aXn + c) mod m

where X is the sequence of pseudo-random values, and

    m,  0 < m      — the "modulus"
    a,  0 < a < m  — the "multiplier"
    c,  0 ≤ c < m  — the "increment"
    X0, 0 ≤ X0 < m — the "seed" or "start value"

src: https://en.wikipedia.org/wiki/Linear_congruential_generator
*/

function * lcg (X) {
    // ZX81 parameters: https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
    const m = 65537
    const a = 75
    const c = 74
    // const m = 9
    // const a = 2
    // const c = 0

    if (! (0 < m && 0 < a && a < m && 0 <= c && c < m && 0 <= X && X < m))
        throw "pseudo-random value and/or the seed value are wrong"

    while (true) {
        X = (a * X + c) % m
        yield X
    }
}

const seed = 1
const range = 1001

const prng = lcg (seed)
const randomValues = []
const prng2 = lcg (seed)
const randomValues2 = []

for (let i = range; 0 < i; --i) {
    randomValues.push (prng.next ().value)
}

for (let i = range; 0 < i; --i) {
    randomValues2.push (prng2.next ().value)
}

function findDuplicates (values) {
    const duplicates = []

    values.sort ((a,b) => a < b ? 1 : a > b ? -1 : 0)

    for (let i = 0, max = values.length - 1; i < max; ++i) {
        if (values[i] === values[i + 1] && duplicates[duplicates.length - 1] !== values[i])
            duplicates.push (values[i])
    }

    return duplicates
}


console.log (
    findDuplicates (randomValues),
    findDuplicates (randomValues2)
)
// console.log (randomValues, randomValues2)

// for (const random of lcg (321)) {
//     console.log (random)
// }
