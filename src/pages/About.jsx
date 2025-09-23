import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, BookOpen, MapPin, Wifi, Globe, ChevronDown } from 'lucide-react';

const ApiGaPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-[#207140]">APIGA Pakistan</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#207140] to-[#95c065] mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                APIGA Pakistan is the national chapter of the Asia Pacific Internet Governance Academy (APIGA), 
                a flagship capacity-building program designed to empower the next generation of Internet leaders. 
                Bringing together youth, experts, and stakeholders from across the country, APIGA Pakistan provides 
                an inclusive platform to learn, debate, and collaborate on key issues in Internet governance, 
                digital rights, and cybersecurity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through workshops, simulations, and multi-stakeholder discussions, participants gain practical 
                knowledge of how policies are developed, how governance structures work, and how technology shapes 
                society. By connecting Pakistani youth to the broader Asia Pacific Internet governance ecosystem, 
                APIGA Pakistan enables meaningful participation in regional and global forums.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-gradient-to-br from-[#207140] to-[#95c065] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Globe className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Connecting Pakistan to the World</h3>
                  <p className="text-white/90 leading-relaxed">
                    Bridging local perspectives with global Internet governance discussions
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Mission Card */}
            <motion.div
              variants={fadeInLeft}
              className="group"
            >
              <div className="bg-[#207140] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-white mr-4" />
                  <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  Our mission is to empower Pakistani youth with the knowledge, skills, and confidence to actively 
                  participate in decision-making processes that shape the digital world not only in Pakistan, but on 
                  a bigger level as well. We aim to ensure that Pakistan's perspectives and voices are represented 
                  in national, regional, and international dialogues on Internet governance.
                </p>
              </div>
            </motion.div>

            {/* Story Card */}
            <motion.div
              variants={fadeInRight}
              className="group"
            >
              <div className="bg-[#95c065] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-12 h-12 text-white mr-4" />
                  <h3 className="text-3xl font-bold text-white">Our Story</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  Local APIGA Pakistan builds on the legacy of the APIGA, a flagship initiative co-hosted by ICANN 
                  and KISA since 2016. APIGA Pakistan localizes this model to address the unique challenges and 
                  opportunities in Pakistan. By bringing the program home, we provide a direct pathway for Pakistani 
                  youth to engage in the wider Internet governance ecosystem.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lahore Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The City: <span className="text-[#207140]">Lahore</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#207140] to-[#95c065] mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-gradient-to-br from-[#95c065] to-[#207140] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <MapPin className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Cultural Capital of Pakistan</h3>
                  <p className="text-white/90 leading-relaxed">
                    Where history and progress meet in perfect harmony
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInLeft} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Known as the cultural capital of Pakistan, Lahore is a city where history and progress meet. 
                From the grandeur of the Lahore Fort and Badshahi Mosque to its thriving universities and 
                emerging tech ecosystem, Lahore embodies both tradition and innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For APIGA Pakistan participants, the city offers more than just a venue. It provides a living 
                example of how culture, technology, and civic engagement can shape the future. As Pakistan continues 
                its digital transformation, Lahore stands at the forefront of education, innovation, and leadership, 
                making it a fitting home for conversations on Internet governance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Host Institution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Host Institution: <span className="text-[#207140]">UET Lahore</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#207140] to-[#95c065] mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The University of Engineering and Technology (UET) Lahore is one of Pakistan's oldest and most 
                prestigious institutions, founded in 1921. Over the past century, it has evolved into a premier hub 
                for research, technology, and academic excellence, producing leaders who have shaped Pakistan's 
                infrastructure, industries, and innovation landscape.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With its historic Main Campus, dynamic student societies, and strong tradition of organizing 
                national-level conferences and competitions, UET has consistently fostered intellectual curiosity 
                and leadership among its students. Hosting APIGA Pakistan at UET Lahore creates a powerful synergy: 
                a globally relevant program nested within a university that has long been a center of technical 
                knowledge and youth energy. Together, they set the stage for empowering young Pakistanis to not 
                only understand but also influence the digital policies of tomorrow.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-gradient-to-br from-[#207140] to-[#95c065] rounded-3xl p-2 shadow-2xl">
                <img src="/assets/UET.jpg" alt="UET Lahore Campus" className="w-full h-80 object-cover rounded-2xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Pakistan, Why Now Section */}
      <section className="py-20 bg-gradient-to-r from-[#207140] to-[#95c065]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Pakistan, Why Now
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <p className="text-lg text-white/95 leading-relaxed mb-6">
                Pakistan stands at a pivotal moment in its digital journey. With one of the largest youth populations 
                in the world, rapid Internet penetration, and an expanding digital economy, the country is poised for 
                transformation. Yet the challenges remain, such as, digital divides between urban and rural areas, 
                concerns over online privacy, cybersecurity threats, and the need for inclusive digital policy frameworks.
              </p>
              <p className="text-lg text-white/95 leading-relaxed">
                Youth perspectives are critical in shaping responses to these challenges. However, young people are 
                often underrepresented in decision-making processes. APIGA Pakistan responds to this gap by equipping 
                Pakistani youth with the skills and platforms to influence national, regional, and global Internet 
                Governance agendas. This is not just about preparing individuals, it is about ensuring Pakistan's 
                digital future reflects the values, aspirations, and needs of its next generation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      

    </div>
  );
};

export default ApiGaPage;