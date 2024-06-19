document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
        applyDarkModeToDivs(true);
    } else {
        toggleSwitch.checked = false;
        applyDarkModeToDivs(false);
    }

    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            applyDarkModeToDivs(true);
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            applyDarkModeToDivs(false);
        }
    });
});


function applyDarkModeToDivs(isDarkMode) {
    const contentDivs = document.querySelectorAll('.content');
    const headerDivs = document.querySelectorAll('.header');
    const footerDivs = document.querySelectorAll('.footer');

    contentDivs.forEach(div => {
        div.classList.toggle('dark-mode', isDarkMode);
    });

    headerDivs.forEach(div => {
        div.classList.toggle('dark-mode', isDarkMode);
    });

    footerDivs.forEach(div => {
        div.classList.toggle('dark-mode', isDarkMode);
    });
}