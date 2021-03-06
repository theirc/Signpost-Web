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
import Slider from "react-slick";
import ShareArticleWidget from './ShareArticleWidget';

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
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        const {
            onNavigate
        } = this.props;
        return (
            <div className="ArticlePage">

				<Helmet>
			    <title> الوضع القانوني لبعض اللاجئين السوريين غير المسجلين</title>
                </Helmet>
                <ShareArticleWidget language={this.props.language} direction={this.props.direction} lastUpdated={"4/19/18"}/>
				<div id="audio">
                
                <audio controls>
                <source src="/audio/short-news.ogg" type="audio/ogg"></source>
                Your browser does not support the audio element.
            </audio>
                
</div>

                <article>
                    <div id="article-ctn">
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
                        {this.renderVideo("https://www.facebook.com/UNHCRJordan/videos/2107235179293443/")}

                        <div id="maincontent">
                            <b>
                            هل أنا مؤهل للتقديم؟
                            </b>
                            <p>إذا كنت تعيش خارج المخيم ودون وثائق قانونية، يمكن أن يساعدك هذا البرنامج في الحصول على وضع قانوني في الأردن -- بشرط أنّك لم تغادر المخيم بشكل غير قانوني عند أو بعد 1 تموز (يوليو) 2017
                            </p>
                            <b>لمزيد من المعلومات وللتعرّف على كيفيّة التقديم:
                            </b>
                            <p><a href="/jordan/mock/article2">برنامج مفوضيّة اللاجئين للعفو المخصص للاجئين غير المسجلين</a></p>
                            <b>آخر موعد للتقديم هو 27 أيلول (سبتمبر) 2018.
                            </b>
                        </div>                    
                    </div>
                </article>
                <h3>معلومات ذات صله</h3>
                <div class="carousel">				
                <Slider {...settings} className="slider">
                    <div className="container" onClick={() => window.open("https://www.facebook.com/khabrona.info1/posts/166185500872571")}>                                                
                            <img src="/images/icons/follow-us.svg" />
                            <div className="slide-content">
                                <h4 className="slider-title">Follow us on Facebook</h4>							
                            </div>
					</div>
                    <div className="container" onClick={() => onNavigate("/jordan/mock/article2")} >                        						
                        <img src="/images/article1.png" />
						<div className="slide-content">
							<h4 className="slider-title">الوضع القانوني لبعض اللاجئين السوريين غير المسجلين</h4>
							<h5>1 منذ يوم</h5>
						</div>                 
					</div>
					<div className="container" onClick={() => onNavigate("/jordan/mock/service-listing")}>                        
						<img src="/images/servicelisting.png" />
						<div className="slide-content">
							<h4 class="slider-title">مزوّد خدمات قانونية تابع لميرسي كور (مفرق Mafraq)</h4>
							<h5>1 منذ يوم</h5>
						</div>                        
					</div>                    
				</Slider>
                </div>
            </div>
        );
    }
}
