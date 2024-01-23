function receivesAFunction(callback) {
    console.log('I am')
    callback()
}

function talking() {
    console.log('talking')
}

function returnsANamedFunction() {
return talking
}
    

function returnsAnAnonymousFunction() {
    return function () {
        console.log('talking')
    } 
    }