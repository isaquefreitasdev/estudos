function adicione(nome){
    setTimeout(function(resolve,reject){
        let error = false;
        if(!error){
            resolve();
        }else{
            reject({msg:'Error'});
        }
        sistem.login.push(nome)
    },10000)
}
function mostreUsu(){
    console.log(sistem.login)
}

let sistem  = {
    login:['Isaque','João'],
    add:adicione
}
adicione("Pedro").then(mostreUsu).catch((error)=>{
    console.log(error.msg)
})

