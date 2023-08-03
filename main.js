const inputarea = document.querySelector(".itemParent")


function listUpdate(){
    const inputElement = document.querySelector('.input')
    const input = inputElement.value;
    if (input.length<=0){
        return;
    }
    if (input.length>=10){
        alert("10글자를 넘길 수 없습니다.")
        return;
    }

    const div = document.createElement('div');
    div.setAttribute('class',`${input}`);
    div.innerHTML = `
    ${input}
    <img id=${input} class="delete" src="free-icon-trash-can-3052864.png"/>
    `;
    inputarea.appendChild(div);

    const deleteBtns = document.querySelectorAll('.delete')
    deleteBtns.forEach((clicked)=>{
        clicked.onclick = function(){
            this.parentElement.parentElement.removeChild(this.parentElement)
        }
    })

    div.scrollIntoView({block:'end'})

    inputElement.value = "";

    
    }






