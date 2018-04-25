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
			    <title> الوضع القانوني لبعض اللاجئين السوريين غير المسجلين</title>
                </Helmet>
                <ShareArticleWidget language={this.props.language} direction={this.props.direction}/>

                <body>
                    <div class="divider"></div>
                    <div class="sectionheader"><h1>آخر الأخبار</h1></div>
            
                    <div class="news-articles">
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

                    <div class="what-we-can-help-with">
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

                    <div class="find-a-service">
                        <div id="by-location">
                            <img src="/images/bylocation.png"/>
                            <h4>حسب الموقع</h4>
                        </div>
                        <div id="by-category">
                            <img src="/images/bycategory.png"/>
                            <p>حسب القسم</p>
                        </div>
                        <div id="by-free-service">
                            <img src="/images/freeservices.png"/>
                            <p>الخدمات المجانيّة</p>
                        </div>
                        <div id="by-all-services">
                            <img src="/images/allservices.png"/>
                            <p>كل الخدمات</p>
                        </div>

                    </div>

                    <div class="seemore">
                        <img class="see-more-icon" src="/images/seemoreicon.png"/>
                        <p>البحث في جميع الخدمات</p>  
                    </div>

                    <div class="divider"></div>
                </body>
                
            </div>
        );
    }
}
