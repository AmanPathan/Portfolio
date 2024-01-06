import React, { useEffect } from "react";
import "./Styles/Timeline.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {

    return (
        <div id="Timeline">
            <h2 className="myedutitle"><span className="prof">My</span> Education</h2>
            <VerticalTimeline lineColor="#c4c4c4">
                <VerticalTimelineElement className="vertical-timeline-element--education vertical" iconStyle={{ background: '#2190ff', color: '#fff' }} icon={<i class="fa-solid fa-graduation-cap"></i>}
                    date="93.20 %">
                    <div className="timeline_text">
                        <h2 className="edu_title">SSC</h2>
                        <h3>Ganesh Vidya Mandir, Kalyan</h3>
                        <h4 className="year_place ssc"><span>Kalyan, Thane</span><span>2018</span></h4>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education vertical" iconStyle={{ background: '#2190ff', color: '#fff' }} icon={<i class="fa-solid fa-graduation-cap"></i>}
                    date="92 %">
                    <div className="timeline_text">
                        <h2 className="edu_title">HSC</h2>
                        <h3>Keraleeya Samajam's Model College</h3>
                        <h4 className="year_place"><span>Dombivali, Thane</span><span>2019- 2020</span></h4>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education vertical" iconStyle={{ background: '#2190ff', color: '#fff' }} icon={<i class="fa-solid fa-graduation-cap"></i>}
                    date="8.5 SGPA">
                    <div className="timeline_text">
                        <h2 className="edu_title" >B.E Information technology</h2>
                        <h3>Dr. D. Y. Patil College of Engineering</h3>
                        <h4 className="year_place"><span>Akurdi, Pune</span><span>2021 - 2025</span></h4>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;