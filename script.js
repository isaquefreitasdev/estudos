let arg = process.argv.slice(2)

let a = arg[0]
let b = arg[1]



let c = mu(a, b)
function mu(x, z) {
    return x * z
}

console.log(c)