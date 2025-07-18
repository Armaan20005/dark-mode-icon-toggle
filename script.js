const toggleBtn = document.getElementById("toggleBtn");
const modeIcon = document.getElementById("modeIcon");

let isDark = false;

toggleBtn.addEventListener("click", () => {
    isDark = !isDark;

    if (isDark) {
        document.documentElement.style.setProperty('--bg-color', '#121212');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--icon-color', '#ffffff'); // White sun in dark mode
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--icon-color', '#f39c12'); // Orange sun
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
});