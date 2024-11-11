function addValue(){
    // get the operands value
    
    var num1 = parseFloat(document.getElementById('input_a').value);
    var num2 = parseFloat(document.getElementById('input_b').value);

    // parse to integer. You can use: parseInt(input, 10);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }
    // perform operation

    var text = num1 + num2;

    // creating the text output

    // (if you want to check) print out in console

    // change the text area

    document.mycalculator.output.value = `${num1} + ${num2} = ${text}`;
}


function mulValue(){
    var num1 = parseFloat(document.getElementById('input_a').value);
    var num2 = parseFloat(document.getElementById('input_b').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }
    var text = num1 * num2;
    document.mycalculator.output.value = `${num1} * ${num2} = ${text}`;
}

function divValue(){
    var num1 = parseFloat(document.getElementById('input_a').value);
    var num2 = parseFloat(document.getElementById('input_b').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    if (num2 === 0) {
        alert("Cannot divide by zero.");
        return;
    }

    var text = num1 / num2;
    document.mycalculator.output.value = `${num1} / ${num2} = ${text}`;
}
