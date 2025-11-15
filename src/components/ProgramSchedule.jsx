import React from "react";

function ProgramSchedule() {
  const day1 = [
    ["8:00 - 9:00 AM", "Registration", "Youth Leaders"],
    ["9:00 - 9:20 AM", "Opening Ceremony", "Mr. Nawal Munir"],
    ["9:20 - 10:40 AM", "Governance of & on the Internet/ Layers of Digital Governance", "Ms. Golda Khan, Faculty, LUMS"],
    ["10:40 - 11:40 AM", "Internet Operations - How DNS Works?", "Mr. Haris Shahid, Policy Analyst, APNIC Foundation"],
    ["11:40 - 11:50 AM", "Networking Break", ""],
    ["11:50 - 1:00 PM", "Governance of the Internet - unique identifiers (protocols, names, numbers) and coordination bodies", "Mr. Fahd Batayneh, Stakeholder Engagement, Middle East, ICANN"],
    ["1:00 - 2:00 PM", "Lunch Break", ""],
    ["2:00 - 3:20 PM", "APIGA CTF", "Youth Leaders"],
    ["3:20 - 3:30 PM", "Networking Break", ""],
    ["3:30 - 4:00 PM", "Navigating Complex Conversation", "Ms. Sadia Gondal, Focal Person, Internet Governance Forum Pakistan"],
    ["4:00 - 4:40 PM", "APNIC PDP overview", "Mr. Farhad Iqbal, Excom Member, ISOC Pakistan"],
    ["4:40 - 6:00 PM", "ICANN Model Conference Part-1", "Youth Leaders"],
    ["6:00 - 6:20 PM", "Housekeeping and Day One Wrap up", "Mr. Nawal Munir"],
  ];

  const day2 = [
    ["9:00 - 9:30 AM", "Cybersecurity in Pakistan: Challenges & Opportunities from Public Policy Perspective", "Dr. Muneer Khan, PTA"],
    ["9:30 - 10:25 AM", "Introduction to Universal Acceptance & Internationalized Domain Names", "Dr. Samraad Hussain, ICANN"],
    ["10:25 - 11:25 AM", "Networking Break", ""],
    ["11:25 - 12:25 AM", "How to Draft a Workshop Proposal for the Internet Governance Forum", "Ms. Tayyaba Haider, MSG Member Asia Pacific for IG"],
    ["11:25 - 12:35 PM", "Pakistan's Digital Governance Landscape: Bridging the Digital Divide, Challenges, and the Road Ahead", "Mr. Zaydan Dar, IGF Consultant"],
    ["12:35 - 1:00 PM", "Guest Speaker Session", "Mr. Parvez Iftikhar"],
    ["1:00 - 1:50 PM", "Lunch Break", ""],
    ["1:50 - 2:40 PM", "ICANN Model Conference Part-2", "Youth Leaders"],
    ["2:40 - 4:05 PM", "ICANN Model Conference Part-3", "Youth Leaders"],
    ["4:05 - 4:35 PM", "ICANN Model Conference Part-4 Feedback & Sharing", "Youth Leaders"],
    ["4:35 - 5:40 PM", "Networking Break", ""],
    ["5:40 - 6:30 PM", "Youth Opportunities in IG (Way Forward)", "Mr. Muhammad Umar Ali"],
    ["6:30 - 6:30 PM", "Closing Ceremony and Certificate Distribution", "Mr. Nawal Munir"],
  ];

  const Table = ({ title, rows }) => (
    <div className="my-10 max-w-5xl mx-auto bg-white shadow rounded border overflow-hidden">
      <h2 className="bg-green-600 text-white font-semibold text-lg px-4 py-2">
        {title}
      </h2>

      <table className="w-full text-black border-collapse">
        <thead>
          <tr className="bg-green-200 font-semibold">
            <th className="border px-3 py-2 w-1/5">Time</th>
            <th className="border px-3 py-2 w-3/5">Session</th>
            <th className="border px-3 py-2 w-1/5">Speakers</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="even:bg-gray-50">
              {row.map((col, j) => (
                <td key={j} className="border px-3 py-2 align-top">
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50 pt-20 px-4">
      <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
        Program Schedule
      </h1>

      <Table title="DAY 1 – November 17 (Mon)" rows={day1} />
      <Table title="DAY 2 – November 18 (Tue)" rows={day2} />
    </main>
  );
}

export default ProgramSchedule;
