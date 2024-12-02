$(document).ready(function () {
    // Smooth Section Switching
    $(".nav-links li, .cta").click(function () {
        const sectionId = $(this).data("section");
        $(".section").removeClass("active");
        $(`#${sectionId}`).addClass("active");
    });

    // Dark Mode Toggle
    $(".mode-toggle").click(function () {
        $("body").toggleClass("dark-mode");
        $(this).text($("body").hasClass("dark-mode") ? "🌙" : "🌞");
    });

    // GSAP Animations
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
});
