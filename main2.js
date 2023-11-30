let buttons = document.querySelectorAll('.row-amount button');

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        // Reset all buttons
        buttons.forEach((btn) => {
            btn.style.background = 'white';
            btn.style.color = 'rgb(51, 51, 51)';
        });

        // Change the clicked button
        this.style.background = 'black';
        this.style.color = 'white';
    });
});
