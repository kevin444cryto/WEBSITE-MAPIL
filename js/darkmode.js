/**
 * Dark Mode Engine - Cyber of Zone
 * Mengelola preferensi mode gelap & terang dengan LocalStorage
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('dark-mode-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const htmlTag = document.documentElement;

  // 1. Cek preference pengguna di LocalStorage
  const savedTheme = localStorage.getItem('coz-theme');
  if (savedTheme === 'light') {
    htmlTag.classList.remove('dark');
    if (themeIcon) themeIcon.className = 'fas fa-moon text-gray-700';
  } else {
    htmlTag.classList.add('dark');
    if (themeIcon) themeIcon.className = 'fas fa-sun text-yellow-400';
  }

  // 2. Listener Klik Toggle Theme
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (htmlTag.classList.contains('dark')) {
        htmlTag.classList.remove('dark');
        localStorage.setItem('coz-theme', 'light');
        if (themeIcon) themeIcon.className = 'fas fa-moon text-gray-700';
      } else {
        htmlTag.classList.add('dark');
        localStorage.setItem('coz-theme', 'dark');
        if (themeIcon) themeIcon.className = 'fas fa-sun text-yellow-400';
      }
    });
  }
});