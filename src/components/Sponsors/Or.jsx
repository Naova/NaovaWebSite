import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Sponsors from "./Sponsors";

class Or extends Component {
  render() {
    return (
      <div>
        <SectionHeaderNao isBigNaoFace={false}>
          <FormattedMessage id='sponsors.gold' defaultMessage='Gold' />
        </SectionHeaderNao>
        <div className='container'>
          <div className='justify-content-center row'>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Or;
