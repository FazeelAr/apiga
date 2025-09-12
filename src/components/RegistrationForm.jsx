import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        university: '',
        major: '',
        contactNumber: '',
        interests: []
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // Interest options
    const interestOptions = [
        "digital technologies", "digital development", "technology law", "public policy", "internet governance", "digital rights", "cybersecurity"
    ];

    // EmailJS configuration - Replace with your actual values
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);


    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (number) => {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
        return phoneRegex.test(number.replace(/\s/g, ''));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.university.trim()) {
            newErrors.university = 'University is required';
        }

        if (!formData.major.trim()) {
            newErrors.major = 'Major/Field of study is required';
        }

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = 'Contact number is required';
        } else if (!validatePhone(formData.contactNumber)) {
            newErrors.contactNumber = 'Please enter a valid contact number';
        }

        if (formData.interests.length === 0) {
            newErrors.interests = 'Please select at least one interest';
        }

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleInterestChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));

        // Clear interest error
        if (errors.interests) {
            setErrors(prev => ({
                ...prev,
                interests: ''
            }));
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmitError('');

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            const templateParams = {
                to_name: 'Registration Team',
                from_name: formData.name.trim(),
                from_email: formData.email.trim().toLowerCase(),
                user_name: formData.name.trim(),
                user_email: formData.email.trim().toLowerCase(),
                user_university: formData.university.trim(),
                user_major: formData.major.trim(),
                user_contact: formData.contactNumber.trim(),
                user_interests: formData.interests.join(', '),
                submission_date: new Date().toLocaleDateString(),
                submission_time: new Date().toLocaleTimeString(),
                message: `New registration received from ${formData.name.trim()}`
            };

            console.log('Sending email with data:', templateParams);

            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY // ✅ pass key here instead of init
            );

            console.log('Email sent successfully:', result);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                university: '',
                major: '',
                contactNumber: '',
                interests: []
            });
            setErrors({});
        } catch (error) {
            console.error('Email sending error:', error);
            setSubmitError(`Failed to send registration. ${error.text || error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };


    if (submitSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Registration Successful!</h2>
                    <p className="text-gray-600 mb-2">Thank you for registering with us.</p>
                    <p className="text-sm text-gray-500 mb-8">Your registration has been sent successfully via email!</p>
                    <button
                        onClick={() => setSubmitSuccess(false)}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Register Another Person
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 px-8 py-8">
                        <h1 className="text-4xl font-bold text-white text-center mb-2">Registration Form</h1>
                        <p className="text-green-100 text-center text-lg">Join our community of innovators</p>
                    </div>

                    {/* Form */}
                    <div className="p-8 space-y-6">
                        {/* Error Message */}
                        {submitError && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {submitError}
                                </div>
                            </div>
                        )}

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900 placeholder-gray-500 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.name}
                            </p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900 placeholder-gray-500 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.email}
                            </p>}
                        </div>

                        {/* University Field */}
                        <div>
                            <label htmlFor="university" className="block text-sm font-semibold text-gray-700 mb-2">
                                University *
                            </label>
                            <input
                                type="text"
                                id="university"
                                name="university"
                                value={formData.university}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900 placeholder-gray-500 ${errors.university ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                                placeholder="Enter your university name"
                            />
                            {errors.university && <p className="text-red-500 text-sm mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.university}
                            </p>}
                        </div>

                        {/* Major Field */}
                        <div>
                            <label htmlFor="major" className="block text-sm font-semibold text-gray-700 mb-2">
                                Major/Field of Study *
                            </label>
                            <input
                                type="text"
                                id="major"
                                name="major"
                                value={formData.major}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900 placeholder-gray-500 ${errors.major ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                                placeholder="e.g., Computer Science, Business Administration"
                            />
                            {errors.major && <p className="text-red-500 text-sm mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.major}
                            </p>}
                        </div>

                        {/* Contact Number Field */}
                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                                Contact Number *
                            </label>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900 placeholder-gray-500 ${errors.contactNumber ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                                placeholder="+92 300 1234567"
                            />
                            {errors.contactNumber && <p className="text-red-500 text-sm mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.contactNumber}
                            </p>}
                        </div>

                        {/* Interests Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Areas of Interest * (Select all that apply)
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                                {interestOptions.map((interest) => (
                                    <label key={interest} className="flex items-center space-x-2 cursor-pointer hover:bg-white p-2 rounded-lg transition-colors duration-200">
                                        <input
                                            type="checkbox"
                                            checked={formData.interests.includes(interest)}
                                            onChange={() => handleInterestChange(interest)}
                                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                                        />
                                        <span className="text-sm text-gray-700 font-medium">{interest}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.interests && <p className="text-red-500 text-sm mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.interests}
                            </p>}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-300 shadow-lg ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:shadow-xl transform hover:scale-105'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting Form....
                                    </span>
                                ) : (
                                    '📧 Submit Registration'
                                )}
                            </button>
                        </div>

                        {/* Footer Note */}
                        <p className="text-xs text-gray-500 text-center mt-4">
                            By submitting this form, your registration details will be sent via email.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;