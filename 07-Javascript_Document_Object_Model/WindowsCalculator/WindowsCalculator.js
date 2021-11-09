let tastNum = {
    "0": document.getElementById("button0"),
    "1": document.getElementById("button1"),
    "2": document.getElementById("button2"),
    "3": document.getElementById("button3"),
    "4": document.getElementById("button4"),
    "5": document.getElementById("button5"),
    "6": document.getElementById("button6"),
    "7": document.getElementById("button7"),
    "8": document.getElementById("button8"),
    "9": document.getElementById("button9"),
    "A": document.getElementById("buttonA"),
    "B": document.getElementById("buttonB"),
    "C": document.getElementById("buttonC"),
    "D": document.getElementById("buttonD"),
    "E": document.getElementById("buttonE"),
    "F": document.getElementById("buttonF"),
    "reset" : function() {
        tastNum["0"].disabled = false
        tastNum["1"].disabled = false
        tastNum["2"].disabled = false
        tastNum["3"].disabled = false
        tastNum["4"].disabled = false
        tastNum["5"].disabled = false
        tastNum["6"].disabled = false
        tastNum["7"].disabled = false
        tastNum["8"].disabled = false
        tastNum["9"].disabled = false
        tastNum["A"].disabled = false
        tastNum["B"].disabled = false
        tastNum["C"].disabled = false
        tastNum["D"].disabled = false
        tastNum["E"].disabled = false
        tastNum["F"].disabled = false
        tastNum["radix"] = 16
        },
    "radix": 16,
    "set" : function () {
        tastNum["0"].disabled = true
        tastNum["1"].disabled = true
        tastNum["2"].disabled = true
        tastNum["3"].disabled = true
        tastNum["4"].disabled = true
        tastNum["5"].disabled = true
        tastNum["6"].disabled = true
        tastNum["7"].disabled = true
        tastNum["8"].disabled = true
        tastNum["9"].disabled = true
        tastNum["A"].disabled = true
        tastNum["B"].disabled = true
        tastNum["C"].disabled = true
        tastNum["D"].disabled = true
        tastNum["E"].disabled = true
        tastNum["F"].disabled = true
    },
};
let hexDisplay, decDisplay, octDisplay, binDisplay
let currentOperator="NOP"
let currentOperand=NaN


function initializeCalculator() {
    hexDisplay = document.getElementById("hexDisplay")
    decDisplay = document.getElementById("decDisplay")
    octDisplay = document.getElementById("octDisplay")
    binDisplay = document.getElementById("binDisplay")

    let display = document.getElementById("display")
    let displayValue = parseInt(display.innerText, tastNum.radix)
    display.innerText = "0"
    hexDisplay.innerText=displayValue.toString(16)
    decDisplay.innerText=displayValue.toString(10)
    octDisplay.innerText=displayValue.toString(8)
    binDisplay.innerText=displayValue.toString(2)

}

function radioButtonPressed(radioButtonPressed) {
    tastNum.reset()
    switch(radioButtonPressed) {
        case 'DEC':
            tastNum["A"].disabled = true
            tastNum["B"].disabled = true
            tastNum["C"].disabled = true
            tastNum["D"].disabled = true
            tastNum["E"].disabled = true
            tastNum["F"].disabled = true
            tastNum.radix = 10
            break
        case 'OCT':
            tastNum["9"].disabled = true
            tastNum["A"].disabled = true
            tastNum["B"].disabled = true
            tastNum["C"].disabled = true
            tastNum["D"].disabled = true
            tastNum["E"].disabled = true
            tastNum["F"].disabled = true
            tastNum.radix = 8
            break
        case 'BIN':

            tastNum["2"].disabled = true
            tastNum["3"].disabled = true
            tastNum["4"].disabled = true
            tastNum["5"].disabled = true
            tastNum["6"].disabled = true
            tastNum["7"].disabled = true
            tastNum["8"].disabled = true
            tastNum["9"].disabled = true
            tastNum["A"].disabled = true
            tastNum["B"].disabled = true
            tastNum["C"].disabled = true
            tastNum["D"].disabled = true
            tastNum["E"].disabled = true
            tastNum["F"].disabled = true
            tastNum.radix = 2
            break
        default:
            break
    }
}

function numButtonPressed(numPressed) {
    let display = document.getElementById("display")
    let displayValue = parseInt(display.innerText, tastNum.radix)
    if (displayValue == 0) {
        display.innerText = numPressed
    } else {
        display.innerText = display.innerText + numPressed
    }

    console.log("calc_keyNumPressed: "+numPressed+" displayValue:"+displayValue+" currentOperator:"+currentOperator+" currentOperand:"+currentOperand)
}

function operandButtonPressed(operandButton) {
    let display = document.getElementById("display")
    let displayValue = parseInt(display.innerText, tastNum.radix)
    currentOperator=operandButton
    currentOperand=displayValue
    display.innerText="0"
    hexDisplay.innerText=currentOperand.toString(16)
    decDisplay.innerText=currentOperand.toString(10)
    octDisplay.innerText=currentOperand.toString(8)
    binDisplay.innerText=currentOperand.toString(2)
}

function computeButtonPressed() {
    let display = document.getElementById("display")
    let displayValue = parseInt(display.innerText, tastNum.radix)
    let result=NaN

    switch (currentOperator) {
        case "ADD":
            result=currentOperand+displayValue
            break
        case "SUB":
            result=currentOperand-displayValue
            break
        case "MUL":
            result=currentOperand*displayValue
            break
        case "DIV":
            result=currentOperand/displayValue
            break
        default:
            result=displayValue
    }

    if (result != NaN) {
        currentOperand=result
        currentOperator="NOP"
        display.innerText=currentOperand.toString(tastNum.radix)
        hexDisplay.innerText=currentOperand.toString(16)
        decDisplay.innerText=currentOperand.toString(10)
        octDisplay.innerText=currentOperand.toString(8)
        binDisplay.innerText=currentOperand.toString(2)
    }
}
