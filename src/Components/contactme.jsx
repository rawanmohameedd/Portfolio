import { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Replace these with your actual EmailJS service ID, template ID, and public key
            const serviceId = 'service_2a8sowc';
            const templateId = 'template_uzwe4kc';
            const publicKey = 'Ht_Joz6hMd1Bw3SEO';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            // Reset form and show success message
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setStatus({
                submitted: true,
                success: true,
                message: 'Your message was sent successfully!'
            });
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus({
                submitted: true,
                success: false,
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background min-h-screen flex items-center justify-center p-6">
            <div className="max-w-6xl w-full p-6 md:p-12">
                <h2 className="text-center text-primary text-2xl md:text-3xl font-bold mb-10">
                    Contact Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Section - Contact Info */}
                    <div className="flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                        <div className="text-lg text-gray-700 space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-primary" />
                                <span>+20 10 96762352</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-primary" />
                                <span>Nasr City, Cairo, Egypt</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <a href="mailto:nrawana12345@gmail.com" className="flex items-center space-x-3 text-gray-700 no-underline">
                                    <FaEnvelope className="text-primary" />
                                    <span>nrawana12345@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-6 mt-8">
                            <a
                                href="https://www.linkedin.com/in/rawan-mohamed-969a3a220/"
                                className="text-primary hover:text-blue-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={28} />
                            </a>
                            <a
                                href="https://github.com/rawanmohameedd"
                                className="text-primary hover:text-blue-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={28} />
                            </a>
                            <a
                                href="https://leetcode.com/u/Rawan__Mohamed/"
                                className="text-primary hover:text-blue-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiLeetcode size={28} />
                            </a>
                            <a
                                href="https://www.hackerrank.com/profile/nrawana12345"
                                className="text-primary hover:text-blue-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaHackerrank size={28} />
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Message Form */}
                    <div className="flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">Send Me a Message</h3>
                        {status.submitted && (
                            <div className={`p-4 rounded mb-4 ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {status.message}
                            </div>
                        )}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-primary w-full"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-primary w-full"
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-primary w-full"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here..."
                                className="p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-primary w-full"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-primary hover:bg-blue-600 px-6 py-3 rounded text-white font-semibold transition duration-300 flex items-center justify-center"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span>Sending...</span>
                                ) : (
                                    <span>Send Message</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}