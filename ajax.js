const output = document.querySelector('.output');
console.log(output);
const url = 'list.json';
let myList = [];
const btn1 = document.createElement('button');
btn1.textContent = 'Reload JSON';
btn1.addEventListener('click',reloader);
document.body.append(btn1);

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const btn2 = document.createElement('button');
const divinputs = document.createElement('div');
divinputs.append(input1);
divinputs.append(input2);
divinputs.append(btn2);
document.body.append(divinputs);
btn2.textContent = 'Add to list'
input1.setAttribute('placeholder','Name');
input2.setAttribute('type','number');
input2.value = '1';
btn2.addEventListener('click',addToList);


window.addEventListener('DOMContentLoaded',()=>{
    // console.log('DOM fully loaded and parsed!')
    output.textContent = 'Loading.....';

    fetch(url)
    .then(respuesta => respuesta.json())
    .then((data)=>{
        // console.log(data);
        myList = data;       
        maker()       
    })
});

function reloader(){
    fetch(url)
    .then(rep => rep.json())
    .then((data)=>{
        myList = data;
        maker();
    }
    )
}

function addToList(){
    console.log(input1.value);
    console.log(input2.value);
}

function maker(){
    output.innerHTML = '';
    myList.forEach((element,index) => {
        songcata(element,index);           
    });
}

function songcata(song,index){
    const div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = `${song.song_Name}, tempo: ${song.tempo}`;
    output.append(div);

    const span = document.createElement('span');
    span.textContent = '😎';
    div.append(span);
    span.addEventListener('click',(e)=>{
        console.log(index);
        e.stopPropagation();
        div.remove();
        myList.splice(index,1);
        console.log(myList);

    })

    if(song.status){
        div.classList.add('completed')
    }else{
        div.classList.add('notCompleted');
    }
    div.addEventListener('click',(e)=>{
        div.classList.add('completed')
        div.classList.add('notCompleted');
        console.log(div.classList.contains('confirmed'));
        if(div.classList.contains('confirmed')){
            myList[index].status = true;
        }else{
            myList[index].status = false;
        }
        // console.log(myList);  
    })

}


