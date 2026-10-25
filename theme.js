(function () {
    const d = new Date();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const path = window.location.pathname;
    let theme = null;

    if (path.includes('/ceranick')) {
        if (month === 3 && day === 12) { 
            theme = 'birthday-cera.css';
            document.addEventListener("DOMContentLoaded", () => {
                document.querySelectorAll('svg').forEach(svg => {
                    if (svg.innerHTML.includes('M 70 15')) {
                        svg.innerHTML = `
                        <g stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M 30 40 L 70 40 L 65 85 L 35 85 Z" fill="#FFFFFF" />
                            <line x1="30" y1="55" x2="15" y2="45" stroke="#000" stroke-width="4" />
                            <circle cx="10" cy="40" r="6" fill="#000" stroke="none" />
                            <line x1="70" y1="55" x2="85" y2="45" stroke="#000" stroke-width="4" />
                            <circle cx="90" cy="40" r="6" fill="#000" stroke="none" />
                            <circle cx="42" cy="60" r="3" fill="#000" />
                            <circle cx="58" cy="60" r="3" fill="#000" />
                            <path d="M 42 70 Q 50 78 58 70" fill="none" stroke="#000" stroke-width="3" />
                        </g>`;
                    }
                });
            });
        }
    } 
    else if (path.includes('/dorkusgiganticus')) {
        if (month === 9 && day === 9) { 
            theme = 'birthday-dorkus.css';
            document.addEventListener("DOMContentLoaded", () => {
                const headerIcon = document.getElementById('theme-icon');
                if (headerIcon) {
                    const img = document.createElement('img');
                    img.src = '/images/birthdays/dorkus-birthday.png';
                    img.width = 50;
                    img.height = 50;
                    img.style.objectFit = 'contain';
                    headerIcon.parentNode.replaceChild(img, headerIcon);
                }
                
                const footerIcon = document.getElementById('theme-icon-footer');
                if (footerIcon) {
                    const img = document.createElement('img');
                    img.src = '/images/birthdays/dorkus-birthday.png';
                    img.width = 50;
                    img.height = 50;
                    img.style.objectFit = 'contain';
                    footerIcon.parentNode.replaceChild(img, footerIcon);
                }
            });
        }
    } 
    else if (path.includes('/cresclent')) {
        if (month === 8 && day === 6) { 
            theme = 'birthday-cres.css';
            document.addEventListener("DOMContentLoaded", () => {
                const headerIcon = document.getElementById('theme-icon');
                if (headerIcon) {
                    const img = document.createElement('img');
                    img.src = '/images/birthdays/cres-birthday.png';
                    img.width = 50;
                    img.height = 50;
                    img.style.objectFit = 'contain';
                    headerIcon.parentNode.replaceChild(img, headerIcon);
                }
                
                const footerIcon = document.getElementById('theme-icon-footer');
                if (footerIcon) {
                    const img = document.createElement('img');
                    img.src = '/images/birthdays/cres-birthday.png';
                    img.width = 50;
                    img.height = 50;
                    img.style.objectFit = 'contain';
                    footerIcon.parentNode.replaceChild(img, footerIcon);
                }
            });
        }
    }

    if (!theme) {
        if ((month === 1 && day >= 21) || (month === 2 && day <= 20)) {
            theme = 'chinesenewyear.css';
            document.addEventListener("DOMContentLoaded", () => {
                document.querySelectorAll('svg').forEach(svg => {
                    if (svg.innerHTML.includes('M 70 15')) {
                        svg.innerHTML = `
                <circle cx="50" cy="50" r="12" fill="none" stroke="var(--moon)" stroke-width="2" />
                <path d="M 50 38 A 6 6 0 0 1 50 50 A 6 6 0 0 0 50 62" fill="none" stroke="var(--moon)" stroke-width="2" />
                <circle cx="50" cy="44" r="2" fill="var(--moon)" />
                <circle cx="50" cy="56" r="2" fill="none" stroke="var(--moon)" stroke-width="2" />
                <g fill="var(--moon)" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle" dominant-baseline="central">
                    <text transform="translate(50, 15)">鼠</text>
                    <text transform="translate(68, 18) rotate(30)">牛</text>
                    <text transform="translate(82, 32) rotate(60)">虎</text>
                    <text transform="translate(85, 50) rotate(90)">兔</text>
                    <text transform="translate(82, 68) rotate(120)">龍</text>
                    <text transform="translate(68, 82) rotate(150)">蛇</text>
                    <text transform="translate(50, 85) rotate(180)">馬</text>
                    <text transform="translate(32, 82) rotate(210)">羊</text>
                    <text transform="translate(18, 68) rotate(240)">猴</text>
                    <text transform="translate(15, 50) rotate(270)">雞</text>
                    <text transform="translate(18, 32) rotate(300)">狗</text>
                    <text transform="translate(32, 18) rotate(330)">豬</text>
                </g>`;
                    }
                });
            });
        }
        else if (month === 10) { theme = 'spooky.css'; }
        else if ((month === 12 && day === 31) || (month === 1 && day === 1)) { theme = 'newyear.css'; }
        else if (month === 12 && day >= 20 && day <= 26) { theme = 'christmas.css'; }
    }

    if (theme) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/fancycss/' + theme;
        document.head.appendChild(link);
    }
})();