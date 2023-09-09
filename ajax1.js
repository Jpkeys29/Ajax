const url = 'https://discoveryvip.com/shared/test1.json'
const localUrl = 'j1.json'
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
let jsonList = []
btn.textContent = 'Load JSON'

btn.addEventListener('click',(e)=>{
    getData(url)
})

function getData(localUrl){
    fetch(url)
    .then(rep => rep.json())
    .then((json) =>{
        maker(json)
        // jsonList = json
        // console.log(jsonList);
    }).catch(error =>{
        console.log(error);
        getData(localUrl);
    })   
}

function maker(data){
    output.innerHTML = '<h2>JSON Data</h2>'
    data.forEach((element,index) =>{
        console.log(element,index);
        // ${JSON.stringify(element)}
        output.innerHTML += `<div>${element.name.first} ${element.name.last}</div>`;  
        output.innerHTML += `Age: ${element.age}`;  
        output.innerHTML += `<div>${element.location.city}</div><hr>`;  
    })
}