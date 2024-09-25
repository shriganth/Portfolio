
function myfunction() {
    var element = document.getElementById('AboutMe');
    element.classList.toggle("dark-mode");
}

function show_page(pageid) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    var selectedPage = document.getElementById(pageid);
    selectedPage.style.display = 'block';
}