/* ============================================================
   toc-init.js — TOC (目录) 初始化与交互逻辑
   ============================================================ */
$(document).ready(function() {
  var $tocMenuItem = $('#menu-new li').has('a[href="#toc"], a[href$="#toc"]');

  // TOC toggle click handler
  $(document).on('click', 'a[href="#toc"], a[href$="#toc"]', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $toc = $('.toc');
    if ($toc.length > 0) {
      $tocMenuItem.find('a').toggleClass('active');
      $toc.toggle();
    }
    return false;
  });

  // Desktop TOC initialization and scroll behavior
  if ($(".toc").length > 0 && document.body.clientWidth > 1200) {
    $tocMenuItem.closest('nav').removeClass('hide').addClass('navbar');
    $tocMenuItem.show();

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
