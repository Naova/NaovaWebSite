import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

class Scientific extends Component {

    renderGitHub() {
        const { github } = this.props;
        if (github) {
            return <p>
                <a href={github}>
                    <FormattedMessage id="scientific.github" defaultMessage="GitHub link" />
                </a>
            </p>
        } else {
            return null;
        }
    }

    renderDoc() {
        const { link, url } = this.props;
        let pathToDoc = link ? require(`../../doc/scientific/${link}`) : url;

        return (
            <a href={pathToDoc} type="button" className="btn btn-default">
                    <FormattedMessage id="scientific.btn" defaultMessage="Read document" />
            </a>
        )
    }

    render() {
        const { title, lang, idDate, defaultMessageDate, source } = this.props;
        return (
            <div id="scientific">
                <SectionHeaderNao isBigNaoFace={false} idSmallTitle={idDate} defaultMessageSmallTitle={defaultMessageDate} title={" - source : " + source}>
                    <span>[{lang}] - {title}</span>
                </SectionHeaderNao>
                <div className="naova-scientific-resume">
                    {this.renderGitHub()}
                    {this.renderDoc()}
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
    url: PropTypes.string,
    source: PropTypes.string,
    github: PropTypes.string
}

export default Scientific;