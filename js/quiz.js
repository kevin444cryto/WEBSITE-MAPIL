/**
 * Interactive Quiz Engine 20 Soal TJKT - Cyber of Zone
 * Timer: 30 Menit (1800 detik)
 */

const fullQuizBank = [
  {
    q: "Perangkat jaringan yang berfungsi menghubungkan dua atau lebih jaringan dengan subnet IP berbeda pada Layer 3 OSI dinamakan...",
    options: ["Switch Unmanaged", "Router", "Hub", "Access Point"],
    answer: 1,
    exp: "Router bekerja pada Layer 3 (Network) untuk mengarahkan paket data antar jaringan yang berbeda subnet."
  },
  {
    q: "Berapa jumlah IP Usable (alamat IP host yang dapat digunakan) pada subnet mask /24?",
    options: ["256", "254", "252", "128"],
    answer: 1,
    exp: "Prefix /24 memiliki total 256 IP, dikurangi 1 IP Network dan 1 IP Broadcast, sehingga menyisakan 254 IP Usable."
  },
  {
    q: "Protokol yang bertugas mentranslasikan nama domain (seperti google.com) menjadi alamat IP numerik adalah...",
    options: ["DHCP", "FTP", "DNS", "HTTP"],
    answer: 2,
    exp: "DNS (Domain Name System) memetakan nama domain ke alamat IP server tempat situs dihosting."
  },
  {
    q: "Teknologi yang memungkinkan pembagian satu Switch fisik menjadi beberapa kelompok logika jaringan dinamakan...",
    options: ["VLAN", "VPN", "NAT", "Proxy"],
    answer: 0,
    exp: "VLAN (Virtual Local Area Network) mengisolasi broadcast domain pada Layer 2 Switch secara logis."
  },
  {
    q: "Protokol keamanan yang digunakan untuk membangun jalur koneksi terenkripsi (tunnel) melintasi internet adalah...",
    options: ["Telnet", "VPN", "HTTP", "ICMP"],
    answer: 1,
    exp: "VPN (Virtual Private Network) menyandikan seluruh data agar aman saat melewati jaringan publik."
  },
  {
    q: "Urutan warna kabel UTP standar T568B untuk pin 1 sampai pin 3 secara berurutan adalah...",
    options: ["Putih-Oren, Oren, Putih-Hijau", "Putih-Hijau, Hijau, Putih-Oren", "Oren, Putih-Oren, Hijau", "Putih-Cokelat, Cokelat, Oren"],
    answer: 0,
    exp: "Standar T568B dimulai dengan pin 1: Putih-Oren, pin 2: Oren, pin 3: Putih-Hijau."
  },
  {
    q: "Layer OSI yang bertanggung jawab mengatur alamat fisik MAC Address dan framing data adalah...",
    options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    answer: 1,
    exp: "Data Link Layer (Layer 2) mengelola kontrol akses media (MAC) dan pengkapsulan frame data."
  },
  {
    q: "Aplikasi utilitas populer yang digunakan untuk membuat media bootable USB flashdisk dari file ISO adalah...",
    options: ["VirtualBox", "Rufus", "Wireshark", "Cisco Packet Tracer"],
    answer: 1,
    exp: "Rufus adalah software utilitas utama untuk memformat dan membuat USB bootable installer OS."
  },
  {
    q: "Protokol transmisi data pada Layer Transport yang bersifat Connection-Oriented dan menjamin keutuhan data adalah...",
    options: ["UDP", "TCP", "IP", "ICMP"],
    answer: 1,
    exp: "TCP (Transmission Control Protocol) menggunakan mekanisme 3-way handshake untuk memastikan data sampai dengan utuh."
  },
  {
    q: "Perintah CLI pada sistem operasi Linux Debian yang digunakan untuk menginstal paket aplikasi baru dari repository adalah...",
    options: ["apt update", "apt install [nama_paket]", "cd /var/www", "systemctl status"],
    answer: 1,
    exp: "Perintah 'apt install' digunakan pada distribusi berbasis Debian/Ubuntu untuk memasang paket aplikasi."
  },
  {
    q: "Dalam konfigurasi server DNS BIND9 pada Linux, file zone yang berfungsi memetakan nama domain ke alamat IP dinamakan...",
    options: ["Forward Zone", "Reverse Zone", "resolv.conf", "hosts.deny"],
    answer: 0,
    exp: "Forward Zone memetakan Domain -> IP Address, sedangkan Reverse Zone memetakan IP Address -> Domain."
  },
  {
    q: "Perangkat keras jaringan nirkabel yang berfungsi memancarkan sinyal gelombang radio Wi-Fi ke perangkat klien dinamakan...",
    options: ["Switch", "Access Point", "Modem ADSL", "Repeater"],
    answer: 1,
    exp: "Access Point (AP) bertindak sebagai pusat penerima dan pemancar sinyal nirkabel (WLAN)."
  },
  {
    q: "Teknologi yang mentranslasikan alamat IP Private lokal menjadi IP Public agar dapat mengakses internet dinamakan...",
    options: ["DHCP Server", "NAT (Network Address Translation)", "DNS Forwarder", "VLAN Trunking"],
    answer: 1,
    exp: "NAT mengubah alamat IP Private jaringan LAN menjadi alamat IP Public terdaftar saat menuju internet."
  },
  {
    q: "Topologi jaringan yang setiap perangkatnya terhubung langsung ke satu perangkat pusat berupa Switch dinamakan...",
    options: ["Topologi Bus", "Topologi Star", "Topologi Ring", "Topologi Mesh"],
    answer: 1,
    exp: "Topologi Star (Bintang) mengalirkan seluruh komunikasi lalu lintas data melalui Switch/Hub terpusat."
  },
  {
    q: "Protokol routing dinamis yang menggunakan algoritma Link-State untuk menentukan jalur terbaik dalam jaringan internal dinamakan...",
    options: ["RIP", "OSPF", "BGP", "Static Route"],
    answer: 1,
    exp: "OSPF (Open Shortest Path First) adalah protokol dynamic routing link-state yang sangat efisien."
  },
  {
    q: "Tipe Virtualisasi Hypervisor yang berjalan langsung di atas perangkat keras fisik tanpa OS perantara (contoh: VMware ESXi) disebut...",
    options: ["Hypervisor Type-1 (Bare-Metal)", "Hypervisor Type-2 (Hosted)", "Docker Container", "Sandbox"],
    answer: 0,
    exp: "Hypervisor Type-1 dipasang langsung pada hardware server (Bare-Metal) tanpa sistem operasi inang."
  },
  {
    q: "Layanan cloud computing yang menyediakan infrastruktur fisik seperti Server Virtual, Storage, dan Network dinamakan...",
    options: ["SaaS", "PaaS", "IaaS", "DaaS"],
    answer: 2,
    exp: "IaaS (Infrastructure as a Service) menyewakan sumber daya infrastruktur komputasi dasar."
  },
  {
    q: "Fitur keamanan pada Mikrotik yang digunakan untuk memblokir port atau IP address tertentu dinamakan...",
    options: ["Filter Rules", "NAT Action Passthrough", "Mangle", "Address List"],
    answer: 0,
    exp: "Filter Rules pada Firewall Mikrotik berfungsi menyaring (accept/drop/reject) paket data yang lalu lalang."
  },
  {
    q: "Perintah Windows Command Prompt (CMD) yang digunakan untuk menguji konektivitas koneksi antar dua host jaringan adalah...",
    options: ["ipconfig", "ping", "tracert", "netstat"],
    answer: 1,
    exp: "Perintah 'ping' mengirimkan paket ICMP Echo Request untuk menguji apakah host tujuan merespons."
  },
  {
    q: "Jenis pengabelan serat optik (Fiber Optic) yang mampu mentransmisikan cahaya jarak jauh dengan inti berkuran sangat kecil (~9 mikron) dinamakan...",
    options: ["Multi Mode Fiber", "Single Mode Fiber", "Coaxial Cable", "UTP Cat 6"],
    answer: 1,
    exp: "Single Mode Fiber memiliki core tunggal sangat kecil untuk transmisi gelombang cahaya jarak jauh tanpa dispersi besar."
  }
];

