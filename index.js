
// Returns amount of consecutive numbers of passed in string
let counter = (codedString) => {
    output = []
    numberAmount = 0

    for( let i = 0; i < codedString.length; i++ ){
        if( i !== 0 ){
            if( codedString[i] !== codedString[i-1] ){
                output.push(numberAmount)
                numberAmount = 0
            }
        } 
        numberAmount++
    }

    output.push(numberAmount)
    return output
}

console.log(counter('010'))



// Returns type and number
let encoder = (codedString) => {
    for(let i = 0; i < codedString.length; i++){
        // Number

    }
}