var counter = (codedString) => {
    // 'output' will be an array of numbers indicating amount of consecutive numbers
    let output = ''
    let numberAmount = 0
    for( let i = 0; i < codedString.length; i++ ){
        if( i !== 0 ){
            if( codedString[i] !== codedString[i-1] ){
              let type = '', zeros = ''
              
              // Type
                  if(codedString[i-1] === '0'){
                    type = '00'
                } else {
                    type = '0'
                }
              
              // Number
                for(let i = 0; i < numberAmount; i++){
                    zeros += '0'
                }
              
                output += `${type} ${zeros} `
                numberAmount = 0
            }
        } 
        numberAmount++
    }
   
    let type = '', zeros = ''

    if(codedString[codedString.length - 1] === '0'){
        type = '00'
    } else {
        type = '0'
    }

    for(let i = 0; i < numberAmount; i++){
        zeros += '0'
    }
    output += `${type} ${zeros} `
    return output
}

console.log(counter('010111'))