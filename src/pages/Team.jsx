import PersonCard from "../components/PersonCard";


const Team = () => {
  // Sample data - replace with your actual data
  const teamMembers = [
    {
      name: 'Nawal Munir',
      designation: 'Team Lead',
      imageUrl: '/src/assets/Nawaal.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/nawalmunirahmad/'
    },
    {
      name: 'Muhammad Umair Ali',
      designation: 'Program and Fellowship Committee',
      imageUrl: '/src/assets/Muhammad Umair ALi.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-umair-ali-49b2981a1/'
    },
    {
      name: 'Uzair Farooqi',
      designation: 'Program and Fellowship Committee',
      imageUrl: '/src/assets/uzair farooqi.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/uzair-farooqi/'
    },
    {
      name: 'Harisa Shahid',
      designation: 'Program and Fellowship Committee',
      imageUrl: '/src/assets/Harisa.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/harisa-shahid-b04923184/'
    },
    {
      name: 'Khushbakht',
      designation: 'Design Head',
      imageUrl: '/src/assets/Khushbakht.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/khush84kht/'
    },
    {
      name: 'Muhammad Sadeem Hannan',
      designation: 'Sponsorship Head',
      imageUrl: '/src/assets/Sadeem.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-sadeem-hannan/'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h1>
          <p className="text-lg text-gray-600">Meet the amazing people behind our success</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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