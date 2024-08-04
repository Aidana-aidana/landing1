document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("promo-video");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(video);

    const animatedTexts = document.querySelectorAll(".animated-text");
    animatedTexts.forEach(text => {
        text.addEventListener("mouseover", () => {
            text.style.color = getRandomColor();
        });
    });

    function getRandomColor() {
        const colors = ["#ff6347", "#6a5acd", "#32cd32", "#ffd700", "#00ced1"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});