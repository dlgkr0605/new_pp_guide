$(function () {
  const $scroll = $('.exh-scroll');
  let isDown = false;
  let startX, scrollLeft;
  let dragged = false;

  $scroll.find('img, a').on('dragstart', function (e) {
    e.preventDefault();
  });

  $scroll.on('mousedown', function (e) {
    isDown = true;
    dragged = false;
    startX = e.pageX;
    scrollLeft = $scroll.scrollLeft();
  });

  $(document).on('mouseup', function () {
    isDown = false;
    // 클릭 여부만 판단하고, 링크 직접 이동은 안 함!
  });

  $scroll.on('mousemove', function (e) {
    if (!isDown) return;
    const x = e.pageX;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      dragged = true;
    }
    $scroll.scrollLeft(scrollLeft - walk);
  });

  $scroll.on('click', 'a', function (e) {
    if (dragged) {
      e.preventDefault(); // 드래그 상태일 땐 링크 막음
    }
  });

  $scroll.on('mouseleave', function () {
    isDown = false;
  });

  $('.scroll-btn.next').click(function () {
    $scroll.animate({ scrollLeft: $scroll.scrollLeft() + 320 }, 300);
  });
  $('.scroll-btn.prev').click(function () {
    $scroll.animate({ scrollLeft: $scroll.scrollLeft() - 320 }, 300);
  });
});
