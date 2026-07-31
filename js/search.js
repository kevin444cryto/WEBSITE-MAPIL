/**
 * Global Search Engine - Cyber of Zone
 * Mencari secara realtime data materi & tutorial
 */

const searchDatabase = [
  { title: "Pengertian TJKT & Dasar Komputer", type: "Materi Kelas 10", link: "materi.html" },
  { title: "IP Address & Subnetting IPv4", type: "Materi Kelas 10", link: "materi.html" },
  { title: "Administrasi Infrastruktur Jaringan (VLAN & Routing)", type: "Materi Kelas 11", link: "materi.html" },
  { title: "Administrasi Sistem Jaringan (DNS & Web Server)", type: "Materi Kelas 11", link: "materi.html" },
  { title: "Keamanan Jaringan & Firewall Filtering Rules", type: "Materi Kelas 12", link: "materi.html" },
  { title: "Membuat Bootable USB via Rufus", type: "Tutorial OS", link: "kegiatan.html" },
  { title: "Instalasi Linux Debian Server", type: "Tutorial OS", link: "kegiatan.html" },
  { title: "Quiz Interaktif TJKT Kelas 10, 11, 12", type: "Quiz", link: "quiz.html" }
];

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
      searchModal.classList.add('flex');
      if (searchInput) searchInput.focus();
    });

    closeSearch.addEventListener('click', () => {
      searchModal.classList.add('hidden');
      searchModal.classList.remove('flex');
    });

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      searchResults.innerHTML = '';

      if (query === '') {
        searchResults.innerHTML = '<p class="text-gray-400 text-xs italic">Ketikan kata kunci di atas untuk mulai mencari...</p>';
        return;
      }

      const filtered = searchDatabase.filter(item => 
        item.title.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        searchResults.innerHTML = '<p class="text-gray-400 text-xs">Materi tidak ditemukan.</p>';
      } else {
        filtered.forEach(item => {
          const resEl = document.createElement('a');
          resEl.href = item.link;
          resEl.className = 'block p-3 rounded border border-gray-200 dark:border-white/10 hover:bg-blue-500/10 transition';
          resEl.innerHTML = `
            <p class="font-bold text-sm">${item.title}</p>
            <span class="text-xs font-mono text-blue-500">${item.type}</span>
          `;
          searchResults.appendChild(resEl);
        });
      }
    });
  }
})