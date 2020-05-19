export default class Search {
    constructor (el) {
        this.$el = el
        this.$input = this.$el.querySelector('#search')
        this.$songs = this.$el.querySelector('.song-list')
        this.$input.addEventListener('keyup',this.onKeyUp.bind(this))
        this.keyword = ''
        this.songs = []
        this.page = 1
        this.perpage = 20
        this.nomore = json.data.song.curpage
        this.onscroll = this.onScroll.bind(this)
        window.addEventListener('scroll',this.onscroll)
    }

    onKeyUp (event) {
        let keyword = event.target.value.trim()
        if (!keyword) return this.reset()
        console.log('this: ', this);
        console.log('event.target: ', event.target);

        if (event.key !== 'Enter') return
        this.search(keyword)
    }

    onScroll () {
        if (this.nomore) return
        if (document.documentElementClientHeight + pageYOffSet > document.body.scrollHeight - 50) {
            this.search(this.keyword,this.page + 1)

        }
    }

    reset (){
        this.page = 1
        this.keyword = ''
        this.songs = []
    }

    search (keyword,page) {
        this.keyword = keyword
        fetch(`http://localhost:4000/search?keyword=${this.keyword}&page=${page || this.page}`)
            .then(res => res.json())
            .then(json => {
                // this.page = this.data.song.curpage
               return json.data.song.list
            } )
            .then(songs => this.append(songs))
    }
    
    append(songs) {
        let html = songs.map(song => `
          <li class="song-item">
            <i class="icon icon-music"></i>
            <div class="song-name ellipsis">${song.songname}</div>
            <div class="song-artist ellipsis">${song.singer.map(s => s.name).join(' ')}</div>
          </li>`).join('')
        this.$songs.insertAdjacentHTML('beforeend', html)
    }

    //todo 搜索无实际内容，都是undefined
}