import React from "react";
import APigaHeroTitle from "../components/APigaHeroTitle";
import { Link } from "react-router-dom"
import ObjectivesSection from "../components/ObjectiveCard";
import TextBox from "../components/TextBox";

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

    // Parent
    const apiga = (
        <>
            The Asia Pacific Internet Governance Academy (APIGA) is a distinguished
            youth capacity-building initiative dedicated to nurturing the next
            generation of Internet leaders in the Asia Pacific region. APIGA is
            co-hosted annually by two prominent global entities:{" "}
            <a
                href="https://www.icann.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
            >
                The Internet Corporation for Assigned Names and Numbers (ICANN)
            </a>{" "}
            and {" "}
            <a
                href="https://www.icann.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
            > The Korea Internet &amp; Security Agency (KISA).
            </a> Through their combined expertise and commitment, these organizations provide
            participants with comprehensive exposure to critical issues surrounding
            Internet governance, cybersecurity, digital policy, and global Internet
            operations.
        </>
    );

    const icann = "The Internet Corporation for Assigned Names and Numbers (ICANN) is a global non-profit organization responsible for coordinating the unique identifiers that keep the Internet secure, stable, and interoperable. ICANN oversees the global Domain Name System (DNS), manages Internet Protocol (IP) addresses, and ensures that domain names (like .org, .com, or country codes) work everywhere in the world. ICANN follows a multistakeholder governance model, where governments, the private sector, civil society, academia, and technical experts all work together to make policies for the Internet’s naming and addressing systems. This inclusive approach ensures that decisions about the Internet are made transparently and with input from communities worldwide. Through its work, ICANN plays a vital role in maintaining the security, stability, and resiliency of the Internet, supporting its growth as a single, global, and open resource."
    return (
        <>

            {/* Content wrapper with proper spacing */}
            <main className="min-h-screen bg-gray-50">
                <APigaHeroTitle />
                <TextBox title={'About APIGA'} text={apiga} />
                <TextBox title={'About ICANN'} text={icann} />
                <ObjectivesSection title="Objectives OF APIGA Pakistan" objectives={objective} />
                <ObjectivesSection title="Expected Outcomes" objectives={outcomes} />
            </main>
        </>
    )
}

export default Home;