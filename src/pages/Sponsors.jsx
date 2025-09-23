import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, Handshake, Globe, Star, ArrowRight } from 'lucide-react';

const Sponsors = () => {
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
    <div className="bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For sponsorship and collaboration opportunities, please reach us out at:
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-[#207140] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <Mail className="w-12 h-12 text-white mr-4" />
                  <h3 className="text-3xl font-bold text-white">Sponsorship Lead</h3>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-semibold text-white mb-3">Muhammad Sadeem Hannan</h4>
                  <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                    <Mail className="w-5 h-5 text-white mr-3" />
                    <a href="mailto:sadeem@gmail.com" className="text-white text-lg hover:text-[#95c065] transition-colors duration-300">
                      sadeem@apiga.pk
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Collaborators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-[#207140]">Collaborators</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#207140] to-[#95c065] mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                APIGA Pakistan thrives on collaboration. Our program is made possible by the support of 
                organizations that believe in empowering youth and strengthening Internet Governance in 
                Pakistan. These partnerships ensure that we can provide participants with high-quality 
                learning experiences, expert mentorship, and opportunities to connect with global communities.
              </p>
            </motion.div>

            {/* Collaborator Images Section */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#207140] to-[#95c065] rounded-3xl p-4 shadow-xl">
                <div className="bg-white rounded-2xl p-6 h-64 flex items-center justify-center">
                  {/* Replace with actual collaborator image */}
                  <img 
                    src="/assets/1000312439-removebg-preview.png" 
                    alt="Collaborator 1" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#95c065] to-[#207140] rounded-3xl p-4 shadow-xl">
                <div className="bg-white rounded-2xl p-6 h-64 flex items-center justify-center">
                  {/* Replace with actual collaborator image */}
                  <img 
                    src="/assets/IEEE UET (Blue).png" 
                    alt="Collaborator 2" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Future Partnerships Section */}
      <section className="py-20 bg-gradient-to-r from-[#207140] to-[#95c065]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Future Partnerships
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <p className="text-lg text-white/95 leading-relaxed mb-8 text-center">
                As APIGA Pakistan grows, we aim to expand our circle of partners and sponsors. 
                Collaborations with academic institutions, civil society organizations, government 
                bodies, and industry leaders will help strengthen the program's reach and impact. 
                We welcome partners who share our vision of empowering young voices in Pakistan's digital future.
              </p>
              
              <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Handshake className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Academic Institutions</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Civil Society</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Star className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Government Bodies</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <ArrowRight className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Industry Leaders</h4>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;