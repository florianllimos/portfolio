document.addEventListener("DOMContentLoaded", function () {
    const toggleLangFr = document.querySelector("#toggle-lang-fr");
    const toggleLangEn = document.querySelector("#toggle-lang-en");
    const url = window.location.href;
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
        if (
            url.endsWith("florianllimos.fr/") || 
            url.endsWith("florianllimos.fr/index.php") || 
            url.endsWith("florianllimos.fr/index.php#") || 
            url.endsWith("#about") || 
            url.endsWith("#skills") || 
            url.endsWith("#portfolio") || 
            url.endsWith("#contact")
        ) {
            const elements = {
                homehellotext: "#home-hello-text",
                download: "#download",
                download1: "#download1",
                aboutpresentation: "#about-presentation",
                aboutdiplome: "#about-diplome",
                aboutpassion: "#about-passion",
                aboutrecherche: "#about-recherche",
                aboutidee: "#about-idee",
                portfoliotextcatherine: "#portfolio-text-catherine-prot",
                portfoliotextaudit: "#portfolio-text-audit",
                portfoliotextwebmapping: "#portfolio-text-web-mapping",
                portfoliotextelearning: "#portfolio-text-e-learning"
            };
            const texts = {
                fr: {
                    homehellotext: "Bonjour & bienvenue !",
                    download: "Télécharger",
                    download1: "Télécharger",
                    aboutpresentation: "Je m'appelle Florian, j'ai 25 ans, et je suis un développeur web passionné basé près de Toulouse...",
                    aboutdiplome: "Passionné de programmation web, j'ai suivi une formation qui m'a permis de maîtriser HTML, CSS...",
                    aboutpassion: "Ce qui me motive dans le développement web, c'est de créer des expériences en ligne...",
                    aboutrecherche: "Au fil des ans, j'ai travaillé sur divers projets, de sites d'entreprises à des applications interactives...",
                    aboutidee: "Je suis actuellement à la recherche de nouvelles opportunités en développement web...",
                    portfoliotextcatherine: "Un site vitrine élégant et informatif conçu pour une thérapeute spécialisée...",
                    portfoliotextaudit: "Amélioration de l'accessibilité d'un site WordPress suite à un audit complet...",
                    portfoliotextwebmapping: "Développement d'une cartographie interactive sur un site Joomla utilisant Leaflet.js...",
                    portfoliotextelearning: "Conception d'un quiz en ligne pour une plateforme e-learning..."
                },
                en: {
                    homehellotext: "Hello & Welcome !",
                    download: "Download",
                    download1: "Download",
                    aboutpresentation: "My name is Florian, I am 25 years old, and I am a passionate web developer based near Toulouse...",
                    aboutdiplome: "Passionate about web programming, I followed a training that allowed me to master HTML, CSS...",
                    aboutpassion: "What motivates me in web development is creating online experiences that meet user needs...",
                    aboutrecherche: "Over the years, I have worked on various projects, from corporate websites to interactive applications...",
                    aboutidee: "I am currently looking for new opportunities in web development...",
                    portfoliotextcatherine: "An elegant and informative showcase website designed for a therapist specializing in craniosacral therapy...",
                    portfoliotextaudit: "Improving the accessibility of a WordPress site following a complete audit...",
                    portfoliotextwebmapping: "Development of an interactive map on a Joomla site using Leaflet.js...",
                    portfoliotextelearning: "Design of an online quiz for an e-learning platform..."
                }
            };
            Object.entries(elements).forEach(([key, selector]) => {
                const element = document.querySelector(selector);
                if (element) element.textContent = texts[lang]?.[key] || "";
            });
        } else if (url === "https://florianllimos.fr/mentions-legales.php"){
            const mentionslegalestitle = document.querySelector("#mentions-legales-title");
            const editeurtitle = document.querySelector("#editeur-title");
            const hosted = document.querySelector("#hosted");
            const hebergementtitle = document.querySelector("#hebergement-title");
            const hebergetext = document.querySelector("#heberge-text");
            const basedonneestitle = document.querySelector("#base-donnees-title");
            const directeurpublication = document.querySelector("#directeur-publication-title");
            const directeurpublicationtext = document.querySelector("#directeur-publication-texte");
            const hosteddb = document.querySelector("#hosted-db");
            const proprieteintellectuelletitle = document.querySelector("#propriete-intellectuelle-title");
            const pixtext = document.querySelector("#pit-text");
            const collectedonneestitle = document.querySelector("#collecte-donnees-title");
            const cdptext = document.querySelector("#cdp-text");
            const cookiestitle = document.querySelector("#cookies-title");
            const cookiestext = document.querySelector("#cookies-text");
            const responsabilitetitle = document.querySelector("#responsabilite-title");
            const responsabilitetext = document.querySelector("#responsabilite-text");
            const liensexternestitle = document.querySelector("#liens-externes-title");
            const liensexternestext = document.querySelector("#liens-externes-text");
            const modificationstitle = document.querySelector("#modifications-title");
            const modificationstext = document.querySelector("#modifications-text");
            if(lang === "fr"){
                mentionslegalestitle.textContent = "Mentions légales";
                editeurtitle.textContent = "Éditeur du site";
                hosted.textContent = "Le site https://florianllimos.fr/ est édité par :";
                hebergementtitle.textContentContent = "Hébergement";
                hebergetext.textContent = "Le site est hébergé par :";
                basedonneestitle.textContent = "Base de données";
                hosteddb.textContent = "La base de donnée est hebergée par:";
                directeurpublication.textContent = "Directeur de la publication";
                directeurpublicationtext.textContent = "Le directeur de la publication est : Florian Llimos";
                proprieteintellectuelletitle.textContent = "Propriété intellectuelle";
                pixtext.textContent = "Le contenu du site, incluant mais ne se limitant pas aux textes, images, logos, vidéos, et autres éléments multimédia, est la propriété exclusive de https://florianllimos.fr/ ou des tiers ayant autorisé son utilisation. Toute reproduction, distribution, modification, ou utilisation non autorisée des éléments présents sur ce site est interdite.";
                collectedonneestitle.textContent = "Collecte de données personnelles";
                cdptext.textContent = "En conformité avec la réglementation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD), nous vous informons que les données collectées via ce site sont uniquement destinées à gérer la langue du site. Vous disposez d’un droit d’accès, de rectification, et de suppression de vos données personnelles. Pour exercer ce droit, vous pouvez nous contacter à l’adresse e-mail suivante : <a href='mailto:contact@florianllimos.fr' aria-label='Envoyer un e-mail pour exercer vos droits'>contact@florianllimos.fr</a>";
                cookiestitle.textContent = "Cookies";
                cookiestext.textContent = "Le site utilise des cookies pour améliorer l'expérience utilisateur. Les cookies sont des fichiers enregistrés sur votre appareil permettant de faciliter votre navigation et d'analyser l'utilisation du site. Vous pouvez gérer les paramètres des cookies via votre navigateur. En poursuivant votre navigation, vous acceptez l’utilisation de cookies.";
                responsabilitetitle.textContent = "Responsabilité";
                responsabilitetext.textContent = "https://florianllimos.fr/ met tout en œuvre pour garantir l'exactitude des informations présentes sur ce site. Toutefois, https://florianllimos.fr/ ne peut être tenu responsable des erreurs, omissions, ou interruptions de service qui pourraient survenir.";
                liensexternestitle.textContent = "Liens externes";
                liensexternestext.textContent = "Le site peut contenir des liens vers d’autres sites internet. Nous ne pouvons être responsables du contenu de ces sites externes et de leurs politiques de confidentialité.";
                modificationstitle.textContent = "Modifications";
                modificationstext.textContent = "Nous nous réservons le droit de modifier ces mentions légales à tout moment. Les utilisateurs du site sont invités à les consulter régulièrement.";
            } else if (lang === "en"){
                mentionslegalestitle.textContent = "Legal";
                editeurtitle.textContent = "Website Editor";
                hosted.textContent = "The https://florianllimos.fr/ website is published by:";
                hebergementtitle.textContent = "Accommodation";
                hebergetext.textContent = "The site is hosted by:";
                basedonneestitle.textContent = "Database";
                hosteddb.textContent = "The database is hosted by:";
                directeurpublication.textContent = "Director of publication";
                directeurpublicationtext.textContent = "The director of publication is: Florian Llimos";
                proprieteintellectuelletitle.textContent = "Intellectual property";
                pixtext.textContent = "The content of the site, including but not limited to texts, images, logos, videos, and other multimedia elements, is the exclusive property of https://florianllimos.fr/ or third parties who have authorized its use. Any unauthorized reproduction, distribution, modification, or use of the elements present on this site is prohibited.";
                collectedonneestitle.textContent = "Collection of personal data";
                cdptext.textContent = "In compliance with the regulations in force, in particular the General Data Protection Regulation (GDPR), we inform you that the data collected via this site is only intended to manage the language of the site. You have the right to access, rectify, and delete your personal data. To exercise this right, you can contact us at the following email address: <a href='mailto:contact@florianllimos.fr' aria-label='Envoyer un e-mail pour exercer vos droits'>contact@florianllimos.fr</a>";
                cookiestitle.textContent = "Cookies";
                cookiestext.textContent = "The site uses cookies to improve the user experience. Cookies are files stored on your device that make it easier for you to browse and analyze the use of the site. You can manage the cookie settings via your browser. By continuing to browse, you agree to the use of cookies.";
                responsabilitetitle.textContent = "Responsibility";
                responsabilitetext.textContent = "https://florianllimos.fr/ makes every effort to guarantee the accuracy of the information on this site. However, https://florianllimos.fr/ cannot be held responsible for any errors, omissions, or interruptions in service that may occur.";
                liensexternestitle.textContent = "External links";
                liensexternestext.textContent = "The site may contain links to other websites. We cannot be responsible for the content of these external sites and their privacy policies.";
                modificationstitle.textContent = "Changes";
                modificationstext.textContent = "We reserve the right to change this legal notice at any time. Users of the site are invited to consult them regularly.";
            }
        } else if (url === "https://florianllimos.fr/credit.php"){
            const rqpdcredit = document.querySelector("#rgpd-credit");
            if (lang === "fr"){
                rqpdcredit.textContent = "Crédits";
            } else if (lang === "en")
                rqpdcredit .textContent = "Credit";
        } else if (url === "https://florianllimos.fr/politique-de-confidentialite.php") {
            const content = {
                fr: {
                    rgpdPolitique: "Politique de Confidentialité",
                    introductionH3: "1. Introduction",
                    introductionP: "Bienvenue sur le site www.florianllimos.fr. Cette politique de confidentialité vous explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous naviguez sur notre site. En utilisant ce site, vous acceptez la collecte et l'utilisation de vos informations personnelles conformément à cette politique.",
                    informationsCollectees: "2. Informations que nous collectons",
                    section2P: "Sur ce site, nous collectons uniquement des informations liées à la gestion des cookies pour le consentement des utilisateurs. Cela inclut :",
                    section2LI: "<strong>Cookies :</strong> Nous utilisons un cookie pour mémoriser votre choix de consentement aux cookies lorsque vous visitez notre site. Ce cookie n'inclut aucune donnée personnelle identifiable. Il sert uniquement à savoir si vous avez accepté ou rejeté l'utilisation de cookies.",
                    section3H3: "3. Utilisation des cookies",
                    section3PFirst: "Les cookies que nous utilisons, nommés <strong>cookieConsent</strong> et <strong>cookieLang</strong>, sont des cookies essentiels qui mémorisent votre choix de consentement aux cookies.",
                    section3PSecond: "<strong>cookieConsent</strong> est utilisé pour :",
                    section3LiFirst: "<strong>Mémoriser votre choix :</strong> Le cookie permet de savoir quelle langue vous préférez pour naviguer sur notre site. Ce cookie est utilisé uniquement si vous l'acceptez.",
                    section3LiSecond: "<strong>Durée de conservation :</strong> Ce cookie est conservé pendant 30 jours.",
                    section3PThree: "<strong>cookieLang</strong> est utilisé pour :",
                    section3LiThree: "<strong>Mémoriser votre choix :</strong> Le cookie permet de savoir quelle langue est-ce que vous préférez pour naviguer au sein que notre site internet. Ce cookie est utilisé uniquement si vous l'acceptez.",
                    section3LiFour: "<strong>Durée de conservation :</strong> Ce cookie est conservé pendant 30 jours.",
                    section4h3: "4. Gestion des cookies",
                    section4p1: "Lorsque vous visitez notre site, vous avez la possibilité d'accepter ou de refuser les cookies via une bannière de consentement. Vous pouvez également modifier votre choix à tout moment en réouvrant la bannière en cliquant sur le bouton approprié.",
                    section4p2: "Si vous acceptez les cookies, un cookie sera installé pour mémoriser votre choix pendant un an. Si vous refusez, un cookie sera installé pour mémoriser votre refus et la bannière de consentement sera masquée.",
                    section5h3: "5. Partage des informations",
                    section5p: "Nous ne partageons aucune de vos données personnelles avec des tiers. Le cookie que nous utilisons est strictement destiné à la gestion de la bannière de consentement et ne contient aucune donnée personnelle identifiable.",
                    section6h3: "6. Sécurité des données",
                    section6p: "Le cookie utilisé sur notre site est stocké sur votre appareil et est utilisé uniquement à des fins de gestion des préférences de cookies. Nous prenons des mesures raisonnables pour assurer la sécurité des informations collectées, mais sachez que les données sur Internet peuvent être exposées à des risques.",
                    section7h3: "7. Vos droits",
                    section7p: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez les droits suivants :",
                    section7li1: "<strong>Droit d'accès :</strong> Vous pouvez demander une copie des informations que nous avons collectées à votre sujet.",
                    section7li2: "<strong>Droit de rectification :</strong> Vous pouvez demander à corriger toute information incorrecte ou incomplète.",
                    section7li3: "Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données personnelles. Dans ce cas, nous supprimerons votre cookie de consentement.",
                    section8h3: "8. Modifications de cette politique de confidentialité",
                    section8p: "Nous nous réservons le droit de mettre à jour cette politique de confidentialité. Toute modification sera publiée sur cette page avec la date de mise à jour.",
                    section9p: "Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, vous pouvez nous contacter à l'adresse suivante : <a href='mailto:contact@florianllimos.fr'>contact@florianllimos.fr</a>.",
                    section10h3: "10. Conformité avec le Règlement Général sur la Protection des Données (RGPD)",
                    section10p: "Nous nous engageons à respecter toutes les obligations imposées par le Règlement Général sur la Protection des Données (RGPD). Nous ne collectons aucune donnée personnelle identifiante sans votre consentement préalable et nous mettons en place toutes les mesures nécessaires pour protéger vos informations."
                },
                en: {
                    rgpdPolitique: "Privacy Policy",
                    introductionH3: "1. Introduction",
                    introductionP: "Welcome to the www.florianllimos.fr website. This Privacy Policy explains how we collect, use and protect your personal data when you browse our site. By using this site, you agree to the collection and use of your personal information in accordance with this policy.",
                    informationsCollectees: "2. Information we collect",
                    section2P: "On this site, we only collect information related to the management of cookies for the consent of users. This includes:",
                    section2LI: "<strong>Cookies :</strong> We use a cookie to remember your choice of cookie consent when you visit our site. This cookie does not include any personally identifiable data. It is only used to find out whether you have accepted or rejected the use of cookies.",
                    section3H3: "3. Use of cookies",
                    section3PFirst: "The cookies we use, called <strong>cookieConsent</strong> and <strong>cookieLang</strong>, are essential cookies that remember your choice of cookie consent.",
                    section3PSecond: "<strong>cookieConsent</strong> is used to:",
                    section3LiFirst: "<strong>Memorize your choice : </strong>The cookie allows us to know which language you prefer to browse our website. This cookie is used only if you agree to it.",
                    section3LiSecond: "<strong>Retention period : </strong>This cookie is kept for 365 days.",
                    section3PThree: "<strong>cookieLang</strong> is used to:",
                    section3LiThree: "<strong>Memorize your choice : </strong>The cookie allows us to know which language you prefer to browse our website. This cookie is used only if you agree to it.",
                    section3LiFour: "<strong>Retention period : </strong>This cookie is kept for 30 days.",
                    section4h3: "4. Cookie management",
                    section4p1: "When you visit our site, you have the option to accept or decline cookies via a consent banner. You can also change your choice at any time by reopening the banner by clicking on the appropriate button.",
                    section4p2: "If you accept cookies, a cookie will be set to remember your choice for one year. If you refuse, a cookie will be set to remember your refusal and the consent banner will be hidden.",
                    section5h3: "5. Information sharing",
                    section5p: "We do not share any of your personal data with third parties. The cookie we use is strictly for the management of the consent banner and does not contain any personally identifiable data.",
                    section6h3: "6. Data security",
                    section6p: "The cookie used on our site is stored on your device and is used solely for the purpose of managing cookie preferences. We take reasonable steps to ensure the security of the information collected, but please be aware that data on the Internet may be at risk.",
                    section7h3: "7. Your rights",
                    section7p: "In accordance with the General Data Protection Regulation (GDPR), you have the following rights:",
                    section7li1: "<strong>Right of access : </strong>You may request a copy of the information we have collected about you.",
                    section7li2: "<strong>Right to rectification : </strong>You may request correction of any incorrect or incomplete information.",
                    section7li3: "<strong>Right to erasure : </strong>You can request the deletion of your personal data. In this case, we will delete your consent cookie.",
                    section8h3: "8. Changes to this Privacy Policy",
                    section8p: "We reserve the right to update this Privacy Policy. Any changes will be posted on this page with the updated date.",
                    section9p: "If you have any questions or concerns about this Privacy Policy, you may contact us at: <a href='mailto:contact@florianllimos.fr'>contact@florianllimos.fr</a>",
                    section10h3: "10. Compliance with the General Data Protection Regulation (GDPR)",
                    section10p: "We are committed to complying with all obligations imposed by the General Data Protection Regulation (GDPR). We do not collect any personally identifiable data without your prior consent and we put in place all necessary measures to protect your information."
                }
            };
            const elements = {
                rgpdPolitique: "#rgpd-politique-de-confidentialite",
                introductionH3: "#rgpd-introduction h3",
                introductionP: "#rgpd-introduction p",
                informationsCollectees: "#rgpd-informations-que-nous-collectons",
                section2P: "#rgpd-section-2 p",
                section2LI: "#rgpd-section-2 li",
                section3H3: "#rgpd-utilisation-des-cookies h3",
                section3PFirst: "#rgpd-section-3-first-p",
                section3PSecond: "#rgpd-section-3-second-p",
                section3LiFirst: "#rgpd-section-3-first-li",
                section3LiSecond: "#rgpd-section-3-second-li",
                section3PThree: "#rgpd-section-3-three-p",
                section3LiThree: "#rgpd-section-3-three-li",
                section3LiFour: "#rgpd-section-3-four-li",
                section4h3: "#rgpd-gestion-des-cookies h3",
                section4p1: "#rgpd-section-4-first-p",
                section4p2: "#rgpd-section-4-second-p",
                section5h3: "#rqpd-partage-des-informations h3",
                section5p: "#rqpd-partage-des-informations p",
                section6h3: "#rgpd-securite-des-donnees h3",
                section6p: "#rgpd-securite-des-donnees p",
                section7h3: "#rgpd-vos-droits h3",
                section7p: "#rgpd-vos-droits p",
                section7li1: "#rgpd-section7-first-li",
                section7li2: "#rgpd-section7-second-li",
                section7li3: "#rgpd-section7-three-li",
                section8h3: "#rgpd-modifications-de-cette-politique-de-confidentialite h3",
                section8p: "#rgpd-modifications-de-cette-politique-de-confidentialite p",
                section9p: "#rgpd-contact p",
                section10h3: "#rgpd-conformite-avec-le-reglement-general h3",
                section10p: "#rgpd-conformite-avec-le-reglement-general p"
            };
            const selectedLang = content[lang] || content.fr;
            Object.entries(elements).forEach(([key, selector]) => {
                const element = document.querySelector(selector);
                if (element) element.innerHTML = selectedLang[key];
            });
        }
        let mentionsLegales, politiqueDeConfidentialite, credits, copyright, acceptCookies, rejectCookies, cookieText, headerHome, headerAbout, headerCompetences;
        if (lang === "fr") {
            mentionsLegales = "Mentions légales";
            politiqueDeConfidentialite = "Politique de confidentialité";
            credits = "Crédits";
            copyright = "2025 © Réalisé avec passion par Florian Llimos";
            acceptCookies = "Accepter";
            rejectCookies = "Refuser";
            cookieText = "Nous utilisons uniquement des cookies essentiels pour assurer le bon fonctionnement du site.";
            headerHome = "Accueil";
            headerAbout = "À propos de moi";
            headerCompetences = "Compétences";
        } else if (lang === "en") {
            mentionsLegales = "Legal";
            politiqueDeConfidentialite = "Privacy Policy";
            credits = "Credits";
            copyright = "2025 © Made with passion by Florian Llimos";
            acceptCookies = "Accept";
            rejectCookies = "Refuse";
            cookieText = "We only use cookies that are essential to ensure the proper functioning of the site.";
            headerHome = "Home";
            headerAbout = "About";
            headerCompetences = "Skills";
        }
        document.querySelector("#mentions-legales").textContent = mentionsLegales;
        document.querySelector("#politique-de-confidentialite").textContent = politiqueDeConfidentialite;
        document.querySelector("#credits").textContent = credits;
        document.querySelector("#copyright").textContent = copyright;
        document.querySelector("#accept-cookies").textContent = acceptCookies;
        document.querySelector("#reject-cookies").textContent = rejectCookies;
        document.querySelector("#cookie-text").textContent = cookieText;
        document.querySelector("#header-home").textContent = headerHome;
        document.querySelector("#header-about").textContent = headerAbout;
        document.querySelector("#header-competences").textContent = headerCompetences;
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