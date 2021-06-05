const grid = document.querySelector('#grid-container');
const selectDiv = document.querySelector('div');
const selectAllDiv = document.querySelectorAll('div');
const changeColor = document.querySelectorAll('square');
const clickButton = document.querySelector('button');
let limit = 64;

//creates the amount of div needed in order to resemble a grid, in this case using multiplier
function createDiv() {
    for(i = 0; i < (limit * limit); i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
    //displays the div as a grid, using the ${} selector for variables inside css
    selectDiv.style.cssText = `display: grid; grid-template-rows: repeat(${limit}, 1fr); grid-template-columns: repeat(${limit}, 1fr); grip-gap: 0px;`
}
    //listens for a click for the button
    clickButton.addEventListener('click', () => {
        let askQuestion = parseInt(prompt('How many blocks per side?'));
        limit = askQuestion;
        if (limit < 101) {
            document.getElementById('grid-container').innerHTML = '';
            createDiv();
        } else if (limit > 100) {
            alert('The value is too high!');
        } else if (limit == 0) {
            alert('The value is too low!');
        } else{
            alert('It is not a number!');
        }
    });
    //listens for hover over a singular div
    selectAllDiv.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            e.target.classList.add('color')
        });
    });

createDiv();