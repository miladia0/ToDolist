window.addEventListener("load",()=>{
    const form=document.querySelector("#task-form");
    const input=document.querySelector("#task-input");
    const list=document.querySelector("#tasks");
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task=input.value;
        if(!task){
            alert('لطفا تسک وارد کنین ')
            return
        }
        const task_el=document.createElement("div");
    task_el.classList.add("task")
    const task_content= document.createElement('div');
    // task_content.innerText=task
    task_content.classList.add('content')
    task_el.appendChild(task_content)
    const input1 = document.createElement('input');
    input1.classList.add('text')
    input1.type=('text')
    input1.value=task;
    input1.setAttribute("readonly","readonly")
    task_content.appendChild(input1)
    const actions =document.createElement('div');
    actions.classList.add('actions')
    const edit= document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML="ویرایش";
    const delet= document.createElement('button');
    delet.classList.add('delet');
    delet.innerHTML="پاک کردن ";
    actions.appendChild(edit)
    actions.appendChild(delet)
    task_el.appendChild(actions)
    input.value=""
   


    list.appendChild(task_el)
    edit.addEventListener("click",(e)=>{
        if(edit.innerText.toLocaleLowerCase()=="ویرایش"){
            input1.removeAttribute('readonly')
            input1.focus();
            edit.innerHTML="ذخیره"
        }else{
            input1.setAttribute("readonly","readonly")
            edit.innerText="ویرایش"

        }
        
    })
    delet.addEventListener("click",(e)=>{
        if(delet.innerText.toLocaleLowerCase()=="پاک کردن"){
            confirm('مطمن  هستی  ')
            
           list.removeChild(task_el)
        }
    })
    
    })
    


})
