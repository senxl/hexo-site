/* ============================================================
   hitokoto.js — 一言 API 调用
   ============================================================ */
(function() {
  function fetchHitokoto() {
    fetch('https://v1.hitokoto.cn/')
      .then(function(res) { return res.json(); })
      .then(function(data) {
        var textEl = document.getElementById('hitokoto_text');
        var fromEl = document.getElementById('hitokoto_from');
        if (textEl) {
          textEl.style.opacity = '0';
          setTimeout(function() {
            textEl.textContent = data.hitokoto;
            fromEl.textContent = data.from ? '——「' + data.from + '」' : '';
            textEl.style.opacity = '1';
            fromEl.style.opacity = '1';
          }, 300);
        }
      })
      .catch(function() {
        var textEl = document.getElementById('hitokoto_text');
        if (textEl) textEl.textContent = '世界上最重要的事情，就是不要忘记你所热爱的一切。';
      });
  }
  fetchHitokoto();
  setInterval(fetchHitokoto, 10000);
})();
