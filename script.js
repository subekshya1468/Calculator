let display = document.getElementById("display");
 
        function appendNumber(number) {
            display.value += number;
        }
 
        function appendOperator(operator) {
            const lastChar = display.value[display.value.length - 1];
            if ("+-*/".includes(lastChar)) {
                display.value = display.value.slice(0, -1); 
            }
            display.value += operator;
        }
 
        function clearDisplay() {
            display.value = "";
        }
 
        function calculateResult() {
            try {
                display.value = eval(display.value); 
            } catch (error) {
                display.value = "Error"; 
            }
        }
 
        function calculateSquare() {
            try {
                let currentValue = parseFloat(display.value);
                if (!isNaN(currentValue)) {
                    display.value = currentValue ** 2; 
                } else {
                    display.value = "Error"; 
                }
            } catch (error) {
                display.value = "Error"; 
            }
        }