import React from 'react'

const getImageLink = (article) => {
  const isYoutube = article.link.toLowerCase().includes('youtube')

  if(isYoutube) {
    
    const index = article.link.lastIndexOf("=");
    const videoId = article.link.substring(index+1, article.link.length)
    
    return `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  }

  if(article.image) {
    return require(`../../img/press/${article.image.toLowerCase()}`)
  }

  return require("../../img/logo/naoface.svg").default;

}


const PressCard = ({article}) => {
  const date = new Date(article.date)
  
  const image = getImageLink(article)

  return (
    <div className="press-card" onClick={() => window.open(article.link, "_blank")}>
        <p className="press-card-title">{article.title}</p>
        <p className="press-card-date">{date.toLocaleDateString()}</p>
        <p className="press-card-summary">{article.resume}</p>
        <p className="press-card-source">Source: {article.source}</p>
        <img src={image} className="press-card-img" />
    </div>
    
  )
}

export default PressCard