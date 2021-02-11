export const getGifs = async (categoryName)  => {
    let url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoryName)}&limit=6&api_key=TFXsAe7d734cHSvMPx91dRQmaRepQ4mK`
    let resultData  = await fetch(url)
    let {data} = await resultData.json();
    

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs;

}