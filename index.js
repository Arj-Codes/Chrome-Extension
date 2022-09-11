// javascript
// function btnClicked(){
//     console.log("Button Clicked I")
// }

let myLeads = []
const inputEl = document.getElementById("input-el")
const btnClick = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let myLocalLeads = JSON.parse(localStorage.getItem("myLeads"))
// console.log(myLocalLeads)

btnClick.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    
    renderLeads()
     // console.log(myLeads)
    //  console.log(localStorage.getItem("myLeads"))
     localStorage.clear()
})
// JSON.stringify = CONVERTS TO STRING
// JSON.parse = CONVERTS FROM STRING

// for(let i=0;i<myLeads.length;i++){
//  ulEl.innerHTML += "<li>"+myLeads[i]+"</li>"

// //  alternativeMethod
// // const li = document.createElement("li")
// // li.textContent = myLeads[i]
// // ulEl.append(li)
// }

// alternative method
function renderLeads(){
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        // listItems += "<li><a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>"
        
        // alternative and better
        listItems += `<li>
                        <a href=${myLeads[i]} target="_blank">${myLeads[i]}</a>
                     </li>`
    }
    ulEl.innerHTML = listItems
}

// LOCAL STORAGE TUT
// localStorage.setItem("myLeads","MusicMania.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear("myLeads")

