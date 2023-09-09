
const btn = document.querySelector('.btn')
const h1 = document.querySelector('h1')
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
const baseUrl = 'https://api.stackexchange.com/'

window.addEventListener('DOMContentLoaded',(e)=>{
    console.log('DOM ready!')
    pageLoad();
})

btn.addEventListener('click',(e)=>{
    // console.log('Click ready');
    outputPage();
    
})

function pageLoad(){
    const url = baseUrl + '2.3/questions?order=desc&sort=activity&site=stackoverflow';
    console.log(url);
    fetch(url)
        .then(resp=>resp.json())
        .then((data)=>{
            outputItems(data.items)
        }).catch((error)=>{
            console.log(error);
        })
}

function outputItems(data){
    console.log(data);
    output.innerHTML='📼';
    data.forEach((item)=>{
        console.log(item);
        outputPage(item);
    })
}

function outputPage(item){
    console.log(item);
    const mainDiv = createNode(output,'div','');
    mainDiv.classList.add('box');
    const elemento = createNode(mainDiv,'div',item.title);
    elemento.classList.add('topTitle');
    item.tags.forEach((tag)=>{ //'tags' because that is how it is called in the json file
        const span = createNode(mainDiv,'span',tag);
        span.classList.add('tag');
    })
    console.log(elemento);
}

// Creating elements for the page:It requires the parent, the type of element, and the contents of that element(html)
function createNode(parent,element_type,contents){
    const element = document.createElement(element_type); //It creates a new HTML element. eg.'div'
    element.innerHTML = contents;//To add HTML content inside the created element
    parent.append(element);
    return element;
}

