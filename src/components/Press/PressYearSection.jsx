import React from 'react'
import SectionHeaderNao from '../SectionHeaderNao/SectionHeaderNao'
import { FormattedHTMLMessage } from 'react-intl'
import PressCard from './PressCard';

const press_data = require("../../json/press.json");

const PressYearSection = ({year}) => {

    const yearData = press_data
    .filter(p => new Date(p.date).getFullYear() === year)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
    
  return (
    <div>
        <SectionHeaderNao isBigNaoFace={false}>
           <FormattedHTMLMessage id="tyl" defaultMessage={`Year ${year}`} />
        </SectionHeaderNao>
        <div className="row">
            <PressCard article={yearData[0]} />
        </div>
    </div>
  )
}

export default PressYearSection