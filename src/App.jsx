import React, { useState } from "react";

const EducationForm = () => {
  const [rows, setRows] = useState([
    { id: 1, education: "", college: "", degree: "", year: "" },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, education: "", college: "", degree: "", year: "" },
    ]);
  };

  return (
    <div className="p-1 max-w-6xxl mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-center tracking-wide text-gray-800 bg-amber-500 rounded-lg p-3">
        Create Profile
      </h1>

      <div className="mb-4 grid grid-cols-3 gap-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block font-semibold">Father's Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter father's name"
          />
        </div>
        <div>
          <label className="block font-semibold">Mother's Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter mother's name"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Additional Details</label>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Date of Birth"
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Contact Number"
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Email Address"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-4">
          <select className="w-full p-2 border rounded">
            <option>Select Gender</option>
            <option>Male </option>
            <option>Female</option>
          </select>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Address 1"
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Address 2"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="City"
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="District"
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="State"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Country"
          />
          <select className="w-full p-2 border rounded">
            <option>Select ID Type</option>
            <option>Aadhaar Card </option>
            <option>Pan Card</option>
            <option>Voter ID</option>
            <option>Passport</option>
            <option>Driving License</option>
            <option>College ID</option>
          </select>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="ID Number"
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">Education Details</h2>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Educational</th>
              <th className="p-2 border">College Name</th>
              <th className="p-2 border">Course Name</th>
              <th className="p-2 border">Degree</th>
              <th className="p-2 border">Passing Year</th>
              <th className="p-2 border">Percentage/CGPA</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="p-2 border">
                  <select className="w-full p-2 border rounded">
                    <option>Select Education</option>
                    <option>10th </option>
                    <option>12th</option>
                    <option>Graduation</option>
                    <option>Post-graduation</option>
                    <option>Any Other</option>
                  </select>
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="College Name"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Course Name"
                  />
                </td>
                <td className="p-2 border">
                  <select className="w-full p-2 border rounded">
                    <option>Select Degree</option>
                    <option>B.Tech</option>
                    <option>M.Tech</option>
                    <option>B.Sc</option>
                    <option>BCA</option>
                    <option>MCA</option>
                    <option>M.Sc</option>
                  </select>
                </td>
                <td className="p-2 border">
                  <select className="w-full p-2 border rounded">
                    <option>Select Year</option>
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i}>{2027 - i}</option>
                    ))}
                  </select>
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Percentage/CGPA"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={addRow}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Row
      </button>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Upload Documents</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold">Photo</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">Resume</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">ID Proof</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">10th Marksheet</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">12th Marksheet</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">Graduation Marksheet</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">
              Post-Graduation Marksheet
            </label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">Degree Certificate</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">Experience Letter</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold">Other Documents</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded block mx-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;

// import React, { useState } from "react";
// import axios from "axios";

// const EducationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     fatherName: "",
//     motherName: "",
//     dob: "",
//     contact: "",
//     email: "",
//     gender: "",
//     address1: "",
//     address2: "",
//     city: "",
//     district: "",
//     state: "",
//     country: "",
//     idType: "",
//     idNumber: "",
//     educationDetails: [{ id: 1, education: "", college: "", degree: "", year: "", percentage: "" }],
//     documents: {
//       photo: null,
//       resume: null,
//       idProof: null,
//       tenthMarksheet: null,
//       twelfthMarksheet: null,
//       graduationMarksheet: null,
//       postGraduationMarksheet: null,
//       degreeCertificate: null,
//       experienceLetter: null,
//       otherDocuments: null,
//     },
//   });

//   const addRow = () => {
//     setFormData((prevState) => ({
//       ...prevState,
//       educationDetails: [
//         ...prevState.educationDetails,
//         { id: prevState.educationDetails.length + 1, education: "", college: "", degree: "", year: "", percentage: "" },
//       ],
//     }));
//   };

