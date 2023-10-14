import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedHTMLMessage, FormattedMessage} from "react-intl";

import "./historique.css";

const naoFace_img = require("../../img/logo/naoface.svg").default;

class Historique extends Component {

    render(){
        const {idDate, defaultMessageDate, idContent, defaultMessageContent} = this.props;
        return(
            <div id="history">
                <img src={naoFace_img} className="naova_nao_img" alt="Nao Face Logo"/>
                <h2 className="naova_historique">
                    <span className="highlight naova_historique_date"><strong><FormattedMessage id={idDate} defaultMessage={defaultMessageDate}/></strong></span>
                </h2>
                <div className="naova_content_historique">
                    <FormattedHTMLMessage id={idContent} defaultMessage={defaultMessageContent} />
                </div>
          </div>
        );
    }
}

Historique.propTypes = {
    idDate: PropTypes.string,
    defaultMessageDate: PropTypes.string,
    idContent: PropTypes.string,
    defaultMessageContent: PropTypes.string,
}

export default Historique;