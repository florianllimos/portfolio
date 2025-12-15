document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#to-home > a").setAttribute("href", "index.php");
    document.querySelector("#to-about > a").setAttribute("href", "index.php#about");
    document.querySelector("#to-skills > a").setAttribute("href", "index.php#skills");
    document.querySelector("#to-projects > a").setAttribute("href", "index.php#portfolio");
    document.querySelector("#to-contact > a").setAttribute("href", "index.php#contact");
});