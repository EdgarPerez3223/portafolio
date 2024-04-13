const button = document.getElementById('language-toggle');
const currentLang = window.location.href.includes('spanish.html')
button.checked = !currentLang

button.addEventListener('change',changePage);

function changePage() {
    if (button.checked) {
        window.location.href = '/assets/html/english.html';
    } else {
        window.location.href='/assets/html/spanish.html';
    }
}