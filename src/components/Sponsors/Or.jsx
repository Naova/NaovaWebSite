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
            <Sponsors
                  img='Teledyne_Logo_Blue.png'
                  link='https://www.teledyne.com/'
                  colNum='6'
                  idTitle='sponsors.sp9'
                  defaultMessageTitle="Teledyne Technologies"
                />
          </div>
        </div>
      </div>
    );
  }
}

export default Or;
