
<<<<<<< HEAD
nameInput.addEventListener('input', function() {
    nameOutput.textContent = nameInput.value.trim()  || 'Anonymous';
=======
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input',() => {
nameOutput.textContent = nameInput.value.trim  || 'Anonymous';
>>>>>>> f4b1bdd59d1b6df43e045e8f24f89b6a46ebf014
});
