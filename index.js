const divArr = document.getElementsByTagName('div');

function setNumbers(arrDiv){
    for(let i = 1; i <= arrDiv.length; i++){
        let pElement = document.createElement('p');
        pElement.innerHTML = i;
        divArr[i - 1].appendChild(pElement);
    }
}

setNumbers(divArr);