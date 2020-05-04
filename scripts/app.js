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

  (function render (jsonSource) {
    renderSlider(jsonSource.data.slider)
    renderRadio(jsonSource.data.radioList)
    renderPlaylists(jsonSource.data.songList)

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

  function renderRadio (radios) {
    document.querySelector('.radios .list').innerHTML = radios.map(radio => 
      `<div class="list-item">
        <div class="list-media">
          <img class="lazyload" src="${radio.picUrl}">
          <span class="icon icon-play"></span>
          </div>
          <div class="list-detail">
          <h3 class="list-title">${radio.Ftitle}</h3>
        </div>
      </div>`).join('')
  }
  function renderPlaylists (playlists) {
    document.querySelector('.playlists .list').innerHTML = playlists.map(playlist => 
      `<div class="list-item">
        <div class="list-media">
          <img class="lazyload" src="${playlist.picUrl}">
          <span class="icon icon-play"></span>
          </div>
          <div class="list-detail">
          <h3 class="list-title">${playlist.songListDesc}</h3>
        </div>
      </div>`).join('')
  }

})()
