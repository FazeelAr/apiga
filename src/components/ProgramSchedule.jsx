import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";

function ProgramSchedule() {
  const day1 = [
    ["8:00 - 9:00 AM", "Registration", "Youth Leaders"],
    ["9:00 - 9:30 AM", "Opening Ceremony", "Ms. Nawal Munir"],
    ["9:40 - 10:40 AM", "Governance of vs on the Internet/Layers of Digital Governance", "Ms. Gulalai Khan, Faculty, LUMS"],
    ["10:40 - 11:40 AM", "Internet Operations - How DNS Works?", "Harisa Shahid, Policy Analyst APPO Netmission Academy"],
    ["11:40 - 11:50 AM", "Networking Break", ""],
    ["11:55 - 1:00 PM", "Governance of the Internet - unique identifiers (protocols, names, numbers) and coordination bodies", "Mr. Fahd Batayneh, Stakeholder Engagement Director - Middle East, ICANN"],
    ["1:00 - 2:00 PM", "Lunch Break", ""],
    ["2:10 - 3:10 PM", "APIGA City", "Youth Leaders"],
    ["3:10 - 3:20 PM", "Networking Break", ""],
    ["3:20 - 4:00 PM", "Navigating Complex Conversation", "Ms. Sadia Gondal, Focal Person UNESCO-IIOE National Centre Pakistan"],
    ["4:00 - 4:40 PM", "APNIC PDP overview", "Mr. Fahad Khan, Lead Network Engineer, Afiniti"],
    ["4:45 - 6:00 PM", "ICANN Model Conference Part-1", "Youth Leaders"],
    ["6:00 - 6:20 PM", "Housekeeping and Day One Wrap up", "Ms. Nawal Munir"],
  ];

  const day2 = [
    ["8:30 - 9:30 AM", "Cybersecurity in Pakistan: Challenges & Opportunities from Public Policy Perspective", "Dr. Mukaram Khan, Director General Pakistan Telecommunication Authority (PTA)"],
    ["9:35 - 10:25 AM", "Introduction to Universal Acceptance & Internationalized Domain Names", "Dr. Sarmad Hussain, Senior Director IDNs & UA Programs, ICANN"],
    ["10:25 - 10:35 AM", "Networking Break", ""],
    ["10:35 - 11:25 AM", "How to Draft a Workshop Proposal for the Internet Governance Forum", "Ms. Tayyaba Iftikhar, MSG Member Asia Pacific IGF"],
    ["11:25 - 12:35 PM", "Pakistan's Digital Governance Landscape: Bridging the Digital Divide, Challenges, and the Road Ahead", "Mr. Zakir Syed, Director Internet Governance, MoIT&T"],
    ["12:35 - 1:00 PM", "Guest Speaker Session", "Mr. Parvez Iftikhar"],
    ["1:00 - 1:50 PM", "Lunch Break", ""],
    ["1:50 - 2:20 PM", "ICANN Model Conference Part-2", "Youth Leaders"],
    ["2:20 - 4:05 PM", "ICANN Model Conference Part-3", "Youth Leaders"],
    ["4:05 - 4:35 PM", "ICANN Model Conference Part-4 Feedback & Sharing", "Youth Leaders"],
    ["4:35 - 4:45 PM", "Networking Break", ""],
    ["5:40 - 6:30 PM", "Youth Opportunities in IG (Way Forward)", "Mr. Muhammad Umair Ali, Board Director, Internet Society Online Safety SIG"],
    ["6:30 - 6:30 PM", "Closing Ceremony and Certificate Distribution", "Ms. Nawal Munir"],
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const Table = ({ title, rows, dayNumber }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-10 max-w-6xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden"
    >
      <div className={`${dayNumber === 1 ? 'bg-gradient-to-r from-[#207140] to-[#95c065]' : 'bg-gradient-to-r from-[#95c065] to-[#207140]'} text-white font-bold text-xl px-6 py-4 flex items-center gap-3`}>
        <Calendar className="w-6 h-6" />
        {title}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-gray-800 border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-gray-100 to-gray-50 font-semibold border-b-2 border-[#207140]">
              <th className="px-4 py-3 text-left w-1/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#207140]" />
                  <span>Time</span>
                </div>
              </th>
              <th className="px-4 py-3 text-left w-3/5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#207140]" />
                  <span>Session</span>
                </div>
              </th>
              <th className="px-4 py-3 text-left w-1/5">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#207140]" />
                  <span>Speakers</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => {
              const isBreak = row[1].toLowerCase().includes('break');
              return (
                <motion.tr
                  key={i}
                  variants={staggerContainer}
                  className={`border-b border-gray-200 hover:bg-gradient-to-r hover:from-[#95c065]/5 hover:to-transparent transition-all duration-300 ${
                    isBreak ? 'bg-gray-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="px-4 py-3 align-top">
                    <span className={`font-semibold ${isBreak ? 'text-gray-500' : 'text-[#207140]'}`}>
                      {row[0]}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <span className={`${isBreak ? 'text-gray-500 italic' : 'text-gray-800 font-medium'}`}>
                      {row[1]}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <span className={`text-sm ${isBreak ? 'text-gray-400' : 'text-gray-600'}`}>
                      {row[2]}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20 px-4 pb-12">
      <motion.div
        {...fadeInUp}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Program <span className="text-[#207140]">Schedule</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#207140] to-[#95c065] mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join us for two days of engaging sessions, networking opportunities, and hands-on learning experiences in Internet Governance.
        </p>
      </motion.div>

      <Table title="DAY 1 – November 17 (Mon)" rows={day1} dayNumber={1} />
      <Table title="DAY 2 – November 18 (Tue)" rows={day2} dayNumber={2} />

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto mt-12 bg-gradient-to-r from-[#207140] to-[#95c065] rounded-3xl p-8 shadow-xl"
      >
        <h3 className="text-2xl font-bold text-white mb-4 text-center">Important Information</h3>
        <div className="grid md:grid-cols-3 gap-6 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold mb-1">Dates</p>
            <p className="text-sm text-white/90">November 17-18, 2025</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold mb-1">Duration</p>
            <p className="text-sm text-white/90">2 Full Days</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <User className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold mb-1">Format</p>
            <p className="text-sm text-white/90">In-Person at UET Lahore</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default ProgramSchedule;