<script>
  // Modern JS for music & dark mode toggle
  // استخدم عنصر <audio> في HTML بدل new Audio() لمرونة أكبر

  document.addEventListener('DOMContentLoaded', function() {
    // 🎧 تشغيل وإيقاف الأغنية
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('playMusic');
    if (music && musicBtn) {
      music.volume = 0.5;
      musicBtn.addEventListener('click', () => {
        if (music.paused) {
          music.play();
          musicBtn.textContent = "⏸️ Pause Music";
        } else {
          music.pause();
          musicBtn.textContent = "🎵 Play Music";
        }
      });
      music.addEventListener('ended', () => {
        musicBtn.textContent = "🎵 Play Music";
      });
    }

    // 🌙 زر الوضع الليلي
    const darkToggle = document.getElementById('darkModeToggle');
    if (darkToggle) {
      darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // تغيير رمز الزر حسب الوضع
        darkToggle.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
      });
    }

    // Scroll navigation active link
    const navLinks = document.querySelectorAll('nav a');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = '#' + section.id;
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
          link.classList.add('active');
        }
      });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            window.scrollTo({
              top: target.offsetTop - 60,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Contact form: send to email via Formspree
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        // لا حاجة للتنبيه أو منع الإرسال، Formspree سيعالج الطلب
        // يمكن إضافة رسالة انتظار بسيطة إذا رغبت
        contactForm.querySelector('button[type="submit"]').textContent = 'Envoi...';
      });
    }
  });
</script>
