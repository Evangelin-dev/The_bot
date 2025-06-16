/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useEffect, useRef } from "react";


interface Person {
  name: string;
  location: string;
  role: string;
}

interface Notification {
  id: number;
  text: string;
  role: string;
  isVisible: boolean;
  isLeaving: boolean;
}

const LiveNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const notificationCounter = useRef<number>(1);

  
const liveData: Person[] = [
  { name: "Hari", location: "Punjab", role: "CEO" },
  { name: "Rakesh", location: "Mumbai", role: "Business Manager" },
  { name: "Priya", location: "Delhi", role: "Founder" },
  { name: "Amit", location: "Bangalore", role: "Director" },
  { name: "Sneha", location: "Chennai", role: "CTO" },
  { name: "Rohit", location: "Hyderabad", role: "VP Sales" },
  { name: "Kavya", location: "Pune", role: "Marketing Head" },
  { name: "Arjun", location: "Kolkata", role: "Product Manager" },
  { name: "Meera", location: "Ahmedabad", role: "Operations Head" },
  { name: "Vikram", location: "Jaipur", role: "Tech Lead" },
  { name: "Anita", location: "Lucknow", role: "HR Director" },
  { name: "Karan", location: "Indore", role: "Finance Head" },
  { name: "Pooja", location: "Bhopal", role: "Strategy Head" },
  { name: "Deepak", location: "Chandigarh", role: "Growth Manager" },
  { name: "Ritu", location: "Nagpur", role: "Brand Manager" },
  { name: "Sanjay", location: "Surat", role: "Sales Director" },
  { name: "Nisha", location: "Vadodara", role: "Project Manager" },
  { name: "Rahul", location: "Kochi", role: "Business Head" },
  { name: "Divya", location: "Coimbatore", role: "Regional Manager" },
  { name: "Manish", location: "Thiruvananthapuram", role: "Team Lead" },
  { name: "Neha", location: "Visakhapatnam", role: "UI/UX Lead" },
  { name: "Aditya", location: "Rajkot", role: "Operations Manager" },
  { name: "Isha", location: "Patna", role: "Content Strategist" },
  { name: "Naveen", location: "Guwahati", role: "Backend Developer" },
  { name: "Tanya", location: "Ludhiana", role: "Frontend Developer" },
  { name: "Suresh", location: "Agra", role: "IT Consultant" },
  { name: "Jaya", location: "Nashik", role: "QA Lead" },
  { name: "Ajay", location: "Meerut", role: "Product Owner" },
  { name: "Lakshmi", location: "Amritsar", role: "Training Manager" },
  { name: "Ramesh", location: "Jodhpur", role: "Analytics Head" },
  { name: "Shweta", location: "Madurai", role: "Program Manager" },
  { name: "Yash", location: "Gwalior", role: "Software Engineer" },
  { name: "Bhavna", location: "Noida", role: "Support Lead" },
  { name: "Anmol", location: "Ghaziabad", role: "UI Designer" },
  { name: "Rekha", location: "Varanasi", role: "People Partner" },
  { name: "Imran", location: "Ranchi", role: "Scrum Master" },
  { name: "Simran", location: "Jabalpur", role: "Digital Strategist" },
  { name: "Ravi", location: "Raipur", role: "SEO Specialist" },
  { name: "Ayesha", location: "Tiruchirappalli", role: "PR Manager" },
  { name: "Mohit", location: "Hubli", role: "Growth Hacker" },
  { name: "Tanvi", location: "Mysore", role: "Design Head" },
  { name: "Vikas", location: "Jamshedpur", role: "Lead Architect" },
  { name: "Swati", location: "Udaipur", role: "HR Business Partner" },
  { name: "Harsh", location: "Bilaspur", role: "Automation Engineer" },
  { name: "Anjali", location: "Shimla", role: "Learning Lead" },
  { name: "Siddharth", location: "Haridwar", role: "System Analyst" },
  { name: "Pallavi", location: "Panaji", role: "Finance Analyst" },
  { name: "Rajeev", location: "Shillong", role: "Compliance Manager" },
  { name: "Kirti", location: "Dehradun", role: "Customer Success Lead" },
  { name: "Gaurav", location: "Jalandhar", role: "Field Manager" },
  { name: "Payal", location: "Howrah", role: "Business Analyst" },
  { name: "Farhan", location: "Bareilly", role: "Mobile App Developer" },
  { name: "Nandini", location: "Dhanbad", role: "E-commerce Lead" },
  { name: "Prakash", location: "Warangal", role: "Tech Recruiter" },
  { name: "Snehal", location: "Guntur", role: "Operations Executive" },
  { name: "Aarav", location: "Bhavnagar", role: "Sales Executive" },
  { name: "Chirag", location: "Erode", role: "DevOps Engineer" },
  { name: "Zoya", location: "Nellore", role: "Community Manager" },
  { name: "Tejas", location: "Kolhapur", role: "Cloud Specialist" },
  { name: "Mitali", location: "Tirupati", role: "Event Coordinator" },
  { name: "Ashok", location: "Nanded", role: "Cybersecurity Analyst" },
  { name: "Lavanya", location: "Siliguri", role: "Process Manager" },
  { name: "Yuvraj", location: "Gorakhpur", role: "Support Engineer" },
  { name: "Irfan", location: "Kakinada", role: "SaaS Consultant" },
  { name: "Shivani", location: "Thanjavur", role: "Learning Consultant" },
  { name: "Abhay", location: "Bhagalpur", role: "B2B Sales Lead" },
  { name: "Mehul", location: "Kurnool", role: "UX Researcher" },
  { name: "Ragini", location: "Rewa", role: "Innovation Lead" },
  { name: "Kushal", location: "Kollam", role: "Security Engineer" },
];


  
  const getRandomNotification = (): Notification => {
    let availableIndices = Array.from({ length: liveData.length }, (_, i) => i)
      .filter(i => !usedIndices.has(i));
    
    
    if (availableIndices.length === 0) {
      setUsedIndices(new Set());
      availableIndices = Array.from({ length: liveData.length }, (_, i) => i);
    }
    
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const person = liveData[randomIndex];
    
    
    setUsedIndices(prev => new Set([...Array.from(prev), randomIndex]));
    
    const actions = ["joined", "applied", "registered", "enrolled"];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    const id = notificationCounter.current++;
    
    return {
      id,
      text: `${person.name} from ${person.location} ${randomAction}`,
      role: person.role,
      isVisible: false,
      isLeaving: false
    };
  };

  
  const addNotification = (): void => {
    const newNotification = getRandomNotification();
    
    
    setNotifications(prev => [newNotification, ...prev.slice(0, 2)]); 
    
    
    setTimeout(() => {
      setNotifications(prev => 
        prev.map(n => n.id === newNotification.id ? { ...n, isVisible: true } : n)
      );
    }, 100);

    
    setTimeout(() => {
      setNotifications(prev => 
        prev.map(n => n.id === newNotification.id ? { ...n, isLeaving: true } : n)
      );
    }, 4000);

    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 5200);
  };

  
  useEffect(() => {
    
    const firstTimeout = setTimeout(() => {
      addNotification();
    }, 2000);

    
    const secondTimeout = setTimeout(() => {
      intervalRef.current = setInterval(addNotification, 5000);
    }, 7000); 

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
      <div className="space-y-3 max-w-sm">
        {notifications.map((notification, index) => (
          <div
            key={`notification-${notification.id}`}
            className={`transform transition-all duration-700 ease-out ${
              notification.isVisible 
                ? 'translate-x-0 opacity-100 scale-100' 
                : '-translate-x-full opacity-0 scale-95'
            } ${
              notification.isLeaving ? 'animate-fade-out' : ''
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
              zIndex: 50 - index
            }}
          >
            <div className="bg-white/15 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-2xl pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium leading-tight">
                    {notification.text}
                  </p>
                  <p className="text-white/60 text-xs mt-1 truncate">
                    {notification.role}
                  </p>
                </div>
                <div className="text-green-400 text-xs opacity-70 flex-shrink-0">
                  Live
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-out {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          20% {
            transform: translateX(-8px) scale(0.98);
            opacity: 0.8;
          }
          100% {
            transform: translateX(-100%) scale(0.9);
            opacity: 0;
          }
        }
        
        .animate-fade-out {
          animation: fade-out 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        /* Hover effect */
        .pointer-events-auto:hover {
          transform: translateX(8px) scale(1.02) !important;
          transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        }
      `}</style>
    </div>
  );
};

export default LiveNotifications;