let encoder = (codedString) => {
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

console.log(encoder('11100010001'))