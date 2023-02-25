"use strict"

const S = require ("sanctuary")

//    maximum :: [Number] -> Number
const maximum = S.reduce (S.max)
                         (0)

//    maximumWealth :: [[Number]] -> Number
const maximumWealth = S.compose (maximum)
                                (S.map (S.sum))

console.log (
    maximumWealth (
        [
            [1,2,3],
            [5,5,5],
            [3,1,4]
        ]
    )
)
