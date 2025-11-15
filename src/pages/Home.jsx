import APigaHeroTitle from "../components/APigaHeroTitle";
import ObjectivesSection from "../components/ObjectiveCard";
import TextBox from "../components/TextBox";
import ApplyNowSection from "../components/ApplyNowSection";
import ImportantDates from "../components/ImportantDates";
import { motion } from 'framer-motion';

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
            title: "Sustainability & Leadership Development",
            description: "Foster a continuous pipeline of youth leaders who contribute to Pakistan's digital future through mentorship, community initiatives, and long-term engagement in Internet governance.",
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
            description: "A pool of young leaders equipped to contribute to Pakistan's digital policy discussions and global Internet governance dialogues.",
            variant: "green"
        },
        {
            title: "Stronger Representation",
            description: " More Pakistani youth participating in APIGA (regional), ICANN programs, and other global Internet platforms.",
            variant: "parrot"
        },
        {
            title: "Lasting Impact",
            description: "Creation of a growing alumni network to sustain engagement, mentor future participants, and strengthen Pakistan's voice in digital governance.",
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
            The Regional Asia Pacific Internet Governance Academy (APIGA) is a distinguished
            youth capacity-building initiative dedicated to nurturing the next
            generation of Internet leaders in the Asia Pacific region. Regional APIGA is
            co-hosted annually by two prominent global entities:{" "}
            <a
                href="https://www.icann.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#95c065] underline hover:text-[#207140] transition-colors duration-300"
            >
                The Internet Corporation for Assigned Names and Numbers (ICANN)
            </a>{" "}
            and {" "}
            <a
                href="https://www.kisa.or.kr/EN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#95c065] underline hover:text-[#207140] transition-colors duration-300"
            > The Korea Internet &amp; Security Agency (KISA).
            </a> Through their combined expertise and commitment, these organizations provide
            participants with comprehensive exposure to critical issues surrounding
            Internet governance, cybersecurity, digital policy, and global Internet
            operations.
        </>
    );

    const icann = `ICANN's mission is to help ensure a stable, secure, and unified global Internet. To reach another
person on the Internet, you need to type an address – a name or a number – into your computer
or other device. That address must be unique so computers know where to find each other.
ICANN helps coordinate and support these unique identifiers across the world. ICANN was
formed in 1998 as a nonprofit public benefit corporation with a community of participants from all
over the world.`;

    const eligibility = `An applicant is eligible for the fellowship if s/he will:`;
    
    const points = [
        'Be a citizen of Pakistan.',
        "Be between the age of 18 to 35 years.",
        "Be an undergraduate or graduate student enrolled in any discipline or an early career professional.",
        "Demonstrate interest in digital technologies, digital development, technology law, public policy, internet governance, digital rights, cybersecurity and closely related areas.",
        "Be willing to attend the full event (November 17- November 18, 2025).",
        "Be willing to continue to engage with the community after the event."
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <>
            {/* Content wrapper with proper spacing */}
            <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
                <APigaHeroTitle />
                
                <TextBox title={'About APIGA'} text={apiga} />
                
                {/* APIGA Logo Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto px-6 my-12"
                >
                    <div className="bg-gradient-to-br from-[#207140] to-[#95c065] rounded-3xl p-3 shadow-2xl hover:shadow-3xl transition-all duration-500">
                        <div className="bg-white rounded-2xl p-8 flex items-center justify-center">
                            <img 
                                src="/assets/APIGA logo.png" 
                                alt="APIGA Logo" 
                                className="max-w-full max-h-64 object-contain"
                            />
                        </div>
                    </div>
                </motion.div>
                
                <TextBox title={'About ICANN'} text={icann} />
                
                {/* ICANN Logo Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto px-6 my-12"
                >
                    <div className="bg-gradient-to-br from-[#95c065] to-[#207140] rounded-3xl p-3 shadow-2xl hover:shadow-3xl transition-all duration-500">
                        <div className="bg-white rounded-2xl p-8 flex items-center justify-center">
                            <img 
                                src="/assets/ICANN logo.png" 
                                alt="ICANN Logo" 
                                className="max-w-full max-h-64 object-contain"
                            />
                        </div>
                    </div>
                </motion.div>
                
                <ObjectivesSection title="Objectives OF APIGA Pakistan" objectives={objective} />
                <ObjectivesSection title="Expected Outcomes" objectives={outcomes} />
                <TextBox title={'Eligibility Criteria:'} text={eligibility} points={points} />
                <ApplyNowSection googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSffGCVryOjI59XrMHWpMBF6nYX_up2R3oHgkRRZ8DRpq3SFtA/viewform" />
                <ImportantDates />
            </main>
        </>
    );
}

export default Home;