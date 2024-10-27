console.clear();

let ww = window.innerWidth;
let wh = window.innerHeight;
let tilt_max = 20;
let card = document.querySelector('.card');

window.addEventListener('mousemove', ({x, y}) => {
  let h = 100 / ww * x;
  let tilt_h = (tilt_max * 2) / 100 * h - tilt_max;
  card.style.setProperty('--tiltY', tilt_h);
  let v = 100 / wh * y;
  let tilt_v = (tilt_max * 2) / 100 * v - tilt_max;
  card.style.setProperty('--tiltX', tilt_v);
  
  let wwc = ww / 2;
  let whc = wh / 2;
  var angleDeg = Math.atan2(whc - y, wwc - x) * 180 / Math.PI;
  card.style.setProperty('--angle', angleDeg);
});