import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import SectionHeaderNao from "../SectionHeaderNao/SectionHeaderNao";

class Press extends Component {

    render() {
        const { title, lang, type, idDate, defaultMessageDate, resume, link, source } = this.props;
        return (
            <div id="press">
                <form name="subscribe-newsletter" method="post">
                  <input type="hidden" name="form-name" value="subscribe-newsletter" />
                  <p>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" id="email" name="email" required />
                  </p>
                  <p>
                    <input type="submit" value="Submit message" />
                  </p>
                </form>


                <SectionHeaderNao isBigNaoFace={false} idSmallTitle={idDate} defaultMessageSmallTitle={defaultMessageDate} title={" - source : " + source}>
                    <span>{title}</span>
                </SectionHeaderNao>
                <div className="naova-press-resume">
                    <p>[{lang} - {type}] - {resume}</p>
                    <a href={link} type="button" className="btn btn-default">
                        <FormattedMessage id="press.btn" defaultMessage="Show more" />
                    </a>
                </div>
            </div>
        );
    }
}


Press.propTypes = {
    title: PropTypes.string,
    lang: PropTypes.string,
    type: PropTypes.string,
    idDate: PropTypes.string,
    defaultMessageDate: PropTypes.string,
    resume: PropTypes.string,
    link: PropTypes.string,
    source: PropTypes.string
}

export default Press;