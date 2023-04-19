let width = document.querySelector('.width-input')
let height = document.querySelector('.height-input')
let buttons = document.querySelectorAll('button')
let shape = document.querySelector('.shapes')
let heading = document.querySelector('.feedback1')
let heading2 = document.querySelector('.feedback2')
let heading3 = document.querySelector('.feedback3')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (width.value !== '' && height.value !== '') {
            if (width.value <= 400 || height.value <= 400) {
                if (button.classList.contains('circle')) {
                    if (width.value === height.value) {
                        shape.style.width = width.value + "px"
                        shape.style.height = height.value + "px"
                        shape.style.borderRadius = '50%';
                    }
                    else {
                        console.log('first')
                        heading.classList.add('show')
                        setTimeout(() => {
                            heading.classList.remove('show')
                        }, 2000)
                    }
                }
                if (button.classList.contains('square')) {
                    if (width.value === height.value) {
                        shape.style.width = width.value + "px"
                        shape.style.height = height.value + "px"
                    }
                    else {
                        console.log('first')
                        heading.classList.add('show')
                        setTimeout(() => {
                            heading.classList.remove('show')
                        }, 2000)
                    }
                }
                if (button.classList.contains('rectangle')) {
                    shape.style.width = width.value + "px"
                    shape.style.height = height.value + "px"
                }
            } else {
                heading2.classList.add('show')
                setTimeout(() => {
                    heading2.classList.remove('show')
                }, 2000)
            }
        } else {
            heading3.classList.add('show')
            setTimeout(() => {
                heading3.classList.remove('show')
            }, 2000)
        }

    })
})