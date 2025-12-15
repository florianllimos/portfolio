document.addEventListener("DOMContentLoaded", function () {
    const toggleLangFr = document.querySelector("#toggle-lang-fr");
    const toggleLangEn = document.querySelector("#toggle-lang-en");

    const translations = {
        fr: {
            homeHelloText: "Bonjour & bienvenue !",
            download: "Télécharger",
            about: {
                presentation: "Je m'appelle Florian, j'ai 25 ans, et je suis un développeur web passionné basé près de Toulouse.",
                diplome: "Passionné de programmation web, j'ai suivi une formation qui m'a permis de maîtriser HTML, CSS, JavaScript, PHP.",
                passion: "Ce qui me motive dans le développement web, c'est de créer des expériences en ligne répondant aux besoins des utilisateurs.",
                recherche: "Au fil des ans, j'ai travaillé sur divers projets, de sites d'entreprises à des applications interactives.",
                idee: "Je suis actuellement à la recherche de nouvelles opportunités en développement web."
            },
            portfolio: {
                catherine: "Un site vitrine élégant et informatif conçu pour une thérapeute spécialisée en thérapie cranio-sacrale.",
                audit: "Amélioration de l'accessibilité d'un site WordPress suite à un audit complet.",
                webMapping: "Développement d'une cartographie interactive sur un site Joomla utilisant Leaflet.js.",
                eLearning: "Conception d'un quiz en ligne pour une plateforme e-learning."
            }
        },
        en: {
            homeHelloText: "Hello & Welcome !",
            download: "Download",
            about: {
                presentation: "My name is Florian, I am 25 years old, and I am a passionate web developer based near Toulouse.",
                diplome: "Passionate about web programming, I followed a training that allowed me to master HTML, CSS, JavaScript, PHP.",
                passion: "What motivates me in web development is creating online experiences that meet user needs.",
                recherche: "Over the years, I have worked on various projects, from corporate websites to interactive applications.",
                idee: "I am currently looking for new opportunities in web development."
            },
            portfolio: {
                catherine: "An elegant and informative showcase website designed for a therapist specializing in craniosacral therapy.",
                audit: "Improving the accessibility of a WordPress site following a complete audit.",
                webMapping: "Development of an interactive map on a Joomla site using Leaflet.js.",
                eLearning: "Design of an online quiz for an e-learning platform."
            }
        }
    };

    function getCookie(name) {
        const cookies = document.cookie.split(";").map(cookie => cookie.trim());
        const cookie = cookies.find(c => c.startsWith(name + "="));
        return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
    }

    function setCookie(name, value, days = 365) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/;`;
    }

    function changeLang(lang, persist = true) {
        const cookieConsent = getCookie("cookieConsent");
        if (cookieConsent !== "true") return;

        const elementsToTranslate = [
            { selector: "#home-hello-text", text: "homeHelloText" },
            { selector: "#download", text: "download" },
            { selector: "#about-presentation", text: "about.presentation" },
            { selector: "#about-diplome", text: "about.diplome" },
            { selector: "#about-passion", text: "about.passion" },
            { selector: "#about-recherche", text: "about.recherche" },
            { selector: "#about-idee", text: "about.idee" },
            { selector: "#portfolio-text-catherine-prot", text: "portfolio.catherine" },
            { selector: "#portfolio-text-audit", text: "portfolio.audit" },
            { selector: "#portfolio-text-web-mapping", text: "portfolio.webMapping" },
            { selector: "#portfolio-text-e-learning", text: "portfolio.eLearning" }
        ];

        elementsToTranslate.forEach(item => {
            const element = document.querySelector(item.selector);
            if (element) {
                const keys = item.text.split(".");
                let translation = translations[lang];
                keys.forEach(key => translation = translation[key]);
                element.textContent = translation;
            }
        });

        const otherTranslations = {
            mentionsLegales: lang === "fr" ? "Mentions légales" : "Legal",
            politiqueDeConfidentialite: lang === "fr" ? "Politique de confidentialité" : "Privacy Policy",
            credits: lang === "fr" ? "Crédits" : "Credits",
            copyright: lang === "fr" ? "2025 © Réalisé avec passion par Florian Llimos" : "2025 © Made with passion by Florian Llimos",
            acceptCookies: lang === "fr" ? "Accepter" : "Accept",
            rejectCookies: lang === "fr" ? "Refuser" : "Refuse",
            cookieText: lang === "fr" ? "Nous utilisons uniquement des cookies essentiels pour assurer le bon fonctionnement du site." : "We only use cookies that are essential to ensure the proper functioning of the site.",
            headerHome: lang === "fr" ? "Accueil" : "Home",
            headerAbout: lang === "fr" ? "À propos de moi" : "About",
            headerCompetences: lang === "fr" ? "Compétences" : "Skills"
        };

        Object.keys(otherTranslations).forEach(key => {
            const element = document.querySelector(`#${key}`);
            if (element) {
                element.textContent = otherTranslations[key];
            }
        });

        if (persist) {
            setCookie("cookieLang", lang);
        }
    }

    let cookieConsent = getCookie("cookieConsent");
    document.querySelector("#accept-cookies")?.addEventListener("click", () => {
        setCookie("cookieConsent", "true");
        cookieConsent = "true";
        afterValidate();
    });

    document.querySelector("#reject-cookies")?.addEventListener("click", () => {
        setCookie("cookieConsent", "false");
        cookieConsent = "false";
        afterValidate();
    });

    function afterValidate() {
        if (cookieConsent === "true") {
            const savedLang = getCookie("cookieLang") || "fr";
            changeLang(savedLang, false);
            toggleLangEn?.addEventListener("click", () => changeLang("en"));
            toggleLangFr?.addEventListener("click", () => changeLang("fr"));
        } else {
            toggleLangEn?.removeEventListener("click", () => changeLang("en"));
            toggleLangFr?.removeEventListener("click", () => changeLang("fr"));
        }
    }

    afterValidate();
});