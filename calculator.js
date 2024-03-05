document.addEventListener('DOMContentLoaded', function()
    {
    let display = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button =>
        {
        button.addEventListener('click', function()
            {
            let buttonText = this.innerHTML;
            let currentInput = display.value;

            if (buttonText === "DEL")
            {
            display.value = currentInput.slice(0, -1);
            }
            else if (buttonText === "AC")
            {
            display.value = '';
            }
            else if (buttonText === "=")
            {
            try
            {
            display.value = eval(currentInput);
            }
            catch (error)
            {
            display.value = 'Error';
            }
            }
            else
            {
            display.value += buttonText;
            }
        });
    });
});
