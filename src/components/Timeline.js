import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faBug } from "@fortawesome/free-solid-svg-icons";

const experiences = [
    {
        date: "Jan 2024 - May 2024",
        company: "Spark! Innovation Fellowship",
        location: "(Boston, MA)",
        position: "Software Developer",
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
        description: "Developed DrivMi, fully functional designated driver app in React Native, utilizing Firebase for secure database storage, and integrating Google Maps for real-time location tracking and route planning."
    },
    {
        date: "Apr 2023 - Dec 2023",
        company: "80edays - ChargeHotels",
        location: "(Boston, MA)",
        position: "iOS Developmer Intern",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Led development of feature-rich iOS application in designing and deploying for Europe's largest rally event, using SwiftUl, UlKit, and Combine for a robust and user-friendly interface."
    },
    {
        date: "Feb 2023 - Apr 2023",
        company: "80edays - ChargeHotels",
        location: "(Boston, MA)",
        position: "Software Engineer Intern",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Collaborated in planning and architecture design of high-profile mobile app for major European rally event, participating in technology stack decisions and initial API development using Node.js and Express."
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