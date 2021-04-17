//duplicate crosses content x10

const duplicateHtml = (element, quantity) => {
  const newContent = new Array(quantity).fill(element.innerHTML).join('')
  element.innerHTML = newContent
}

duplicateHtml(document.querySelector('#crosses'), 10)
anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i, l) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

anime({
  targets: '#tunnel circle',
  scale: 1.1,
  direction: 'alternate',
  loop: true,
  duration: 250,
  easing: 'easeInOutSine',
  delay: (el, index) => index * 50,
})

anime({
  targets: '.conveyor',
  translateX: '-50%',
  duration: 1500,
  loop: true,
  autoplay: true,
  easing: 'linear'
})

const zigZagPath = document.querySelector('#zigzag path')
const zigZagOffset = anime.setDashoffset(zigZagPath)
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset)
anime({
  targets: zigZagPath,
  strokeDashoffset: [zigZagOffset, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true
})

const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath)

wavePath.setAttribute('stroke-dashoffset', waveOffset)
anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

duplicateHtml(document.querySelector('#dots'), 40)
const allDots = document.querySelectorAll('#dots .dot')

allDots.forEach(dot => {
  anime({
    targets: dot,
    rotate: (el, i) => anime.random(90, 360),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });
});

duplicateHtml(document.querySelector('#circles'), 20)
anime({
  targets: '#circles .dot',
  scale: [0, 1.2],
  delay: (el, i) => i * 100,
  duration: 250,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
});

//flashes animation
anime({
  targets: '#flashes .flash',
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  //apply a random delay to each one
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

anime({
  targets: '#squares rect',
  translateX: ['-50%', '-50%'],
  translateY: ['-50%', '-50%'],
  rotate: [45, 0, -45],
  delay: (el, i) => 100 * i,
  duration: 750,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})

