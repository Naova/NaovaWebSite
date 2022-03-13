import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";
import Sponsors from "./Sponsors";

class Platine extends Component {
  render() {
    return (
      <div>
        <SectionHeaderNao isBigNaoFace={false}>
          <FormattedMessage id='sponsors.platinum' defaultMessage='Platinum' />
        </SectionHeaderNao>

        <div className='container'>
          <div className='row align-items-center'>
            {/* <Sponsors
                  img='EQUISOFT_RGB_FR.png'
                  link='https://www.equisoft.com/'
                  colNum='12'
                  idTitle='sponsors.sp5'
                  defaultMessageTitle='Équisoft'
                /> */}
            <Sponsors
              img='aeetslogo.png'
              link='http://aeets.com/'
              colNum='12'
              idTitle='sponsors.sp1'
              defaultMessageTitle="ETS's Student Association"
            />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Platine;
