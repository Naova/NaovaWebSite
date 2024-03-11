import React from 'react'
import SectionHeaderNao from '../SectionHeaderNao/SectionHeaderNao'
import { FormattedHTMLMessage } from 'react-intl'
import PressCard from './PressCard';
import "./press.css"

const press_data = require("../../json/press.json");

const PressYearSection = ({year}) => {

    const yearData = press_data
    .filter(p => new Date(p.date).getFullYear() === year)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if(yearData.length === 0) return null;
  return (
    <div>
        <SectionHeaderNao isBigNaoFace={false}>
           <FormattedHTMLMessage id="press.year" defaultMessage={`Year`} />
          {' '}{year}
        </SectionHeaderNao>
        <div className="press-section-container">
            {yearData.map((article, i) => {
                return <PressCard key={i} article={article} />;
            })}
        </div>
    </div>
  )
}

export default PressYearSection