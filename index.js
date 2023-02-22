window.addEventListener('load', () => {
    let form = document.getElementById('To-Do-List-form')
    let input = document.getElementById('input-field')
    let tasksDiv = document.querySelector('#tasks')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let task = input.value
        if (task == '') {
            alert('please input a task!')
            return
        }

        let task_el = document.createElement('div')
        task_el.classList.add('task')

        let task_content_el = document.createElement('div')
        task_content_el.classList.add('task-content')


        task_el.appendChild(task_content_el)


        task_input_el = document.createElement('input')
        task_input_el.classList.add('text')
        task_input_el.type = 'text'
        task_input_el.value = task
        task_input_el.setAttribute('readonly', 'readonly')

        task_content_el.appendChild(task_input_el)

        let action_el = document.createElement('div')
        action_el.classList.add('action')

        let edit_el = document.createElement('button')
        edit_el.classList.add('edit')
        edit_el.innerHTML = 'Edit'

        let delete_el = document.createElement('button')
        delete_el.classList.add('delete')
        delete_el.innerHTML = 'Delete'

        action_el.appendChild(edit_el)
        action_el.appendChild(delete_el)

        task_el.appendChild(action_el)


        tasksDiv.appendChild(task_el)

        input.value = ''
        edit_el.addEventListener('click', () => {
            if (edit_el.innerHTML == 'Edit') {
                task_input_el.removeAttribute('readonly', 'readonly')
                task_input_el.focus()
                edit_el.innerHTML = 'Save'
            } else {
                task_input_el.setAttribute('readonly', 'readonly')
                edit_el.innerHTML = 'Edit'
            }

        })

        delete_el.addEventListener('click', () => {
            let removedClass = task_el
            removedClass.remove()
        })

    })
})