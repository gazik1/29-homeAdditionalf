function task1(){
    let name=document.getElementById("task1")
    let form=document.getElementById("task1_form")
    form.button.onclick=()=>{
        name.innerHTML=name.innerHTML+form.input.value
    }
}
task1()
function task2(){
    let name=document.getElementById("task2")
    let form=document.getElementById("task2_form")
    form.button.onclick=()=>{
        name.textContent=name.innerHTML+form.input.value
    }
}
task2()