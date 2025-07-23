// 移动端菜单交互
const mobileMenuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');

if (mobileMenuButton && navLinks) {
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-16');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('right-0');
        navLinks.classList.toggle('bg-white');
        navLinks.classList.toggle('shadow-lg');
        navLinks.classList.toggle('p-4');
        navLinks.classList.toggle('z-10');
    });
}

// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 监听窗口大小变化，在大屏幕上重置导航菜单
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && navLinks) {
        navLinks.classList.add('hidden', 'md:flex');
        navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-4', 'z-10');
    }
});

// 语言选择功能
const languageSelector = document.querySelector('select');
if (languageSelector) {
    languageSelector.addEventListener('change', function() {
        // 这里可以添加语言切换逻辑
        alert(`语言已切换为: ${this.value}`);
    });
}