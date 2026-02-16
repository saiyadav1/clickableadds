"use client";

import { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Router } from "next/router";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      alert("Please fill in all fields");
      return;
    }
    try {
      let result = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      router.push("/admin/dashboard");
    } catch (err: any) {
      console.log('error occurred:', err);
      setError("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05003b] relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="w-full max-w-md z-10 px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 mb-4 shadow-2xl">
            <ShieldCheck className="h-10 w-10 text-blue-400" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight uppercase">
            Clickable<span className="text-blue-500">Ad</span>
          </h1>
          <p className="text-slate-400 text-sm font-medium mt-1">
            Management Console
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-600/10 border border-red-500/20 text-red-300 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-8 md:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Admin Email
              </label>
              <div
                className={`relative flex items-center transition-all duration-300 rounded-2xl border ${focused === "email" ? "border-blue-500 bg-white/10" : "border-white/5 bg-white/5"}`}
              >
                <Mail
                  className={`absolute left-4 h-5 w-5 transition-colors ${focused === "email" ? "text-blue-500" : "text-slate-500"}`}
                />
                <input
                  type="email"
                  placeholder="admin@clickablead.com"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-none px-12 py-4 text-white placeholder:text-slate-600 focus:ring-0 outline-none font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Secure Password
              </label>
              <div
                className={`relative flex items-center transition-all duration-300 rounded-2xl border ${focused === "password" ? "border-blue-500 bg-white/10" : "border-white/5 bg-white/5"}`}
              >
                <Lock
                  className={`absolute left-4 h-5 w-5 transition-colors ${focused === "password" ? "text-blue-500" : "text-slate-500"}`}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full bg-transparent border-none px-12 py-4 text-white placeholder:text-slate-600 focus:ring-0 outline-none font-medium"
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-2xl bg-blue-600 py-4 font-black text-xs uppercase tracking-[0.2em] text-white transition-all hover:bg-blue-500 active:scale-[0.98] shadow-lg shadow-blue-600/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Login
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
