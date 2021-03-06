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
import ShareArticleWidget from './ShareArticleWidget';
import Slider from "react-slick";

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

            return <FacebookPlayer style={{maxWidth:100 }} className={"Facebook"} videoId={videoId} appId={APP_ID} />;
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
          const { onNavigate } = this.props;
        return (
            <div className="ArticlePage">
					<Helmet>
			    <title> الوضع القانوني لبعض اللاجئين السوريين غير المسجلين</title>
                </Helmet>
				<ShareArticleWidget language={this.props.language} direction={this.props.direction} lastUpdated={"4/19/18"} />


				{/* <div id="audio"><AudioPlayer src={"/audio/long-news.ogg"}/></div> */}

                <article>
                    <div class="article-ctn">
                    <div id="audio">
                        <audio controls>
                            <source src="/audio/long-news.ogg" type="audio/ogg"></source>
                            Your browser does not support the audio element.
                        </audio>
                        </div>
                        <div id= "topthird">
                            <h1>الوضع القانوني لبعض اللاجئين السوريين غير المسجلين</h1>
                                <p>كيف ممكن قدّم على برنامج العفو قبل انتهائه في شهر أيلول (سبتمبر)؟</p>

                            <div id="tldr">
                                <ul>
                                    <li> برنامج مفتوح لأي لاجئ قادم من سوريا وغير مسجّل في الأردن باستثناء من غادر مخيّمه في أو بعد 1 تموز (يوليو) 2017</li>
                                    <li>  آخر موعد للتقديم هو 27 أيلول (سبتمبر) 2018 </li>
                                    <li> يُمكن لبعض المنظمات غير الحكومية (NGOs) مساعدتك في عمليّة التقديم</li>
                                </ul>
                            </div>
                        </div>

                <img src="/images/article1.png" alt="UNICEF Amnesty Program"></img>

                        <div id="maincontent">
                            إذا كنت تعيش بدون وثائق قانونية، يمكن لبرنامج عفو جديد أن يساعدك في تسوية وضعك القانوني في الأردن -- بشرط أنّك لم تغادر المخيّم بشكل غير قانوني في أو بعد 1 يوليو 2017. <br/>
                            أعلنت وزارة الداخلية الأردنية ومفوضيّة اللاجئين (UNHCR) عن برنامج العفو هذا في 4 آذار (مارس) 2018.<br/>

                            <b>
                            آخر موعد للتقديم هو 27 أيلول (سبتمبر) 2018
                            </b>
                            <p>اقرأ
                                <a href="https://reliefweb.int/sites/reliefweb.int/files/resources/Amnestyposter_Arabiccopy_FINAL.pdf"> البيان الصحفي </a>
                                الصادر عن مفوضية اللاجئين حول برنامج العفو.
                            </p>
                            <b>
                            لحظة بس، سمعت انو اذا سجلت بهاد البرنامج فممكن يرجعوني على المخيم.
                            </b>
                            <div>
                            ليس هناك أيّ دليل على صحة هذه الشائعات. في أول شهر من البرنامج:
                                <ul>
                                    <li>
                                    سجلت مفوضية اللاجئين 30,000 شخصاً
                                    </li>
                                    <li>
                                    تلقى أكثر من 10,000 شخص مستنداتهم
                                    </li>
                                </ul>
                            </div>
                            <b>
                            مين بقدر يقدّم على هاد البرنامج
                            </b>
                            <ul>
                                <li>
                                إذا سجّلت لدى مفوضيّة اللاجئين في مخيّم ومن ثم غادرت المخيّم
                                <b>
                                قبل
                                </b>
                                تموز (يوليو) 2017 بدون إذن، عندها يُمكنك التقديم.
                                </li>
                                <li>
                                إذا سجّلت لدى مفوضيّة اللاجئين في مخيّم ومن ثم غادرت المخيّم
                                <b>
                                قبل
                                </b>
                                1 تموز (يوليو) 2017 بإذن رسمي ولم تعد قبل حلول الموعد النهائي، عندها يُمكنك التقديم.
                                </li>
                                <li>
                                إذا لم تقم مطلقاً بالتسجيل لدى مفوضيّة اللاجئين، عندها أيضاً يُمكنك التقديم.
                                </li>
                            </ul>
                            <b>
                            مين ما بقدر يقدّم عالبرنامج؟
                            </b>
                            <ul>
                                <li>
                                إذا سجّلت لدى مفوضيّة اللاجئين في مخيّم ومن ثم غادرت المخيّم
                                <b>
                                بحلول أو بعد
                                </b>تموز (يوليو) 2017، عندها<b>
                                لا يُمكنك
                                </b>
                                التقديم للاستفادة من برنامج العفو.
                                </li>
                            </ul>

                        </div>
                        <div id="process">
                            <h2>كيف تعمل هذه العملية</h2>
                            <ul>
                                <li class="first">
                                <h4>  جهّز وثائقك وأوراقك للتقديم. سيلزمك:</h4>
                                    <ul class="normal">
                                        <li><a href="/">مستند "ا"</a></li>
                                        <li><a href="/">مستند "ا"</a></li>
                                        <li><a href="/">مستند "ا"</a></li>
                                    </ul>
                                </li>
                                <li class="second">

                                    <h4>    أحضر وثائقك معك وتوجّه إلى أقرب مكتب لمفوضيّة اللاجئين، أو قم بزيارة إحدى المنظمات الغير حكومية التي يُمكنها المساعدة في عمليّة التقديم.<br/>
                                    يُمكنك إيجاد أقرب مكتب لمفوضيّة اللاجئين <a href="/">هنا.</a><br/></h4>

                                    <p>
                                    أحضر وثائقك معك وتوجّه إلى أقرب مكتب لمفوضيّة اللاجئين، أو قم بزيارة إحدى المنظمات الغير حكومية التي يُمكنها المساعدة في عمليّة التقديم.<br/>
                                    يُمكنك إيجاد أقرب مكتب لمفوضيّة اللاجئين
                                    <a href="/">هنا.</a><br/>
                                    

                                    يُمكنك إيجاد أقرب منظمة غير حكومية يُمكنها مساعدتك<a href="/"> هنا</a>
                                    </p>
                                </li>

                                <li class="third">
                                    <h4>  إنتظر إلى أن يتم التواصل معك. </h4>
                                </li>
                                <li class="fourth">
                                    <h4>  إذهب لاستلام الوثائق الجديدة. </h4>
                                </li>
                            </ul>
                        </div> 
                        <div id="bottomthird">
                            <b>الظاهر القصة سهلة وبسيطة. فيك تحكيلي أكتر عن إجراءات التقديم؟ </b>
                            <p>
                                    أكيد. توقّع الإنتظار لبعض الوقت داخل مكتب مفوضيّة اللاجئين. تتعهّد بعض
                                <a href="/">المنظمات الغير حكومية التي يُمكنها مساعدتك في التقديم</a>
                                ، بمساعدتك في تجنّب طوابير الانتظار.
                            </p>
                            <p>هل شاهدت مقطع الفيديو الذي أعدّته مفوضيّة اللاجئين حول عمليّة التقديم؟ شاهده من هنا:</p>

                            {this.renderVideo("https://www.facebook.com/UNHCRJordan/videos/2107235179293443/")}
                            <br></br>
                        
                            <b>شو لازم أعمل بعد هيك؟</b>
                            <div>
                                <p>بمجرّد حصولك على الوثائق الجديدة، ستتمكّن من الوصول والاستفادة من العديد من الخدمات، من ضمنها:</p>
                                <a href="/">الخدمات الصحية</a><br/>
                                <a href="/">التعليم</a><br/>
                                <a href="/">خدمات أخرى</a><br/>
                            </div>
                            <p>كذلك سيكون بإمكانك الحصول على شهادات ووثائق هامة للغاية مثل شهادات الميلاد وشهادات الزواج. تعرّف على المزيد:</p><br/>

                            <a href="/">  الشهادات الهامّة   </a>

                            <b>عندي كم سؤال إضافيّات. </b>

                            <p>أكيد مو مشكلة. تفضّل بزيارة صفحة الأسئلة الشائعة، أو أرسل لنا

                            <a href="https://www.facebook.com/khabrona.info1"> رسالة عبر الفيسبوك  </a>
                            أو من خلال تطبيق خبرونا (Khabrona.Info). سنقوم بالرّد على أسئلتك في أقرب وقت مُمكن.</p> 

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
                    <div className="container" onClick={() => onNavigate("/jordan/mock/article1")} >                        						
                        <img src="/images/article2.png" />
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
