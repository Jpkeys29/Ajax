const output = document.querySelector('.output');
console.log(output);
const url = 'list.json';

window.addEventListener('DOMContentLoaded',()=>{
    // console.log('DOM fully loaded and parsed!')
    output.textContent = 'Loading.....';
    fetch(url)
    .then(respuesta => respuesta.json())
    .then((data)=>{
        console.log(data);
        output.innerHTML = '';
        data.forEach(element => {
            songcata(element);           
        });
    })
});

function songcata(song){
    const div = document.createElement('div');
    div.innerHTML = `${song.song_Name}, tempo: ${song.tempo}`;
    output.append(div);
    if(song.status){
        div.classList.add('completed')
    }else{
        div.classList.add('notCompleted');
    }
}

// function makelist(item){
//     const div = document.createElement('div');
//     div.innerHTML = `${item.name} Guests: (${item.guests})`;
//     output.append(div);
//     if(item.status){
//         div.classList.add('confirmed')
//     }else{
//         div.classList.add('notConfirmed');
//     }
// }

