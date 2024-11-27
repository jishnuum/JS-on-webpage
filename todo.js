const button = document.getElementById('taskbutton')

button.addEventListener('click',()=>{
    const list = document.getElementById('list')
    const listValue = list.value

    if(listValue==''){
        return alert('add your task')
    }

    const li = document.createElement('li')
    document.getElementById('addingtask').appendChild(li)
    li.classList.add('listyle')

    const span = document.createElement('span')
    li.appendChild(span)
    span.innerText=listValue

    const spantwo = document.createElement('span')
    li.appendChild(spantwo)

    const firsti = document.createElement('i')
    firsti.classList.add('bi','bi-check-lg','fs-4','text-success')
    spantwo.appendChild(firsti)
    
    firsti.addEventListener('click',() =>{
        li.classList.toggle('complete')
        
    })
    

    const deletetion = document.createElement('i')
    deletetion.classList.add('bi','bi-trash','fs-4','text-danger')
    spantwo.appendChild(deletetion)

    deletetion.addEventListener('click',() =>{
        li.remove()
    })

    list.value = ''


    
})