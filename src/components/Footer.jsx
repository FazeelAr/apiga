import React from "react";
import { MapPin, Calendar } from "lucide-react";
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <p className="text-emerald-200 text-sm">APIGA Pakistan</p>

            <div>
              <p className="text-emerald-200 mb-1 text-sm">
                Participation Inquiries:
              </p>
              <p className="text-emerald-200 text-sm">Muhammad Umair Ali</p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=example@gmail.com&su=Event%20Registration"
                target="_blank"
              >
                <p className="text-emerald-200 text-sm">example@gmail.com</p>
              </a>
            </div>

            <div>
              <p className="text-emerald-200 mb-1 text-sm">
                Program and Fellowship
              </p>
              <p className="text-emerald-200 text-sm">Uzair Farooqi</p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=uzaifarooqi@gmail.com&su=Event%20Registration"
                target="_blank"
              >
                <p className="text-emerald-200 text-sm">
                  uzaifarooqi@gmail.com
                </p>
              </a>
            </div>

            <div>
              <p className="text-emerald-200 mb-1 text-sm">Team Lead:</p>
              <p className="text-emerald-200 text-sm">Nawal Munir</p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=example@gmail.com&su=Event%20Registration"
                target="_blank"
              >
                <p className="text-emerald-200 text-sm">example@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        {/* Event Details Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Event Details</h3>
          <div className="flex items-start space-x-2">
            <Calendar className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-emerald-200 text-sm">
                Date: 17th and 18th November 2025
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <a
              href="https://www.icann.org/"
              className="block text-emerald-200 hover:text-white transition-colors text-sm"
            >ICANN</a>
            <Link
              to={"/"}
              className="block text-emerald-200 hover:text-white transition-colors text-sm"
            >APIGA</Link>
            <Link
              to={"schedule"}
              className="block text-emerald-200 hover:text-white transition-colors text-sm"
            >
              Program Schedule
            </Link>
            <Link
              to={"#"}
              className="block text-emerald-200 hover:text-white transition-colors text-sm"
            >
              APIGA Pakistan 2025 Photos
            </Link>
          </div>
        </div>

        {/* Location Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Location</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-emerald-200 font-medium text-sm">
                  University of Engineering & Technology
                </p>
                <p className="text-emerald-200 text-xs">
                  UET Lahore, Punjab, Pakistan
                </p>
              </div>
            </div>

            {/* Embedded Map */}
            <div>
              <div className="w-full h-32 bg-[#207140] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.974802394433!2d74.35237477430677!3d31.579738844208773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b273d6ed0c1%3A0x4dcac84ea2200944!2sUniversity%20of%20Engineering%20and%20Technology%20(UET)%2C%20Lahore!5e0!3m2!1sen!2s!4v1758452840523!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-emerald-700">
        <h3 className="text-lg font-bold mb-3">Follow Us</h3>
        <div className="flex space-x-3">
          <a
            href="https://www.linkedin.com/company/apigapakistan/"
            className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://www.instagram.com/apigapakistan?igsh=cDFubTl2MjBqOTc4"
            className="w-9 h-9 bg-emerald-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
            aria-label="Instagram"
            target="_blank"
          >
            <Instagram className="w-4 h-4" />
          </a>

        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-6 pt-4 border-t border-emerald-700 text-center">
        <p className="text-emerald-300 text-xs">
          © 2025 APIGA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
