function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return Math.floor(a / b)
}

let lhs = null
let operator = null
let rhs = null

function operate(_operator, _lhs, _rhs) {
    switch (_operator) {
        case '+':
            return add(_lhs, _rhs)
        case '-':
            return subtract(_lhs, _rhs)
        case '*':
            return multiply(_lhs, _rhs)
        case '/':
            return divide(_lhs, _rhs)
        default:
            console.error(`${_operator} is not a valid operator.`)

    }
}

const display = document.querySelector('#display')

function integerSelect(number) {
    if (operator == null) {
        if (lhs == null) {
            lhs = number
        } else {
            lhs = (lhs * 10) + number
        }
        display.textContent = lhs
    } else {
        if (rhs == null) {
            rhs = number
        } else {
            rhs = (rhs * 10) + number
        }
        display.textContent = rhs
    }
}

function operatorSelect(_operator) {
    // If we have an operator and both numbers, 
    // then we must compute first, set lhs to result and display result
    if (operator != null && lhs != null && rhs != null) {
        if (operator == '/' && rhs == 0) {
            display.textContent = "ERROR! CANNOT DIVIDE BY 0"

            // Set lhs, rhs, and operator to null
            lhs = null
            rhs = null
            operator = null

            return
        }
        const result = operate(operator, lhs, rhs)
        console.log(`${lhs} ${operator} ${rhs} = ${result}`)

        lhs = result
        display.textContent = result
    }

    // Overwrite the operator
    operator = _operator

    // Set rhs to null
    rhs = null
}

const _1 = document.querySelector('#one')
_1.addEventListener('click', (event) => { integerSelect(1) })
const _2 = document.querySelector('#two')
_2.addEventListener('click', (event) => { integerSelect(2) })
const _3 = document.querySelector('#three')
_3.addEventListener('click', (event) => { integerSelect(3) })

const _4 = document.querySelector('#four')
_4.addEventListener('click', (event) => { integerSelect(4) })
const _5 = document.querySelector('#five')
_5.addEventListener('click', (event) => { integerSelect(5) })
const _6 = document.querySelector('#six')
_6.addEventListener('click', (event) => { integerSelect(6) })

const _7 = document.querySelector('#seven')
_7.addEventListener('click', (event) => { integerSelect(7) })
const _8 = document.querySelector('#eight')
_8.addEventListener('click', (event) => { integerSelect(8) })
const _9 = document.querySelector('#nine')
_9.addEventListener('click', (event) => { integerSelect(9) })

const _0 = document.querySelector('#zero')
_0.addEventListener('click', (event) => { integerSelect(0) })

const _add = document.querySelector('#add')
_add.addEventListener('click', (event) => { operatorSelect('+') })
const _subtract = document.querySelector('#subtract')
_subtract.addEventListener('click', (event) => { operatorSelect('-') })
const _multiply = document.querySelector('#multiply')
_multiply.addEventListener('click', (event) => { operatorSelect('*') })
const _divide = document.querySelector('#divide')
_divide.addEventListener('click', (event) => { operatorSelect('/') })

const _equal = document.querySelector('#equal')
_equal.addEventListener('click', (event) => {
    // If we have an operator and both numbers, 
    // then we must compute first and display result
    if (operator != null && lhs != null && rhs != null) {
        if (operator == '/' && rhs == 0) {
            display.textContent = "ERROR! CANNOT DIVIDE BY 0"
        } else {
            const result = operate(operator, lhs, rhs)
            console.log(`${lhs} ${operator} ${rhs} = ${result}`)

            display.textContent = result
        }
    } else {
        display.textContent = "ERROR!"
    }

    // Set lhs, rhs, and operator to null
    lhs = null
    rhs = null
    operator = null
})
const _clear = document.querySelector('#clear')
_clear.addEventListener('click', (event) => {
    // Reset display text
    display.textContent = '---'

    // Set lhs, rhs, and operator to null
    lhs = null
    rhs = null
    operator = null
})

const _backSpace = document.querySelector('#back-space')
_backSpace.addEventListener('click', (event) => {
    if (rhs != null) {
        rhs = Math.floor(rhs / 10)
        display.textContent = rhs
    } else if (lhs != null) {
        lhs = Math.floor(lhs / 10)
        display.textContent = lhs
    }
})

