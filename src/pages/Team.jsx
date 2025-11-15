import PersonCard from "../components/PersonCard";

const Team = () => {
  // Sample data - replace with your actual data
  const teamMembers = [
    {
      name: 'Nawal Munir',
      designation: 'Program and Team Lead',
      imageUrl: '/assets/Nawaal.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/nawalmunirahmad/'
    },
    {
      name: 'Muhammad Umair Ali',
      designation: 'Chair Fellowship and Program Committee',
      imageUrl: '/assets/Muhammad Umair Ali.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-umair-ali-49b2981a1/'
    },
    {
      name: 'Uzair Farooqi',
      designation: 'Fellowship and Program Committee Advisor',
      imageUrl: '/assets/uzair farooqi.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/uzair-farooqi/'
    },
    {
      name: 'Harisa Shahid',
      designation: 'Vice Chair Program and Fellowship Committee',
      imageUrl: '/assets/Harisa.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/harisa-shahid-b04923184/'
    },
    {
      name: 'Khushbakht',
      designation: 'Design & Media Communications Head',
      imageUrl: '/assets/Khushbakht.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/khush84kht/'
    },
    {
      name: 'Muhammad Sadeem Hannan',
      designation: 'Head of Operations and Sponsorship',
      imageUrl: '/assets/Sadeem.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-sadeem-hannan/'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 pt-16">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-[#207140]">Team</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#207140] to-[#95c065] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet the amazing people behind our success
          </p>
        </div>

        {/* Team Grid - 3 columns for equal distribution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <PersonCard
              key={index}
              name={member.name}
              designation={member.designation}
              imageUrl={member.imageUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Team;