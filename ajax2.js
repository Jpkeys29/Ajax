const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=;'
const boton = document.querySelector('.boton');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
// inputVal.value = 'hello';
boton.textContent = 'Load JSON data'

boton.addEventListener('click',(e)=>{
    let searchTerm = inputVal.value;
    let tempUrl = url + searchTerm;
    fetch(tempUrl)
        .then(resp => {return resp.json()})
        .then((json)=>{
            console.log(json);
            maker(json.query.search);
        }).catch(error=>{
            console.log(error);
        })
})

function maker(data){
    console.log(data);
    output.innerHTML = `Results for:`;
    data.forEach(element =>{
        console.log(element);
        const div = document.createElement('div');
        div.innerHTML += `<div><h4><a href="https://en.wikipedia.org/wiki?curid=${element.pageid}" target="blank">${element.title}</a></h4></div><hr>`;
        div.classList.add('box') //adds the style from box 
        div.innerHTML += element.snippet;
        output.append(div);
    })
}
