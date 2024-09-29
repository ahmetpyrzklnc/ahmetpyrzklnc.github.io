document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        tr: {
            home: "Hakkımda",
            portfolio: "Projelerim",
            certificates: "Sertifikalarım",
            welcome: "Merhabalar, ben",
            my: 'Ben bir <span class="multiple-text"></span>',
            introduction: "2020 senesi pandemi dönemiyle başladığım yazılım merakımı, 2021 senesinde kazanmış olduğum, Yönetim Bilişim Sistemleri (MIS) ile devam ettirmekteyim.",
            developing: "Genel olarak Veri Bilimi, Veri Analizi ve Makine öğrenmesi alanlarında kendimi günden güne geliştirmekteyim.",
            contact: "Bana Ulaşın!"
        },
        en: {
            home: "About Me",
            portfolio: "Projects",
            certificates: "Certificates",
            welcome: "Hello, I am",
            my: 'I am a <span class="multiple-text"></span>',
            introduction: "Starting my programming interest in the pandemic period of 2020, I am continuing it with Management Information Systems (MIS) that I won in 2021.",
            developing: "I am continuously developing myself in the fields of Data Science, Data Analysis, and Machine Learning.",
            contact: "Contact Me!"
        }
    };

    const texts = {
        tr: ['Yazılım Geliştiricisiyim.', 'Öğrenciyim.', 'Blog Yazarıyım.'],
        en: ['I am a Software Developer.', 'I am a Student.', 'I am a Blogger.']
    };

    let typed = new Typed('.multiple-text', {
        strings: texts[document.documentElement.lang] || texts['tr'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    window.toggleLanguage = function() {
        const currentLang = document.documentElement.lang === "tr" ? "en" : "tr";
        document.documentElement.lang = currentLang;

        const homeLink = document.getElementById("home-link");
        const portfolioLink = document.getElementById("portfolio-link");
        const certificatesLink = document.getElementById("certificates-link");
        const welcomeText = document.getElementById("welcome-text");
        const myTextContainer = document.getElementById("my-text-container");
        const introductionText = document.getElementById("introduction-text");
        const developingText = document.getElementById("developing-text");
        const contactButton = document.getElementById("contact-button");
        const languageToggle = document.getElementById("language-toggle");

        // ID'leri kontrol et
        if (homeLink && portfolioLink && certificatesLink && welcomeText && myTextContainer && introductionText && developingText && contactButton && languageToggle) {
            homeLink.textContent = translations[currentLang].home;
            portfolioLink.textContent = translations[currentLang].portfolio;
            certificatesLink.textContent = translations[currentLang].certificates;
            welcomeText.textContent = translations[currentLang].welcome;
            myTextContainer.innerHTML = translations[currentLang].my;
            introductionText.textContent = translations[currentLang].introduction;
            developingText.textContent = translations[currentLang].developing;
            contactButton.textContent = translations[currentLang].contact;

            languageToggle.textContent = currentLang === "tr" ? "EN" : "TR";

            // Update Typed.js instance
            typed.destroy(); // Destroy the old instance
            typed = new Typed('.multiple-text', {
                strings: texts[currentLang],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true
            });
        } else {
            console.error("Some elements are missing or have incorrect IDs");
        }
    };

    // Sayfa yüklendiğinde başlangıç dili ayarla
    document.documentElement.lang = 'tr';
});
// *******==================== toogle icon ======================***** //
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-exit');
    navbar.classList.toggle('active');
};

// *******==================== scroll sections active link ======================***** //
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // *******==================== sticky navbar ======================***** //
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // ====================  remove toogle icon ====================== //
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ====================  scroll reveal ====================== //

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-container, .certificate-container ', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1', { origin: 'left'});
ScrollReveal().reveal('.home-content p', { origin: 'right'});


// ====================  typed js ====================== //


