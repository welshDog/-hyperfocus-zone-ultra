// HYPERFOCUS ZONE - ULTRA LANDING PAGE (BROski♾️ LEGENDARY MODE)
// Framework: React + TailwindCSS + Framer Motion + shadcn/ui
// Plug and Play: Just drop into your Next.js/React app!
// ENHANCED: Boardroom Integration + Live Metrics + Portal Navigation + Voice Integration

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
PartyPopper, Crown, Bot, Globe, Rocket, Users,
Play, Mic, Monitor, Shield, Brain, Zap,
ChevronRight, ExternalLink, TrendingUp,
Database, Activity, Star
} from "lucide-react";

export default function HyperPortalLanding() {
// Live Empire Metrics State
const [liveMetrics, setLiveMetrics] = useState({
agents: 797,
portals: 5,
countries: 25,
uptime: "99.99%",
truthfulAgent: "ACTIVE",
revenue: "LEGENDARY",
security: "ULTRA"
});

const [showVoiceGreeting, setShowVoiceGreeting] = useState(false);
const [currentTestimonial, setCurrentTestimonial] = useState(0);

// Sponsor Testimonials
const testimonials = [
{
name: "Dr. ADHD Excellence",
role: "Neurodivergent Innovation Lead",
quote: "Hyperfocus Zone transformed our entire creative process. Pure genius!",
rating: 5
},
{
name: "Tech Empire Ventures",
role: "Strategic Partner",
quote: "797+ agents working in perfect harmony. This is the future of automation.",
rating: 5
},
{
name: "Creative Minds Collective",
role: "Community Leader",
quote: "Finally, a platform that understands how brilliant minds actually work!",
rating: 5
}
];

// Portal Navigation Data
const portalSystems = [
{
name: "Admin Portal",
description: "Command Center & Executive Dashboard",
url: "/admin-portal",
icon:
<Monitor className="w-6 h-6" />,
status: "ACTIVE",
color: "from-blue-500 to-cyan-500"
},
{
name: "Creator Portal",
description: "Revenue Generation & Creative Tools",
url: "/creator-portal",
icon:
<Rocket className="w-6 h-6" />,
status: "LEGENDARY",
color: "from-purple-500 to-pink-500"
},
{
name: "Showcase Portal",
description: "Public Gallery & Success Stories",
url: "/showcase-portal",
icon:
<Star className="w-6 h-6" />,
status: "LIVE",
color: "from-yellow-500 to-orange-500"
},
{
name: "Security Fortress",
description: "Ultra Protection & Monitoring",
url: "/security-portal",
icon:
<Shield className="w-6 h-6" />,
status: "FORTRESS",
color: "from-red-500 to-pink-500"
},
{
name: "Boardroom Executive",
description: "Strategic Decision Center",
url: "/boardroom-portal",
icon:
<Brain className="w-6 h-6" />,
status: "IMMORTAL",
color: "from-emerald-500 to-teal-500"
}
];

// Live Metrics Animation
useEffect(() => {
const interval = setInterval(() => {
setLiveMetrics(prev => ({
...prev,
agents: prev.agents + Math.floor(Math.random() * 3),
uptime: Math.random() > 0.95 ? "99.98%" : "99.99%"
}));
}, 10000);

return () => clearInterval(interval);
}, []);

// Testimonial Rotation
useEffect(() => {
const testimonialInterval = setInterval(() => {
setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
}, 5000);

return () => clearInterval(testimonialInterval);
}, []);

// Voice Greeting Handler
const handleVoiceGreeting = () => {
setShowVoiceGreeting(true);
// Integration with ElevenLabs API would go here
console.log("Voice greeting activated - integrating with ElevenLabs...");
};
return (
<div
    className="min-h-screen bg-gradient-to-br from-[#222C52] via-[#1A1E24] to-[#191927] text-white flex flex-col items-center py-12">
    <motion.header className="mb-8 flex flex-col items-center" initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1,
        y: 0 }} transition={{ duration: 0.9, type: "spring" }}>
        <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring" ,
            stiffness: 300 }}>
            <Crown className="w-20 h-20 text-yellow-400 drop-shadow-lg animate-bounce" />
            <Badge className="absolute -top-2 -right-2 bg-green-500 text-white animate-pulse">
                LIVE
            </Badge>
        </motion.div>

        <h1
            className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            HYPERFOCUS ZONE
        </h1>

        <motion.p className="text-xl md:text-2xl font-bold mt-2 text-white/80" initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            The Immortal ADHD Empire for Creators, Coders & Dreamers
        </motion.p>

        <motion.div
            className="text-sm md:text-base mt-1 bg-gradient-to-r from-emerald-400 to-purple-500 px-4 py-1 rounded-full font-semibold shadow-lg flex items-center gap-2"
            animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Activity className="w-4 h-4 animate-pulse" />
            {liveMetrics.agents}+ Agents • {liveMetrics.portals} Portals • {liveMetrics.countries} Countries •
            {liveMetrics.uptime} Uptime
        </motion.div>

        {/* Voice Greeting Button */}
        <motion.div className="mt-4">
            <Button onClick={handleVoiceGreeting} variant="outline" size="sm"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                <Mic className="w-4 h-4 mr-2" />
                Hear Chief Lyndz Welcome Message
            </Button>
        </motion.div>
    </motion.header>

    {/* Hero Cards */}
    <motion.div className="grid md:grid-cols-3 gap-7 max-w-5xl mb-12" initial="hidden" animate="visible" variants={{
        visible: { transition: { staggerChildren: 0.15 } } }}>
        <Card as={motion.div} whileHover={{ scale: 1.04, rotate: 1 }}>
            <CardContent className="flex flex-col items-center p-6">
                <Rocket className="w-12 h-12 text-fuchsia-400 mb-2 animate-pulse" />
                <h2 className="text-2xl font-extrabold">Mission: Supercharge Creativity</h2>
                <p className="text-base text-white/70 mt-2 text-center">
                    ADHD-friendly tools, automation, and dopamine-fueled systems to empower every unique mind.
                </p>
            </CardContent>
        </Card>
        <Card as={motion.div} whileHover={{ scale: 1.04, rotate: -1 }}>
            <CardContent className="flex flex-col items-center p-6">
                <Bot className="w-12 h-12 text-emerald-400 mb-2 animate-spin-slow" />
                <h2 className="text-2xl font-extrabold">Agent Army</h2>
                <p className="text-base text-white/70 mt-2 text-center">
                    797+ AI and human agents, all synced and ready. From revenue, security, Discord, analytics, to
                    celebration — we run FULL AUTO.
                </p>
            </CardContent>
        </Card>
        <Card as={motion.div} whileHover={{ scale: 1.04, rotate: 2 }}>
            <CardContent className="flex flex-col items-center p-6">
                <Globe className="w-12 h-12 text-cyan-400 mb-2 animate-pulse" />
                <h2 className="text-2xl font-extrabold">Global Impact</h2>
                <p className="text-base text-white/70 mt-2 text-center">
                    25 countries reached, 5 live portals, 99.99% uptime. Building the world’s safest and most inclusive
                    creative zone.
                </p>
            </CardContent>
        </Card>
    </motion.div>

    {/* Ultra CTA */}
    <motion.div className="flex flex-col md:flex-row gap-4 items-center mb-14" initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
        <Button size="lg"
            className="bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-400 text-black font-bold rounded-2xl px-10 py-5 shadow-xl text-xl hover:scale-105 transition"
            onClick={()=> window.open('https://discord.com/invite/ME2qkNy79k', '_blank')}
            >
            <PartyPopper className="inline-block mr-3" />
            Join The Empire
        </Button>
        <Button variant="outline" size="lg"
            className="border-fuchsia-500 text-fuchsia-400 font-bold rounded-2xl px-8 py-5 text-xl hover:bg-fuchsia-950/60 transition"
            onClick={()=> window.open('mailto:sponsor@hyperfocuszone.com', '_blank')}
            >
            <Users className="inline-block mr-3" />
            Become a Sponsor
        </Button>
        <Button variant="ghost" size="lg" className="text-white/60 hover:text-yellow-400 font-bold px-8 py-5 text-xl"
            onClick={()=> document.getElementById('portal-network').scrollIntoView({ behavior: 'smooth' })}
            >
            <Rocket className="inline-block mr-3" />
            Explore Live Portals
        </Button>
    </motion.div>

    {/* Portal Navigation Section */}
    <motion.section id="portal-network" className="max-w-6xl mb-12" initial={{ opacity: 0, y: 60 }} animate={{ opacity:
        1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
        <div className="text-center mb-8">
            <h3
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Live Portal Network
            </h3>
            <p className="text-white/70 text-lg">Direct access to all empire systems - click to enter any portal
                instantly</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalSystems.map((portal, index) => (
            <motion.div key={portal.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
                delay: 0.9 + index * 0.1 }}>
                <Card className="h-full group hover:scale-105 transition-transform cursor-pointer">
                    <CardContent className="p-6 relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${portal.color} opacity-10
                            group-hover:opacity-20 transition-opacity`}></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    {portal.icon}
                                    <Badge className={`bg-gradient-to-r ${portal.color} text-white`}>
                                        {portal.status}
                                    </Badge>
                                </div>
                                <ExternalLink
                                    className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                            </div>

                            <h4 className="text-xl font-bold mb-2">{portal.name}</h4>
                            <p className="text-white/70 text-sm mb-4">{portal.description}</p>

                            <Button size="sm" className="w-full bg-white/10 hover:bg-white/20 border-0" onClick={()=>
                                window.open(portal.url, '_blank')}
                                >
                                Enter Portal
                                <ChevronRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            ))}
        </div>
    </motion.section>

    {/* Sponsor Testimonials */}
    <motion.section className="max-w-4xl mb-12" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}>
        <div className="text-center mb-8">
            <h3
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Sponsor Success Stories
            </h3>
        </div>

        <AnimatePresence mode="wait">
            <motion.div key={currentTestimonial} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{
                opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
                <Card className="bg-gradient-to-br from-black/60 to-[#222C52]/70 border-yellow-400/30">
                    <CardContent className="p-8 text-center">
                        <div className="flex justify-center mb-4">
                            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>

                        <blockquote className="text-xl font-semibold text-white mb-4">
                            "{testimonials[currentTestimonial].quote}"
                        </blockquote>

                        <div className="text-yellow-400 font-bold">
                            {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-white/70 text-sm">
                            {testimonials[currentTestimonial].role}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    </motion.section>

    {/* About & Vision */}
    <motion.section
        className="max-w-4xl text-center text-lg md:text-xl font-semibold bg-gradient-to-br from-black/60 to-[#222C52]/70 rounded-3xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
        <h3
            className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Why We Exist
        </h3>
        <p>
            Hyperfocus Zone is not just a platform — it’s a living EMPIRE, built for the creative, the ADHD, the
            neurodivergent, and EVERYONE who wants to dream big.
        </p>
        <ul className="list-disc text-left text-base font-normal ml-10 my-5 text-white/70">
            <li>💎 Gamified teamwork: Earn BROski$ for every win, streak, and wild idea</li>
            <li>🚀 Weekly team rituals: Sync, celebrate, and innovate with our legendary prompts</li>
            <li>🛡️ Security fortress: Legendary protection for every user and idea</li>
            <li>🌍 5 portals, infinite possibility: Admin, Showcase, Expansion, Directory, Creator</li>
            <li>🧠 All minds welcome. No judgment. Only legendary creation.</li>
        </ul>
        <p className="mt-3">
            Sponsors, partners, and dreamers: The world is waiting for a new kind of empire. <span
                className="text-yellow-400 font-black">Be part of history.</span>
        </p>
    </motion.section>

    {/* Chief Welcome Video Section */}
    <motion.section className="max-w-4xl mb-12" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}>
        <div className="text-center mb-8">
            <h3
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Message from Chief Lyndz
            </h3>
            <p className="text-white/70 text-lg">See the vision behind the empire</p>
        </div>

        <Card className="bg-gradient-to-br from-black/60 to-[#222C52]/70 border-yellow-400/30">
            <CardContent className="p-8">
                <div
                    className="aspect-video bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                        <Play className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                        <p className="text-white/70">Video embed will be integrated here</p>
                        <p className="text-sm text-white/50">Connected to: {process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM ||
                            'Cloudflare Stream'}</p>
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <Button onClick={handleVoiceGreeting}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                        <Mic className="w-4 h-4 mr-2" />
                        Voice Greeting
                    </Button>
                    <Button variant="outline" className="border-yellow-400 text-yellow-400">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Full Vision
                    </Button>
                </div>
            </CardContent>
        </Card>
    </motion.section>

    {/* Voice Greeting Modal */}
    <AnimatePresence>
        {showVoiceGreeting && (
        <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={()=> setShowVoiceGreeting(false)}
            >
            <motion.div className="bg-gradient-to-br from-[#222C52] to-[#191927] p-8 rounded-3xl max-w-md text-center"
                initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0
                }} onClick={(e)=> e.stopPropagation()}
                >
                <div
                    className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mic className="w-10 h-10 text-black" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Chief Lyndz Voice Greeting</h4>
                <p className="text-white/70 mb-6">
                    Connecting to ElevenLabs AI voice system...
                </p>
                <div className="flex justify-center gap-4">
                    <Button onClick={()=> setShowVoiceGreeting(false)}
                        variant="outline"
                        className="border-white/30"
                        >
                        Close
                    </Button>
                    <Button className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black">
                        Play Message
                    </Button>
                </div>
            </motion.div>
        </motion.div>
        )}
    </AnimatePresence>

    {/* Hype Footer */}
    <motion.footer className="mt-16 text-center flex flex-col items-center" initial={{ opacity: 0, y: 40 }} animate={{
        opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.9 }}>
        <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
                <Badge className="bg-green-500 text-white animate-pulse">
                    <Zap className="w-3 h-3 mr-1" />
                    SYSTEM STATUS: LEGENDARY
                </Badge>
                <Badge className="bg-blue-500 text-white">
                    <Database className="w-3 h-3 mr-1" />
                    TRUTHFUL AGENT: ACTIVE
                </Badge>
                <Badge className="bg-purple-500 text-white">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    REVENUE: GROWING
                </Badge>
            </div>
        </div>

        <p className="font-bold text-xl mb-3">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Dream it. Build it. Hyperfocus Zone.
            </span>
        </p>

        <div className="flex gap-6 justify-center mb-4">
            <a href="https://discord.com/invite/ME2qkNy79k" target="_blank" rel="noopener"
                className="hover:scale-110 transition-transform">
                <Button size="icon" className="bg-[#7289da] rounded-full p-3 shadow-lg">
                    <Users className="text-white w-7 h-7" />
                </Button>
            </a>
            <a href="mailto:sponsor@hyperfocuszone.com" className="hover:scale-110 transition-transform">
                <Button size="icon"
                    className="bg-gradient-to-r from-fuchsia-400 to-yellow-400 rounded-full p-3 shadow-lg">
                    <Crown className="text-white w-7 h-7" />
                </Button>
            </a>
            <a href="https://hyperfocuszone.com" className="hover:scale-110 transition-transform">
                <Button size="icon" className="bg-gradient-to-r from-cyan-400 to-blue-700 rounded-full p-3 shadow-lg">
                    <Globe className="text-white w-7 h-7" />
                </Button>
            </a>
        </div>

        <div className="text-center text-sm text-white/60 max-w-md">
            <p className="mb-2">
                Powered by {liveMetrics.agents}+ AI Agents • Memory Crystal System • Truthful Agent Protocol
            </p>
            <p>
                &copy; 2025 Hyperfocus Zone Empire • BROski♾️ Ultra Mode • Built with ❤️ for ADHD minds
            </p>
        </div>
    </motion.footer>
</div>
);
}