const url = 'https://opentdb.com/api.php?';
//for reference: https://opentdb.com/api.php?amount=10&category=12&difficulty=medium
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');
inputVal.setAttribute('type','number');
inputVal.value = 10;
const game = {questions:[],question:0};

window.addEventListener('DOMContentLoaded',(e)=>{
    console.log('DOM ready');
})


btn.addEventListener('click',(e)=>{
    // btn.style.display = 'none';
    // inputVal.style.display = 'none';
    let tempUrl = url+'amount='+inputVal;
    populatePage(tempUrl);
})

function populatePage(url){
    fetch(url)
    .then(resp=>resp.json())
    .then((data)=>{
        game.questions = data.results;
        outputPage()
        // console.log(data.results)
        // outputPage(data.results)
    }).catch(error=>{
        console.log(error);
    })
}

// function outputPage(arr){ //Before setting the questions object 
function outputPage(){
    let question = game.questions[game.question];
    game.question++;
    console.log(question);
    let answers = question.incorrect_answers;
    answers.push(question.correct_answer);
    console.log(answers);
    output.innerHTML = '🤔';
    const mainDiv = genElement(output,'div','');
    const question1 = genElement(mainDiv,'div',question.question);
    const optionsDiv = genElement(output,'div','');
    answers.forEach(options =>{
        const option1 = genElement(mainDiv,'button',options);
        option1.addEventListener('click', (e)=>{
            if(options == question.correct_answer){
                console.log('👍')
            }else{
                console.log('😿');
            }
            nextQuestion(optionsDiv);
        })
    });

    function nextQuestion(parent){
        const btn2 = genElement(parent,'button','Next Question');
        btn2.addEventListener('click',outputPage);
    }

    }
    // console.log(game.questions[game.question]);
    // arr.forEach(element=>{
    //     console.log(element);
    // }

//Objects generator:
    function genElement(parent,elementType,contents){
    const temp = document.createElement(elementType);
    temp.innerHTML = contents;
    parent.append(temp);
    return temp;
}

    // const div = document.createElement('div');
    // div.innerHTML = `${data}`;
    // output.innerHTML = `${data}`;
    // output.append(div);
