// import React from "react";
// import { useState } from "react";
// import { ReactDOM } from "react";

// function EditProfile(){
//     const [inputs, setInputs] = useState({});
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({ values,[name]: value}))

//     }
//     const handleSubmit =(event)=> {
//         event.preventDefault();
//         alert(inputs);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Full name:
//                 <input type= "text"
//                 name="username"
//                 value={inputs.username || ""}
//                 onChange={handleChange}
//                 />
//             </label>

//             <label>Gender:
//                 <input type= "text"
//                 name="gender"
//                 value={inputs.gender || ""}
//                 onChange={handleChange}
//                 />
//             </label>

//             <label>Age:
//                 <input type= "number"
//                 name="age"
//                 value={inputs.age || ""}
//                 onChange={handleChange}
//                 />
//             </label>

//             <label>Contact:
//                 <input type= "number"
//                 name="number"
//                 value={inputs.number || ""}
//                 onChange={handleChange}
//                 />
//             </label>

//             <label>About:
//                 <input type= "text"
//                 name="about"
//                 value={inputs.about || ""}
//                 onChange={handleChange}
//                 />
//             </label>
//         </form>
//     )
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));

// export default EditProfile


import React, { useState } from "react";

const EditProfile = ({ userProfileData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...userProfileData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming onSave is a function passed from the parent component
    if(typeof onSave==="function"){
        onSave(formData);
    }
   
  };

  return (
    <ul>
        <form onSubmit={handleSubmit}>
      <li>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        </li>

        <li>
        Gender:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        </li>

        <li>
        Age:
        <input
          type="number"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        </li>

        <li>
        Contact:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        </li>

        <li>
        About:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        </li>
      {/* Add similar fields for other profile information */}
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
    </ul>
    
  );
};

export default EditProfile;
