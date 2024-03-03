import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faBug } from "@fortawesome/free-solid-svg-icons";

const experiences = [
    {
        date: "Apr 2023 - Present",
        company: "80edays - ChargeHotels",
        location: "(Boston, MA)",
        position: "iOS Development Intern",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Led development of feature-rich iOS application for major electric vehicle rally event, leveraging Swift and Figma to create robust and user-friendly interface. Focused on integrating real-time tracking, event updates, and participant engagement to deliver seamless user experience."
    },
    {
        date: "Feb 2023 - Apr 2023",
        company: "80edays - EcoRoute",
        location: "(Boston, MA)",
        position: "Software Engineering Intern",
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
        description: "Spearheaded integration of Google Maps API with Django and React, optimizing route planning for electric vehicles. Integration improved user experience by providing real-time data on charging stations and traffic conditions."
    },
    {
        date: "Aug 2020 - Dec 2021",
        company: "Global Health Research Center of Central Asia",
        location: "(Almaty, Kazakhstan)",
        position: "Full Stack Web Development Intern",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Engineered comprehensive and user-centric website from ground up, employing WordPress coupled with advanced JavaScript, HTML, and CSS to create dynamic and responsive online presence."
    },
    {
        date: "Dec 2020 - Mar 2021",
        company: "Gradcompleks Architectural",
        location: "(Almaty, Kazakhstan)",
        position: "3D Design Intern",
        icon: <FontAwesomeIcon icon={faBug} size="2x" />,
        description: "Constructed a detailed 3D representation of Aksai region in Kazakhstan, encompassing an expansive area of 5600km2, derived from satellite imagery and company-provided blueprints."
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