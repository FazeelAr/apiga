import React from "react";
import { MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-8">
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
            <div className="w-full h-32 bg-emerald-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.158!2d74.35334!3d31.50194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905de4b8f9b51%3A0x7c4d3e8f9c8b2a0d!2sUniversity%20of%20Engineering%20and%20Technology%20Lahore!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-emerald-700">
        <h3 className="text-lg font-bold mb-3">Follow Us</h3>
        <div className="flex space-x-3">
          <a
            href="#"
            className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="#"
            className="w-9 h-9 bg-emerald-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="#"
            className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>
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
