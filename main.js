
let divCol1 = document.querySelector('.div-col1');
let divCol2 = document.querySelector('.div-col2');
let divCol3 = document.querySelector('.div-col3');
let button = document.getElementById('button');
let count = 0;

function countUp() {
    count++;
    button.textContent = count;
    placeBox();
}

function placeBox() {
    let div1 = document.createElement('div1');
    let div2 = document.createElement('div2');
    let div3 = document.createElement('div3');

    div1.classList.add('red');
    div2.classList.add('blue');
    div3.classList.add('green');

    if (count % 2 === 0) {
        divCol1.appendChild(div1);
    } else if (count % 3 === 0) {
        divCol2.appendChild(div2);
    } else {
        divCol3.appendChild(div3)
    }

    div1.textContent = count;
    div2.textContent = count;
    div3.textContent = count;

}
