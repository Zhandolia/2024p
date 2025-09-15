import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faBug, faCubes, faGlobe, faLaptopCode, faBrain, faDraftingCompass } from "@fortawesome/free-solid-svg-icons";

const experiences = [
    {
        date: "Jun 2025 - Aug 2025",
        company: "Fidelity Investments",
        location: "(Merrimack, NH)",
        position: "Mobile Engineer Intern",
        icon: <FontAwesomeIcon icon={faLaptopCode} size="2x" />,
        description: "At Fidelity HSA, built mobile UI and logic to export checklist tasks. Delivered demos up to VP level."
    },
    {
        date: "Jun 2024 - Aug 2024",
        company: "80edays - ChargeHotels",
        location: "(Boston, MA)",
        position: "Mobile Engineer Intern",
        icon: <FontAwesomeIcon icon={faLaptopCode} size="2x" />,
        description: "Contributed to a feature-rich iOS app for Europe’s largest rally, using SwiftUI, UIKit, Node.js, and real-time APIs to enhance booking, vehicle data, and secure user management."
    },
    {
        date: "Jan 2024 - May 2024",
        company: "Spark! Innovation Apprenticeship",
        location: "(Boston, MA)",
        position: "Software Developer",
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
        description: "Led development of DrivMi, a designated driver app with real-time tracking, secure Firebase storage, and a custom matching algorithm that cut response times by 40%."
    },
    {
        date: "Jun 2023 - Aug 2023",
        company: "nFactorial Incubator",
        location: "(Almaty, KZ)",
        position: "AI Software Developer",
        icon: <FontAwesomeIcon icon={faBrain} size="2x" />,
        description: "Built MyGapMentor, GPT-4 platform that helped 50+ students land college offers; secured $50K funding and launched via nFactorial’s bootcamp (2.3% acceptance from 4,500 applicants)."
    },
    {
        date: "Jun 2022 - Aug 2022",
        company: "nFactorial Incubator",
        location: "(Almaty, KZ)",
        position: "Software Developer",
        icon: <FontAwesomeIcon icon={faGlobe} size="2x" />,
        description: "Built and launched Chrome extension geography game used for learning flags and capitals."
    },
    {
        date: "Jun 2021 - Aug 2021",
        company: "Global Health Research Center of Central Asia",
        location: "(Almaty, KZ)",
        position: "Software Developer Intern",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Developed research website; digitized 400+ studies to make vital health research accessible online."
    },
    {
        date: "Jun 2020 - Aug 2020",
        company: "Gradcompleks Architectural",
        location: "(Almaty, KZ)",
        position: "3D Design Intern",
        icon: <FontAwesomeIcon icon={faCubes} size="2x" />,
        description: "Modeled 5,600 km² of Kazakhstani terrain in 3ds Max, using satellite data and blueprints to deliver accurate, realistic 3D representations."
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