q
// const urlarray = 'https://api.github.com/orgs/octo-org/repos';
const urlsearch = 'https://api.github.com/search/repositories';
const searchTerm = document.querySelector('.searchTerm')
//const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
//The 'encodeURIComponent('GitHub Octocat in:readme user:defunkt')'will update an account if there are spaces

// Setting up the containers:
const output = document.querySelector('.output');
const btn = document.querySelector('.btn');

//To output the Zen quote anytime that the page reloads:
window.addEventListener('DOMContentLoaded',(e)=>{
    fetch('https://api.github.com/zen')
    .then(resp => resp.text())
    .then(message=>{
        // console.log(message);
        document.querySelector('h2').textContent = message;
    })

})

btn.addEventListener('click',(e)=>{
    const val = searchTerm.value;
    const queryString = urlsearch + '?q='+encodeURIComponent(val);
    console.log(queryString);
    fetch(queryString)
    .then(resp=>resp.json())
    .then((data) =>{
        // console.log(data.items);
        // outputtoPage(data);
        outputArray(data.items); 
    })
    .catch(error=>{
        console.log(error.message);
    })
})

// Output function for api returning an array:
function outputArray(data){
    console.log(data);
    data.forEach(element=>{
        outputtoPage(element);
        output.innerHTML += '<hr>';
    })
}

function outputtoPage(data){
    // console.log(data);
    let html = 
    `${data.name}<br>
     ${data.id}<br>
     ${data.owner.id}<br>
     ${data.language}<br> 
     <a href="${data['html_url']}" target="blank">${data['html_url']}</a><br> `; 
    // output.innerHTML = html; //Assign the object to the output
    //N.B. when outputting an ARRAY make sure 'output.innerHTML +=' instead of only '='
    output.innerHTML += html
}

