import React  from "react";
import PersonCard from '../components/PersonCard'

function Team(){
    return (
    <>
        <main className="min-h-screen bg-gray-50">
            <PersonCard name={'Nawal Munir'} designation={'Team Lead'} ImageUrl={''} linkedinUrl={'https://www.linkedin.com/in/nawalmunirahmad/'} className={"max-w-md mx-4  my-4 mx-auto"}/>
            <PersonCard name={'Muhammad Umair Ali'} designation={'Program and Fellowship Committee'} ImageUrl={''} linkedinUrl={'https://www.linkedin.com/in/muhammad-umair-ali-49b2981a1/'} className={"max-w-md mx-4  my-4 mx-auto"}/>
            <PersonCard name={'Uzair Farooqi'} designation={'Program and Fellowship Committee'} ImageUrl={''} linkedinUrl={'https://www.linkedin.com/in/uzair-farooqi/'} className={"max-w-md mx-4  my-4 mx-auto"}/>
            <PersonCard name={'Harisa Shahid'} designation={'Program and Fellowship Committee'} ImageUrl={''} linkedinUrl={'https://www.linkedin.com/in/harisa-shahid-b04923184/'} className={"max-w-md mx-4  my-4 mx-auto"}/>
            <PersonCard name={'Khushbakht'} designation={'Design Head'} ImageUrl={''} linkedinUrl={'https://www.linkedin.com/in/khush84kht/'} className={"max-w-md my-4 mx-auto"}/>
            <PersonCard name={'Muhammad Sadeem Hannan'} designation={'Sponsorship Head'} ImageUrl={''} linkedinUrl={'https://www.linkedin.com/in/muhammad-sadeem-hannan/'} className={"max-w-md mx-4  my-4 mx-auto"}/>
        </main>
    </>
    )
}

export default Team;