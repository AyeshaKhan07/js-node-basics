// function TreeConstructor(strArr) { 
//   const parentNodes = [];

//   for (const value of strArr)
//   {
//     parentNodes.push(value.slice(1, -1).split(",")[1]);
//   }

//   for(const parentNode of parentNodes) {
//     if(invalidOccurrence(parentNodes, parentNode))
//       return false
//   }
//   return true;
// }

// function invalidOccurrence(arr, element) {
//   const occurrences = arr.filter(value => value == element);

//   return occurrences.length > 2
// }

// console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]))

// function maxOccurrence(string) {
//   let maxOccurredElement, maxOccurrenceCount = 0;

//   const stringArray = string.split("");

//   for (const ele of stringArray) {
//     if (ele !== " ") {
//       const eleOccurredCount = stringArray.filter(e => e == ele).length;

//       if (eleOccurredCount > maxOccurrenceCount) {
//         maxOccurrenceCount = eleOccurredCount;
//         maxOccurredElement = ele
//       }
//     }
//   }

//   console.log("Highest frequency element: ", maxOccurredElement)
// }

// maxOccurrence("stntotw whtite");

// function getAsciiValue(character) {
//     return character.charCodeAt(0);
// }

// function getHashedValue(string) {
//     const p = 131;
//     const stringArray = string.split("");
//     let power = string.length - 1;
//     const M = Math.pow(10, 9) + 7

//     let hashValue = 0;
//     for (const char of stringArray) {
//         hashValue += getAsciiValue(char) * Math.pow(p, power);
//         power--;
//     }

//     hashValue = hashValue % M
//     console.log(hashValue)

//     return hashValue;
// }

// function authEvents(events) {
//     // Write your code here
//     const savedHashes = [];
//     const results = [];
//     for (const event of events) {
//         if (event[0] == "setPassword") {
//             const hashedPassword = getHashedValue(event[1]);
//             savedHashes.push(hashedPassword)
//         }

//         else if (event[0] == "authorize") {
//             if (savedHashes.includes(event[1]))
//                 results.push(1);

//             else results.push(0);
//         }
//     }

//     return results;

// }
function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0;
    let maxSum = 0;

    let excludeIndex = 0;

    while (excludeIndex < arr.length) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i !== excludeIndex)
                sum += arr[i]
        }

        if (sum > maxSum)
            maxSum = sum;

        else if (sum < minSum || minSum == 0)
            minSum = sum

        excludeIndex++;
    }

    console.log(minSum, maxSum)

}

function timeConversion(s) {
    // Write your code here
    const isAM = s.includes("AM");
    const givenHour = s.split(":")[0];
    const timeWithoutHourString = s.slice(2, s.length - 2);

    if (givenHour == "12")
        return `${isAM ? "00" : "12"}${timeWithoutHourString}`

    else if (isAM)
        return s.replace("AM", "")

    else {
        let hour = Number(givenHour) + 12;

        if (String(hour).length == 1)
            hour = `0${hour}`

        return `${hour}${timeWithoutHourString}`
    }
}

function flippingBits(n) {
    // Write your code here
    let convertedBinaryNumber = n.toString(2);

    if (convertedBinaryNumber.length < 32)
        convertedBinaryNumber = new Array(32 - convertedBinaryNumber.length).fill(0).join("") + convertedBinaryNumber

    console.log(convertedBinaryNumber)

    let flippedBytes = "";

    for (const byte of convertedBinaryNumber.split("")) {
        flippedBytes += Number(!Number(byte)).toString();
    }

    if (flippedBytes == 0 && flippedBytes.length > 32)
        flippedBytes = "1" + flippedBytes.slice(flippedBytes.length - 1)

    console.log(flippedBytes)
    return parseInt(flippedBytes.toString(), 2)
}

function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    let constant = 0;

    for (let i = 0; i < arr.length; i++) {
        leftDiagonalSum += arr[i][constant]
        rightDiagonalSum += arr[i][(arr.length - 1) - constant]

        constant++
    }
    return Math.abs(leftDiagonalSum - rightDiagonalSum)
}

function countingSort(arr) {
    // Write your code here
    console.log(arr)
    let countedIndexes = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        countedIndexes[arr[i]] = countedIndexes[Number(arr[i])] + 1
    }

    console.log(countedIndexes)
    return countedIndexes;

}

function pangrams(s) {
    // Write your code here
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    let sortedStringWithNoDuplications = "";

    for (const char of s.split("")) {
        if (char !== " ") {
            const charInLowerCase = char.toLowerCase();

            if (!sortedStringWithNoDuplications.includes(charInLowerCase))
                sortedStringWithNoDuplications += charInLowerCase
        }
    }

    sortedStringWithNoDuplications = sortedStringWithNoDuplications.split("").sort().join("")

    return alphabets == sortedStringWithNoDuplications ? "pangram" : "not pangram"

}

function birthday(s, d, m) {
    // Write your code here
    let numOfWays = 0;

    for (let i = 0; i < s.length; i++) {
        const segment = s.slice(i, m + i);

        const sumOfSegment = segment.reduce((sum, currentValue) => sum + currentValue, 0)
        if (sumOfSegment == d)
            numOfWays++
    }

    return numOfWays
}

