import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience(){
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                date='2014 - 2018'
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<SchoolIcon />}
                >
                <h3 className='vertical-timeline-element-title'>
                    Highschool, Dallas, Texas 
                </h3>
                <p>High School Diploma</p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement className='vertical-timeline-element--work'
                date='2017 - 2021'
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<WorkIcon />}
                >
                <h3 className='vertical-timeline-element-title'>
                Store Scan Specialist, Whole Foods, Dallas, Texas  
                </h3>
                <ul> 
                    <li>Managed store marketing signs and tags.</li>
                    <li>Collaborated with each department to design and implement marketing signage for the entire store.</li>
                    <li>Successfully met deadlines by creating scheduling systems that guarantee key deliverables were given to internal stakeholders on time.</li>
                </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education'
                date='2021 - 2022'
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<SchoolIcon />}
                >
                <h3 className='vertical-timeline-element-title'>
                    Thinkful Software Engineering, Dallas, Texas 
                </h3>
                <ul>
                    <li>Learned industry best practices and software development standards with a focus on HTML5, CSS3, Javascript, jQuery, Node.js, React, algorithms, and data structures.</li>
                    <li>Created and deployed mobile-first applications while learning new languages and frameworks, spending several hours weekly with a senior web developer.</li>
                </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--work'
                date='2021 - Present'
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<WorkIcon />}
                >
                <h3 className='vertical-timeline-element-title'>
                    Delivery Driver for Amazon-Flex, and Uber Eats 
                </h3>
                <ul> 
                    <li>Strategically planned out each route to get food delivered as efficiently as possible.</li>
                    <li>Identified key repeatable factors that improve the customer experience.</li>
                    <li>Mastered customer service by consistently communicating with each customer to guarantee the quickest and highest quality delivery.</li>
                </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;