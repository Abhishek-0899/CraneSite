import React, { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;