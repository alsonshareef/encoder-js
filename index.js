let encoder = (codedString) => {
    let encoded = []
    for(let i = 0; i < codedString.length; i++){
        if (codedString[i] === '0') {
                let number = '', type = '00', string = `${type} ${number}`
                
                encoded.push(string)
            } else {
                console.log('not string 0')
            }
        }
    return encoded
}

console.log(encoder('0'))