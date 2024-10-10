const inputField = document.querySelector(".input-field");
const buttons = document.querySelectorAll(".box");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        console.log(`button clicked : ${value}`);
 
        if(value == "AC") {
            inputField.value = '';
        } else if (value == "DE") {
            inputField.value = inputField.value.slice(0, -1);
        } else if(value == '=') {
            try {
                const result = eval(inputField.value);

                if(result === Infinity || isNaN(result)) {
                    throw new Error("Invalid result");
                }

                inputField.value = result;
            } catch (error) {
                inputField.value = 'Error: Invalid Expression';
            }
        } else {
            inputField.value += value;
        }
    });
});