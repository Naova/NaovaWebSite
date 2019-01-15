import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

class Scientific extends Component {

    renderGitHub() {
        const { github } = this.props;
        if (github) {
            return <p>
                <a href={github} target="_blank">
                    <FormattedMessage id="scientific.github" defaultMessage="GitHub link" />
                </a>
            </p>
        } else {
            return null;
        }
    }

    render() {
        const { title, lang, idDate, defaultMessageDate, link, source } = this.props;
        return (
            <div id="scientific">
                <SectionHeaderNao isBigNaoFace={false} idSmallTitle={idDate} defaultMessageSmallTitle={defaultMessageDate} title={" - source : " + source}>
                    <span>[{lang}] - {title}</span>
                </SectionHeaderNao>
                <div className="naova-scientific-resume">
                    {this.renderGitHub()}
                    <a href={require(`../../doc/scientific/${link}`)} target="_blank" type="button" className="btn btn-default">
                        <FormattedMessage id="scientific.btn" defaultMessage="Read document" />
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
    source: PropTypes.string,
    github: PropTypes.string
}

export default Scientific;