// 事件委托 （事件代理）
document.addEventListener('click',function(){
    let target = event.target
    if (target.dataset.role !== 'tab' ) return
    [].forEach.call(target.parentElement.children,tab =>{
        tab.classList.remove('active')
    })

    target.classList.add('active')

    let content = document.querySelector(target.dataset.view) // '#rank-view'
   
    if (content) {
        /*
         * 排他思想
         */
        [].forEach.call(content.parentElement.children,children => {
            children.style.display = 'none'
        })
        content.style.display = 'block'
    }
})