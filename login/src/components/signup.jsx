import { useState } from "react";
import { User, Mail, LockKeyhole,Phone } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Signup({className, handleClick}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Valid, setValid] = useState(true);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with:", { username, email, password });
  };

  const handleChange =(value)=>{
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };
  
 const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("Google User:", result.user);
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithGithub();
      console.log("Github User:", result.user);
    } catch (error) {
      console.error("Github Login Error:", error.message);
    }
  };

  const linkedInLoginUrl = async () => {
    try {
      const result = await signInWithLinkedIn();
      console.log("LinkedIn User:", result.user);
    } catch (error) {
      console.error("LinkedIn Login Error:", error.message);
    }
  };



  return (
    <div className={`p-8 min-w-96 ${className}`}>
    <h2 className="text-3xl font-bold text-center text-stone-900 mb-10">Sign Up</h2>

    
    <div className="grid grid-cols-4 gap-3 mb-1">
       <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-10 h-10 cursor-pointer flex items-center justify-center border rounded-lg bg-white hover:bg-gray-100 transition"
        >
        <img
       className="w-5 h-5"
        src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
        alt="Google"
      />
      </button>

      <button
        onClick={handleGithubLogin}
        type="button"
        className="w-10 h-10 cursor-pointer flex items-center justify-center border rounded-lg bg-white hover:bg-gray-100 transition"
      >
        <img
          className="w-5 h-5"
          src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
          alt="GitHub"
        />
      </button>

      <a
        href="#"
        onClick={linkedInLoginUrl}
        className="w-10 h-10 cursor-pointer flex items-center justify-center border rounded-lg bg-white hover:bg-gray-100 transition"
      >
        <img
          className="w-5 h-5"
          src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
          alt="LinkedIn"
        />
      </a>

       <button
    type="button"
    onClick={() => console.log("Twitter login")}
    className="w-10 h-10 flex cursor-pointer items-center justify-center border rounded-lg bg-white hover:bg-gray-100 transition"
  >
    <img
      className="w-5 h-5"
      src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
      alt="Twitter"
    />
  </button>

  <button
    type="button"
    onClick={() => console.log("Apple login")}
    className="w-10 h-10 flex cursor-pointer items-center justify-center border rounded-lg bg-white hover:bg-gray-100 transition"
  >
    <img
      className="w-5 h-5"
      src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
      alt="Apple"
    />
  </button>

  <button
    type="button"
    onClick={() => console.log("Microsoft login")}
    className="w-10 h-10 flex cursor-pointer items-center justify-center border rounded-lg bg-white hover:bg-gray-100 transition"
  >
    <img
      className="w-5 h-5"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAG1BMVEUAAAD////5+fn8/PyXl5cEBARKSkoJCQlNTU35lUyyAAABpUlEQVR4nO3cQW6DQBREQWJI7PufOJssUYTUPU6+Xe8A9JRAghXbx6u3/fUBlkc4P8L5Ec6PcH6E8yOcH+H8COd3JtyPbU23n4Hbmst/Hvs14f615gDLhdv2OCGeCFfdwScIt+OScNn8E4T3lxeecQibERYiJAwjLERIGEZYiJAwjLAQIWEYYSFCwjDCQoSEYYSFCAnDCAsREoYRFiIkDCMsREgYRliIkDCMsBAhYRhhIULCMMJChIRhhIUICcMICxEShhEWIiQMIyxESBhGWIiQMIywECFhGGEhwjcR3pb1zInfhC8W4fwI50c4v7d8H6774Pgv3zTr5gkLERKGERYiJAwjLERIGEZYiJAwjLAQIWEYYSFCwjDCQoSEYYSFCAnDCAsREoYRFiIkDCMsREgYRliIkDCMsBAhYRhhIULCMMJChIRhhIUICcMICxEShhEWIiQMIyxESBhGWIiQMIywECFh2H8Rfi6bXy+8XxIey/bXC49Lwv1r1f5y4WO/JPzYj0UP6mLh/TgBvud/E18swvkRzo9wfoTzI5wf4fwI50c4v2+Cukp+UeZNEQAAAABJRU5ErkJggg=="
      alt="Microsoft"
    />
  </button>

  <button
    type="button"
    onClick={() => console.log("Discord login")}
    className="w-10 h-10 flex cursor-pointer items-center justify-center border rounded-lg bg-white hover:bg-gray-100 transition"
  >
    <img
      className="w-5 h-5"
      src="https://img.icons8.com/ios-filled/50/000000/discord-logo.png"
      alt="Discord"
    />
  </button>

  <button
    type="button"
    onClick={() => console.log("facebook login")}
    className="w-10 h-10 flex cursor-pointer items-center justify-center border rounded-lg bg-white hover:bg-gray-100 transition"
  >
    <img
      className="w-5 h-5"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAABQUFA7OzvHx8dbW1vp6emFhYVmZma/v79VVVV6enqrq6ulpaWIiIjt7e23t7dwcHChoaFFRUXPz89lZWX4+PiPj4+ampokJCR5eXnf399sbGxLS0vZ2dni4uIVFRU3NzfUFXb4AAACZUlEQVR4nO3d6W6CQBRAYeuCCijihmtb3/8lmzZtQnQGh8J05t6e81u5+QJiiyyDARERERERERERERERERERERER0f9tnqXDkKXZyqtv/BJDc3/AdWjbd5UvYBxr8DNfW2poVy0/wHloVq3cizALzap18SJMQ7NqjbwIh6FZtRAiRBg+hAgRhg8hQoThEyrclNV6kef5Yn2oltllsjlqEp7miXFocVYhvGwbxioQTovGseKF12affOHi6VjhwtfnY2ULn22h4oUuQNFCh01UtvD5Tka48Oo4Vq7Q/FeaImHmOlas0Gk/Klno/uORVGHTfxM6hO5jhQqd9zNihS1OGBEqbNiTbhfTcvbTbjcTKrQOWbq9P3phahnx5rqA6IWWHc3eeQHRCw/mCaUeofmsLfdVGL/Q/GXR4qSr6IVj44BKvfCkXrhTL5wgRIgQIUKECBEiRIjwD4RXscIiuW9vHPD4uiQpzOzIhJ2mvqsXmhepSJioF27VC1fqhQf1QsuBfkXCjXqhZZEIf1cIoe0nUz1C220c9Ahz9ULbD256hOZzTTQJb+qFtkWqEVrPXVAjNF+4pklovatRZMLl9K7sbBywvn/d0np8MTLhY+ajiS1ugCNUqP+IMEKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRNiiHp+dF6mwx+cfdhbOvAgtFzsGEfp5hmWPzyHtLDRf7t65/h5E2lXoaRW2uimeV2GLe/S2ra+PYjehtzX4VX4Zde9ovtd1eXN47yz39BkkIiIiIiIiIiIiIiIiIiIiIiKS0AdXcU3pLUq5mwAAAABJRU5ErkJggg=="
      alt="Facebook"
    />
  </button>
    </div>

      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-3 text-md whitespace-nowrap">or use your email ID for registration</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

    <form onSubmit={handleSignup} className="space-y-4">
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 border-md bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="email"
          className="w-full pl-10 pr-4 py-2 border-md bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
              <div className="w-full max-w-sm">
              <div className="relative w-full max-w-sm">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input type="tel" className="w-full pl-10 pr-4 py-2 border-md bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black " placeholder="Phone number" />
                </div>
                {!Valid && <p className="text-red-500 text-sm mt-1">Please enter a valid phone number.</p>}
              </div>
            </div>

            <div className="relative mb-4 inline-block text-left">
              <select className="px-4 py-2 border-md bg-white rounded-xl w-xs focus:outline-none cursor-pointer">
                <option>Select your role</option>
                <option>Admin</option>
                <option>Attende</option>
              </select>
            </div>


      <div className="relative">
        <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="password"
          className="w-full pl-10 pr-4 py-2 border-md bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="w-full bg-white text-black font-bold py-2 cursor-pointer rounded-lg hover:bg-gray-300 transition duration-300">
        Sign Up
      </button>

      <p className="text-center font-medium md:hidden">Already have account? <a onClick={handleClick} className="text-black font-semibold cursor-pointer hover:underline">Login</a></p>

    </form>
  </div>
  );
}
