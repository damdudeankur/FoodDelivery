import { FormEvent, useState } from "react";
import axios from "axios";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response: Response = await axios({
        method: "post",
        url: "https://fooddelivery-production.up.railway.app/api/auth/authenticate",
        data: JSON.stringify(formData),
      });
      if (response.status === 200) {
        console.log(response, "Login Successfully !");
      } else {
        console.log(response, "Login Failed !");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="h-[100vh]">
      <form className="flex flex-col w-96 m-auto">
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
        <button className="border bg-slate-400 my-5" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
