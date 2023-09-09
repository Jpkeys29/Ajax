// const url = 'https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?'
// https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US
const url = 'https://yh-finance.p.rapidapi.com/market/get-spark?'
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val')
inputVal.setAttribute('type','text');
const btn = document.querySelector('.btn');


btn.addEventListener('click',(e)=>{
    let searchTerm = inputVal.value;
    let tempUrl = `${url}symbols=${searchTerm}&interval=60m&range=1d`;
    fetch(tempUrl,{
        headers: {
            'x-rapidapi-key' : '88e3695b8bmsh42ce67b8bf7a723p1d4abcjsn862b3172e524',
            'x-rapidapi-host': 'yh-finance.p.rapidapi.com'
        }
    })
        .then(resp => resp.json())
        .then((json)=>{
            console.log(json)
            outputPage(json)
            // maker(json.prices)
        }).catch(error=>{
            console.log(error);
        })
} )

function outputPage(data){
    data.forEach(element=>{
        console.log(element)
        const div = document.createElement('div');
        div.innerHTML = `${data.close}`;
        output.append(div);
    })
}


function maker(data){
    data.forEach(element =>{
        console.log(element);

        
        const div = document.createElement('div');
        div.innerHTML = `<div>Date: ${element.date}</div><div>High: ${element.high}</div> Low: ${element.low}<div>Close: ${element.close}</div><hr>`;
        // div.innerHTML = `${element.shortname}<hr>`;
        // div.innerHTML = `<div>${element.title}</div> Source: ${element.publisher} <div>Link: <a href="https://finance.yahoo.com/news/${element.link}.html" target="blank">${element.link}</a></div><hr>`;
        div.classList.add('box');
        div.classList.add('h4');
        output.append(div);

    })
}

function time(date){

}
