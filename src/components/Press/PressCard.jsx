import React from 'react'

const PressCard = ({article}) => {
  const date = new Date(article.date)
  const naoFace_img = require("../../img/logo/naoface.svg").default;

  return (
    <div className="press-card">
        <p className="press-card-title">{article.title}</p>
        <p className="press-card-date">{date.toLocaleDateString()}</p>
        <p className="press-card-summary">{article.resume}</p>
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="press-card-link">Read the article</a>
        <p className="press-card-source">Source: {article.source}</p>
        <img src={naoFace_img} className="press-card-img" />
    </div>
  )
}

export default PressCard