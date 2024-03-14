document.getElementById('envelope-front').addEventListener('click', () => {
    document.getElementById('envelope-front').classList.add('hidden');
    document.getElementById('envelope-back').classList.remove('hidden');
});

document.getElementById('envelope-back').addEventListener('click', () => {
    document.getElementById('envelope-back').classList.add('hidden');
    let cardFront = document.getElementById('card-front');
    cardFront.classList.remove('hidden');
    // Add flip effect if needed
});

document.getElementById('card-front').addEventListener('click', () => {
    document.getElementById('card-front').classList.add('hidden');
    document.getElementById('card-inside').classList.remove('hidden');
});

document.getElementById('card-inside').addEventListener('click', () => {
    document.getElementById('card-inside').classList.add('hidden');
    document.getElementById('card-back').classList.remove('hidden');
});

// Add more listeners or functions as needed
