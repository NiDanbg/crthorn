// Crispin Thorn — minimal client-side behavior for the static site.
// No router: every page is pre-rendered HTML with real URLs.
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        navMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Cookie banner
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept-btn');
    if (banner && acceptBtn) {
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => banner.classList.add('show'), 1000);
        }
        acceptBtn.onclick = () => {
            localStorage.setItem('cookiesAccepted', 'true');
            banner.classList.remove('show');
        };
    }

    // Lead-magnet banners — our own modal opens instantly (no provider
    // trigger delay); Sender.net is loaded on demand, only on click, and
    // renders its embedded form into the modal once ready.
    document.querySelectorAll('.lead-magnet-cta').forEach((btn) => {
        btn.addEventListener('click', () => {
            const accountId = btn.dataset.accountId;
            const modal = btn.closest('.lead-magnet-banner')?.nextElementSibling;
            if (!accountId || !modal || !modal.classList.contains('lead-magnet-modal')) return;
            modal.classList.add('open');
            const formId = modal.querySelector('[data-sender-form-id]')?.dataset.senderFormId;
            if (window.senderForms) {
                if (formId) window.senderForms.render(formId);
                return;
            }
            (function (s, e, n, d, er) {
                s['Sender'] = er;
                s[er] = s[er] || function () { (s[er].q = s[er].q || []).push(arguments); };
                s[er].l = 1 * new Date();
                s[er].on = function (event, callback) {
                    s[er].listeners = s[er].listeners || {};
                    (s[er].listeners[event] = s[er].listeners[event] || []).push(callback);
                };
                const a = e.createElement(n);
                const m = e.getElementsByTagName(n)[0];
                a.async = 1;
                a.src = d;
                a.onload = () => { if (formId) window.senderForms.render(formId); };
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
            window.sender(accountId);
        });
    });

    document.querySelectorAll('.lead-magnet-modal').forEach((modal) => {
        modal.querySelector('.lead-magnet-modal-close')?.addEventListener('click', () => {
            modal.classList.remove('open');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('open');
        });
    });

    // Contact form
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const statusDiv = document.getElementById('form-status');
            const lang = document.documentElement.lang === 'bg' ? 'bg' : 'en';
            const sendingText = lang === 'bg' ? 'Изпращане...' : 'Sending...';
            const okText = lang === 'bg' ? 'Благодаря! Вашето съобщение беше изпратено.' : 'Thank you! Your message has been sent.';
            const errText = lang === 'bg' ? 'Възникна грешка. Моля, опитайте отново.' : 'An error occurred. Please try again.';
            statusDiv.textContent = sendingText;
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSd6oAve7uoiaXMJWWukyYHWEZQgGTJxPgCpV40E-f3mCNkQtw/formResponse?entry.1843393081=${encodeURIComponent(name)}&entry.1799285576=${encodeURIComponent(email)}&entry.530113389=${encodeURIComponent(message)}`;
            try {
                await fetch(formUrl, { method: 'POST', mode: 'no-cors' });
                statusDiv.textContent = okText;
                statusDiv.style.color = 'green';
                form.reset();
            } catch (error) {
                statusDiv.textContent = errText;
                statusDiv.style.color = 'red';
            }
        });
    }
});
