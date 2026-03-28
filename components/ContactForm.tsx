"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/home_contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setLoading(false);
  };

  if (success) {
    return (
      <p className="text-white text-center text-lg font-semibold">
        ✅ Message sent successfully!
      </p>
    );
  }

  function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-slate-400 text-[10px] font-bold ml-1 uppercase">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-slate-400 text-[10px] font-bold ml-1 uppercase">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@agency.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-slate-400 text-[10px] font-bold ml-1 uppercase">
          Message
        </label>
        <textarea
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Project details..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-slate-600 hover:bg-slate-500 text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px]"
      >
        {loading ? "Sending..." : "Start Project"}
      </button>
    </form>
  );
}