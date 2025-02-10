const imgs = document.querySelectorAll('.img');
const body = document.body;

imgs.forEach(img => {
  img.addEventListener('mouseenter', () => {
    const bgImage = window.getComputedStyle(img).backgroundImage;
    body.style.backgroundImage = bgImage; // Đặt ảnh nền của body
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
  });

  img.addEventListener('mouseleave', () => {
    body.style.backgroundImage = ''; // Trở về màu gốc
    body.style.background = '#0c221f';
  });
});
