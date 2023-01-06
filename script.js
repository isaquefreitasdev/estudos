let arg = process.argv.slice(2)

let a = arg[1]
let b = arg[2]



let c = ''


if (arg[0] === 'm') {
    c = mu(a,b)
}else if(arg[0] == 'd'){
    c = div(a,b)
}else{
    console.log('error')
}
function mu(x, z) {
    return x * z
}
function div(w,y){
    return w / y
}

console.log(c)