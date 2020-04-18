import * as imgs from './img'
import Slider from './slider.js'
// console.log('Slider ',Slider)

(function() {

  let slider = new Slider({
    el: document.querySelector('#slider'),
    slides: [
      { link: '#1', image:  imgs.img1},
      { link: '#2', image: imgs.img2 },
      { link: '#3', image: imgs.img3 },
      { link: '#4', image: imgs.img4},
      { link: '#5', image: imgs.img5 }
    ]
  })

  window.slider = slider
})()
