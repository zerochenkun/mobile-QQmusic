export function lazyload(imgs) {
    imgs = Array.from(imgs)
  //1.1-懒加载： IntersectionObserver 较新API,老浏览器可能无法使用
    if ('IntersectionObserver' in window) {
      let observer = new IntersectionObserver(function(entries) {
        console.log(entries)
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            loadImage(entry.target, function() {
              observer.unobserve(entry.target)
            })
          }
        })
      }, { threshold: 0.01 })
    
      imgs.forEach(img => observer.observe(img))
    } else {
        // 1.2-懒加载：旧方法，适用性好，但是代码多呀
      let onscroll = throttle(function() {
        if (imgs.length === 0) {
          return window.removeEventListener('scroll', onscroll)
        }
        imgs = imgs.filter(img => img.classList.contains('lazyload'))
        imgs.forEach(img => inViewport(img) && loadImage(img))
      }, 300)
    
      window.addEventListener('scroll', onscroll)
    //   window.dispatchEvent(new Event('scroll'))
    }
  // 2 时间戳节流
    function throttle(func, wait) {
      let prev, timer
      return function fn() {
        let curr = Date.now()
        let diff = curr - prev
        if (!prev || diff >= wait) {
          func()
          prev = curr
        }
      }
    }
  
    function inViewport(img) {
      let { top, left, right, bottom } = img.getBoundingClientRect()
      let vpWidth = document.documentElement.clientWidth
      let vpHeight = document.documentElement.clientHeight
      return (
        (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) &&
        (left > 0 && left < vpWidth || right > 0 && right < vpWidth)
      )
    }
  
    function loadImage(img, callback) {
      let image = new Image()
      image.src = img.dataset.src
      image.onload = function() {
        img.src = image.src
        img.classList.remove('lazyload')
        if (typeof callback === 'function') callback()
      }
    }
  }