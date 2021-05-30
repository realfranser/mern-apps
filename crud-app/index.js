/* This is a tutorial for learning node.js */

/* Event loop 
const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(bar, 1000)
    baz()
}

foo()

/* Callbacks 
function getMessage(msg, callback) {
    setTimeout(() => {
        console.log(msg)
        callback()
    }, 1000)
}

function DisplayMessage() {
    console.log("Display message")
}

getMessage("Get message", DisplayMessage)
getMessage("Get message", () => console.log("Display Message"))

/* Promises 
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Run Before"), 1000)
});

promise.then(
    result => {
        console.log(result)
        GetAfter()
    },
    error => console.log(error)
)

function GetAfter() {
    console.log("Print after");
}
*/
/* Async and Await */
function Clown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('clown')
        }, 2000)
    })
}

async function msg() {
    const msg = await Clown()
    console.log("Message: ", msg)
}

msg()
