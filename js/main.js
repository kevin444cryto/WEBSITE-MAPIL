/**
 * Main General Script - Cyber of Zone
 * Inisialisasi AOS, Typing Effect, Mobile Drawer, Scroll To Top, & Loading Screen
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Inisialisasi AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true
    });
  }

  // 2. Hide Loading Screen
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('opacity-0');
      setTimeout(() => loadingScreen.style.display = 'none', 500);
    }, 400);
  }

  // 3. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 4. Scroll To Top Logic
  const scrollTopBtn = document.getElementById('scroll-to-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('hidden');
      } else {
        scrollTopBtn.classList.add('hidden');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Typing Text Effect (Hero Section)
  const typingTextEl = document.getElementById('typing-text');
  if (typingTextEl) {
    const words = [
      "Administrasi Infrastruktur Jaringan",
      "Sistem Operasi Linux Debian & Server",
      "Keamanan Siber & Firewall Filtering",
      "Routing Dynamic, OSPF, & Cloud TJKT"
    ];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIdx];
      
      if (isDeleting) {
        typingTextEl.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typingTextEl.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIdx === currentWord.length) {
        speed = 2000; // Pause saat selesai mengetik kata
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 500;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  }
});