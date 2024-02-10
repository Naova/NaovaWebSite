import React from 'react'

const PressCard = ({article}) => {
    console.log(article)
    const date = new Date(article.date)
  return (
    <div className="press-card">
        <p className="press-card-title">{article.title}</p>
        <p>{date.toLocaleDateString()}</p>
    </div>
  )
}

export default PressCard