// calculator
let display = document.getElementById('display')
let ans = document.getElementById('ans')
let buttons = document.getElementsByTagName('button')

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];

    element.addEventListener('click', () => {
        let button = element.innerText;
        if (button == 'C') {
            ans.innerText = ""
            display.innerText = "0"
        } else if (button == '=') {
            let actualAns = eval(display.innerText)
            ans.innerHTML = `= <span class="text-blue-400">${actualAns}</span>`

        } else {
            if (display.innerText == '0') {
                display.innerText = ""
            }
            display.innerText += `${button}`

        }

    })
}

 

