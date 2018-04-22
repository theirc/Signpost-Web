import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ArticlePage.css";
import { Helmet } from "react-helmet";
import FacebookPlayer from "react-facebook-player";
import YouTube from "react-youtube";
import HeaderBar from "./HeaderBar";

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

	render() {

		return (
			<div ref={r => (this._ref = r)} className={["ArticlePage", loading ? "loading" : "loaded"].join(" ")}>
		
					<title> الوضع القانوني لبعض اللاجئين السوريين غير المسجلين</title>
				<article>
					<div dangerouslySetInnerHTML={{ __html: html }} />
                    <h1>الوضع القانوني لبعض اللاجئين السوريين غير المسجلين</h1>
                    <h2>How to access the amnesty program that ends in September</h2>
                    <p>Posted 20 hours ago</p>
                    <ul> 
                        <li> برنامج مفتوح لأي لاجئ قادم من سوريا وغير مسجّل في الأردن باستثناء من غادر مخيّمه في أو بعد 1 تموز (يوليو) 2017</li>
                        <li>  آخر موعد للتقديم هو 27 أيلول (سبتمبر) 2018 </li>
                        <li> يُمكن لبعض المنظمات غير الحكومية (NGOs) مساعدتك في عمليّة التقديم</li>
                    </ul>
                    <img src="public/images/article1.png" alt="UNICEF Amnesty Program"></img>
                    <div>
                    إذا كنت تعيش بدون وثائق قانونية، يمكن لبرنامج عفو جديد أن يساعدك في تسوية وضعك القانوني في الأردن -- بشرط أنّك لم تغادر المخيّم بشكل غير قانوني في أو بعد 1 يوليو 2017. <br/>
                    أعلنت وزارة الداخلية الأردنية ومفوضيّة اللاجئين (UNHCR) عن برنامج العفو هذا في 4 آذار (مارس) 2018.<br/>
                    </div>
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
                    <div>
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
                        </b>
                        تموز (يوليو) 2017، عندها
                        <b>
                        لا يُمكنك
                        </b>
                        
    
				</article>
			</div>
		);
	}
}
