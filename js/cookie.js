document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesBtn = document.getElementById("accept-cookies");
    const rejectCookiesBtn = document.getElementById("reject-cookies");
    const openCookieSettingsBtn = document.getElementById("open-cookie-settings");
    const btnFrance = document.getElementById("toggle-lang-fr");
    const btnEnglish = document.getElementById("toggle-lang-en");

    const cookieConsent = getCookie("cookieConsent");
    if (cookieConsent === "true") {
        cookieBanner.style.display = "none";
    } else if (cookieConsent === "false") {
        cookieBanner.style.display = "none";
    } else {
        cookieBanner.style.display = "block";
        openCookieSettingsBtn.style.display = "none";
    }

    acceptCookiesBtn.addEventListener("click", function () {
        setCookie("cookieConsent", "true", 365);
        cookieBanner.style.display = "none";
        openCookieSettingsBtn.style.display = "block";
    });

    rejectCookiesBtn.addEventListener("click", function () {
        setCookie("cookieConsent", "false", 365);
        cookieBanner.style.display = "none";
        openCookieSettingsBtn.style.display = "block"; 
    });

    openCookieSettingsBtn.addEventListener("click", function () {
        cookieBanner.style.display = "block";
        openCookieSettingsBtn.style.display = "none"; 
    });

    btnFrance.addEventListener("click", function () {
        setCookie("cookieLang", "fr", 30);
    });

    btnEnglish.addEventListener("click", function () {
        setCookie("cookieLang", "en", 30);
    });

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }
});