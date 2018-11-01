import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage} from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

class Scientific extends Component {

    render(){
        const {title, lang, idDate, defaultMessageDate, link, source} = this.props;
        return(
            <div id="scientific">
                <SectionHeaderNao isBigNaoFace={false} idSmallTitle={idDate} defaultMessageSmallTitle={defaultMessageDate} title={" - source : "+source}>
                    <span>[{lang}] - {title}</span>               
                </SectionHeaderNao>
                <div className="naova-scientific-resume">
                    <a href={require(`../../doc/scientific/${link}`)} target="_blank" type="button" className="btn btn-default">
                        <FormattedMessage id="press.btn" defaultMessage="Show more" />
                    </a>
                </div>
            </div>
        );
    }
}


Scientific.propTypes = {
    title: PropTypes.string,
    lang: PropTypes.string,
    idDate: PropTypes.string,
    defaultMessageDate: PropTypes.string,
    link: PropTypes.string,
    source: PropTypes.string
}

export default Scientific;