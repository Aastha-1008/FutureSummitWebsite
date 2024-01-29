import React from "react";
import './Home.scss';
import HomeTop from "./HomeTop.js/HomeTop";
import TopicHighlights from "./TopicHighlights/TopicHighlights";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck,faCopyright,faLocationDot,faPhone,faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter} from "@fortawesome/free-brands-svg-icons";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {

    return (
        <div className="home_container">
            <HomeTop />
            <div className="home_img_content">
                <p className="annual">4<sup>th</sup> Annual</p>
                <hr style={{ 'width': '10rem', 'marginLeft': '45%' }} />
                <h1>FUTURE BANKS SUMMIT & AWARDS KSA 2023</h1>
                <h2 className="rtol">DIGITAL INNOVATIONS TRANSFORMING THE KINGDOM'S BANKING LANDSCAPE</h2>
                <div className="home_img_data">
                    <div className="hotel">
                        <img src="https://ksa.futurebanksummit.com/wp-content/uploads/2023/08/1-Group%2037.png" alt="hotel" />
                    </div>
                    <div className="date">
                        <img src="https://ksa.futurebanksummit.com/wp-content/uploads/2023/08/1-Group%2039.png" alt="date" />
                    </div>
                </div>
                <button>REGISTER NOW</button>
            </div>
            <div className="event_overview">
                <div className="overviewImg">
                    <img src="https://ksa.futurebanksummit.com/wp-content/uploads/2022/04/3rd-edition-future-banks-summit-2022-event-overview.png" alt="event overview" />
                </div>
                <div className="overview_content">
                    <h1>EVENT OVERVIEW</h1>
                    <p>The banking industry worldwide is undergoing phenomenal change giving the banks an opportunity to relook into its existing business models and take a huge leap towards the future. The shift in consumer’s digital experience, adoption of next-gen technologies, transformation of customer service to customer engagement, mobile workforce with a need to ‘right-size’ the branch network are all an opportunity for regional banks to seize the opportunity and accelerate the shift to digital.</p>
                    <br />
                    <p><b>4<sup>th</sup>  Annual Future Banks Summit KSA 2023</b> will showcase latest innovations and practical case studies along with interactive panel discussions designed to guide the banking sector in KSA in identifying the right strategy to knock through long-standing resistance and be future ready!</p>
                    <br />
                    <p>An exciting and timely conference on its way discussing the future of the financial industry in KSA driven by innovation and digital advancements with the adoption of technologies such as AI, digital transformation, digital banking, banking in the metaverse, intelligent automation, regtech, data analytics, cloud migration, cyber security, digital payments model along with tech-driven redefined business continuity planning strategies.</p>
                </div>
            </div>

            <div className="statistics">
                <div className="stastisticData">
                    <h1>STATISTICS</h1>
                    <div className="statistics_data">
                        <div>
                            <h1>30+</h1>
                            <p>SPEAKERS</p>
                        </div>
                        <div>
                            <h1>2 DAYS</h1>
                            <p>EVENT</p>
                        </div>
                        <div>
                            <h1>400+</h1>
                            <p>DELEGATES</p>
                        </div>
                        <div>
                            <h1>10+</h1>
                            <p>HOURS OF NETWORKING</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="topic_highlights">
                <h1>TOPIC HIGHLIGHTS</h1>
                <div className="topicHighlightsCards">
                    <TopicHighlights/>
                </div>
            </div>

            <div className="who_will_you_meet">
                <h1>WHO WILL YOU MEET?</h1>
                <div className="who_will_you_meet_list_img">
                    <div className="who_will_you_meet_list">
                        <ul>
                            <li><FontAwesomeIcon icon={faSquareCheck} /> CIOs, CTOs, Heads of Technology</li>
                            <li><FontAwesomeIcon icon={faSquareCheck} /> Chief Digital Officers, Heads of Digital Transformation</li>
                            <li><FontAwesomeIcon icon={faSquareCheck} /> Chief Marketing Officers, Heads of Marketing</li>
                            <li><FontAwesomeIcon icon={faSquareCheck} /> Heads of Retail Banking</li>
                            <li><FontAwesomeIcon icon={faSquareCheck} /> Heads of Corporate Banking</li>
                            <li><FontAwesomeIcon icon={faSquareCheck} /> Heads of Customer Experience</li>
                            <li><FontAwesomeIcon icon={faSquareCheck} /> Heads of Cards & Payments</li>
                            <li><FontAwesomeIcon icon={faSquareCheck} /> Head of Data & Analytics</li>
                            <li><FontAwesomeIcon icon={faSquareCheck} /> Heads of Governance, Risk & Compliance</li>
                        </ul>
                    </div>
                    <div className="who_will_you_meet_img">
                        <img src="" alt="who_will_you_meet_img"/>
                    </div>
                </div>
            </div>

            <div className="why_attend">
                <div className="why_attend_content_img">
                    <div className="why_attend_content">
                        <h1>WHY ATTEND</h1>
                        <p><b>4<sup>th</sup> Annual Future Banks Summit KSA 2023 </b>will highlight the enabling role of digitalization in reshaping the future of banking. The pandemic has forced digital acceleration at such a massive scale that banks are not just looking to transform but forced to reimagine the business. Delegates will experience a power-packed agenda consisting of presentations, panel discussions and keynotes from globally and regionally renowned speakers, panelists and moderators.</p>
                        <br/>
                        <p>If you are ready to innovate and join the ranks of the Brightest minds in the industry while resonating with the following reasons compelling enough to attend, then register today:</p>
                    </div>
                    <div className="why_attend_img">
                        <div className="img"></div>
                    </div>
                </div>
                <div className="why_attend_data">
                    <div>
                        <h1>01</h1>
                        <p>Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe </p>
                    </div>
                    <div>
                        <h1>02</h1>
                        <p>Network with Industry Peers in a solution-oriented environment</p>
                    </div>
                    <div>
                        <h1>03</h1>
                        <p>Network with Industry Peers in a solution-oriented environment</p>
                    </div>
                    <div>
                        <h1>04</h1>
                        <p>Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe</p>
                    </div>
                    <div>
                        <h1>05</h1>
                        <p>Network with Industry Peers in a solution-oriented environment</p>
                    </div>
                    <div>
                        <h1>06</h1>
                        <p>Discuss Significant Partnerships and Collaborations with Industry leaders</p>
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <div className="testimonials_content">
                    <div className="testimonials_heading">
                        <h1>TESTIMONIALS</h1>
                    </div>
                    <div className="testimonials_data primary secondary" style={{'padding':'3rem 0rem'}}>
                        <Testimonials/>
                    </div>
                </div>
            </div>

            <div className="contact">
                <div className="contact_content">
                    <div className="content1">
                        <h3>AN INITIATIVE OF </h3>
                        <img src="https://ksa.futurebanksummit.com/wp-content/uploads/2023/08/FBS-KSA-2023-Logo-Updated.png" alt="verve"/>
                        <p>Digital Innovations Transforming The Kingdoms BankingLandscape</p>
                    </div>
                    <div className="content2">
                        <h3>SOCIAL CONNECTION</h3>
                        <p>Don't miss a thing! Receive daily updates from Verve Management.</p>
                        <div >
                        <FontAwesomeIcon icon={faFacebook} className="socialMediaIcons"/>
                        <FontAwesomeIcon icon={faSquareTwitter} className="socialMediaIcons" />
                        <FontAwesomeIcon icon={faInstagram} className="socialMediaIcons" />
                        <FontAwesomeIcon icon={faLinkedin} className="socialMediaIcons"/>
                        </div>
                    </div>
                    <div className="content3">
                        <h3>VERVE MANAGEMENT</h3>
                        <p><FontAwesomeIcon icon={faLocationDot} />  1702 & 1706, Mazaya Business Avenue BB2, Jumeirah Lakes Towers, Dubai, UAE </p>
                        <p><FontAwesomeIcon icon={faPhone} /> +971 4 243 4677/88 </p>
                        <p><FontAwesomeIcon icon={faEnvelopeOpen} /> info@verve-management.com</p>
                    </div>
                </div>
                <hr/>
                <div className="contact_footer">
                    <p><FontAwesomeIcon icon={faCopyright}/> 2023 FUTURE BANKS SUMMIT | ALL RIGHTS RESERVED BY VERVER MANAGEMENT</p>
                </div>
            </div>

        </div>
    );
};

export default Home;