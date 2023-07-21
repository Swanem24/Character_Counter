const textareaEL = document.getElementById("textarea");
const totalcharEL = document.getElementById("total_counter");
const remaincharEL = document.getElementById("remaining_counter");

textareaEL.addEventListener("keyup", ()=>{
    updateCounter();
})

function updateCounter() {
    totalcharEL.innerText = textareaEL.value.length;
    remaincharEL.innerText = textareaEL.getAttribute("maxlength") - textareaEL.value.length;
}