let { encoder, decoder } = require('./functions') 

// Encoder Test
let encoderTest = () => {
    let binary = '001001110'
    let expectedOutput = '00 00 0 0 00 00 0 000 00 0 '

    if (encoder(binary) === expectedOutput) {
        console.log(`** PASSED ** The returned value from the 'encoder' function is EQUAL to expected output`)
    } else {
        console.log(`** FAILED ** The returned value from the 'encoder' function is NOT EQUAL to expected output`)
    }
}

encoderTest()

// Decoder Test