document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 Скрипт запущен!");

  // 1. Инициализация иконок Lucide
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }

  // 2. SPOTLIGHT EFFECT (Подсветка)
  const body = document.body;
  document.addEventListener('mousemove', (e) => {
      body.style.setProperty('--mouse-x', `${e.clientX}px`);
      body.style.setProperty('--mouse-y', `${e.clientY}px`);
  });

  // 3. Хедер при скролле
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('header--scrolled');
      } else {
          header.classList.remove('header--scrolled');
      }
  });

  // 4. МОБИЛЬНОЕ МЕНЮ (Правильная версия с Overlay)
  const burgerBtn = document.getElementById('burgerBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.header__link');

  function toggleMenu() {
      if (!mobileMenu) return;
      const isOpen = mobileMenu.classList.contains('is-open');

      if (isOpen) {
          mobileMenu.classList.remove('is-open');
          document.body.style.overflow = ''; // Разрешить скролл
      } else {
          mobileMenu.classList.add('is-open');
          document.body.style.overflow = 'hidden'; // Запретить скролл
      }
  }

  if (burgerBtn) burgerBtn.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (mobileMenu && mobileMenu.classList.contains('is-open')) {
              toggleMenu();
          }
      });
  });

  // 5. COOKIE POP-UP (С диагностикой)
  const cookiePopup = document.getElementById('cookiePopup');
  const acceptCookieBtn = document.getElementById('acceptCookie');

  // Проверяем, существует ли HTML элемент
  if (cookiePopup) {
      console.log("✅ HTML элемент попапа найден.");

      // Проверяем запись в памяти
      const cookiesAccepted = localStorage.getItem('cookiesAccepted');
      console.log("Статус куки в памяти:", cookiesAccepted);

      // Если еще не приняли - показываем
      if (!cookiesAccepted) {
          setTimeout(() => {
              console.log("⏰ Время вышло, показываем попап!");
              cookiePopup.classList.add('is-visible');
          }, 1000); // Появится через 1 секунду
      } else {
          console.log("ℹ️ Куки уже были приняты ранее.");
      }

      // Логика кнопки
      if (acceptCookieBtn) {
          acceptCookieBtn.addEventListener('click', () => {
              localStorage.setItem('cookiesAccepted', 'true');
              cookiePopup.classList.remove('is-visible');
          });
      }
  } else {
      console.error("⛔ ОШИБКА: HTML элемент id='cookiePopup' НЕ НАЙДЕН в index.html. Проверь код страницы!");
  }

  // 6. Анимация Hero (Anime.js)
  if (typeof anime !== 'undefined') {
      anime({
          targets: '.hero__badge, .hero__title, .hero__subtitle, .hero__actions, .hero__stats',
          translateY: [30, 0],
          opacity: [0, 1],
          delay: anime.stagger(100, {start: 200}),
          easing: 'easeOutQuad',
          duration: 800
      });
      anime({
          targets: '.hero__visual',
          opacity: [0, 1],
          scale: [0.95, 1],
          delay: 800,
          easing: 'easeOutExpo',
          duration: 1200
      });
  }
});