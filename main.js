let container = document.querySelector(".container-interactive");
let gridButton = document.getElementById("create-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-button");
let paintBtn = document.getElementById("paint-button");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");
let colorPicker = document.querySelector("#color-input");
let mainContainer = document.querySelector(".main-container");



gridWidth.addEventListener('input', () =>{
    widthValue.innerHTML = gridWidth.value;
});

gridHeight.addEventListener('input', () =>{
    heightValue.innerHTML = gridHeight.value;
});


gridButton.addEventListener('click', () => {
    const columns = gridWidth.value;
    const rows = parseInt(gridHeight.value);
    const numOfRows = checkRows();
    
    if ( numOfRows + rows < 22) {
        for(let j=0 ; j < rows; j++){
            let divRow = document.createElement('div');
            for (let i = 0; i < columns; i++) {
                let col = document.createElement('div');
                col.classList.add('gridCol');
                
                divRow.appendChild(col);
                divRow.classList.add('gridRow');
            }
            container.appendChild(divRow);
        }
    }
})

clearGridButton.addEventListener('click', () => {
    container.replaceChildren();
});


container.addEventListener("contextmenu", (event) => {
    event.preventDefault();
   });

container.addEventListener('mouseup', event => {
    const selectedItem = event.target;
    if(selectedItem.className === 'gridCol'){
        switch (event.which) {
            case 1:
                selectedItem.style.backgroundColor = colorPicker.value;
                break;
            case 3:
                selectedItem.remove();
                break;
        }
    }
});


function checkRows() {
    const container = document.querySelectorAll('.container-interactive > div');
    if (!container) {
        console.warn('main->checkRows: Container is empty!');
        return 0;
    }

    return container.length;
}

