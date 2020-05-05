import * as imgs from './img'
import Slider from './slider.js'
import json from '/json/rec.json'
import rankjson from '/json/rank.json'
import {lazyload} from '/scripts/lazyload.js'


(function() {
  console.log('rankjson: ', rankjson);

  //fetch本地文件容易出现跨域的问题，本地文件尽量使用 import export
  // fetch('/json/rec.json')
  // .then(res => res.json())
  // .then(render)
  // .catch(err => {
  //   console.log('err: ', err)
  // })

  (function render (jsonSource) {
    console.log('render: ', render);
    renderSlider(jsonSource.data.slider)
    renderRadio(jsonSource.data.radioList)
    renderPlaylists(jsonSource.data.songList)
    lazyload(document.querySelectorAll('.lazyload'))
  })(json)
  renderTopList(rankjson.data.topList)

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
    console.log('radios: ', radios);
    document.querySelector('.radios .list').innerHTML = radios.map(radio => 
      `<div class="list-item">
        <div class="list-media">
          <img class="lazyload" data-src="${radio.picUrl}">
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
          <img class="lazyload" data-src="${playlist.picUrl}">
          <span class="icon icon-play"></span>
          </div>
          <div class="list-detail">
          <h3 class="list-title">${playlist.songListDesc}</h3>
        </div>
      </div>`).join('')
  }
  function renderTopList(list) {
    console.log('list: ', list);
    document.querySelector('#rank-view .toplist').innerHTML = list.map(item => 
      `<li class="top-item">
      <div class="top-item-media">
        <a href="#">
          <img class="lazyload" data-src="${item.picUrl}">
        </a>
      </div>
      <div class="top-item-info">
        <h3 class="top-item-title ellipsis">${item.topTitle}</h3>
        <ul class="top-item-list">
          ${songlist(item.songList)}
        </ul>
      </div>
    </li>`).join('')
    lazyload(document.querySelectorAll('#rank-view .toplist .lazyload'))
    function songlist(songs) {
      return songs.map((song, i) => 
        `<li class="top-item-song">
          <i class="song-index">${i + 1}</i>
          <span class="song-name">${song.songname}</span>- ${song.singername}
        </li>`).join('')
    }
  }
})()
