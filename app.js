 import {info} from './env.js';
const body = document.querySelector('body');
const button = document.querySelector('.button');
const word = document.createElement('h1');
const word2 = document.createElement('p');
body.appendChild(word);
body.appendChild(word2); 

const randomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
             word.textContent = response;
            // body.appendChild(word);
             randomDefinition(word);
            })
        .catch(err => {
            console.log(err);
        })
}
const randomDefinition = (word) =>
{   
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=${info.key}`)
    .then(response =>{
        return response.json();
    })
    .then(response => {
       console.log(response[0].shortdef[0]);
       if(response[0].shortdef !== undefined)
       {
        word2.textContent = "Definition of your word "+ word.textContent +" is : " + response[0].shortdef;
       }
       else
       {
            word2.textContent = "No Definition";
       }
    })
    .catch(err => {
        console.log(err);
    })


}


button.addEventListener('click', function(){
    randomWord();
    
})


