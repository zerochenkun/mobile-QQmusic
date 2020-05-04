import * as imgs from './img'
import Slider from './slider.js'
import json from '/json/rec.json'


(function() {
  console.log('json: ', json);

  //fetch本地文件容易出现跨域的问题，本地文件尽量使用 import export
  // fetch('/json/rec.json')
  // .then(res => res.json())
  // .then(render)
  // .catch(err => {
  //   console.log('err: ', err)
  // })

  (function render (json) {
    renderSlider(json.data.slider)
    renderRadio ()
  })(json)

  function renderSlider(sli){
    let slides = sli.map( slide => {
      return { link:slide.linkUrl,image:slide.picUrl}
    })
    new Slider({
      el:document.querySelector('#slider'),
      slides
    })
  }

  function renderRadio () {
    
  }
})()
