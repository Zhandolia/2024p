import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faBug } from "@fortawesome/free-solid-svg-icons";

const experiences = [
    {
        date: "Apr 2023 - Present",
        company: "80edays",
        location: "(Remote)",
        position: "iOS Development Intern",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Led the development of a feature-rich iOS application for a major electric vehicle rally event, leveraging Swift and Figma to create a robust and user-friendly interface. Focused on integrating real-time tracking, event updates, and participant engagement to deliver a seamless user experience."
    },
    {
        date: "Jan 2023 - Mar 2023",
        company: "80edays",
        location: "(Remote)",
        position: "Software Engineering Intern",
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
        description: "Utilized Python and Django to efficiently process and manage data, resulting in a more robust and scalable backend for the EcoRoute web application. This enhancement facilitated smoother user interactions and improved overall app performance."
    },
    {
        date: "Aug 2020 - Dec 2021",
        company: "Global Health Research Center of Central Asia",
        location: "(Almaty, Kazakhstan)",
        position: "Full Stack Web Development Intern",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Engineered a comprehensive and user-centric website from the ground up, employing WordPress coupled with advanced JavaScript, HTML, and CSS to create a dynamic and responsive online presence."
    },
    {
        date: "Dec 2020 - Mar 2021",
        company: "Gradcompleks Architectural",
        location: "(Almaty, Kazakhstan)",
        position: "3D Design Intern",
        icon: <FontAwesomeIcon icon={faBug} size="2x" />,
        description: "Constructed a detailed 3D representation of the Aksai region in Kazakhstan, encompassing an expansive area of 5600km2, derived from satellite imagery and company-provided blueprints."
    }
]

const Timeline = () => {
    return (
        <VerticalTimeline className="timeline">
            {experiences.map(experience => (
                <VerticalTimelineElement
                    key={experience.company}
                    date={experience.date + " " + experience.location}
                    iconStyle={{ background: "#FAF9F6", color: "#000" }}
                    contentStyle={{ background: "rgb(0,0,0,0.5)", color: "#ffffff", backdropFilter: "blur(5px)"}}
                    dateClassName="date"
                    icon={experience.icon}
                >
                    <h3 className="vertical-timeline-element-title">{experience.company + " - " + experience.position}</h3>
                    <p>{experience.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default Timeline