'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AnimatedClientsShowcase = () => {
  const [randomStyles, setRandomStyles] = useState<{ delay: number; duration: number }[]>([]);

  useEffect(() => {
    const styles = Array.from({ length: 400 }).map(() => ({
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
    setRandomStyles(styles);
  }, []);

  return (
    <div className="min-h-screen hidden md:block relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 gap-2 h-full w-full">
          {randomStyles.map((style: { delay: number; duration: number }, i: number) => (
            <div
              key={i}
              className="w-6 h-6 border border-gray-600 rounded-sm animate-pulse"
              style={{
                animationDelay: `${style.delay}s`,
                animationDuration: `${style.duration}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="relative w-full max-w-6xl">
          <div className="absolute top-[35px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-black font-bold text-xl">thebot.</span>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h2 className="text-yellow-400 text-6xl font-black animate-bounce" style={{ animationDuration: '3s' }}>
              OUR
            </h2>
          </div>

          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 z-10">
            <h2 className="text-yellow-400 text-6xl font-black animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
              CLIENTS
            </h2>
          </div>

          <div className="absolute top-16 left-16 animate-float">
            <div className="bg-white rounded-3xl  shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110">
              <div className="">
                <div>
                  <Image
                    src={"/Yugma-logo.png"}
                    alt="Yugma"
                    width={200}
                    height={12}
                    className="w-full h-full object-fill  rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-16 right-16 animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110">
              <div className="w-full h-full">
                <Image src={"/yagnam-logo.png"} alt="The Bot Agency" width={200} height={12} className='w-full object-fill h-full' />
              </div>
            </div>
          </div>

          <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-white rounded-3xl px-12 py-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110">
              <div className="">
                <Image src={"/Sameto.png"} alt="The Bot Agency" width={100} height={12} className='w-full h-10' />
              </div>
            </div>
          </div>

          <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '3s' }}>
            <div className="bg-white rounded-3xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110">
              <div className="">
                <Image src={"/SudharBrothers.png"} alt="The Bot Agency" width={100} height={12} className='w-full h-10' />
              </div>
            </div>
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
            <path
              d="M 200 120 Q 300 80 400 160"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8,4"
              className="animate-dash"
            />
            <polygon
              points="395,155 405,160 395,165"
              fill="white"
              className="animate-pulse"
            />

            <path
              d="M 600 120 Q 500 80 400 160"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8,4"
              className="animate-dash"
              style={{ animationDelay: '1s' }}
            />
            <polygon
              points="405,155 395,160 405,165"
              fill="white"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />

            <path
              d="M 400 240 Q 300 320 200 280"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8,4"
              className="animate-dash"
              style={{ animationDelay: '2s' }}
            />
            <polygon
              points="205,275 195,280 205,285"
              fill="white"
              className="animate-pulse"
              style={{ animationDelay: '2s' }}
            />

            <path
              d="M 400 240 Q 500 320 600 280"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8,4"
              className="animate-dash"
              style={{ animationDelay: '3s' }}
            />
            <polygon
              points="595,275 605,280 595,285"
              fill="white"
              className="animate-pulse"
              style={{ animationDelay: '3s' }}
            />
          </svg>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">MI</span>
              </div>
            </div>
            <div className="bg-white rounded-full px-8 py-4 shadow-xl animate-pulse">
              <span className="text-black font-semibold text-lg">
                Come and Join with us, Let us Grow Together
              </span>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes dash {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -20; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dash 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedClientsShowcase;