document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', () => {
        const name = element.getAttribute('data-name');
        const symbol = element.getAttribute('data-symbol');
        const number = element.getAttribute('data-number');
        alert(`Element: ${name}\nSymbol: ${symbol}\nAtomic Number: ${number}`);
    });
});
