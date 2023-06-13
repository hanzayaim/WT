document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".download-img");

    let currentIndex = 0;

    function changeImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.classList.remove("hidden");
            } else {
                image.classList.add("hidden");
            }
        });
    }

    setInterval(() => {
        currentIndex++;
        if (currentIndex > images.length - 1) {
            currentIndex = 0;
        }
        changeImage(currentIndex);
    }, 3000);
});