let activeQuestions = [];
let quizCurrentIndex = 0;
let quizUserAnswers = [];
let quizTimerInterval = null;
let quizTimeLeft = 1800; // 30 Menit dalam detik

function startComprehensiveQuiz() {
  activeQuestions = fullQuizBank;
  quizCurrentIndex = 0;
  quizUserAnswers = [];
  quizTimeLeft = 1800;

  document.getElementById('quiz-selection').classList.add('hidden');
  document.getElementById('quiz-box').classList.remove('hidden');

  runTimer();
  renderQuizQuestion();
}

function runTimer() {
  const timerEl = document.getElementById('quiz-timer');
  quizTimerInterval = setInterval(() => {
    quizTimeLeft--;
    const min = Math.floor(quizTimeLeft / 60);
    const sec = quizTimeLeft % 60;
    timerEl.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

    if (quizTimeLeft <= 0) {
      clearInterval(quizTimerInterval);
      completeQuiz();
    }
  }, 1000);
}

function renderQuizQuestion() {
  const qData = activeQuestions[quizCurrentIndex];
  document.getElementById('question-number').textContent = `Soal ${quizCurrentIndex + 1} dari ${activeQuestions.length}`;
  document.getElementById('question-text').textContent = qData.q;

  const optContainer = document.getElementById('options-container');
  optContainer.innerHTML = '';

  qData.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'w-full text-left p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-blue-500 transition text-sm flex items-center space-x-3 bg-white/40 dark:bg-black/30';
    btn.onclick = () => chooseOption(idx, btn);

    // Tandai jika sudah pernah dipilih
    if (quizUserAnswers[quizCurrentIndex] === idx) {
      btn.classList.add('border-blue-500', 'bg-blue-500/10');
    }

    btn.innerHTML = `
      <span class="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center text-xs font-mono font-bold">${String.fromCharCode(65 + idx)}</span>
      <span>${opt}</span>
    `;
    optContainer.appendChild(btn);
  });
}

