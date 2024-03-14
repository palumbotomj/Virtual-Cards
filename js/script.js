document.getElementById('envelope-front').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('envelope-back').classList.remove('hidden');
});

document.getElementById('envelope-back').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('card-front').classList.remove('hidden');
});

document.getElementById('card-front').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('card-inside').classList.remove('hidden');
});

document.getElementById('card-inside').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('card-back').classList.remove('hidden');
});
