//  Llamar Header
function loadHTML(el, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(el).innerHTML = data;
        })
    }
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');
});