function chooseOption(optIndex, element) {
  const allBtns = document.querySelectorAll('#options-container button');
  allBtns.forEach(b => b.classList.remove('border-blue-500', 'bg-blue-500/10'));
  
  element.classList.add('border-blue-500', 'bg-blue-500/10');
  quizUserAnswers[quizCurrentIndex] = optIndex;
}

function nextQuestion() {
  if (quizUserAnswers[quizCurrentIndex] === undefined) {
    alert("Silakan pilih salah satu jawaban sebelum melanjutkan!");
    return;
  }

  if (quizCurrentIndex < activeQuestions.length - 1) {
    quizCurrentIndex++;
    renderQuizQuestion();
  } else {
    completeQuiz();
  }
}

function completeQuiz() {
  clearInterval(quizTimerInterval);
  document.getElementById('quiz-box').classList.add('hidden');
  document.getElementById('quiz-result').classList.remove('hidden');

  let scoreCorrect = 0;
  const expContainer = document.getElementById('quiz-explanation-list');
  expContainer.innerHTML = '<h3 class="font-bold font-mono text-sm border-b pb-2 mb-4">// PEMBAHASAN JAWABAN LENGKAP:</h3>';

  activeQuestions.forEach((q, idx) => {
    const isCorrect = quizUserAnswers[idx] === q.answer;
    if (isCorrect) scoreCorrect++;

    const expCard = document.createElement('div');
    expCard.className = 'p-4 rounded-lg border text-sm ' + (isCorrect ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5');
    expCard.innerHTML = `
      <p class="font-bold mb-1">${idx + 1}. ${q.q}</p>
      <p class="text-xs text-gray-500 mb-2">Jawaban Kamu: <span class="${isCorrect ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}">${q.options[quizUserAnswers[idx]] || 'Tidak dijawab'}</span></p>
      <p class="text-xs font-mono bg-gray-100 dark:bg-black/50 p-2.5 rounded text-gray-600 dark:text-gray-300">💡 Pembahasan: ${q.exp}</p>
    `;
    expContainer.appendChild(expCard);
  });

  const calculatedScore = Math.round((scoreCorrect / activeQuestions.length) * 100);
  document.getElementById('final-score').textContent = `${calculatedScore} / 100`;
}