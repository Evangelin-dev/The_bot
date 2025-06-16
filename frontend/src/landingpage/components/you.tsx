import React from "react";
import { 
  Terminal, 
  TrendingUp, 
  Search, 
  Users, 
  Target, 
  Headphones 
} from "lucide-react";

const gn = (...classes: string[]) => classes.filter(Boolean).join(' ');

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Revenue-Crushing Sales Funnels",
            description: "Build automated systems that convert strangers into paying customers 24/7",
            icon: <Terminal className="w-8 h-8" />,
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Million-Dollar Product Strategies",
            description: "Identify high-profit products that dominate your market and maximize ROI",
            icon: <TrendingUp className="w-8 h-8" />,
            gradient: "from-green-500 to-emerald-500",
        },
        {
            title: "Market Domination Research",
            description: "Crush competitors with deep insights and winning pricing strategies",
            icon: <Search className="w-8 h-8" />,
            gradient: "from-purple-500 to-violet-500",
        },
        {
            title: "Elite Sales Team Assembly",
            description: "Build unstoppable sales teams with proven hiring and training systems",
            icon: <Users className="w-8 h-8" />,
            gradient: "from-orange-500 to-red-500",
        },
        {
            title: "Explosive Marketing Campaigns",
            description: "Launch high-converting ads that flood your business with qualified leads",
            icon: <Target className="w-8 h-8" />,
            gradient: "from-pink-500 to-rose-500",
        },
        {
            title: "Deal-Closing Mastery",
            description: "Turn prospects into buyers with psychological scripts and proven follow-ups",
            icon: <Headphones className="w-8 h-8" />,
            gradient: "from-indigo-500 to-purple-500",
        },
    ];

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        THE ULTIMATE
                        <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                            WEALTH-BUILDING SYSTEM
                        </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
                    <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto font-medium">
                        Transform your business from <span className="text-yellow-400 font-bold">₹20L to ₹1Cr monthly</span> with our battle-tested 6-pillar domination framework
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Feature = ({
    title,
    description,
    icon,
    gradient,
    index
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
    index: number;
}) => {
    return (
        <div className="group relative">
            <div className={gn(
                "relative h-full p-8 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-500",
                "hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20",
                "bg-white/5 hover:bg-white/10 cursor-pointer"
            )}>
                <div className={gn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                    "bg-gradient-to-br", gradient
                )} />
                
                <div className="relative z-10 mb-6">
                    <div className={gn(
                        "inline-flex p-4 rounded-xl transition-all duration-300",
                        "bg-gradient-to-br", gradient,
                        "group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                    )}>
                        <div className="text-white">
                            {icon}
                        </div>
                    </div>
                </div>

                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
                        {title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed font-medium">
                        {description}
                    </p>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 w-16 h-1 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-24 transition-all duration-300 rounded-full"></div>
                
                <div className={gn(
                    "absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    "bg-gradient-to-br", gradient, "group-hover:scale-110"
                )}>
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
            </div>
        </div>
    );
};