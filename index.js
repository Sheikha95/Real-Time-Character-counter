const textareaEL=document.getElementById("textarea")
const totalcounterEL=document.getElementById("total-counter")
const remainingcounterEL=document.getElementById("remaining-counter")

textareaEL.addEventListener("keyup",()=>{
    updatecounter()
})

     updatecounter()

function updatecounter(){
   totalcounterEL.innerText= textareaEL.value.length;
   remainingcounterEL.innerText=textareaEL.getAttribute("maxLength")-textareaEL.value.length;
}

