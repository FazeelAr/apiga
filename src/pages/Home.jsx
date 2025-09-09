import React from "react";
import APigaHeroTitle from "../components/APigaHeroTitle";
import { Link } from "react-router-dom"
import ObjectivesSection from "../components/ObjectiveCard";

function Home() {
    const objective = [
        {
            title: "Build Knowledge",
            description: "Introduce Pakistani youth (18–35) to Internet governance, digital policy, and the multistakeholder model.",
            variant: "lightGreen"
        },
        {
            title: "Capacity Building",
            description: "Equip participants with practical skills to engage in national, regional, and global Internet governance processes.",
            variant: "green"
        },
        {
            title: "Youth Empowerment",
            description: "Create a platform for young people to voice their perspectives on digital rights, cybersecurity, emerging technologies, and Internet inclusion.",
            variant: "lightGreen"
        },
        {
            title: "Networking & Collaboration",
            description: "Connect participants with experts, policymakers, and peers in the Asia-Pacific Internet governance community.",
            variant: "green"
        },
        {
            title: "Local to Global Pathway",
            description: "Prepare participants to represent Pakistan in the regional APIGA and other international forums such as ICANN, IGF, and APRIGF.",
            variant: "lightGreen"
        },
    ];

    const outcomes = [
        {
            title: "Increased Awareness",
            description: "Participants gain a strong understanding of how the Internet works and how policies are shaped globally.",
            variant: "lightGreen"
        },
        {
            title: "Practical Experience",
            description: "Exposure to simulations, case studies, and role-play exercises that mirror real-world Internet governance decision-making.",
            variant: "green"
        },
        {
            title: "Youth Leadership",
            description: "A pool of young leaders equipped to contribute to Pakistan’s digital policy discussions and global Internet governance dialogues.",
            variant: "lightGreen"
        },
        {
            title: "Stronger Representation",
            description: " More Pakistani youth participating in APIGA (regional), ICANN programs, and other global Internet platforms.",
            variant: "green"
        },
        {
            title: "Lasting Impact",
            description: "Creation of a growing alumni network to sustain engagement, mentor future participants, and strengthen Pakistan’s voice in digital governance.",
            variant: "lightGreen"
        },
    ];
    return (
        <>

            {/* Content wrapper with proper spacing */}
            <main className="min-h-screen bg-gray-50">
                <APigaHeroTitle />
                <ObjectivesSection title="Objectives OF APIGA Pakistan" objectives={objective}/>
                <ObjectivesSection title="Expected Outcomes" objectives={outcomes}/>
            </main>
        </>
    )
}

export default Home;