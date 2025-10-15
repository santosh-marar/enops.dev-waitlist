"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2, Check, ArrowRight } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Features } from "@/components/ui/feature-card";
import { toast } from "sonner";
import { toastStyles } from "@/lib/toast-style";

export default function Page() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

       if (!res.ok) {
         // Handle duplicate email (409)
         if (res.status === 409) {
           toast.error("Already registered", {
             description: data.message,
             duration: 4000,
             style: toastStyles.error,
           });
         } else {
           throw new Error(data.message || "Failed to submit email");
         }
         return;
       }

      toast.success("Waitlist confirmed", {
        description: `Welcome to enops.dev, ${email}`,
        duration: 3000,
        style: toastStyles.success,
      });
      setEmail("");
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
      toast.error("Request failed", {
        description: error instanceof Error ? error.message : "Network error",
        duration: 3000,
        style: toastStyles.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black/[0.96] bg-grid-white/[0.02] text-white font-mono overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight />
      </div>

      <main className="flex flex-col items-center justify-center flex-grow px-4 text-center  pt-20 pb-16 max-w-4xl mx-auto">
        {/* Hero Text Animation */}
        <LayoutTextFlip
          text="<Schema/> with AI"
          words={["Generate", "Visualize", "Export"]}
          duration={3000}
        />

        {/* Waitlist Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3 pt-8"
        >
          <Input
            type="email"
            placeholder="dev@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting || isSubmitted}
            className="flex-1 h-12 font-mono sm:w-80"
          />

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || isSubmitted}
            className="h-12 bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-700 text-black font-bold px-8 group disabled:opacity-50 transition-all duration-300 font-mono shadow-lg shadow-emerald-500/20"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                JOINING...
              </>
            ) : isSubmitted ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                JOINED!
              </>
            ) : (
              <>
                JOIN_WAITLIST
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <p className="text-emerald-400 text-sm mt-4 flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-500 font-mono">
            <Check className="w-4 h-4" />
            Successfully added to waitlist
          </p>
        )}

        {/* Features Section */}
        <div className="pt-16 text-left">
          <Features />
        </div>
      </main>

      {/* Footer  */}
      <footer className="w-full  py-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
        <Link
          href="https://x.com/santosh_marar"
          target="_blank"
          className="flex items-center gap-2 hover:text-emerald-400 transition"
        >
          <IconBrandX size={18} />
          Follow @santosh_marar
        </Link>
        <span className="text-gray-600">|</span>
        <span className="text-gray-500">
          © {new Date().getFullYear()} Enops.dev
        </span>
      </footer>
    </div>
  );
}
