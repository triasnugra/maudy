document.addEventListener('DOMContentLoaded', () => {
    const periodicTable = document.querySelector('.periodic-table');
    const elementInfo = document.getElementById('element-info');
    const elementName = document.getElementById('element-name');
    const elementSymbol = document.getElementById('element-symbol');
    const elementNumber = document.getElementById('element-number');
    const elementMass = document.getElementById('element-mass');
    const elementCategory = document.getElementById('element-category');

    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.style.gridArea = element.position;
        elementDiv.textContent = element.symbol;

        elementDiv.addEventListener('click', () => {
            elementName.textContent = element.name;
            elementSymbol.textContent = element.symbol;
            elementNumber.textContent = element.number;
            elementMass.textContent = element.mass;
            elementCategory.textContent = element.category;
            elementInfo.style.display = 'block';
        });

        periodicTable.appendChild(elementDiv);
    });
});
