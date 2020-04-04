const url = 'https://i.imgur.com/8k2MZsw.png';

const yerbas = Array.from({ length: 20 }, (_) => {
  const element = document.createElement('img');
  element.src = url;
  document.body.appendChild(element);
  const scale = 0.5 + Math.random();
  element.style.zIndex = -scale;
  element.style.transform = `scale(${scale})`;
  element.style.animation = `rotation ${1 + Math.random() * 4}s infinite linear`;
  return {
    location: {
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.random() * -window.innerHeight / 2,
    },
    velocity: {
      x: (Math.random() > 0.5 ? -1 : 1) * 5 * Math.random(),
      y: 10 + 20 * Math.random()
    },
    element,
  };
});

function draw() {
  yerbas.forEach(yerba => {
    yerba.element.style.top = yerba.location.y + 'px';
    yerba.element.style.left = yerba.location.x + 'px';
  });
}

function update() {
  yerbas.forEach(yerba => {
    yerba.location.x += yerba.velocity.x;
    yerba.location.y += yerba.velocity.y;

    if (yerba.location.y + yerba.element.clientHeight > window.innerHeight + yerba.element.clientHeight) {
      yerba.location.y = Math.random() * -window.innerHeight / 2;
      yerba.location.x = Math.floor(Math.random() * window.innerWidth);
    }
  });
}

function loop() {
  draw();
  update();
  requestAnimationFrame(loop);
  // counter++;
  // if (counter < 100) {
  // }
}

loop();