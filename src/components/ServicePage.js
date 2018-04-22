import React, {
    Component
} from "react";
import PropTypes from "prop-types";
import "./ArticlePage.css";
import "./Article2.css";
import {
    Helmet
} from "react-helmet";
import FacebookPlayer from "react-facebook-player";
import YouTube from "react-youtube";
import HeaderBar from "./HeaderBar";
import AudioPlayer from './AudioPlayer';

const Remarkable = require("remarkable");

const md = new Remarkable("full", {
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
});

/**
 *
 */
export default class ArticlePage extends Component {

    static contextTypes = {
        config: PropTypes.object,
    };
    
    render() {

        return (
            <div className="ServicePage">
					<Helmet>
			    <title> أكثر من 10,000 لاجئ استفادوا من برنامج مزوّد خدمات قانونية تابع لميرسي كور (مفرق Mafraq)</title>
                </Helmet>
                <div id="timestamp">
                    Last updated: 3/19/18
                </div>

				<div id="audio"><AudioPlayer src={"/audio/short-news.ogg"}/></div>

                    <article>
                        <div id= "generalinfo">
                            <h1>مزوّد خدمات قانونية تابع لميرسي كور (مفرق Mafraq)</h1>
                            <p>العلامات (tags): مساعدة قانونية، سجلات الأحوال المدنية، مفرق</p>
                            <p>Icons:</p>
                        </div>
                           
                </article>
            </div>
        );
    }
}
