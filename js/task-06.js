const textInput = document.getElementById('validation - input');
const nameOutput = document.getElementById('name - output');

nameInput,addEventListener('input', function() {
    nameOutput,textContent = nameInput.value.trim  || 'Anonymous';
});