function flipMatrix(matrix) {
    // console.log(matrix)
    const n = matrix.length / 2
    let modifiedMatrix = matrix;

    for (let j = matrix.length - 1; j >= n; j--) {
        let sumOfUpperHalf = 0, sumOfLowerHalf = 0, row = 0;

        while (row < n) {
            sumOfUpperHalf += modifiedMatrix[row][j];
            sumOfLowerHalf += modifiedMatrix[modifiedMatrix.length - 1 - row][j];
            row++;
        }

        console.log(sumOfUpperHalf, sumOfLowerHalf, j)
        if (sumOfUpperHalf < sumOfLowerHalf) {
            let row = 0

            while (row < n) {
                const temp = modifiedMatrix[row][j]
                modifiedMatrix[row][j] = modifiedMatrix[modifiedMatrix.length - 1 - row][j]
                modifiedMatrix[modifiedMatrix.length - 1 - row][j] = temp

                row++;
            }

            console.log(modifiedMatrix)
        }

    }

    for (let k = matrix.length - 1; k >= n; k--) {
        let sumOfLeftHalf = modifiedMatrix[matrix.length - 1 - k].slice(0, n).reduce((sum, current) => sum + current, 0)
        let sumOfRightHalf = modifiedMatrix[matrix.length - 1 - k].slice(n, matrix.length).reduce((sum, current) => sum + current, 0)

        if (sumOfLeftHalf < sumOfRightHalf) {
            let col = 0;

            while (col < n) {
                const temp = modifiedMatrix[matrix.length - 1 - k][col]
                modifiedMatrix[matrix.length - 1 - k][col] = modifiedMatrix[matrix.length - 1 - k][k - col]
                modifiedMatrix[matrix.length - 1 - k][k - col] = temp

                col++
            }

            console.log(modifiedMatrix)

        }
    }

    for (let j = 0; j < n; j++) {
        let sumOfUpperHalf = 0;
        let sumOfLowerHalf = 0;

        let row = 0;

        while (row < n) {
            sumOfUpperHalf += modifiedMatrix[row][j];
            sumOfLowerHalf += modifiedMatrix[row + n][j];

            row++;
        }

        if (sumOfUpperHalf < sumOfLowerHalf) {
            let row = 0;

            while (row < n) {
                const temp = modifiedMatrix[row][j];
                modifiedMatrix[row][j] = modifiedMatrix[modifiedMatrix.length - 1 - row][j];
                modifiedMatrix[modifiedMatrix.length - 1 - row][j] = temp;

                row++
            }
        }
        console.log(modifiedMatrix)
    }

    let maxSum = 0;
    for (const segment of modifiedMatrix.slice(0, n)) {
        maxSum = segment.slice(0, n).reduce((sum, currentValue) => sum + currentValue, maxSum);

    }
    return maxSum
}

function towerBreakers(n, m) {
    // Write your code here
    const numOfTowers = n;
    const heightOfEachTower = m;

    let currentTurn = 1;

    const towerHeights = {}
    const towersEnded = [];

    for (let i = 0; i < numOfTowers; i++) {
        towerHeights[i + 1] = heightOfEachTower
    }
    console.log(towerHeights)
    while (towersEnded.length !== numOfTowers)
        for (const tower in towerHeights) {

            if (towerHeights[tower] == 1 && !towersEnded.includes(tower))
                towersEnded.push(tower)

            else {
                let targetUnits = towerHeights[tower] - 1;

                console.log("before", currentTurn)
                while (targetUnits >= 1) {
                    if (towerHeights[tower] % targetUnits == 0) {
                        towerHeights[tower] = towerHeights[tower] - targetUnits;
                        // moveMade = true;
                        if (currentTurn == 1)
                            currentTurn = 2

                        else currentTurn = 1
                        console.log(towerHeights)
                        break;
                    }

                    else targetUnits--;
                }
                console.log("after", currentTurn)
            }
        }

    return currentTurn == 1 ? 2 : 1

}
function miniMaxSum(arr) {
    // Write your code here
    arr.sort();
    let minSum = 0, maxSum = 0;

    minSum = arr.slice(0, arr.length - 1).reduce((acc, cv) => acc + cv, 0)
    maxSum = arr.slice(1).reduce((acc, cv) => acc + cv, 0)

    console.log(minSum, maxSum)

}

function birthdayCakeCandles(candles) {
    // Write your code here
    let maxLength = candles[0];
    let maxLengthCandles = 0;

    for (const candle of candles) {
        if (candle > maxLength) {
            maxLength = candle;
            maxLengthCandles = 1;
        }
        
        else if(candle == maxLength)
            maxLengthCandles ++;

        console.log(candle, maxLength, maxLengthCandles)

    }
    console.log(maxLengthCandles)

}

birthdayCakeCandles([3, 2, 1, 3])
// miniMaxSum([1, 2, 3, 4, 5])
// console.log(towerBreakers(1, 4))
// console.log(flipMatrix([
//     [112, 128, 54, 107],
//     [12, 75, 110, 85],
//     [100, 96, 34, 138],
//     [75, 15, 28, 15]
// ]))
// birthday([1, 2, 1, 3, 2], 3, 2)
// console.log(pangrams("qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun"))
// countingSort([63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33])
// console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))
// console.log(flippingBits(4294967295))
// console.log(timeConversion("12:45:54PM"))
// miniMaxSum([769082435, 210437958, 673982045, 375809214, 380564127])
// console.log(authEvents([["setPassword", "000A"], ["authorize", "108738449"]]))