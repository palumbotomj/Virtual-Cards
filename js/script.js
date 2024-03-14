function hideElement(id) {
    var element = document.getElementById(id);
    if (element) {
        element.classList.add('hidden');
    }
}

function showElement(id) {
    var element = document.getElementById(id);
    if (element) {
        element.classList.remove('hidden');
    }
}

document.getElementById('envelope-front').addEventListener('click', function() {
    hideElement('envelope-front');
    showElement('envelope-back');
});

document.getElementById('envelope-back').addEventListener('click', function() {
    hideElement('envelope-back');
    showElement('card-front');
});

document.getElementById('card-front').addEventListener('click', function() {
    hideElement('card-front');
    showElement('card-inside');
});

document.getElementById('card-inside').addEventListener('click', function() {
    hideElement('card-inside');
    showElement('card-back');
});
