document.addEventListener('DOMContentLoaded', () => {
  // 1. Инициализация иконок Lucide
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }

  // 2. ЛОГИКА ПОДСВЕТКИ (Spotlight Effect)
  // Отслеживаем движение мыши и передаем координаты в CSS
  const body = document.body;

  document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Передаем координаты в CSS-переменные
      body.style.setProperty('--mouse-x', `${x}px`);
      body.style.setProperty('--mouse-y', `${y}px`);
  });

  // 3. Хедер: эффект стекла при скролле
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('header--scrolled');
      } else {
          header.classList.remove('header--scrolled');
      }
  });

  // 4. Мобильное меню (Простой тоггл)
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  if(burger) {
      burger.addEventListener('click', () => {
          // В продакшене лучше переключать класс, здесь для простоты меняем стиль
          const isFlex = nav.style.display === 'flex';

          if (!isFlex) {
              nav.style.display = 'flex';
              nav.style.position = 'absolute';
              nav.style.top = '100%';
              nav.style.left = '0';
              nav.style.width = '100%';
              nav.style.background = '#fff';
              nav.style.flexDirection = 'column';
              nav.style.padding = '20px';
              nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
          } else {
              nav.style.display = 'none';
              nav.style.boxShadow = 'none';
          }
      });
  }

  // 5. Анимация появления Hero (Anime.js)
  if (typeof anime !== 'undefined') {
      // Анимация текста
      anime({
          targets: '.hero__badge, .hero__title, .hero__subtitle, .hero__actions, .hero__stats',
          translateY: [30, 0],
          opacity: [0, 1],
          delay: anime.stagger(100, {start: 200}), // Задержка между элементами
          easing: 'easeOutQuad',
          duration: 800
      });

      // Анимация визуальной части (карточки)
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
document.addEventListener('DOMContentLoaded', () => {
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

  // 4. МОБИЛЬНОЕ МЕНЮ (Логика Overlay)
  const burgerBtn = document.getElementById('burgerBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.header__link'); // Ссылки меню

  // Функция открытия/закрытия
  function toggleMenu() {
      const isOpen = mobileMenu.classList.contains('is-open');

      if (isOpen) {
          mobileMenu.classList.remove('is-open');
          document.body.style.overflow = ''; // Разрешить скролл
      } else {
          mobileMenu.classList.add('is-open');
          document.body.style.overflow = 'hidden'; // Запретить скролл фона
      }
  }

  if (burgerBtn) burgerBtn.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

  // Закрывать меню при клике на ссылку (UX)
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (mobileMenu.classList.contains('is-open')) {
              toggleMenu();
          }
      });
  });

  // 5. COOKIE POP-UP (Логика)
  const cookiePopup = document.getElementById('cookiePopup');
  const acceptCookieBtn = document.getElementById('acceptCookie');

  // Проверяем, было ли уже согласие
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  // Если нет записи в localStorage, показываем попап через 2 секунды
  if (!cookiesAccepted) {
      setTimeout(() => {
          cookiePopup.classList.add('is-visible');
      }, 2000);
  }

  // Обработка клика "Принять"
  if (acceptCookieBtn) {
      acceptCookieBtn.addEventListener('click', () => {
          // Сохраняем выбор пользователя
          localStorage.setItem('cookiesAccepted', 'true');
          // Скрываем попап
          cookiePopup.classList.remove('is-visible');
      });
  }

  // 6. Анимация появления Hero (Anime.js)
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
