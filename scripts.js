//dark mode toggle
const toggleSwitch = document.querySelector('#checkbox');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }

toggleSwitch.addEventListener('change', switchTheme, false);

//image gallery
function setImage(imageSlide,imagePath,altText) {
    const slide = document.getElementById(imageSlide);
    slide.innerHTML = '';
    var image = document.createElement("img");
    image.setAttribute("src", imagePath);
    image.setAttribute("alt", altText);

    var caption = document.createElement("span");
    caption.setAttribute("class","captionText");
    caption.innerText = altText;

    slide.appendChild(image);
    slide.appendChild(caption);
}