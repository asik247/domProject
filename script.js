// Multiple element create code start now
// let ulCreated = document.createElement("ul");
// let li1 = document.createElement("li")
// li1.innerText = "HTML"
// let li2 = document.createElement("li")
// li2.innerText = "CSS"
// let li3 = document.createElement("li")
// li3.innerText = "JS"
// console.log(ulCreated,li1,li2,li3);
// ulCreated.appendChild(li1)
// ulCreated.appendChild(li2)
// ulCreated.appendChild(li3)
// document.body.appendChild(ulCreated)
// Advance Card create
let createCard = () => {
    // console.log("bnt clicked");
    let card = document.createElement("div");
    card.style.border = "2px solid black"
    card.style.padding = "20px"
    card.style.margin = "10px"
    // console.log(card);
    let title = document.createElement("h2");
    title.innerText = "JS Developer"
    let para = document.createElement("p");
    para.innerText = "Rimon is Learnign Dom"
    card.appendChild(title)
    card.appendChild(para)
    document.getElementById("container").appendChild(card);
    // console.log(object);
}
// dom simple project code here now:

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    // event.preventDefault()
    // console.log("add btn clicked");
    let inputFeild = document.getElementById("inputFeild");
    // console.log(inputFeild.value);
    let creatLi = document.createElement("li");
    creatLi.style.border = '2px solid black'
    creatLi.style.margin = '5px 0'
    creatLi.innerText = inputFeild.value;
    let ulContainer = document.getElementById("ulContainer");
    ulContainer.appendChild(creatLi);
    console.log(creatLi);
    // console.log(creatLi);
    inputFeild.value = ""

})
// Remove Btn code 
let removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", function () {
    // console.log("removeBtn clicked");
    let ulContainer = document.getElementById("ulContainer");
    // ulContainer.innerHTML = "";
    if (ulContainer.lastElementChild) {
        ulContainer.removeChild(ulContainer.lastElementChild)
    }
})
// updateBtn code here now
let updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", function () {
    // console.log("updateBtn clicked");
    let ulContainer = document.getElementById("ulContainer");
    let inputFeild = document.getElementById("inputFeild");

    // if (ulContainer.lastElementChild && inputFeild.value.trim() !== "") {
    //     ulContainer.lastElementChild.innerText = inputFeild.value;
    //     inputFeild.value = ""; // input clear
    // }
    if (ulContainer.lastElementChild && inputFeild.value.trim() !== "") {
        ulContainer.lastElementChild.innerText = inputFeild.value;
        inputFeild.value = "";
    }
})

// changeSty code hree now
let changeSty = document.getElementById("changeSty");
changeSty.addEventListener("click", function () {
    // console.log("changeSty clicked");
    let creatLi = document.createElement("li");
    creatLi.innerText = "Styled Item";
    creatLi.style.backgroundColor = 'green'; // background green
    creatLi.style.color = 'white';           // text white
    creatLi.style.padding = '5px';
    creatLi.style.margin = '5px 0';
    let ulContainer = document.getElementById("ulContainer");
    ulContainer.appendChild(creatLi)

    //   creatLi.ch.backgroundColor = 'green'
})