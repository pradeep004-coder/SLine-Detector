'use client'
import { useState } from "react";
import Popup from "./components/Popup";
import { toast } from "react-toastify";
import { getSline } from "./utils/helper";


export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    age: 18,
    gender: "Select gender",
  });

  const handleClose = () => {
    setShowPopup(false);
  }

  const handleSubmit = (e) => {
    const nameRegex = /[a-zA-Z\s']{4,100}$/;

    e.preventDefault();
    if (!userData.name) return toast.error("Enter Name!!");
    if (!nameRegex.test(userData.name)) return toast.error("Enter propper Name!!");
    if (/\d+/.test(userData.name)) return toast.error("Name can not contain digits");
    if (userData.age < 0 || userData.age > 150) return toast.error("Invalid Age!!");
    if (userData.gender === "Select gender") return toast.error("Enter Gender!!");

    fetch("http://localhost:8666/api/database", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
        SLine: getSline(userData.name, userData.age, userData.gender)
      })
    })
      .then(() => setShowPopup(true))
      .catch(err => {
        toast.error("Someting went wrong!!")
      });
  }

  const handleChange = (e) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }


  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      {showPopup && <Popup
        name={userData.name}
        age={userData.age}
        gender={userData.gender}
        handleClose={handleClose}
      />}

      <form className="mx-auto my-6 mt-18 py-5 max-w-4xl bg-zinc-300 rounded-2xl" onSubmit={handleSubmit}>
        <h1 className='text-center text-4xl font-bold'>
          <span className='text-red-700'>S</span>
          <span className=''>Line Detector</span>
        </h1>
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="text-lg">
            <span className="font-bold">Name : </span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              value={userData.name}
              onChange={handleChange}
              className="px-2 py-1 border-1 rounded-lg focus:outline-none bg-zinc-300 focus:bg-zinc-300"
            />
          </div>

          <div className="text-lg ">
            <span className="font-bold">Age : </span>
            <input
              type="number"
              name="age"
              min={0} max={150}
              placeholder="Enter your age..."
              value={userData.age}
              onChange={handleChange}
              className="px-2 py-1 border-1 rounded-lg focus:outline-none bg-zinc-300 focus:bg-zinc-300"
            />
          </div>

          <div className="text-lg ">
            <span className="font-bold">Gender : </span>
            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              className="px-2 py-1 border-1 rounded-lg focus:outline-none bg-zinc-300 focus:bg-zinc-300"
            >
              <option disabled>Select gender</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
              <option value="g">Meetha</option>
              <option value="l">Kaichi Samaaj</option>
              <option value="t">Transistor</option>
              <option value="b">Bicycle</option>
              <option value="a">Aaloo</option>
              <option value="o">Kuchh Aur</option>
            </select>
          </div>

          <button type="submit" className="mt-2 px-4 py-1 bg-zinc-800 text-white rounded-lg">Submit</button>
        </div>
      </form>
    </>
  );
}
