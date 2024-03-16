const input = document.getElementById('user-input');
const output = document.getElementById('results-div');
const button = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
let NumData = [];

const reset=()=>{
    input.value ="";
}

const displayNum =()=>{
    const numInfo = {
        id: `${input.value}-${Date.now()}`,
        value: input.value
    };
    const numPresent = NumData.findIndex(item => item.value === numInfo.value);
    if (numPresent === -1) {
        NumData.push(numInfo);
    } else {
        return;
    }
    const regex = /^(1)?(?: |-)?((\d){3}|\((\d){3}\))(?: |-)?(\d){3}(?: |-)?(\d){4}$/;
    if (input.value === "") {
        alert("Please provide a phone number");
        return;
    }
    reset();
       const{id,value} = NumData[NumData.length-1]
        const paragraph = document.createElement('p');
        paragraph.id = id;
        paragraph.style.color = `${regex.test(value) ? '#00471b' : '#4d3800'}`
        paragraph.className ="inputValue"
        paragraph.textContent += `${regex.test(value) ? 'Valid' : 'Invalid'} US number: ${value}`;
        output.appendChild(paragraph);
}


button.addEventListener("click", () => {
    displayNum() 
});

clearBtn.addEventListener("click", ()=>{
    reset();
    NumData = [];
    output.innerHTML= "";
    
 })
 input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        displayNum()
    }
 })