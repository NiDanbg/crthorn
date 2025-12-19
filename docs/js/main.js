// =========================================================================
// ФИНАЛНА, ПРОВЕРЕНА ВЕРСИЯ НА js/main.js (19.07.2024)
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {

    const mainContent = document.getElementById('main-content');
    const navMenu = document.querySelector('.nav-menu');
    let siteLang = 'en'; // Език на интерфейса

    // =========================================================================
    // ОСНОВЕН РУТЕР
    // =========================================================================
    async function router() {
        const hash = window.location.hash.slice(1) || '/';
        const [path, query] = hash.split('?');
        const params = new URLSearchParams(query);
        const bookId = path.split('/')[1] || '';
        const bookForLangCheck = findBookById(bookId);
        const defaultContentLang = bookForLangCheck && Object.keys(bookForLangCheck.i18n).includes(siteLang) ? siteLang : 'en';
        const contentLang = params.get('lang') || defaultContentLang;
        const parts = path.split('/').filter(p => p);

        mainContent.style.opacity = 0;
        await new Promise(r => setTimeout(r, 100));
        mainContent.innerHTML = '<div class="container"><h1> </h1></div>';

        const routes = {
            '/': renderHomepage,
            'library': parts.length === 1 ? renderLibraryHub : (parts[1] === 'novels' ? () => renderBookListPage('novels') : () => renderBookListPage('short_stories')),
            'series': () => renderSeriesPage(parts[1]),
            'book': () => renderBookDetail(parts[1], contentLang),
            'excerpt': () => renderExcerptPage(parts[1], contentLang),
            'about': renderAboutPage,
            'contact': renderContactPage,
            'news': renderNewsPage,
            'privacy-policy': renderPrivacyPolicyPage,
        };
        const action = routes[parts[0] || '/'] || renderNotFound;
        await action();
        renderNavigation(path);
        mainContent.style.opacity = 1;
    }

    // =========================================================================
    // НАВИГАЦИЯ
    // =========================================================================
    function renderNavigation(currentPath) {
        const basePath = currentPath.split('?')[0];
        const links = {
            en: [{ href: '#/', text: 'Home' }, { href: '#/library', text: 'The Library' }, { href: '#/news', text: 'News' }, { href: '#/about', text: 'About' }, { href: '#/contact', text: 'Contact' }],
            bg: [{ href: '#/', text: 'Начало' }, { href: '#/library', text: 'Библиотека' }, { href: '#/news', text: 'Новини' }, { href: '#/about', text: 'За автора' }, { href: '#/contact', text: 'Контакти' }]
        };
        navMenu.innerHTML = links[siteLang].map(link => {
            const linkPath = link.href.slice(1);
            const isActive = (linkPath === '/' && basePath === '/') || (linkPath !== '/' && (basePath.startsWith(linkPath) && linkPath.length > 1));
            return `<li class="nav-item"><a href="${link.href}" class="nav-link ${isActive ? 'active' : ''}">${link.text}</a></li>`
        }).join('');
        const langSwitcher = document.querySelector('.lang-switcher');
        langSwitcher.innerHTML = siteLang === 'en' ? `<span>EN</span> | <a href="#" id="lang-bg">BG</a>` : `<a href="#" id="lang-en">EN</a> | <span>BG</span>`;
    }
    
    // =========================================================================
    // ФУНКЦИИ ЗА РЕНДИРАНЕ НА СЪДЪРЖАНИЕ
    // =========================================================================
        async function renderHomepage() {
        const latestWorkIds = ["klyuchat-na-izobilieto", "princa-ot-iztok", "gnostichnia-shifar", "dyrvoto-na-syznanieto"];
        const latestWorks = latestWorkIds.map(id => findBookById(id)).filter(book => book);
        let latestNewsHtml = '';
        
        // --- ПРОМЕНЕНА ЛОГИКА ---
        try {
            // 1. Четем индекса на новините
            const indexResponse = await fetch('news/index.json');
            if (indexResponse.ok) {
                const newsFiles = await indexResponse.json();
                
                // 2. Проверяваме дали има новини
                if (newsFiles.length > 0) {
                    // 3. Взимаме последния файл от списъка (най-новия)
                    const latestNewsFile = [...newsFiles].reverse()[0]; 
                    
                    // 4. Зареждаме съдържанието му
                    const response = await fetch(`news/${siteLang}/${latestNewsFile}`);
                    if (response.ok) {
                        const md = await response.text();
                        const { metadata, content } = parseMarkdown(md);
                        const excerpt = content.split(' ').slice(0, 30).join(' ') + '...';
                        latestNewsHtml = `
                            <div class="latest-news-section">
                                <h2>${siteLang === 'en' ? 'Latest News' : 'Последни новини'}</h2>
                                <div class="news-excerpt">
                                    <h3>${metadata.title}</h3>
                                    <p>${excerpt}</p>
                                    <a href="#/news" class="read-more">${siteLang === 'en' ? 'Read all news' : 'Прочети всички новини'} →</a>
                                </div>
                            </div>`;
                    }
                }
            }
        } catch (error) {
            console.error("Could not fetch latest news:", error);
            // Ако има грешка, просто не показваме секцията за новини.
        }
        // --- КРАЙ НА ПРОМЕНЕНАТА ЛОГИКА ---

        const authorIntro = {
            en: `Krasimir Tenev (also writing under the pen name Crispin Thorn) is a Bulgarian author of fantasy and science fiction, creator of the worlds of Boria, the Age of the Fallen, and the Blood and Stardust universe. <a href="#/about">Learn more...</a>`,
            bg: `Красимир Тенев (пишещ и под псевдонима Crispin Thorn) е български автор на фентъзи и научна фантастика, създател на световете на Бория, Епохата на падналите и вселената на Кръв и звезден прах. <a href="#/about">Научете повече...</a>`
        };
        const html = `
            <div class="hero-section"><div class="container"><h1>${siteLang === 'en' ? 'Welcome to My Worlds' : 'Добре дошли в Моите светове'}</h1><p class="author-intro">${authorIntro[siteLang]}</p></div></div>
            <div class="container homepage-content"><h2>${siteLang === 'en' ? 'Latest Works' : 'Най-нови творби'}</h2><div class="books-grid">${latestWorks.map(renderBookCard).join('')}</div><div class="all-books-link"><a href="#/library" class="btn">${siteLang === 'en' ? 'Explore the Full Library' : 'Разгледай цялата библиотека'}</a></div>${latestNewsHtml}</div>`;
        mainContent.innerHTML = html;
        document.title = `Krasimir Tenev | Author Portal`;
    }

    function renderBookCard(book) {
        const availableLangs = Object.keys(book.i18n);
        const displayLang = availableLangs.includes(siteLang) ? siteLang : 'en';
        const bookData = book.i18n[displayLang];
        if (!bookData) return '';
        const title = bookData.title;
        const cover = bookData.cover || '/images/common/cover-placeholder.jpg';
        const langPills = availableLangs.map(lang => `<a href="#/book/${book.id}?lang=${lang}" class="lang-pill" onclick="event.stopPropagation()">${lang.toUpperCase()}</a>`).join('');
        return `
            <div class="book-card" onclick="window.location.hash='#/book/${book.id}?lang=${displayLang}'">
                <img src="${cover}" alt="Cover of ${title}"><div class="book-card-content"><h3>${title}</h3><div class="lang-pills">${langPills}</div>${book.status === 'in-progress' ? `<span class="status-tag">${siteLang === 'en' ? 'In Progress' : 'В процес'}</span>` : ''}</div>
            </div>`;
    }

    async function renderBookDetail(bookId, contentLang) {
        const book = findBookById(bookId); if (!book) { renderNotFound(); return; }
        const bookData = book.i18n[contentLang] || book.i18n['en']; if (!bookData) { renderNotFound(); return; }


  let synopsisHtml = `<p>${siteLang === 'en' ? 'Synopsis not available.' : 'Няма налична анотация.'}</p>`;
if (bookData.synopsis) {
    try {
        const r = await fetch(bookData.synopsis);
        if (r.ok) {
            const rawText = await r.text();
            // Разделяме текста на параграфи по нов ред, филтрираме празните редове,
            // и увиваме всеки параграф в <p> тагове.
            synopsisHtml = rawText.split(/\n+/).filter(p => p.trim() !== '').map(p => `<p>${p}</p>`).join('');
        }
    } catch (e) { 
        console.error("Could not fetch synopsis:", e);
    }
}      

        const filteredLinks = book.links.filter(link => link.lang.toLowerCase() === contentLang.toLowerCase());
        const html = `
            <div class="container book-detail-view">
                <div class="book-detail-cover">
                    <img src="${bookData.cover || '/images/common/cover-placeholder.jpg'}" alt="${bookData.title}">
                    ${bookData.excerpt ? `<div class="excerpt-link-cover"><a href="#/excerpt/${book.id}?lang=${contentLang}" class="btn-secondary">${siteLang === 'en' ? 'Read Excerpt' : 'Прочети откъс'}</a></div>` : ''}
                </div>
                <div class="book-detail-info">
                    <h1>${bookData.title}</h1>
                    ${bookData.genre ? `<p class="book-genre">${bookData.genre}</p>` : ''}
                    <h3>${siteLang === 'en' ? 'Synopsis' : 'Анотация'}</h3><div class="synopsis">${synopsisHtml}</div>
                    <h3>${siteLang === 'en' ? 'Available on' : 'Налично в'}</h3>
                    <div class="buy-links">${filteredLinks.length > 0 ? filteredLinks.map(l => `<a href="${l.url}" target="_blank" class="buy-logo-link" title="Buy on ${l.platform}"><img src="/images/common/${l.platform.toLowerCase()}.png" alt="${l.platform}"></a>`).join('') : `<p>${siteLang === 'en' ? 'Links for this language are not available yet.' : 'Все още няма линкове за този език.'}</p>`}</div>
                </div>
            </div>`;
        mainContent.innerHTML = html; document.title = `${bookData.title} | Krasimir Tenev`;
    }

    async function renderExcerptPage(bookId, contentLang) {
        const book = findBookById(bookId); if (!book) { renderNotFound(); return; }
        const bookData = book.i18n[contentLang] || book.i18n['en']; const excerptPath = bookData.excerpt; if (!excerptPath) { renderNotFound(); return; }
        try {
            const response = await fetch(excerptPath); if (!response.ok) throw new Error();
            const mdText = await response.text();
            if (typeof marked === 'undefined') { const s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js'; document.head.appendChild(s); await new Promise(r => s.onload = r); }
            mainContent.innerHTML = `<div class="reading-container"><h1 class="preview-title">${siteLang === 'en' ? 'Excerpt from' : 'Откъс от'} ${bookData.title}</h1><a href="#/book/${bookId}?lang=${contentLang}" class="back-link">← ${siteLang === 'en' ? 'Back' : 'Назад'}</a><article class="prose">${marked.parse(mdText)}</article></div>`;
        } catch (e) { mainContent.innerHTML = `<div class="container"><h1>${siteLang === 'en' ? 'Could not load excerpt' : 'Неуспешно зареждане на откъса'}</h1></div>`; }
    }


    async function renderLibraryHub() {
        const html = `
            <div class="container library-hub">
                <h1>${siteLang === 'en' ? 'The Library' : 'Библиотека'}</h1>
                <h2>${siteLang === 'en' ? 'Explore the Series' : 'Разгледай поредиците'}</h2>
                <div class="hub-grid">
                    ${authorData.series.map(s => {
                        // Взимаме данните за поредицата на правилния език
                        const seriesData = s.i18n[siteLang] || s.i18n.en;
                        
                        // ПРОВЕРЯВАМЕ ДАЛИ ИМА КАРТИНКА В data.js
                        const bgImageStyle = s.seriesImage 
                            ? `background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${s.seriesImage}')` 
                            : ''; // Ако няма, стилът остава празен

                        return `<a href="#/series/${s.id}" class="hub-card" style="${bgImageStyle}"><h2>${seriesData.title}</h2></a>`;
                    }).join('')}
                </div>
                <h2>${siteLang === 'en' ? 'Other Works' : 'Други творби'}</h2>
                <div class="hub-grid small">
                    <a href="#/library/novels" class="hub-card"><h2>${siteLang === 'en' ? 'Standalone Novels' : 'Самостоятелни романи'}</h2></a>
                    <a href="#/library/stories" class="hub-card"><h2>${siteLang === 'en' ? 'Short Stories' : 'Разкази'}</h2></a>
                </div>
            </div>`;
        mainContent.innerHTML = html; 
        document.title = `${siteLang === 'en' ? 'The Library' : 'Библиотека'} | Krassimir Tenev`;
    }
    async function renderSeriesPage(seriesId) {
        const series = authorData.series.find(s => s.id === seriesId); if (!series) { renderNotFound(); return; }
        const seriesData = series.i18n[siteLang] || series.i18n.en;
        const headerImage = series.seriesImage || '/images/common/series-bg-placeholder.jpg';
        const html = `
             <div class="series-page-header" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${headerImage}');">
             <div class="container"><h1>${seriesData.title}</h1><p class="series-synopsis">${seriesData.series_synopsis || ''}</p></div>
            </div>
            <div class="container"><h2>${siteLang === 'en' ? 'Books in this series' : 'Книги в поредицата'}</h2><div class="books-grid">${series.books.map(renderBookCard).join('')}</div></div>`;
        mainContent.innerHTML = html; document.title = `${seriesData.title} | Krasimir Tenev`;
    }

    async function renderBookListPage(type) {
        const titles = { novels: { en: 'Standalone Novels', bg: 'Самостоятелни романи' }, short_stories: { en: 'Short Stories', bg: 'Разкази' } };
        const title = titles[type][siteLang];
        const html = `<div class="container book-list-page"><h1>${title}</h1><div class="books-grid">${authorData[type].map(renderBookCard).join('')}</div></div>`;
        mainContent.innerHTML = html; document.title = `${title} | Krasimir Tenev`;
    }
    
/**
 * Рендира страницата "Новини" с всички статии
 */
async function renderNewsPage() {
        const title = siteLang === 'en' ? 'News and Updates' : 'Новини и събития';
        mainContent.innerHTML = `<div class="container news-page"><h1>${title}</h1><div class="news-list"></div></div>`;
        document.title = `${title} | Krasimir Tenev`;

        const newsListContainer = document.querySelector('.news-list');
        
        try {
            // 1. Зареждаме индекса на новините
            const indexResponse = await fetch('news/index.json');
            if (!indexResponse.ok) throw new Error('News index not found.');
            
            const newsFiles = await indexResponse.json();
            newsFiles.reverse(); // Показваме най-новите първи

            if (newsFiles.length === 0) {
                newsListContainer.innerHTML = `<p>${siteLang === 'en' ? 'No news yet. Stay tuned!' : 'Все още няма новини. Очаквайте скоро!'}</p>`;
                return;
            }

            // 2. Зареждаме marked.js, ако е нужно
            if (typeof marked === 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
                document.head.appendChild(script);
                await new Promise(r => script.onload = r);
            }

            // 3. Обхождаме файловете от индекса и ги показваме
            for (const file of newsFiles) {
                const response = await fetch(`news/${siteLang}/${file}`);
                if (response.ok) {
                    const md = await response.text();
                    const { metadata, content } = parseMarkdown(md);
                    
                    const newsItemHtml = `
                        <article class="news-item">
                            <h2>${metadata.title}</h2>
                            <p class="news-meta">
                                <span>${new Date(file.slice(0, 10)).toLocaleDateString(siteLang, { year: 'numeric', month: 'long', day: 'numeric' })}</span> | 
                                <span>by ${metadata.author}</span>
                            </p>
                            <div class="news-content">${marked.parse(content)}</div>
                        </article>
                    `;
                    newsListContainer.innerHTML += newsItemHtml;
                }
            }

        } catch (error) {
            console.error("Error loading news page:", error);
            newsListContainer.innerHTML = `<p style="color: red;">Could not load news. Please check if <b>/news/index.json</b> exists and is configured correctly.</p>`;
        }
    }

    async function renderAboutPage() {
        const bioPath = `/synopsis/${siteLang}/about.txt`; let bioText = siteLang === 'en' ? 'Biography coming soon...' : 'Биография очаквайте скоро...';
        try { const r = await fetch(bioPath); if (r.ok) bioText = (await r.text()).replace(/\n/g, '<br>'); } catch (e) {}
        const html = `<div class="container about-page"><div class="author-photo-large"><img src="/images/common/author-placeholder.jpg" alt="Photo of Krasimir Tenev"></div><div class="author-bio-content"><h1>${siteLang === 'en' ? 'About the Author' : 'За автора'}</h1><p class="bio-text">${bioText}</p></div></div>`;
        mainContent.innerHTML = html; document.title = `${siteLang === 'en' ? 'About' : 'За автора'} | Krasimir Tenev`;
    }

    async function renderContactPage() {
        mainContent.innerHTML = `<div class="container contact-page"><h1>${siteLang === 'en' ? 'Get in Touch' : 'Свържете се с мен'}</h1><p>${siteLang === 'en' ? 'For business inquiries, media requests, or just to say hello, please use the form below.' : 'За бизнес запитвания, медийни покани или просто да кажете "здравей", моля, използвайте формата по-долу.'}</p><form id="contact-form" class="contact-form"><div class="form-group"><label for="name">${siteLang === 'en' ? 'Name' : 'Име'}</label><input type="text" id="name" name="name" required></div><div class="form-group"><label for="email">${siteLang === 'en' ? 'Email' : 'Имейл'}</label><input type="email" id="email" name="email" required></div><div class="form-group"><label for="message">${siteLang === 'en' ? 'Message' : 'Съобщение'}</label><textarea id="message" name="message" rows="6" required></textarea></div><button type="submit" class="btn">${siteLang === 'en' ? 'Send Message' : 'Изпрати съобщение'}</button></form><div id="form-status"></div></div>`;
        document.title = `${siteLang === 'en' ? 'Contact' : 'Контакти'} | Krasimir Tenev`;
        attachFormSubmitListener();
    }
    
    function attachFormSubmitListener() {
        const form = document.getElementById('contact-form'); if (!form) return;
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); const statusDiv = document.getElementById('form-status'); statusDiv.textContent = siteLang === 'en' ? 'Sending...' : 'Изпращане...';
            const formData = new FormData(form); const name = formData.get('name'); const email = formData.get('email'); const message = formData.get('message');
            const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSd6oAve7uoiaXMJWWukyYHWEZQgGTJxPgCpV40E-f3mCNkQtw/formResponse?entry.1843393081=${encodeURIComponent(name)}&entry.1799285576=${encodeURIComponent(email)}&entry.530113389=${encodeURIComponent(message)}`;
            try { await fetch(formUrl, { method: 'POST', mode: 'no-cors' }); statusDiv.textContent = siteLang === 'en' ? 'Thank you! Your message has been sent.' : 'Благодаря! Вашето съобщение беше изпратено.'; statusDiv.style.color = 'green'; form.reset(); } catch (error) { statusDiv.textContent = siteLang === 'en' ? 'An error occurred. Please try again.' : 'Възникна грешка. Моля, опитайте отново.'; statusDiv.style.color = 'red'; }
        });
    }


    async function renderPrivacyPolicyPage() {
    const filePath = `/synopsis/${siteLang}/privacy-policy.txt`;
    let policyHtml = `<p>Loading...</p>`;
    try {
        const r = await fetch(filePath);
        if (r.ok) {
            const rawText = await r.text();
            const [title, ...paragraphs] = rawText.split(/\n\n+/);
            policyHtml = `<h1>${title}</h1>` + paragraphs.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
        }
    } catch(e) { console.error("Could not load privacy policy", e); }
    mainContent.innerHTML = `<div class="container text-page">${policyHtml}</div>`;
    document.title = `${siteLang === 'en' ? 'Privacy Policy' : 'Политика за поверителност'} | Krasimir Tenev`;
    }

    function renderNotFound() { mainContent.innerHTML = `<div class="container"><h1>404 - Page Not Found</h1></div>`; }
    
    // =========================================================================
    // ПОМОЩНИ ФУНКЦИИ
    // =========================================================================
    function findBookById(id) { if (!id) return null; for (const s of authorData.series) { const b = s.books.find(x => x.id === id); if (b) return b; } return authorData.novels.find(b => b.id === id) || authorData.short_stories.find(b => b.id === id); }
    
    function switchSiteLanguage(lang) {
        siteLang = lang;
        router();
        handleCookieBanner(); // Извикваме отново, за да се смени текстът
     }

    function parseMarkdown(md) {
        const metadata = {}; const parts = md.split('---');
        if (parts.length >= 3) {
            const frontMatter = parts[1].split('\n').filter(line => line.trim() !== '');
            frontMatter.forEach(line => { const [key, ...valueParts] = line.split(':'); metadata[key.trim()] = valueParts.join(':').trim().replace(/['"]/g, ''); });
            return { metadata, content: parts.slice(2).join('---').trim() };
        }
        return { metadata: {}, content: md };
    }

    // =========================================================================
    // СТАРТИРАНЕ НА ПРИЛОЖЕНИЕТО
    // =========================================================================
    
    // --- НОВ КОД ЗА МОБИЛНОТО МЕНЮ ---
     const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Затваряме менюто при клик на линк (по-устойчив начин)
    navMenu.addEventListener("click", (e) => {
        if (e.target.classList.contains('nav-link')) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
    // --- КРАЙ НА НОВИЯ КОД ---

   
    document.body.addEventListener('click', (e) => { if (e.target.id === 'lang-bg') { e.preventDefault(); switchSiteLanguage('bg'); } else if (e.target.id === 'lang-en') { e.preventDefault(); switchSiteLanguage('en'); } });
    window.addEventListener('hashchange', router);
    router();

// =========================================================================
    // ЛОГИКА ЗА БАНЕР ЗА БИСКВИТКИ
    // =========================================================================
    function handleCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        const acceptBtn = document.getElementById('cookie-accept-btn');
        const cookieTextEl = document.getElementById('cookie-text');

        const cookieTexts = {
            en: `We use cookies to enhance your experience and for analytics. By continuing to browse, you agree to our <a href="#/privacy-policy">Privacy Policy</a>.`,
            bg: `Използваме "бисквитки", за да подобрим вашето преживяване и за анализи. Продължавайки, вие се съгласявате с нашата <a href="#/privacy-policy">Политика за поверителност</a>.`
        };
        const buttonTexts = { en: 'Accept', bg: 'Приемам' };

        cookieTextEl.innerHTML = cookieTexts[siteLang];
        acceptBtn.textContent = buttonTexts[siteLang];

        // Проверяваме дали потребителят вече е приел
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => {
                banner.classList.add('show');
            }, 1000); // Показваме го със закъснение
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            banner.classList.remove('show');
        });
    }
    handleCookieBanner();
 

});