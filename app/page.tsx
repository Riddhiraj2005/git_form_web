"use client";

import { useState } from "react";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  gender: string;
  address: string;
};

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-black">
      <main className="w-full max-w-2xl bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/next.svg"
            alt="Logo"
            width={100}
            height={20}
            className="dark:invert"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">
          GITS Udaipur - Student Registration Form
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-3 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-3 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border rounded-lg"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="course"
            className="p-3 border rounded-lg"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MBA">MBA</option>
          </select>

          {/* Gender */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-black dark:text-white">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label className="flex items-center gap-2 text-black dark:text-white">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <textarea
            name="address"
            placeholder="Address"
            className="p-3 border rounded-lg"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-black text-white p-3 rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-black"
          >
            Register
          </button>
        </form>
      </main>
    </div>
  );
}