import React, {
    Component
} from "react";
import PropTypes from "prop-types";
import "./ArticlePage.css";
import "./ServicePage.css";
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
    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          };
          const { onNavigate } = this.props;
        return (
            <div className="ArticlePage">
					<Helmet>
			    <title> أكثر من 10,000 لاجئ استفادوا من برنامج مزوّد خدمات قانونية تابع لميرسي كور (مفرق Mafraq)</title>
                </Helmet>
                <ShareArticleWidget language={this.props.language} direction={this.props.direction} lastUpdated={"3/19/18"} />

				<div id="audio"><AudioPlayer src={"/audio/short-news.ogg"}/></div>

                    <article>
                        <div id="generalinfo">
                            <h1>مزوّد خدمات قانونية تابع لميرسي كور (مفرق Mafraq)</h1>
                            <p>العلامات (tags): مساعدة قانونية، سجلات الأحوال المدنية، مفرق</p>                            
                            <div id="icons">
                                <img src="/images/wifi.png" alt="Wifi"/>
                                <img src="/images/wc.png" alt="toilet"/>
                                <img src="/images/breastfeeding.png" alt="Breastfeeding"/>
                                <img src="/images/handicap.png" alt="wheelchair"/>
                                <img src="/images/free.png" alt="wheelchair"/>
                            </div>
                            <div id="info">
                                <ul>
                                    <li className="telephone">
                                    <p>0770410202</p>
                                    </li>
                                    <li className="whatsapp">
                                    <p>0770410202</p>
                                    </li>
                                    <li className="facebook">
                                    <p>fb.me/khabrona.info1</p>
                                    </li>
                                    <li className="location">
                                    <p><a href="/">حي الجنوبي</a><br/>
                                        العنوان: حي الجنوبي، على الطرف المقابل من استاد البلدي وقرب رابطة حمامات السلام. الطابق الأول.</p>
                                    </li>
                                </ul>
                                <div class="locationimage">
                                    <img src="/images/servicelisting.png" alt="Al Janoubi Entrance"></img>
                                    <p class="locationcaption">الجزء الأمامي من المبنى</p>
                                </div>
                            </div>
                        </div>
                       
                        <div id="servicesDescr">
                            <h1>معلومات عن الخدمات المقدمة</h1>
                            <ul>
                                <li>جلسات أسئلة وأجوبة مع محامي </li>
                                <li>مساعدة في الحصول على مستندات أحوال مدنية، بما فيها شهادات ميلاد، عقود زواج، وشهادات وفاة </li>
                                <li>مساعدة في التسجيل على برنامج مفوضيّة اللاجئين (UNHCR) للعفو </li>
                            </ul>
                            <p>التكلفة: مجاناً</p>
                            <p>ساعات العمل: أيام الإثنين من العاشرة صباحاً وحتى الثالثة ظهراً.</p>
                            <p>الأحقيّة (من يستطيع الإستفادة من هذه الخدمة): الجميع مرحب به.</p>
                            <p>ماذا علي أن أحضر معي: بطاقة هويّة. (بطاقة تعريفك)</p>
                            <p>ملاحظات: أحرص على القدوم قبل بساعة حتى تتمكن من الاستفادة من هذه الخدمة.</p>
                            <p>عناوين أخرى: في<a href="/"> إربد</a> و <a href="/">رامثا</a></p>
                        </div>
                        <div id="addtlinfo">
                            <b>المرافق:</b>
                            <ul>
                                <li class="wifi"><p>انترنت واي فاي: يوجد</p></li>
                                <li class="wc"><p>دورات مياه مختلطة: يوجد</p></li>
                                <li class="breastfeeding"><p>مساحة للإرضاع: يوجد</p></li>
                                <li class="handicap"><p>مسارات ممهدة لمستعملي الكراسي المتحركة: نعم</p></li>
                                <li class="free"><p>مجانية: نعم</p></li>
                            </ul>
                        </div>
                </article>
                <h3>معلومات ذات صله</h3>
                <Slider {...settings} className="slider">
                    <div className="container" onClick={() => onNavigate("https://web.facebook.com/khabrona.info1")}>                                                
                            <img src="/images/icons/follow-us.svg" />
                            <div className="slide-content">
                                <h4 className="slider-title">Follow us on Facebook</h4>							
                            </div>
					</div>
                    <div className="container" onClick={() => onNavigate("/jordan/mock/article1")} >                        						
                        <img src="/images/article2.png" />
						<div className="slide-content">
							<h4 className="slider-title">الوضع القانوني لبعض اللاجئين السوريين غير المسجلين</h4>
							<h5>1 منذ يوم</h5>
						</div>                 
					</div>
					<div className="container" onClick={() => onNavigate("/jordan/mock/article2")}>                        
						<img src="/images/article1.png" />
						<div className="slide-content">
							<h4 class="slider-title">مزوّد خدمات قانونية تابع لميرسي كور (مفرق Mafraq)</h4>
							<h5>1 منذ يوم</h5>
						</div>                        
					</div>
				</Slider>
            </div>
        );
    }
}
