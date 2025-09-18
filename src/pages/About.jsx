import React  from "react";
import TextBox from "../components/TextBox";

function About(){

    const apiga = `APIGA Pakistan is the national chapter of the Asia Pacific Internet Governance Academy (APIGA), a flagship capacity-building program designed to empower the next generation of Internet leaders.
    Bringing together youth, experts, and stakeholders from across the country, APIGA Pakistan provides an inclusive platform to learn, debate, and collaborate on key issues in Internet governance, digital rights, and cybersecurity.
    
    Through workshops, simulations, and multi-stakeholder discussions, participants gain practical knowledge of how policies are developed, how governance structures work, and how technology shapes society. 
    By connecting Pakistani youth to the broader Asia Pacific Internet governance ecosystem, APIGA Pakistan enables meaningful participation in regional and global forums.`;
    
    const mission = `Our mission is to empower Pakistani youth with the knowledge, skills, and confidence to actively participate in decision-making processes that shape the digital world not only in Pakistan, but on a bigger level as well.
    We aim to ensure that Pakistan’s perspectives and voices are represented in national, regional, and international dialogues on Internet governance.`
    
    const story = `Local APIGA Pakistan builds on the legacy of the APIGA, a flagship initiative co-hosted by ICANN and KISA since 2016. 
    APIGA Pakistan localizes this model to address the unique challenges and opportunities in Pakistan. 
    By bringing the program home, we provide a direct pathway for Pakistani youth to engage in the wider Internet governance ecosystem.`
    
    const city = `Known as the cultural capital of Pakistan, Lahore is a city where history and progress meet. From the grandeur of the Lahore Fort and Badshahi Mosque to its thriving universities and emerging tech ecosystem, Lahore embodies both tradition and innovation.
    For APIGA Pakistan participants, the city offers more than just a venue. It provides a living example of how culture, technology, and civic engagement can shape the future. As Pakistan continues its digital transformation, Lahore stands at the forefront of education, innovation, and leadership, making it a fitting home for conversations on Internet governance.`

    const host = `The University of Engineering and Technology (UET) Lahore is one of Pakistan’s oldest and most prestigious institutions, founded in 1921. Over the past century, it has evolved into a premier hub for research, technology, and academic excellence, producing leaders who have shaped Pakistan’s infrastructure, industries, and innovation landscape.
    With its historic Main Campus, dynamic student societies, and strong tradition of organizing national-level conferences and competitions, UET has consistently fostered intellectual curiosity and leadership among its students. Hosting APIGA Pakistan at UET Lahore creates a powerful synergy: a globally relevant program nested within a university that has long been a center of technical knowledge and youth energy. Together, they set the stage for empowering young Pakistanis to not only understand but also influence the digital policies of tomorrow.`

    const why_pakistan = `Pakistan stands at a pivotal moment in its digital journey. With one of the largest youth populations in the world, rapid Internet penetration, and an expanding digital economy, the country is poised for transformation. Yet the challenges remain, such as, digital divides between urban and rural areas, concerns over online privacy, cybersecurity threats, and the need for inclusive digital policy frameworks.
    Youth perspectives are critical in shaping responses to these challenges. However, young people are often underrepresented in decision-making processes. APIGA Pakistan responds to this gap by equipping Pakistani youth with the skills and platforms to influence national, regional, and global Internet Governance agendas. This is not just about preparing individuals, it is about ensuring Pakistan’s digital future reflects the values, aspirations, and needs of its next generation.`
    return (

    <>
        <main className="min-h-screen my-12 bg-gray-50">
            <TextBox title={'About APIGA PAKISTAN'} text={apiga} width={3}/>
            <TextBox title={'Our Mission'} text={mission} width={3}/>
            <TextBox title={'Our Story'} text={story} width={3}/>
            <TextBox title={'The City: Lahore'} text={city} width={3}/>
        </main>
    </>
    )
}

export default About;