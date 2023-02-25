"use strict"

function maximumWealth (accounts) {
	let max = 0

	for (let row of accounts) {
		let sum = 0

		for (let account of row) {
			sum += account
		}

		max = Math.max (max, sum)
	}

	return max
}

console.log (
	maximumWealth (
		[
			[1,2,3],
			[5,5,5],
			[3,1,4]
		]
	)
)
