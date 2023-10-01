function task1(){
    let form=document.getElementById("task1")
    form.button.addEventListener("click",()=>{
        console.log(form.text.value);
        form.text.value=""
    })
}
task1()

function task2(){
    
    let form=document.getElementById("task2-form")
    form.button.addEventListener("click",()=>{
        console.log(form.select.selectedOptions[0].textContent);
    })
}
task2()