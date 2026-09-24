import { useState } from "react";
import "./AadhaarForm.css";

function AadhaarForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: name === "photo" ? files[0] : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  };

  const validateForm = () => {
    let newErrors = {};

    // NAME
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    // DOB
    if (formData.dob === "") {
      newErrors.dob = "Date of birth is required";
    } else {
      const birthDate = new Date(formData.dob);
      const today = new Date();

      if (birthDate > today) {
        newErrors.dob = "Date of birth cannot be future date";
      }
    }

    // EMAIL
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    // PHONE
    if (formData.phone === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter a valid 10 digit phone number";
    }

    // PASSWORD
    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain lowercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password =
        "Password must contain a number";
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password =
        "Password must contain special character";
    }

    // CONFIRM PASSWORD
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword =
        "Confirm password is required";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    // PHOTO
    if (!formData.photo) {
      newErrors.photo = "Photo is required";
    } else {
      const file = formData.photo;

      const allowedTypes = [
        "image/jpeg",
        "image/png",
      ];

      if (!allowedTypes.includes(file.type)) {
        newErrors.photo =
          "Only JPG, JPEG and PNG files are allowed";
      } else if (file.size > 500 * 1024) {
        newErrors.photo =
          "Photo size must be less than 500 KB";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("");

    const isValid = validateForm();

    if (isValid) {
      setSuccess(
        "Registration submitted successfully!"
      );
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      dob: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      photo: null,
    });

    setErrors({});
    setSuccess("");

    document.getElementById("photo").value = "";
  };

  return (
    <div className="aadhaar-container">

      <h1>Aadhaar Registration Form</h1>

      <p className="note">
        Fields marked with{" "}
        <span className="required">*</span>{" "}
        are compulsory
      </p>

      <form onSubmit={handleSubmit}>

        {/* NAME */}

        <label>
          Aadhaar Name{" "}
          <span className="required">*</span>
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Aadhaar name"
        />

        <p className="error">{errors.name}</p>


        {/* DOB */}

        <label>
          Date of Birth{" "}
          <span className="required">*</span>
        </label>

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <p className="error">{errors.dob}</p>


        {/* EMAIL */}

        <label>
          Email{" "}
          <span className="required">*</span>
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />

        <p className="error">{errors.email}</p>


        {/* PHONE */}

        <label>
          Phone Number{" "}
          <span className="required">*</span>
        </label>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength="10"
          placeholder="10 digit mobile number"
        />

        <p className="error">{errors.phone}</p>


        {/* PASSWORD */}

        <label>
          Password{" "}
          <span className="required">*</span>
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create strong password"
        />

        <p className="password-info">
          Minimum 8 characters, uppercase, lowercase,
          number and special character.
        </p>

        <p className="error">{errors.password}</p>


        {/* CONFIRM PASSWORD */}

        <label>
          Confirm Password{" "}
          <span className="required">*</span>
        </label>

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter password"
        />

        <p className="error">
          {errors.confirmPassword}
        </p>


        {/* PHOTO */}

        <label>
          User Photo{" "}
          <span className="required">*</span>
        </label>

        <input
          id="photo"
          type="file"
          name="photo"
          accept="image/jpeg,image/png"
          onChange={handleChange}
        />

        <p className="photo-info">
          JPG / JPEG / PNG only | Maximum 500 KB
        </p>

        <p className="error">{errors.photo}</p>


        {/* BUTTONS */}

        <div className="buttons">

          <button
            type="submit"
            className="submit-btn"
          >
            Submit
          </button>

          <button
            type="button"
            className="clear-btn"
            onClick={handleClear}
          >
            Clear
          </button>

        </div>


        {success && (
          <p className="success">
            {success}
          </p>
        )}

      </form>

    </div>
  );
}

export default AadhaarForm;