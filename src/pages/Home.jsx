import React from "react";
import APigaHeroTitle from "../components/APigaHeroTitle";
import { Link } from "react-router-dom"
import ObjectivesSection from "../components/ObjectiveCard";
import TextBox from "../components/TextBox";

function Home() {
    const objective = [
        {
            title: "Build Knowledge",
            description: "Retain the age bracket from 18-30 years old since this has to match with the eligibility criteria and to encourage students and early professionals.",
            variant: "green"
        },
        {
            title: "Capacity Building",
            description: "Equip participants with practical skills to engage in national, regional, and global Internet governance processes.",
            variant: "parrot"
        },
        {
            title: "Youth Empowerment",
            description: "Create a platform for young people to voice their perspectives on digital rights, cybersecurity, emerging technologies, and Internet inclusion.",
            variant: "green"
        },
        {
            title: "Networking & Collaboration",
            description: "Connect participants with experts, policymakers, and peers in the Pakistani and Asia-Pacific Internet Governance community.",
            variant: "parrot"
        },
        {
            title: "Local to Global Pathway",
            description: "Prepare participants to represent Pakistan in the regional APIGA and other international forums such as ICANN, Global Internet Governance Forum (IGF), and Asia-Pacific Regional IGF meetings.",
            variant: "green"
        },
        {
            title: "Sustainability & Leadership Development:",
            description: "Foster a continuous pipeline of youth leaders who contribute to Pakistan’s digital future through mentorship, community initiatives, and long-term engagement in Internet governance.",
            variant: "parrot"
        },
    ];

    const outcomes = [
        {
            title: "Increased Awareness",
            description: "Participants gain a strong understanding of how the Internet works and how policies are shaped globally.",
            variant: "green"
        },
        {
            title: "Practical Experience",
            description: "Exposure to simulations, case studies, and role-play exercises that mirror real-world Internet governance decision-making.",
            variant: "parrot"
        },
        {
            title: "Youth Leadership",
            description: "A pool of young leaders equipped to contribute to Pakistan’s digital policy discussions and global Internet governance dialogues.",
            variant: "green"
        },
        {
            title: "Stronger Representation",
            description: " More Pakistani youth participating in APIGA (regional), ICANN programs, and other global Internet platforms.",
            variant: "parrot"
        },
        {
            title: "Lasting Impact",
            description: "Creation of a growing alumni network to sustain engagement, mentor future participants, and strengthen Pakistan’s voice in digital governance.",
            variant: "green"
        },
        {
            title: "Policy Contribution",
            description: "Participants actively channel their insights into concrete recommendations that inform national and regional digital policy agendas.",
            variant: "parrot"
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
                className="text-[#95c065] underline"
            >
                The Internet Corporation for Assigned Names and Numbers (ICANN)
            </a>{" "}
            and {" "}
            <a
                href="https://www.kisa.or.kr/EN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#95c065] underline"
            > The Korea Internet &amp; Security Agency (KISA).
            </a> Through their combined expertise and commitment, these organizations provide
            participants with comprehensive exposure to critical issues surrounding
            Internet governance, cybersecurity, digital policy, and global Internet
            operations.
        </>
    );

    const icann = "The Internet Corporation for Assigned Names and Numbers (ICANN) is a global non-profit organization responsible for coordinating the unique identifiers that keep the Internet secure, stable, and interoperable. ICANN oversees the global Domain Name System (DNS), manages Internet Protocol (IP) addresses, and ensures that global top-level domains (e.g. .com, .org) and country-code top-level domains (e.g. .pk, .ca) are universally accessible. ICANN follows a multistakeholder governance model, where governments, the private sector, civil society, academia, and technical experts all work together to make policies for the Internet’s naming and addressing systems. This inclusive approach ensures that decisions about the Internet are made transparently and with input from communities worldwide. Through its work, ICANN plays a vital role in maintaining the security, stability, and resiliency of the Internet, supporting its growth as a single, global, and open resource."

    const eligibility = `An applicant is eligible for the fellowship if s/he will:`
    const points = ['Be a citizen of Pakistan.',
        "Be between the age of 18 and 30 years.",
        "Be an undergraduate or graduate student enrolled in any discipline or an early career professional.",
        "Demonstrate interest in digital technologies, digital development, technology law, public policy, internet governance, digital rights, cybersecurity and closely related areas.",
        "Be willing to attend the full event (November 17- November 18, 2025).",
        "Be willing to continue to engage with the community after the event."
    ]
    return (
        <>

            {/* Content wrapper with proper spacing */}
            <main className="min-h-screen bg-gray-50">
                <APigaHeroTitle />
                <TextBox title={'About APIGA'} text={apiga} />
                <TextBox title={'About ICANN'} text={icann} />
                <ObjectivesSection title="Objectives OF APIGA Pakistan" objectives={objective} />
                <ObjectivesSection title="Expected Outcomes" objectives={outcomes} />
                <TextBox title={'Eligibility Criteria:'} text={eligibility} points={points}/>
            </main>
        </>
    )
}

export default Home;