"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Target, Map, BarChart3, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("tom@mrakas.ca");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const router = useRouter();
  const { scrollY } = useScroll();
  
  const imageY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      router.push("/overview");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background font-sans overflow-x-hidden">
      {/* Left Side: Info */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 bg-sidebar-bg p-8 md:p-16 flex flex-col justify-center text-sidebar-text relative overflow-hidden"
      >
        <motion.div 
          style={{ y: imageY, opacity: imageOpacity }}
          className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
        >
          <Image 
            src="/profile_image/aurora_town_hall.png" 
            alt="Aurora Town Hall" 
            fill
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar-bg via-sidebar-bg/80 to-transparent" />
        </motion.div>

        <div className="max-w-md relative z-10">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative w-20 h-20 rounded-2xl border-2 border-primary overflow-hidden mb-8 shadow-2xl group bg-white/10 p-2"
          >
            <Image 
              src="/profile_image/Mayor-Mrakas-Masked.png" 
              alt="Mayor Tom Mrakas" 
              fill
              className="object-contain p-1"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
            Aurora Municipal <br/>
            <span className="text-primary">Intelligence</span>
          </h1>
          <p className="text-sidebar-text text-lg mb-12 leading-relaxed opacity-80">
            The command center for Tom Mrakas&apos; 2026 campaign. Strategic analytics, real-time ward data, and voter activation tools in one premium interface.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: BarChart3, title: "Advanced KPIs", desc: "Performance tracking" },
              { icon: Map, title: "Ward Analytics", desc: "Geographic insights" },
              { icon: Target, title: "Strategy", desc: "Campaign roadmap" },
              { icon: Shield, title: "Secure Access", desc: "Executive grade" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.title}</h4>
                  <p className="text-[10px] text-sidebar-text opacity-60 uppercase tracking-widest">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Side: Form */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-background relative"
      >
        <div className="w-full max-w-sm">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
              <Shield size={10} />
              <span>Secure Access</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-3 tracking-tighter leading-none">
              Sign <span className="text-primary">In</span>
            </h2>
            <p className="text-muted-foreground font-medium">Access your campaign command center.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tom@mrakas.ca"
                required
                className="w-full bg-secondary border border-border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground uppercase tracking-widest">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                required
                className="w-full bg-secondary border border-border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="rounded border-border text-primary focus:ring-primary bg-secondary" />
                <label htmlFor="remember" className="text-sm text-muted-foreground font-medium">Keep me signed in</label>
              </div>
              <button type="button" className="text-sm font-bold text-primary hover:underline">Reset Password</button>
            </div>

            <button 
              type="submit" 
              disabled={isAuthenticating}
              className="w-full btn-primary py-4 text-lg group"
            >
              {isAuthenticating ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="flex flex-col items-center gap-3">
              <p className="text-center text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em]">
                Executive Intelligence Dashboard
              </p>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 group hover:border-primary/30 transition-all cursor-default">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Powered by <span className="text-foreground group-hover:text-primary transition-colors">Northly AI</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
