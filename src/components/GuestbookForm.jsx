// import React, { useState } from "react";

// const GuestbookForm = ({ onSubmit }) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//         privateMessage: "",
//     });
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         await onSubmit(formData);
//         setFormData({ name: "", email: "", message: "", privateMessage: "" });
//         setLoading(false);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h1 className="text-end text-white ">
//                 Tailwind is working 🎉
//             </h1>

//             <div className="bg-black p-4">
//                 <h1 className="text-end text-white">Hello World</h1>
//             </div>

//             <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 style={{
//                     width: "100%",
//                     margin: "8px 0",
//                     padding: "8px",
//                     fontSize: "16px",
//                 }}
//             />
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 style={{
//                     width: "100%",
//                     margin: "8px 0",
//                     padding: "8px",
//                     fontSize: "16px",
//                 }}
//             />
//             <textarea
//                 name="message"
//                 placeholder="Guest book entry — Share a memory, message, or thoughts"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 style={{
//                     width: "100%",
//                     margin: "8px 0",
//                     padding: "8px",
//                     height: "100px",
//                     fontSize: "16px",
//                 }}
//             />
//             <textarea
//                 name="privateMessage"
//                 placeholder="Private message (optional, will not be shared publicly)"
//                 value={formData.privateMessage}
//                 onChange={handleChange}
//                 style={{
//                     width: "100%",
//                     margin: "8px 0",
//                     padding: "8px",
//                     height: "80px",
//                     fontSize: "16px",
//                 }}
//             />
//             <button
//                 type="submit"
//                 disabled={loading}
//                 style={{
//                     padding: "10px 20px",
//                     cursor: "pointer",
//                     fontSize: "16px",
//                     backgroundColor: "#2e7d32",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "4px",
//                 }}
//             >
//                 {loading ? "Submitting..." : "Submit"}
//             </button>
//         </form>
//     );
// };

// export default GuestbookForm;


import React, { useState } from "react";

const GuestbookForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    privateMessage: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(formData);
    setFormData({ name: "", email: "", message: "", privateMessage: "" });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p className="text-xs text-gray-500 mt-1">Will not be shared publicly</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Guest book entry</label>
        <textarea
          name="message"
          placeholder="Share a memory, message, or thoughts"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Private message (optional)
        </label>
        <textarea
          name="privateMessage"
          placeholder="Will not be shared publicly"
          value={formData.privateMessage}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default GuestbookForm;
