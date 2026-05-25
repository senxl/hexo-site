/* ============================================================
   toc-init.js — TOC (目录) 初始化与交互逻辑
   ============================================================ */
$(document).ready(function() {
  // Desktop TOC (tocbot) initialization and scroll behavior
  // Only runs on article pages where .toc div exists
  if ($(".toc").length > 0 && document.body.clientWidth > 1200) {
    // Show the tocbot sidebar on desktop automatically
    $('.toc').show();

    var tocConfig = {
      tocSelector: '.toc',
      contentSelector: '.entry-content',
      scrollSmooth: true,
      headingSelector: 'h1, h2, h3, h4, h5',
      headingsOffset: -400,
      scrollSmoothOffset: -85
    };

    if ($(".pattern-center").length === 0) {
      tocConfig.headingsOffset = -85;
    }

    tocbot.init(tocConfig);

    // Fixed positioning on scroll
    var offsetTop = $('.toc').offset().top - 95;
    window.onscroll = function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= offsetTop) {
        $('.toc').addClass('toc-fixed');
      } else {
        $('.toc').removeClass('toc-fixed');
      }
    };
  }
});
