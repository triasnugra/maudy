const elementsData = {
    'H': {
        name: 'Hydrogen',
        number: 1,
        symbol: 'H',
        info: 'Hydrogen is the first element in the periodic table...'
    },
    'He': {
        name: 'Helium',
        number: 2,
        symbol: 'He',
        info: 'Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas...'
    },
    'Li': {
        name: 'Lithium',
        number: 3,
        symbol: 'Li',
        info: 'Lithium is a chemical element with symbol Li and atomic number 3...'
    },
    'Be': {
        name: 'Beryllium',
        number: 4,
        symbol: 'Be',
        info: 'Beryllium is a chemical element with symbol Be and atomic number 4...'
    },
    // Add more elements data
};

function showContent(elementSymbol) {
    const element = elementsData[elementSymbol];
    if (element) {
        document.getElementById('elementContent').innerHTML = `
            <h2>${element.name} (${element.symbol})</h2>
            <p>Atomic Number: ${element.number}</p>
            <p>${element.info}</p>
        `;
        document.getElementById('modal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}
