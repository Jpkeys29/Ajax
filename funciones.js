function fun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('404')
        },2000)
    })
}

function fun2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('😎')
        },1000)
    })
}
function onSuccess(data){
    console.log(data)
}

function onError(errorCode){
    console.log(`ERROR: ${errorCode}`)
}
fun1()
    .then(fun2)
    .then(onSuccess)
    .catch(onError)