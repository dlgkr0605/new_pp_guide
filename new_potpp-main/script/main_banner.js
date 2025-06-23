$(document).ready(function () {
  let current = 0;
  const $slides = $(".slide");
  const total = $slides.length;

  function goToSlide(index) {
    $slides.removeClass("active");
    $slides.eq(index).addClass("active");
    current = index;
  }

  setInterval(function () {
    let next = (current + 1) % total;
    goToSlide(next);
  }, 5000);

  $slides.click(function () {
    const index = $(this).index();
    goToSlide(index);
  });
});