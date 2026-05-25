/* ============================================================
   archive-sidebar.js — 文章归档侧边栏
   ============================================================ */

// 侧边栏开关
function toggleArchiveSidebar() {
  var sidebar = document.getElementById('archive-sidebar');
  var overlay = document.getElementById('archive-overlay');
  var isOpen = sidebar.classList.contains('open');
  if (isOpen) {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  } else {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

// 滚动控制：下滑一页后显示汉堡按钮
(function() {
  var hamburger = document.getElementById('archive-hamburger');
  if (!hamburger) return;
  var heroHeight = window.innerHeight;

  function checkScroll() {
    if (window.scrollY > heroHeight * 0.6) {
      hamburger.classList.add('visible');
    } else {
      hamburger.classList.remove('visible');
      var sidebar = document.getElementById('archive-sidebar');
      if (sidebar && sidebar.classList.contains('open')) {
        toggleArchiveSidebar();
      }
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
})();

// 打开主页时确保页面在最顶部
if (window.location.pathname === '/' || window.location.pathname === '/hexo-site/' || window.location.pathname === '/hexo-site') {
  window.scrollTo(0, 0);
}
