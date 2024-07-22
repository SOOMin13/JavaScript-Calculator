const buttons = document.getElementsByClassName("button")
const display = document.getElementById("display")
const numbers = document.getElementsByClassName("number")
const operatorBtn = document.getElementsByClassName("operator")
const buttonsArr = Array.from(buttons)
const operatorBtnArr = Array.from(operatorBtn)

let operator = null;
let firstOperand = null;
let secondOperand = null;

buttonsArr.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const clickedBtn = e.target.textContent;
        console.log(clickedBtn)

        if (display.textContent === "0" && e.target.classList.contains("number")) {
            display.textContent = "";
            display.textContent = clickedBtn;
        } else if (e.target.classList.contains("number")) {
            display.textContent += clickedBtn;
        } else if (e.target.classList.contains("operator")) {
            display.textContent += clickedBtn;
        }

        dot(clickedBtn)

        clear(clickedBtn)

        equalSign(clickedBtn)

    });

});

function equalSign(clickedBtn) {

    if (clickedBtn === "=" && operator !== null && firstOperand !== null) {
        secondOperand = display.textContent;
        const result = calculate(firstOperand, operator, secondOperand);
        console.log(`secondOperand: ${secondOperand}`);
        display.textContent = result
        firstOperand = result;
        secondOperand = null;
        operator = null;

    }
}

function dot(clickedBtn) {
    if (!display.textContent.includes(".") && clickedBtn === ".") {
        display.textContent += clickedBtn;
    }
}

function clear(clickedBtn) {
    if (clickedBtn === "C") {
        display.textContent = "0";
        operator = null;
        firstOperand = null;
        secondOperand = null;
    }
}



function calculate(firstOperand, operator, secondOperand) {

    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    switch (operator) {
        case "+":
            return firstOperand + secondOperand;

        case "-":
            return firstOperand - secondOperand;

        case "*":
            return firstOperand * secondOperand;

        case "/":
            return firstOperand / secondOperand;
    }
}

function calculate2(firstOperand, operator, secondOperand) {

    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);
    switch (operator) {
        default:
            return calculate(firstOperand, operator, secondOperand)
    }
}


operatorBtnArr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const clickedBtn = e.target.textContent

        if (operator === null && e.target.classList.contains("operator")) {

            operator = clickedBtn
            firstOperand = display.textContent
            console.log(`firstOperand: ${firstOperand}, 
                         operator: ${operator}`)
            display.textContent = ""
        }
        else if (firstOperand !== null && secondOperand == null) {
            secondOperand = display.textContent;
            console.log(`secondOperand: ${secondOperand}`);
        }

        if (e.target.classList.contains("operator") &&
            firstOperand !== null && secondOperand !== null) {
            const result = calculate2(firstOperand, operator, secondOperand)
            console.log(`secondOperand: ${secondOperand}`);
            display.textContent = result
            firstOperand = result;
            secondOperand = null;
            operator = null;
        }

    });
});