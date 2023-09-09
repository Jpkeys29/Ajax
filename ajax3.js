const url = 'http://api.wikimapia.org/?key=7854E55B-DEACFB56-7AA79615-18202A56-11AB74F4-A2AAA726-2BC6E598-3CC6BD77&function=place.getnearest&format=json';


const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
const inputVal2 = document.createElement('input');
inputVal.value = '48.858252';//Latittude
inputVal2.value = '2.29451';//Longitud
document.body.prepend(inputVal2);
inputVal2.setAttribute('type','text');
const h1 = document.querySelector('h2');
document.body.prepend(h1);

btn.addEventListener('click',(e)=>{
    let lon = inputVal2.value;
    let lat = inputVal.value;
    let tempUrl = `${url}&lon=${lon}&lat=${lat}`
    console.log(tempUrl);

    fetch(tempUrl)
    .then((resp)=> resp.json())
    .then((data) =>{
        // output.innerHTML= JSON.stringify(data);
        console.log(data);
        maker(data.places);
    }).catch((error)=>{
        console.log(error);
    })
})

function maker(data){
    data.forEach(element =>{
        console.log(element);
        const div = document.createElement('div');
        div.innerHTML = `<div>${element.title}</div><p>${element.urlhtml} </p><hr>`;
        output.append(div);
    })
}