import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import SectionHeaderNao from '../SectionHeaderNao/SectionHeaderNao'
import { FormattedMessage } from 'react-intl'
import Sponsors from './Sponsors'
import { SPONSORS, SPONSOR_TITLES } from './sponsors.constants'

const SponsorSection = ({sponsorType}) => {
  const filteredSponsors = useMemo(
    () => SPONSORS.filter((sponsor) => sponsor.type === sponsorType),
    [sponsorType, SPONSORS]) 

  if(filteredSponsors.length === 0) return null

  return (
    <div>
        <SectionHeaderNao isBigNaoFace={false}>
            <FormattedMessage id={SPONSOR_TITLES[sponsorType].title} defaultMessage={SPONSOR_TITLES[sponsorType].defaultMessage} />
        </SectionHeaderNao>
        <div className="container">
            <div className="row align-items-center">
                {
                    filteredSponsors.map((sponsor) => <Sponsors 
                    key={sponsor.link}
                    img={sponsor.img}
                    link={sponsor.link}
                    colNum={sponsor.colNum}
                    idTitle={sponsor.title}
                    defaultMessageTitle={sponsor.defaultMessageTitle} />
                    )
                }
            </div> 
        </div>
    </div>
  )
}

SponsorSection.propTypes = {
    sponsorType: PropTypes.string,
}

export default SponsorSection