//   const handleChange = (e, index = null, field = null) => {
//     if (index !== null && field) {
//       setFormData((prevState) => {
//         const updatedEducation = [...prevState.educationDetails];
//         updatedEducation[index][field] = e.target.value;
//         return { ...prevState, educationDetails: updatedEducation };
//       });
//     } else {
//       setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
//     }
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       documents: { ...prevState.documents, [e.target.name]: e.target.files[0] },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach((key) => {
//         if (key === "documents") {
//           Object.keys(formData.documents).forEach((docKey) => {
//             if (formData.documents[docKey]) {
//               formDataToSend.append(docKey, formData.documents[docKey]);
//             }
//           });
//         } else if (key === "educationDetails") {
//           formDataToSend.append(key, JSON.stringify(formData.educationDetails));
//         } else {
//           formDataToSend.append(key, formData[key]);
//         }
//       });

//       const response = await axios.post("http://localhost:5000/submit", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert(response.data.message);
//     } catch (error) {
//       console.error("Submission error", error);
//       alert("Submission failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-6xl mx-auto">

//       {/* Personal Information */}
//       <h2 className="text-xl font-semibold my-4">Personal Information</h2>
//       <div className="grid grid-cols-3 gap-4">
//         <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Full Name" />
//         <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Father's Name" />
//         <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Mother's Name" />
//       </div>

//       <div className="grid grid-cols-3 gap-4 mt-4">
//         <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Contact Number" />
//         <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Email Address" />
//       </div>

//       {/* Gender Selection */}
//       <h3 className="text-lg font-semibold mt-6">Gender</h3>
//       <div className="flex gap-4">
//         <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
//         <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
//         <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
//       </div>

//       {/* Address Details */}
//       <h3 className="text-lg font-semibold mt-6">Address Details</h3>
//       <div className="grid grid-cols-3 gap-4">
//         <input type="text" name="address1" value={formData.address1} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Address Line 1" />
//         <input type="text" name="address2" value={formData.address2} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Address Line 2" />
//         <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" placeholder="City" />
//         <input type="text" name="district" value={formData.district} onChange={handleChange} className="w-full p-2 border rounded" placeholder="District" />
//         <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded" placeholder="State" />
//         <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Country" />
//       </div>

//       {/* ID Proof Details */}
//       <h3 className="text-lg font-semibold mt-6">ID Proof</h3>
//       <div className="grid grid-cols-2 gap-4">
//         <select name="idType" value={formData.idType} onChange={handleChange} className="w-full p-2 border rounded">
//           <option value="" disabled>Select ID Type</option>
//           <option>Aadhar</option>
//           <option>PAN</option>
//           <option>Passport</option>
//           <option>Voter ID</option>
//           <option>Driving License</option>
//         </select>
//         <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} className="w-full p-2 border rounded" placeholder="ID Number" />
//       </div>

// {/* Education Section */}
// <h2 className="text-xl font-semibold my-4">Education Details</h2>
// <div className="space-y-4">
//   {formData.educationDetails.map((row, index) => (
//     <div key={row.id} className="grid grid-cols-6 gap-4 items-center p-4 border rounded-lg shadow-sm">
//       <select name="education" value={row.education} onChange={(e) => handleChange(e, index, "education")} className="p-2 border rounded w-full">
//         <option value="">Select Education</option>
//         <option value="10th">10th</option>
//         <option value="12th">12th</option>
//         <option value="Graduation">Graduation</option>
//         <option value="Post-graduation">Post-graduation</option>
//       </select>
//       <input type="text" name="college" value={row.college} onChange={(e) => handleChange(e, index, "college")} className="p-2 border rounded w-full" placeholder="College Name" />
//       <select name="degree" value={row.degree} onChange={(e) => handleChange(e, index, "degree")} className="p-2 border rounded w-full">
//         <option value="">Select Degree</option>
//         <option value="B.Tech">B.Tech</option>
//         <option value="M.Tech">M.Tech</option>
//         <option value="B.Sc">B.Sc</option>
//         <option value="BCA">BCA</option>
//         <option value="MCA">MCA</option>
//         <option value="M.Sc">M.Sc</option>
//       </select>
//       <input type="text" name="year" value={row.year} onChange={(e) => handleChange(e, index, "year")} className="p-2 border rounded w-full" placeholder="Passing Year" />
//       <input type="text" name="percentage" value={row.percentage} onChange={(e) => handleChange(e, index, "percentage")} className="p-2 border rounded w-full" placeholder="Percentage/CGPA" />
//       <div className="flex justify-end">
//         {index > 0 && (
//           <button type="button" onClick={() => removeRow(index)} className="px-2 py-1 bg-red-500 text-white rounded">
//             Remove
//           </button>
//         )}
//       </div>
//     </div>
//   ))}
// </div>
// <div className="flex justify-end mt-4">
//   <button type="button" onClick={addRow} className="px-4 py-2 bg-blue-500 text-white rounded">
//     Add Row
//   </button>
// </div>

//             {/* File Uploads */}
//             <h3 className="text-lg font-semibold mt-6">Upload Documents</h3>
//       <div className="grid grid-cols-3 gap-4">
//         {Object.keys(formData.documents).map((docKey) => (
//           <div key={docKey}>
//             <label className="block font-semibold capitalize">{docKey.replace(/([A-Z])/g, " $1")}</label>
//             <input type="file" name={docKey} onChange={handleFileChange} className="w-full p-2 border rounded" />
//           </div>
//         ))}
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="mt-6 px-6 py-2 bg-green-500 text-white rounded block mx-auto">Submit</button>
//     </form>
//   );
// };

// export default EducationForm;
