const apiKey = 'AIzaSyDafONTDV61i5fpfIjtrerGZkAfsmsRjpU'
const baseUrl = 'https://www.googleapis.com/youtube/v3'
// GET https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY] HTTP/1.1
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=[YOUR_API_KEY] HTTP/1.1

const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const searchQuery = document.querySelector('.searchQ');

btn.addEventListener('click',(e)=>{
    // let query = searchQuery.value;
    // let searchTerm = '/search?'
    // let parameters = '&part=snippet'
    // let apiProtect = '&key='+ apiKey
    // let url = baseUrl + searchTerm + query + parameters+ apiProtect;

    let query = searchQuery.value;
    let searchTerm = '/search?'
    let apiProtect = '&key='+ apiKey
    let url = baseUrl + searchTerm + query + apiProtect;

    // Alternative url configuration:
    // let parameters = '&part=snippet&key='+ apiKey
    // let url = baseUrl + searchTerm + query + parameters;

    console.log(url)
    fetch(url)
    .then(resp => resp.json())
    .then(data =>{
        console.log(data);
        output.innerHTML = '';
        data.items.forEach(item=>{
            console.log(item);
            // const element = makeCard(item); //different way to ouput content onto the page
            // output.append(element);
        })
    })
    .catch(error=>{
        console.log(error);
    })
});

function makeCard(data){
    // console.log(data);
    const mainContainer = document.createElement('div');
    const video = data.snippet;
    mainContainer.textContent = video.title;
    // mainContainer.textContent = video.thumbnails.default.url;
    mainContainer.classList.add('box');
    return mainContainer;

}