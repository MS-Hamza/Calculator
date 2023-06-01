// store elements
const inputText = document.querySelector(".input");
const outputText = document.querySelector(".output");
const buttons = document.querySelectorAll(".number");
const actions = document.querySelectorAll(".action");
const clear = document.querySelector(".clear");

// If "AC" key is clicked 
clear.addEventListener("click",function(){
    inputText.value = "";
    outputText.value = "";
    actionsVariable = "";
})

// If a number key is clicked
for(let button of buttons){
    button.addEventListener("click",function(e){
        inputText.value = inputText.value+e.target.value;
    });
}


// If an action/operation key is clicked 
let actionsVariable = "";
for(let action of actions){
    action.addEventListener("click",function(e){
        actionsVariable = e.target.value;
        if(actionsVariable == "sq()"){
            outputText.value = "sq(" + inputText.value + ")";
            inputText.value = "";
        }else{
            outputText.value = inputText.value + actionsVariable;
            inputText.value = "";
        }
    });
}

// when "=" key is clicked
const result = document.querySelector(".result");
result.addEventListener("click",function(){
    var input1 = outputText.value;
    // in case of square operation
    if(actionsVariable == "sq()"){
        if(input1 == "sq()"){
            // if sq() is clicked before giving input
            outputText.value = "sq(" + inputText.value + ")";
            let input2 = inputText.value;
            inputText.value = input2 * input2;
        }else{
            // if sq() is clicked after giving input
            let sqVar = actionsVariable;
            sqVar = sqVar.slice(0,3);
            input1 = input1.replace("sq(","");
            input1 = input1.replace(")","");
            input1 = Number(input1);
            outputText.value = sqVar + input1 + ")";
            inputText.value = input1*input1;
        }
    }else{
        // if any other operation is selected except square
        input1 = Number(input1.replace(actionsVariable,""));
        var input2 = Number(inputText.value);
        if(actionsVariable == "*"){
            outputText.value = outputText.value + inputText.value;              // Mulitiply operation
            inputText.value = input1 * input2;
        }else if(actionsVariable == "/"){
            outputText.value = outputText.value + inputText.value;              // Division operation
            inputText.value = input1 / input2;
        }else if(actionsVariable == "+"){
            outputText.value = outputText.value + inputText.value;              // addition operation
            inputText.value = input1 + input2;
        }else if(actionsVariable == "-"){
            outputText.value = outputText.value + inputText.value;              // subtraction operation
            inputText.value = input1 - input2;
        }else if(actionsVariable == "%"){
            outputText.value = outputText.value + inputText.value;              // percentage operation
            inputText.value = (input1/100)*input2;
        }else if(actionsVariable == "^"){
            outputText.value = outputText.value + inputText.value;              // power operation
            inputText.value = Math.pow(input1,input2);
        }else{
            alert("Error...");
        }
    }
})




