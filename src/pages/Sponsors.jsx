import React from "react";
import TextBox from "../components/TextBox";

function Sponsors(){
    const sponsor_lead = `For sponsorships and collaboration opportunities please reach us out at:

Sponsorship Lead:
Muhammad Sadeem Hannan
@gmail.com
`
    return (
        <>
            <TextBox title={"Sponsors"} text={sponsor_lead}></TextBox>
        </>
    );
}

export default Sponsors;