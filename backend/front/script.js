const news = document.querySelector('.news')
const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f6e8d45629msh552fc027df8dfeap1ed240jsnb31df85c67cd',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};
const newsPost = (post) => {
    const newsDiv = document.createElement('div')
    newsDiv.classList.add('post')
    newsDiv.innerHTML =
        `<h2>${post.title}</h2>
        <a href='${post.game_url}'><img src = ${post.thumbnail}></a>
        <p>Жанр: ${post.genre}</p>
        <p>Платформа: ${post.platform}</p>
        <p>Издатель: ${post.publisher}</p>
        <p>Дата выпуска: ${post.release_date}</p>
        `

    news.append(newsDiv)
}

const newsLoading = () => {
    const divLoading = document.createElement('div')
    divLoading.classList.add('load')
    divLoading.innerHTML =
        `<div class="loading-news">Loading</div>`

    news.append(divLoading)
}
const newsUnLoad = () => {
    const unLoad = document.querySelector('.load')
    unLoad.innerHTML = ''
}
const newsPostErr = () => {
    const divErr = document.createElement('div')
    divErr.classList.add('error')
    divErr.innerHTML =
        `Ошибка загрузки`
    news.append(divErr)
}

const newsPosting = async () => {
    newsLoading()
    try {
        const news = await fetch(url, options)
        const newsJson = await news.json()
        inPrint = newsJson.map(news => newsPost(news))
    } catch (error) {
        newsPostErr()
    } finally {
        newsUnLoad()
    }
}
newsPosting()
