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
    renderVideo(url) {
        const APP_ID = this.context.config.appId;

        if (/facebook.com/.test(url)) {
            let videoId = url.replace(/.*facebook.com\/.*\/videos\/(.*)\/.*/, "$1");

            return <FacebookPlayer style={{maxWidth: 100 }} className={"Facebook"} videoId={videoId} appId={APP_ID} />;
        } else if (/youtube.com/) {
            let videoId = url.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, "$7");
            return <YouTube videoId={videoId} className={"YouTube"} />;
        }
        return null;
    }
    render() {

        return (
            <div className="ArticlePage">
					<Helmet>
			    <title> أكثر من 10,000 لاجئ استفادوا من برنامج العفو</title>
                </Helmet>
                <div id="timestamp">
                <p>Last updated: 4/19/18</p>
                </div>

				<div id="audio"><AudioPlayer src={"/audio/short-news.ogg"}/></div>

                    <article>
                        <div id= "topthird">
                            <h1>أكثر من 10,000 لاجئ استفادوا من برنامج العفو</h1>
                                <p>آخر موعد للتقديم هو 27 أيلول (سبتمبر) 2018</p>
                        
                            <div id="tldr">
                                <ul> 
                                    <li> في 4 آذار (مارس) 2018، أعلنت وزارة الداخلية الأردنية ومفوضيّة اللاجئين (UNHCR) عن برنامج لمساعدة اللاجئين الذين يعيشون بشكل غير رسمي في المناطق المدنيّة ويهدف هذا البرنامج إلى تسوية وضعهم.</li>
                                    <li>  ومنذ ذلك الحين ووفقاً لمفوضيّة اللاجئين، تواصل أكثر من 31,000 لاجئ مع مفوضيّة اللاجئين واستفاد أكثر من 10,000 منهم من هذا البرنامج. </li>
                                    <li> يمكنك مشاهدة فيديو مفوضيّة اللاجئين على الفيسبوك:
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {this.renderVideo("https://www.facebook.com/UNHCRJordan/videos/2128367340513560/")}

                    <div id="maincontent">
                        <b>
                        هل أنا مؤهل للتقديم؟
                        </b>
                        <p>إذا كنت تعيش خارج المخيم ودون وثائق قانونية، يمكن أن يساعدك هذا البرنامج في الحصول على وضع قانوني في الأردن -- بشرط أنّك لم تغادر المخيم بشكل غير قانوني عند أو بعد 1 تموز (يوليو) 2017
                        </p>
                        <b>لمزيد من المعلومات وللتعرّف على كيفيّة التقديم:
                        </b>
                        <p><a href="/">برنامج مفوضيّة اللاجئين للعفو المخصص للاجئين غير المسجلين</a></p>
                        <b>آخر موعد للتقديم هو 27 أيلول (سبتمبر) 2018.
                        </b>    
                    </div>
                    <img src="/images/article2.png" alt="UNICEF Amnesty Program"></img>
                </article>
            </div>
        );
    }
}
