const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 500; // 500px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(169, 28, 115, 0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(255, 67, 5, 0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(14, 72, 222, 0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(107, 232, 87, 0.7)
  `;
}

hero.addEventListener("mousemove", shadow);
