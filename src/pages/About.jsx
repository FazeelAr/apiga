import React  from "react";
import TextBox from "../components/TextBox";

function About(){

    const apiga = "APIGA Pakistan (Asia Pacific Internet Governance Academy – Pakistan) is a national-level youth capacity-building program designed to introduce young leaders to the world of Internet governance, digital policy, and multistakeholder decision-making. It serves as the local version of the regional APIGA, a flagship initiative co-hosted by ICANN and KISA, which has been building Internet governance knowledge and leadership across the Asia-Pacific since 2016.";
    return (
    <>
        <main className="min-h-screen my-12 bg-gray-50">
            <TextBox title={'APIGA PAKISTAN'} text={apiga} width={2}/>
        </main>
    </>
    )
}

export default About;