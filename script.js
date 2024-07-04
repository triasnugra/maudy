function showContent(elementSymbol) {
    const content = {
        'H': 'Hydrogen is the first element in the periodic table...',
        // Add content for other elements
    };

    document.getElementById('elementContent').innerHTML = content[elementSymbol] || 'Content not available.';
    document.getElementById('modal').style.display = 'block';
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
