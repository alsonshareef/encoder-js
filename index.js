// let encoder = (codedString) => {
//     let encoded = []
//     for(let i = 0; i < codedString.length; i++){
//         if (codedString[i] === '0') {
//                 let number = '', type = '00', string = `${type} ${number}`
                
//                 encoded.push(string)
//             } else {
//                 console.log('not string 0')
//             }
//         }
//     return encoded
// }

// console.log(encoder('0'))


let counter = (string) => {
    let numberOfZero = 0, NumberOfOnes = 0
    for(let i = 0; i < string.length; i++){
        if (string[i] === '0') {
            numberOfZero += 1
        } else {
            NumberOfOnes += 1
        }
    }
    return `0: ${numberOfZero} \n1: ${NumberOfOnes}`
}

console.log(counter('010'))