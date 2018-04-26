import React, {
    Component
} from "react";
import PropTypes from "prop-types";
import "./HomePage.css";
import {
    Helmet
} from "react-helmet";
import HeaderBar from "./HeaderBar";
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
export default class HomePage extends Component {

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
        return (
            <div className="HomePage">

				<Helmet>
			    <title> لتلقي آخر الأخبار عن السوريين في الأردن</title>
                </Helmet>

                <ShareArticleWidget language={this.props.language} direction={this.props.direction}/>

                <body>
                    <div class="divider"></div>
                    <div class="sectionheader"><h1>لتلقي آخر الأخبار عن السوريين في الأردن</h1></div>
            
                    <div id="news-articles">
                        <div class="news-article-1">
                            <img src="/images/article1.png" />
                            <div class="headlines">
                                <h4>أكثر من 10,000 لاجئ استفادوا من برنامج العفو</h4>
                                <p>2018 27 أيلول سبتمبر</p>
                            </div>
                        </div>
                        
                        <div class="news-article-2">
                            <img src="/images/article2.png" />
                            <div class="headlines">
                                <h4>أكثر من 10,000 لاجئ استفادوا من برنامج العفو</h4>
                                <p>2018 27 أيلول سبتمبر</p>
                            </div>
                        </div>

                        <div class="news-article-3">
                            <img src="/images/servicelisting.png" />
                            <div class="headlines">
                                <h4>أكثر من 10,000 لاجئ استفادوا من برنامج مفوضيّة (UNHCR) للعفو المخصص للاجئين غير المسجلين</h4>
                                <p>2018 27 أيلول سبتمبر</p>
                            </div>
                        </div>
                    </div>

                    <div class="seemore">
                        <img class="see-more-icon" src="/images/seemoreicon.png"/>
                        <p>شاهد جميع الأخبار</p>  
                    </div>

                    <div class="divider"></div>

                    <div class="sectionheader"><h1>بماذا نستطيع مساعدتك؟</h1></div>

                    <div id="what-we-can-help-with">
                        <ul>
                            <li class="health"><p>الصحة</p></li>
                            <li class="vitalrecords"><p>سجلات الأحوال المدنيّة</p></li>
                            <li class="cashassistance"><p>المساعدة الماليّة</p></li>
                            <li class="education"><p>التعليم</p></li>
                        </ul>
                    </div>

                    <div class="seemore">
                        <img class="see-more-icon" src="/images/seemoreicon.png"/>
                        <p>شاهد جميع الأقسام</p>  
                    </div>

                    <div class="divider"></div>

                    <div class="sectionheader"><h1>البحث عن خدمة</h1></div>

                    <div id="find-a-service">
                        <div class="by-location">
                            <a href="/">
                                <img src="/images/bylocation.png" alt="by location"/>
                                <p>حسب الموقع</p>
                            </a>
                        </div>
                        <div class="by-category">
                            <a href="/">
                                <img src="/images/bycategory.png" alt="bycategory"/>
                                <p>حسب القسم</p>
                            </a>
                        </div>
                        <div class="by-free-service">
                            <a href="/">
                                <img src="/images/freeservices.png" alt="free services"/>
                                <p>الخدمات المجانيّة</p>
                            </a>
                        </div>
                        <div class="by-all-services">
                            <a href="/">
                                <img src="/images/allservices.png" alt="all services"/>
                                <p>كل الخدمات</p>
                            </a>
                        </div>

                    </div>

                    <div class="seemore">
                        <img class="see-more-icon" src="/images/seemoreicon.png"/>
                        <p>البحث في جميع الخدمات</p>  
                    </div>

                    <div class="divider"></div>

                    <div class="sectionheader"><h1>عن خبرونا</h1></div>

                    <div id="about-us">
                        <img src="/images/aboutus.png" alt="About Us Video"/>
                        <h2>أهلاً وسهلاً في خبرونا!</h2>
                        <p>
                        موقع خبرونا يقدّم معلومات للاجئين في الأردن. لدينا صفحة على الفيسبوك أيضاً حيث نشارك فيها آخر الأخبار والمستجدات.
                        </p>
                    </div>

                    <div class="seemore">
                        <img class="see-more-icon" src="/images/seemoreicon.png"/>
                        <p>إقرأ المزيد</p>  
                    </div>

                    <div class="divider"></div>

                    <div class="sectionheader"><h1>أسئلة شائعة (أسئلة وأجوبة)</h1></div>
                    <div id="FAQ">
                        <ul>
                            <li><a href="/">كيف أحصل على عقد زواج؟</a></li>
                            <li><a href="/">كيف أحصل على شهادة ميلاد؟</a></li>
                            <li><a href="/">ماذا عليّ أن أفعل في حالات الطوارئ الصحيّة؟</a></li>
                            <li><a href="/">كيف أحصل على المساعدة الماليّة؟</a></li>
                        </ul>
                    </div>

                    <div class="seemore">
                        <img class="see-more-icon" src="/images/seemoreicon.png"/>
                        <p>إقرأ المزيد</p>  
                    </div>      
                </body>
            </div>
        );
    }
}
