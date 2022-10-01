const divArr = document.getElementsByTagName('div');
const pArr = document.getElementsByTagName('p');

function setNumbers(arrDiv, arrP){
    for(let i = 1; i <= arrDiv.length; i++){
        arrP[i - 1].innerHTML = i;
    }
}

setNumbers(divArr, pArr);