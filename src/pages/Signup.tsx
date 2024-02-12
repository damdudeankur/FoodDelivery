import { useState, FormEvent } from "react";
import { CSRFToken } from "../utilities";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNumber: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const token = await CSRFToken();
    if(token){
      try {
        const response: Response = await fetch(
          "https://fooddelivery-production.up.railway.app/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-XSRF-TOKEN": token,
            },
            body: JSON.stringify(formData),
          }
        );
        if (response.status === 200) {
          console.log(response, "Registered Successfully");
        } else {
          console.log(response, "Registration Failed !");
        }
      } catch (error) {
        console.log("error", error);
      }
    }
   
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="h-[100vh]">
      <form id="signupData" className="flex flex-col w-96 m-auto">
        <input
          className="border-b-2 focus:border-none p-1"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          className="border-b-2 focus:border-none p-1"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          className="border-b-2 focus:border-none p-1"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className="border-b-2 focus:border-none p-1"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          className="border-b-2 focus:border-none p-1"
          type="text"
          placeholder="Mobile Number"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
        />
        <button className="border bg-slate-400 my-5" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
