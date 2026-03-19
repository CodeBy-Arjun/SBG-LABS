// Comprehensive project database with 500+ projects across all branches

import { eeeProjects } from './eeeProjectsData';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  duration: string;
  price: number;
  branch?: string;
  specialization?: string;
  difficulty?: "Basic" | "Intermediate" | "Advanced" | "Easy";
  category?: string;
  price_after_coupon?: number;
  finalPrice?: number;
}

const projects: Project[] = [
  // CSE / IT PROJECTS
  { id: "cse-001", title: "AI Resume Analyzer", description: "Uses NLP to rate resumes and provide feedback", tech: ["Python", "NLP", "Flask"], duration: "3-4 weeks", price: 3800, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "AI" },
  { id: "cse-002", title: "College Management System", description: "Admin + Student dashboards with complete functionality", tech: ["React", "Node.js", "MongoDB"], duration: "4-5 weeks", price: 3200, branch: "CSE", specialization: "Web Development", difficulty: "Intermediate", category: "Education" },
  { id: "cse-003", title: "Online Voting System", description: "Secure digital voting application", tech: ["React", "Blockchain", "Node.js"], duration: "4-5 weeks", price: 3500, branch: "CSE", specialization: "Web Development", difficulty: "Intermediate", category: "E-Governance" },
  { id: "cse-004", title: "AI Chatbot for College", description: "Auto-answer student queries using AI", tech: ["Python", "TensorFlow", "React"], duration: "3-4 weeks", price: 3800, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Education" },
  { id: "cse-005", title: "E-Commerce Website (React)", description: "Full-stack MERN site with payment gateway", tech: ["React", "Node.js", "MongoDB", "Stripe"], duration: "5-6 weeks", price: 3900, branch: "CSE", specialization: "Full Stack", difficulty: "Advanced", category: "E-commerce" },
  { id: "cse-006", title: "Portfolio Builder App", description: "Dynamic portfolio generator for developers", tech: ["React", "Tailwind CSS", "Firebase"], duration: "2-3 weeks", price: 2800, branch: "CSE", specialization: "Web Development", difficulty: "Intermediate", category: "Tools" },
  { id: "cse-007", title: "File Encryption Tool", description: "Encrypt/decrypt files locally with AES", tech: ["Python", "Cryptography", "Tkinter"], duration: "2-3 weeks", price: 2700, branch: "CSE", specialization: "Cyber Security", difficulty: "Intermediate", category: "Security" },
  { id: "cse-008", title: "Online Course Platform", description: "User registration + admin panel + video hosting", tech: ["React", "Node.js", "AWS", "MongoDB"], duration: "5-6 weeks", price: 3700, branch: "CSE", specialization: "Full Stack", difficulty: "Advanced", category: "E-Learning" },
  { id: "cse-009", title: "Code Compiler Online", description: "Run Python/C++ code in browser", tech: ["React", "Node.js", "Docker"], duration: "4-5 weeks", price: 3900, branch: "CSE", specialization: "Web Development", difficulty: "Advanced", category: "Tools" },
  { id: "cse-010", title: "Cloud Storage Clone", description: "Google Drive–style file storage app", tech: ["React", "Node.js", "AWS S3", "PostgreSQL"], duration: "5-6 weeks", price: 3900, branch: "CSE", specialization: "Full Stack", difficulty: "Advanced", category: "Cloud" },
  { id: "cse-011", title: "Social Media Dashboard", description: "Analytics dashboard for social media metrics", tech: ["React", "D3.js", "Node.js"], duration: "3-4 weeks", price: 3800, branch: "CSE", specialization: "Data Science", difficulty: "Advanced", category: "Analytics" },
  { id: "cse-012", title: "Task Management App", description: "Trello-style kanban board application", tech: ["React", "Firebase", "Material-UI"], duration: "2-3 weeks", price: 2900, branch: "CSE", specialization: "Web Development", difficulty: "Intermediate", category: "Productivity" },
  { id: "cse-013", title: "Restaurant Management System", description: "POS + inventory + billing system", tech: ["React", "Node.js", "MySQL"], duration: "4-5 weeks", price: 3700, branch: "CSE", specialization: "Full Stack", difficulty: "Advanced", category: "Business" },
  { id: "cse-014", title: "Video Streaming Platform", description: "Netflix-style streaming service", tech: ["React", "Node.js", "HLS", "MongoDB"], duration: "6-7 weeks", price: 3900, branch: "CSE", specialization: "Full Stack", difficulty: "Advanced", category: "Entertainment" },
  { id: "cse-015", title: "Expense Tracker App", description: "Personal finance management application", tech: ["React Native", "Firebase"], duration: "2-3 weeks", price: 2600, branch: "CSE", specialization: "Mobile Development", difficulty: "Intermediate", category: "Finance" },

  // AI / ML / DATA SCIENCE PROJECTS  
  { id: "ai-001", title: "Face Mask Detection", description: "CNN + OpenCV real-time detection", tech: ["Python", "TensorFlow", "OpenCV"], duration: "3-4 weeks", price: 3900, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Computer Vision" },
  { id: "ai-002", title: "Fake News Classifier", description: "NLP with TF-IDF classification", tech: ["Python", "NLP", "Scikit-learn"], duration: "2-3 weeks", price: 3200, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "NLP" },
  { id: "ai-003", title: "Emotion Recognition", description: "Facial expression analysis model", tech: ["Python", "Keras", "OpenCV"], duration: "3-4 weeks", price: 3900, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Computer Vision" },
  { id: "ai-004", title: "Predictive Stock Model", description: "LSTM + pandas stock prediction", tech: ["Python", "LSTM", "Pandas"], duration: "3-5 weeks", price: 3800, branch: "CSE", specialization: "Data Science", difficulty: "Advanced", category: "Finance" },
  { id: "ai-005", title: "Diabetes Prediction", description: "ML classification for health prediction", tech: ["Python", "Scikit-learn", "Pandas"], duration: "2-3 weeks", price: 3000, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Healthcare" },
  { id: "ai-006", title: "ChatGPT Clone UI", description: "API + Frontend chatbot integration", tech: ["React", "OpenAI API", "Node.js"], duration: "3-4 weeks", price: 3900, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Chatbot" },
  { id: "ai-007", title: "Resume Screening Bot", description: "NLP based resume filtering", tech: ["Python", "NLP", "Flask"], duration: "3-4 weeks", price: 3700, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "HR Tech" },
  { id: "ai-008", title: "Movie Recommendation", description: "Collaborative filtering system", tech: ["Python", "Pandas", "Scikit-learn"], duration: "2-3 weeks", price: 3200, branch: "CSE", specialization: "Data Science", difficulty: "Intermediate", category: "Entertainment" },
  { id: "ai-009", title: "Crop Prediction Model", description: "ML agriculture yield prediction", tech: ["Python", "ML", "Flask"], duration: "2-3 weeks", price: 3100, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Agriculture" },
  { id: "ai-010", title: "Road Accident Prediction", description: "Data analytics prediction model", tech: ["Python", "Pandas", "Plotly"], duration: "3-4 weeks", price: 3800, branch: "CSE", specialization: "Data Science", difficulty: "Advanced", category: "Safety" },

  // CYBER SECURITY PROJECTS
  { id: "cs-001", title: "Keylogger Detection Tool", description: "Detect system intrusion attempts", tech: ["Python", "System Calls", "GUI"], duration: "3-4 weeks", price: 3700, branch: "CSE", specialization: "Cyber Security", difficulty: "Advanced", category: "Security" },
  { id: "cs-002", title: "Password Strength Checker", description: "Cryptographic strength analysis", tech: ["Python", "Cryptography"], duration: "1-2 weeks", price: 2700, branch: "CSE", specialization: "Cyber Security", difficulty: "Intermediate", category: "Authentication" },
  { id: "cs-003", title: "Secure File Transfer App", description: "End-to-end encryption system", tech: ["Python", "Cryptography", "Socket"], duration: "3-4 weeks", price: 3900, branch: "CSE", specialization: "Cyber Security", difficulty: "Advanced", category: "Encryption" },
  { id: "cs-004", title: "Network Packet Sniffer", description: "Python-based traffic analyzer", tech: ["Python", "Scapy", "Wireshark"], duration: "2-3 weeks", price: 3000, branch: "CSE", specialization: "Cyber Security", difficulty: "Intermediate", category: "Network" },
  { id: "cs-005", title: "Phishing Detection Extension", description: "Chrome browser security plugin", tech: ["JavaScript", "Chrome API", "ML"], duration: "3-4 weeks", price: 3800, branch: "CSE", specialization: "Cyber Security", difficulty: "Advanced", category: "Web Security" },
  { id: "cs-006", title: "Ransomware Simulation", description: "Controlled encryption demo", tech: ["Python", "Cryptography"], duration: "3-4 weeks", price: 3900, branch: "CSE", specialization: "Cyber Security", difficulty: "Advanced", category: "Malware" },
  { id: "cs-007", title: "Steganography App", description: "Hide data in images securely", tech: ["Python", "PIL", "Cryptography"], duration: "2-3 weeks", price: 2800, branch: "CSE", specialization: "Cyber Security", difficulty: "Intermediate", category: "Steganography" },
  { id: "cs-008", title: "Ethical Hacking Toolkit", description: "Kali Linux automation tools", tech: ["Python", "Kali Linux", "Bash"], duration: "4-5 weeks", price: 3700, branch: "CSE", specialization: "Cyber Security", difficulty: "Advanced", category: "Pentesting" },
  { id: "cs-009", title: "Firewall Rule Manager", description: "GUI-based network configuration", tech: ["Python", "iptables", "PyQt"], duration: "3-4 weeks", price: 3800, branch: "CSE", specialization: "Cyber Security", difficulty: "Advanced", category: "Network" },
  { id: "cs-010", title: "Cyber Forensics Toolkit", description: "File signature analysis tools", tech: ["Python", "Forensics", "GUI"], duration: "4-5 weeks", price: 3900, branch: "CSE", specialization: "Cyber Security", difficulty: "Advanced", category: "Forensics" },

  // ECE PROJECTS (300 Projects - 3 Specializations)
  { id: "ece-001", title: "AI-Based Power Load Forecasting", description: "Predicts daily and peak energy demand using ML models", tech: ["Python", "ML", "Power Systems"], duration: "4-5 weeks", price: 3200, branch: "ECE", specialization: "Power Systems & Smart Grid", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-002", title: "IoT Smart Energy Grid Simulation", description: "Simulates grid power distribution virtually", tech: ["Python", "IoT", "Simulation"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "IoT & Embedded Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-003", title: "Power Theft Detection using AI", description: "Detects energy theft using anomaly detection", tech: ["Python", "ML", "Data Science"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Communication & Signal Processing", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-004", title: "Solar Power Generation Predictor", description: "Uses weather data to forecast solar energy output", tech: ["Python", "ML", "Weather API"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Renewable Energy", difficulty: "Intermediate", category: "Renewable Energy" },
  { id: "ece-005", title: "Smart Traffic Signal Optimization", description: "Simulated adaptive traffic light control using RL", tech: ["Python", "RL", "Simulation"], duration: "4-5 weeks", price: 3700, branch: "ECE", specialization: "IoT & AI", difficulty: "Advanced", category: "Smart City" },
  { id: "ece-006", title: "Virtual Transformer Health Monitor", description: "Predicts transformer condition from data", tech: ["Python", "ML", "Data Analytics"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-007", title: "Wireless Sensor Network Simulator", description: "Node-to-node virtual communication analysis", tech: ["Python", "Networking", "Simulation"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-008", title: "Virtual IoT Dashboard Generator", description: "Simulates IoT sensors and visualizes data on web", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 1700, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "IoT" },
  { id: "ece-009", title: "Voice-Controlled Smart Home System", description: "Simulates home automation using voice commands", tech: ["Python", "Voice Recognition", "Simulation"], duration: "2-3 weeks", price: 1500, branch: "ECE", specialization: "Embedded Systems & AI", difficulty: "Intermediate", category: "Smart Home" },
  { id: "ece-010", title: "Smart Grid Data Analytics System", description: "Load balancing and demand forecast simulation", tech: ["Python", "Data Analytics", "Power Systems"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-011", title: "Digital Modulation Techniques Simulator", description: "Simulates ASK, PSK, QAM signals", tech: ["MATLAB", "Python", "Signal Processing"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-012", title: "ECG Signal Processing Tool", description: "Analyzes ECG using FFT and filters", tech: ["MATLAB", "Python", "Signal Processing"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "Biomedical" },
  { id: "ece-013", title: "AI Fault Classification in Motors", description: "ML model classifies motor faults", tech: ["Python", "ML", "Signal Processing"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Electrical Machines" },
  { id: "ece-014", title: "Virtual Weather Station Dashboard", description: "Collects and visualizes simulated sensor data", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "IoT" },
  { id: "ece-015", title: "PID Controller Simulation Tool", description: "Visualizes PID response and tuning", tech: ["MATLAB", "Python", "Control Systems"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "Control Systems", difficulty: "Intermediate", category: "Control Systems" },
  { id: "ece-016", title: "Hybrid Renewable Grid Simulator", description: "Combines wind/solar simulation", tech: ["Python", "Simulation", "Renewable Energy"], duration: "4-5 weeks", price: 3800, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-017", title: "Smart Energy Management Interface", description: "Controls virtual loads in smart homes", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2100, branch: "ECE", specialization: "IoT & Power Systems", difficulty: "Intermediate", category: "Smart Home" },
  { id: "ece-018", title: "Satellite Link Analyzer", description: "Simulates satellite transmission", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-019", title: "AI Voltage Stability Predictor", description: "Predicts system stability from load data", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-020", title: "MATLAB Signal Analysis Suite", description: "Filter design, modulation simulation", tech: ["MATLAB", "Signal Processing"], duration: "2-3 weeks", price: 1700, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "Signal Processing" },
  { id: "ece-021", title: "Electric Load Balancer", description: "Balances virtual loads dynamically", tech: ["Python", "Power Systems", "Simulation"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-022", title: "Smart Meter Data Logger", description: "Simulates smart meter readings", tech: ["Python", "IoT", "Data Logging"], duration: "1-2 weeks", price: 1200, branch: "ECE", specialization: "IoT", difficulty: "Basic", category: "IoT" },
  { id: "ece-023", title: "Wireless Channel BER Analysis", description: "Simulates error rate vs noise", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 1600, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-024", title: "Face Recognition Attendance System", description: "Facial detection and recognition simulation", tech: ["Python", "OpenCV", "ML"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "AI & Embedded", difficulty: "Advanced", category: "AI" },
  { id: "ece-025", title: "AI-Based Audio Classifier", description: "Detects signal type via CNN", tech: ["Python", "Deep Learning", "Audio Processing"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Signal Processing & AI", difficulty: "Advanced", category: "AI" },
  { id: "ece-026", title: "Voice Recognition Automation", description: "Executes virtual tasks by voice command", tech: ["Python", "Speech Recognition", "AI"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Embedded Systems & AI", difficulty: "Intermediate", category: "AI" },
  { id: "ece-027", title: "EV Battery Management Simulator", description: "Battery charge/discharge visualization", tech: ["Python", "Simulation", "Renewable Energy"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "EV" },
  { id: "ece-028", title: "Smart Grid Control Panel", description: "Simulates multiple power nodes", tech: ["React", "Node.js", "Power Systems"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-029", title: "Smart City Power Dashboard", description: "Monitors and optimizes virtual energy flow", tech: ["React", "Node.js", "IoT"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Smart City" },
  { id: "ece-030", title: "Drone Path Algorithm Simulator", description: "Simulates AI-based drone movement", tech: ["Python", "AI", "Simulation"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Robotics & AI", difficulty: "Advanced", category: "Robotics" },
  { id: "ece-031", title: "Smart Street Light Controller", description: "Light intensity logic simulation", tech: ["Python", "IoT", "Simulation"], duration: "1-2 weeks", price: 1400, branch: "ECE", specialization: "IoT", difficulty: "Basic", category: "Smart City" },
  { id: "ece-032", title: "Harmonics Analyzer Tool", description: "Analyzes harmonic distortion", tech: ["MATLAB", "Python", "Power Systems"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "Power Systems", difficulty: "Intermediate", category: "Power Quality" },
  { id: "ece-033", title: "MATLAB Comm System Analyzer", description: "Full digital communication suite", tech: ["MATLAB", "Communication Systems"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-034", title: "AI Fault Recovery Grid", description: "Detects and corrects power loss automatically", tech: ["Python", "ML", "Power Systems"], duration: "4-5 weeks", price: 3600, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-035", title: "IoT Data Logger Web Interface", description: "Generates and visualizes random sensor data", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "IoT" },
  { id: "ece-036", title: "Virtual Home Automation System", description: "Full dashboard for simulated appliances", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Smart Home" },
  { id: "ece-037", title: "Transformer Failure Predictor", description: "Predicts transformer faults from data", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-038", title: "Image Encryption-Decryption Tool", description: "Encrypts and decrypts using AES algorithm", tech: ["Python", "Cryptography", "Image Processing"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "Image Processing", difficulty: "Advanced", category: "Security" },
  { id: "ece-039", title: "Smart Water Management Simulation", description: "Tracks and optimizes water distribution", tech: ["Python", "IoT", "Simulation"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Smart City" },
  { id: "ece-040", title: "Power Quality Analyzer", description: "Detects harmonics and waveform issues", tech: ["MATLAB", "Python", "Power Systems"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "Power Systems", difficulty: "Intermediate", category: "Power Quality" },
  { id: "ece-041", title: "Signal-to-Noise Ratio Visualizer", description: "Visual SNR comparison for modulation", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 1600, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-042", title: "Temperature Forecast System", description: "Predicts environment temperature", tech: ["Python", "ML", "IoT"], duration: "1-2 weeks", price: 1400, branch: "ECE", specialization: "IoT", difficulty: "Basic", category: "IoT" },
  { id: "ece-043", title: "Campus Smart Power Network", description: "Virtual load management system", tech: ["Python", "IoT", "Power Systems"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Smart Campus" },
  { id: "ece-044", title: "Renewable Source Scheduler", description: "Schedules solar/wind output", tech: ["Python", "Renewable Energy", "Simulation"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-045", title: "Smart Grid Load Flow Analyzer", description: "Load flow calculations visualization", tech: ["MATLAB", "Python", "Power Systems"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Power Systems", difficulty: "Intermediate", category: "Smart Grid" },
  { id: "ece-046", title: "Weather-Based Energy Adjuster", description: "Adjusts grid loads based on forecast", tech: ["Python", "AI", "Weather API"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-047", title: "ML Power Quality Detector", description: "Detects waveform distortion via ML", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Power Quality" },
  { id: "ece-048", title: "Virtual Power Usage Monitor", description: "Tracks and graphs power usage", tech: ["React", "Node.js", "IoT"], duration: "1-2 weeks", price: 1500, branch: "ECE", specialization: "IoT", difficulty: "Basic", category: "Monitoring" },
  { id: "ece-049", title: "Smart Factory Sensor Network", description: "Simulates industrial IoT network", tech: ["Python", "IoT", "Industry 4.0"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "Industry 4.0", difficulty: "Advanced", category: "Industry 4.0" },
  { id: "ece-050", title: "Live Grid Monitoring Simulator", description: "Live data visualization dashboard", tech: ["React", "Node.js", "Power Systems"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "Power Systems", difficulty: "Intermediate", category: "Monitoring" },
  { id: "ece-051", title: "AI-Based Power Theft Detection", description: "AI identifies energy theft anomalies", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-052", title: "Communication Protocol Visualizer", description: "Visualizes modulation and protocols", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-053", title: "IoT Cloud Control Dashboard", description: "Virtual IoT control with live graph", tech: ["React", "Node.js", "Cloud"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "IoT" },
  { id: "ece-054", title: "Signal Encryption System", description: "Encrypts baseband signals for security", tech: ["Python", "Cryptography", "Communication"], duration: "2-3 weeks", price: 2100, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Security" },
  { id: "ece-055", title: "AI Speech Emotion Detector", description: "Detects emotion from audio input", tech: ["Python", "Deep Learning", "Audio"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Signal Processing & AI", difficulty: "Advanced", category: "AI" },
  { id: "ece-056", title: "Energy Efficiency Analyzer", description: "Simulates efficiency across loads", tech: ["Python", "Power Systems", "Simulation"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Power Systems", difficulty: "Intermediate", category: "Energy" },
  { id: "ece-057", title: "Power Factor Correction Simulator", description: "Demonstrates PFC virtually", tech: ["MATLAB", "Python", "Power Systems"], duration: "2-3 weeks", price: 1600, branch: "ECE", specialization: "Power Systems", difficulty: "Intermediate", category: "Power Systems" },
  { id: "ece-058", title: "Smart Irrigation Dashboard", description: "Simulated soil moisture management", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Agriculture" },
  { id: "ece-059", title: "ML-Based Transformer Load Prediction", description: "Predicts transformer load & life", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-060", title: "AI Drone Obstacle Detection", description: "Simulates drone obstacle avoidance", tech: ["Python", "Computer Vision", "AI"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Robotics & AI", difficulty: "Advanced", category: "Robotics" },
  { id: "ece-061", title: "Wireless IoT Network Emulator", description: "Simulates MQTT & CoAP communication", tech: ["Python", "IoT", "Networking"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "IoT" },
  { id: "ece-062", title: "DC Motor Speed Controller (Virtual)", description: "Simulates DC motor control loop", tech: ["MATLAB", "Python", "Control Systems"], duration: "1-2 weeks", price: 1400, branch: "ECE", specialization: "Control Systems", difficulty: "Basic", category: "Control Systems" },
  { id: "ece-063", title: "Smart City Dashboard", description: "Full web dashboard with multiple nodes", tech: ["React", "Node.js", "IoT"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Smart City" },
  { id: "ece-064", title: "Solar-Wind Energy Balance Optimizer", description: "Virtual hybrid system optimizer", tech: ["Python", "Renewable Energy", "Optimization"], duration: "4-5 weeks", price: 3800, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-065", title: "Load Forecasting Dashboard", description: "Visualizes ML-based load prediction", tech: ["React", "Python", "ML"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-066", title: "Voice Command Simulation Tool", description: "Executes PC actions via speech", tech: ["Python", "Speech Recognition"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "Embedded Systems", difficulty: "Intermediate", category: "AI" },
  { id: "ece-067", title: "Power Scheduling System", description: "Smart scheduling using ML", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-068", title: "IoT Air Quality Monitor", description: "Simulated sensor data dashboard", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Environmental" },
  { id: "ece-069", title: "Audio Signal Enhancement", description: "Noise reduction & equalization demo", tech: ["Python", "Audio Processing", "DSP"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "Audio" },
  { id: "ece-070", title: "Smart Grid Frequency Stability", description: "Simulated frequency response control", tech: ["MATLAB", "Python", "Power Systems"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Power Systems", difficulty: "Intermediate", category: "Smart Grid" },
  { id: "ece-071", title: "AI Cable Fault Location Estimator", description: "ML predicts cable fault positions", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-072", title: "Power Outage Prediction Tool", description: "Uses ML to predict blackouts", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-073", title: "Renewable Power Forecast Dashboard", description: "Predicts solar/wind power via data", tech: ["React", "Python", "ML"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-074", title: "Communication Link Analyzer", description: "Compares performance under noise", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-075", title: "IoT Smart Factory Monitor", description: "Industry 4.0 process simulation", tech: ["React", "Node.js", "IoT"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Industry 4.0" },
  { id: "ece-076", title: "AI Current Flow Predictor", description: "Predicts load current via ML", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-077", title: "Signal Transmission Visualizer", description: "Displays real-time wave propagation", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-078", title: "Battery Management Simulation", description: "Monitors virtual battery health", tech: ["Python", "Simulation", "Renewable"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Battery" },
  { id: "ece-079", title: "Smart Load Controller", description: "Balances multiple device loads", tech: ["Python", "IoT", "Power Systems"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Smart Home" },
  { id: "ece-080", title: "Virtual Grid Optimization", description: "Balances sources via optimization", tech: ["Python", "Optimization", "Power Systems"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-081", title: "IoT Waste Management Simulator", description: "Simulates smart garbage monitoring", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2100, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Smart City" },
  { id: "ece-082", title: "Smart Water Leakage Detector", description: "Detects leaks with AI logic", tech: ["Python", "AI", "IoT"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "IoT & AI", difficulty: "Intermediate", category: "Smart City" },
  { id: "ece-083", title: "Power System Fault Simulation", description: "Simulates line faults virtually", tech: ["MATLAB", "Python", "Power Systems"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-084", title: "RF Communication Simulator", description: "Radio link and signal visualization", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-085", title: "AI-Based Power Outage Detection", description: "Classifies outage causes", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-086", title: "Renewable Grid Load Analysis", description: "Visual analysis of renewable loads", tech: ["React", "Python", "Power Systems"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-087", title: "Digital Audio Spectrum Analyzer", description: "FFT-based live spectrum", tech: ["Python", "Audio Processing", "DSP"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "Signal Processing", difficulty: "Advanced", category: "Audio" },
  { id: "ece-088", title: "Wireless IoT Communication Tester", description: "Packet delay & loss visualization", tech: ["Python", "IoT", "Networking"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "IoT" },
  { id: "ece-089", title: "Voltage Fluctuation Predictor", description: "ML predicts voltage variations", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-090", title: "Cloud Power Data Logger", description: "Virtual device data logging", tech: ["React", "Node.js", "Cloud"], duration: "2-3 weeks", price: 1600, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Cloud" },
  { id: "ece-091", title: "Smart Irrigation ML Optimizer", description: "ML-based irrigation management", tech: ["Python", "ML", "IoT"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "IoT & AI", difficulty: "Advanced", category: "Agriculture" },
  { id: "ece-092", title: "AI Voice Classification System", description: "Classifies voice tone using CNN", tech: ["Python", "Deep Learning", "Audio"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "AI & Embedded", difficulty: "Advanced", category: "AI" },
  { id: "ece-093", title: "Smart Power Scheduler", description: "AI schedules high-load times", tech: ["Python", "AI", "Power Systems"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-094", title: "IoT-Based Health Data Simulation", description: "Virtual patient data dashboard", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Healthcare" },
  { id: "ece-095", title: "Wireless Signal Strength Analyzer", description: "Graphs RSSI performance", tech: ["Python", "Networking", "Communication"], duration: "2-3 weeks", price: 1700, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-096", title: "Predictive Maintenance Dashboard", description: "Predicts maintenance cycles", tech: ["React", "Python", "ML"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Maintenance" },
  { id: "ece-097", title: "AI-Driven Energy Efficiency Optimizer", description: "Improves power savings via AI", tech: ["Python", "AI", "Optimization"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Energy" },
  { id: "ece-098", title: "Smart Renewable Power Control", description: "Simulates hybrid energy control", tech: ["Python", "Renewable Energy", "Control"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-099", title: "IoT Data Encryption System", description: "Simulates IoT device data protection", tech: ["Python", "Cryptography", "IoT"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Security", difficulty: "Intermediate", category: "Security" },
  { id: "ece-100", title: "Intelligent Load Shedding System", description: "Prioritizes loads automatically", tech: ["Python", "AI", "Power Systems"], duration: "4-5 weeks", price: 3700, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-101", title: "Power Flow Simulation Tool", description: "Performs load flow analysis graphically", tech: ["MATLAB", "Python", "Power Systems"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "Power Systems", difficulty: "Intermediate", category: "Power Systems" },
  { id: "ece-102", title: "AI-Based Voltage Regulation", description: "Uses ML to stabilize voltage virtually", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-103", title: "IoT Weather Prediction App", description: "Forecasts climate parameters virtually", tech: ["React", "Python", "IoT"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Weather" },
  { id: "ece-104", title: "Smart Energy Billing Simulator", description: "Generates virtual billing records", tech: ["Python", "IoT", "Power Systems"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "IoT & Power Systems", difficulty: "Intermediate", category: "Billing" },
  { id: "ece-105", title: "AI-Optimized Grid Frequency Controller", description: "ML algorithm balances grid frequency", tech: ["Python", "ML", "Control Systems"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-106", title: "Renewable Energy Mix Forecaster", description: "Predicts optimal mix of solar/wind", tech: ["Python", "ML", "Renewable Energy"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-107", title: "Smart Building Energy Dashboard", description: "Tracks virtual building energy usage", tech: ["React", "Node.js", "IoT"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Smart Building" },
  { id: "ece-108", title: "Signal Compression Analyzer", description: "Compares lossless vs lossy techniques", tech: ["Python", "Signal Processing", "Compression"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "Signal Processing" },
  { id: "ece-109", title: "IoT Electric Vehicle Charging System", description: "Simulated EV charging monitoring", tech: ["React", "Node.js", "IoT"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "EV" },
  { id: "ece-110", title: "Smart Power Routing Simulation", description: "Route optimization for distribution", tech: ["Python", "Optimization", "Power Systems"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-111", title: "Machine-Learning Load Predictor", description: "Forecasts load patterns", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-112", title: "Communication Channel Simulator", description: "Models AWGN and fading channels", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 2100, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-113", title: "AI Motor Efficiency Predictor", description: "Predicts motor performance", tech: ["Python", "ML", "Electrical Machines"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Electronics", difficulty: "Advanced", category: "Motors" },
  { id: "ece-114", title: "Smart Grid Fault Isolation", description: "Simulates grid fault handling", tech: ["Python", "Power Systems", "Simulation"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-115", title: "Speech-to-Text Signal Processor", description: "Converts speech to text virtually", tech: ["Python", "Speech Recognition", "AI"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Signal Processing & AI", difficulty: "Advanced", category: "AI" },
  { id: "ece-116", title: "Digital Communication Analyzer", description: "BER vs SNR simulation", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-117", title: "IoT Cloud Energy Monitor", description: "Publishes virtual power data to cloud", tech: ["React", "Node.js", "Cloud"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Cloud" },
  { id: "ece-118", title: "AI-Based Solar Panel Fault Detector", description: "Identifies panel anomalies", tech: ["Python", "ML", "Renewable Energy"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Solar" },
  { id: "ece-119", title: "Virtual Drone Fleet Simulator", description: "Simulates multi-drone path control", tech: ["Python", "Simulation", "AI"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Robotics & AI", difficulty: "Advanced", category: "Robotics" },
  { id: "ece-120", title: "AI-Driven Energy Trading Platform", description: "Simulates peer-to-peer power exchange", tech: ["React", "Python", "Blockchain"], duration: "4-5 weeks", price: 3800, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Energy Trading" },
  { id: "ece-121", title: "Power Grid Visualization Dashboard", description: "Maps nodes and flow data", tech: ["React", "Node.js", "Power Systems"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Visualization" },
  { id: "ece-122", title: "Audio Noise Cancellation Simulator", description: "Adaptive filter visualization", tech: ["Python", "DSP", "Audio Processing"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Signal Processing", difficulty: "Advanced", category: "Audio" },
  { id: "ece-123", title: "Predictive Transformer Maintenance", description: "Predicts service schedule", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Maintenance" },
  { id: "ece-124", title: "Renewable Power Forecast Network", description: "Neural forecasting model", tech: ["Python", "Deep Learning", "Renewable"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-125", title: "IoT Factory Automation System", description: "Virtual plant monitoring", tech: ["React", "Node.js", "IoT"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Industry 4.0" },
  { id: "ece-126", title: "Smart Campus IoT Ecosystem", description: "Integrates energy, water, security", tech: ["React", "Node.js", "IoT"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Smart Campus" },
  { id: "ece-127", title: "Electric Vehicle Energy Optimizer", description: "Optimizes virtual EV charging", tech: ["Python", "Optimization", "Renewable"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "EV" },
  { id: "ece-128", title: "Power Demand Prediction App", description: "Forecasts hourly power needs", tech: ["React", "Python", "ML"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-129", title: "IoT Smart Farming Dashboard", description: "Simulated sensor analytics", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Agriculture" },
  { id: "ece-130", title: "AI Power Load Cluster Analysis", description: "Clustering load patterns", tech: ["Python", "ML", "Data Science"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Data Science" },
  { id: "ece-131", title: "Virtual Power Plant Controller", description: "Distributed generation simulation", tech: ["Python", "Power Systems", "Simulation"], duration: "4-5 weeks", price: 3600, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-132", title: "Smart Battery Health Monitor", description: "Predicts battery life", tech: ["Python", "ML", "Renewable Energy"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Battery" },
  { id: "ece-133", title: "AI Wind Speed Predictor", description: "Forecasts wind speed", tech: ["Python", "ML", "Weather API"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Wind Energy" },
  { id: "ece-134", title: "IoT Health Parameter Logger", description: "Virtual biomedical dashboard", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Healthcare" },
  { id: "ece-135", title: "Image Segmentation Simulator", description: "Demonstrates segmentation methods", tech: ["Python", "OpenCV", "Image Processing"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "Image Processing", difficulty: "Intermediate", category: "Computer Vision" },
  { id: "ece-136", title: "Energy Optimization in Smart Homes", description: "Automates load shifting", tech: ["Python", "AI", "IoT"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "IoT & AI", difficulty: "Advanced", category: "Smart Home" },
  { id: "ece-137", title: "Virtual Smart Factory Controller", description: "Software-based factory automation", tech: ["React", "Python", "Industry 4.0"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Industry 4.0", difficulty: "Advanced", category: "Industry 4.0" },
  { id: "ece-138", title: "Load Dispatch Center Simulator", description: "Emulates grid operations", tech: ["Python", "Power Systems", "Simulation"], duration: "4-5 weeks", price: 3700, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-139", title: "AI Anomaly Detection in Energy Data", description: "Detects outliers in smart meter data", tech: ["Python", "ML", "Data Science"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "AI", difficulty: "Advanced", category: "Data Science" },
  { id: "ece-140", title: "Wireless Communication Channel Modeler", description: "Fading and attenuation simulation", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 2100, branch: "ECE", specialization: "Communication", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-141", title: "AI Smart Speaker Emulator", description: "Speech command simulation", tech: ["Python", "Speech Recognition", "AI"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "Embedded, AI", difficulty: "Advanced", category: "AI" },
  { id: "ece-142", title: "Smart Energy Storage Optimization", description: "Manages storage and discharge", tech: ["Python", "Optimization", "Renewable"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Energy Storage" },
  { id: "ece-143", title: "IoT Flood Alert System", description: "Virtual environment data alert", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Safety" },
  { id: "ece-144", title: "AI Transformer Life Prediction", description: "Predicts remaining life", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "AI, Power Systems", difficulty: "Advanced", category: "Maintenance" },
  { id: "ece-145", title: "RF Spectrum Analyzer", description: "Displays spectrum bands virtually", tech: ["MATLAB", "Python", "RF"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "Communication", difficulty: "Intermediate", category: "RF" },
  { id: "ece-146", title: "Renewable Energy Forecasting Network", description: "Hybrid ML prediction", tech: ["Python", "Deep Learning", "Renewable"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-147", title: "Smart Vehicle Tracking Simulator", description: "GPS and path simulation", tech: ["Python", "IoT", "GPS"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "IoT, AI", difficulty: "Advanced", category: "Automotive" },
  { id: "ece-148", title: "AI Power Distribution Controller", description: "Intelligent routing logic", tech: ["Python", "AI", "Power Systems"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-149", title: "Digital Filter Design Suite", description: "Interactive filter designer", tech: ["MATLAB", "Python", "DSP"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "DSP" },
  { id: "ece-150", title: "Smart Power Audit Software", description: "Analyzes consumption patterns", tech: ["React", "Python", "Data Science"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "IoT, Data Science", difficulty: "Advanced", category: "Analytics" },
  { id: "ece-151", title: "Virtual Transmission Line Analyzer", description: "Line loss and stability tests", tech: ["MATLAB", "Python", "Power Systems"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-152", title: "Energy Trading Blockchain Simulation", description: "Models blockchain-based trading", tech: ["Python", "Blockchain", "Power Systems"], duration: "4-5 weeks", price: 3700, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Blockchain" },
  { id: "ece-153", title: "IoT Virtual Health Assistant", description: "Simulated health monitoring chatbot", tech: ["React", "Python", "AI"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "IoT, AI", difficulty: "Advanced", category: "Healthcare" },
  { id: "ece-154", title: "AI Wind Farm Performance Predictor", description: "Forecasts output based on weather", tech: ["Python", "ML", "Renewable Energy"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Wind Energy" },
  { id: "ece-155", title: "Signal Interference Analyzer", description: "Shows overlapping signal distortion", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 2100, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-156", title: "Smart IoT Lighting System", description: "Automated lighting control dashboard", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Smart Home" },
  { id: "ece-157", title: "AI Power Line Fault Classifier", description: "Classifies fault types", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-158", title: "Virtual SCADA System", description: "Simulates SCADA operations", tech: ["Python", "SCADA", "Industry 4.0"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Automation", difficulty: "Advanced", category: "SCADA" },
  { id: "ece-159", title: "Smart Parking Simulator", description: "Virtual parking slot monitoring", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Smart City" },
  { id: "ece-160", title: "ML for Energy Efficiency", description: "Predicts optimal appliance usage", tech: ["Python", "ML", "IoT"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "IoT & AI", difficulty: "Advanced", category: "Energy" },
  { id: "ece-161", title: "Digital Communication Toolbox", description: "Encodes/decodes digital signals", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "Communication Systems", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-162", title: "Virtual Substation Monitor", description: "Displays voltage/current trends", tech: ["React", "Python", "Power Systems"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Monitoring" },
  { id: "ece-163", title: "Renewable Power Prediction API", description: "REST API for forecasting", tech: ["Python", "Flask", "ML"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "AI, Cloud", difficulty: "Advanced", category: "API" },
  { id: "ece-164", title: "IoT Smart Grid Visualization", description: "Grid flow visual map", tech: ["React", "D3.js", "IoT"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "IoT, Web Dev", difficulty: "Advanced", category: "Visualization" },
  { id: "ece-165", title: "Signal Processing in 5G Simulator", description: "OFDM and MIMO demonstration", tech: ["MATLAB", "Python", "5G"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Communication", difficulty: "Advanced", category: "5G" },
  { id: "ece-166", title: "AI Energy Consumption Optimizer", description: "Learns optimal usage patterns", tech: ["Python", "ML", "IoT"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "AI", difficulty: "Advanced", category: "Energy" },
  { id: "ece-167", title: "IoT Virtual Greenhouse System", description: "Controls humidity/temp virtually", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "IoT, Agriculture", difficulty: "Intermediate", category: "Agriculture" },
  { id: "ece-168", title: "Electrical Network Fault Simulation", description: "Fault and protection model", tech: ["MATLAB", "Python", "EEE"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "EEE", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-169", title: "Smart Water Grid Manager", description: "Simulated resource allocation", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Water Management" },
  { id: "ece-170", title: "AI Power Predictive Maintenance", description: "Forecasts maintenance intervals", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "AI", difficulty: "Advanced", category: "Maintenance" },
  { id: "ece-171", title: "Wireless 5G Signal Simulator", description: "Demonstrates 5G waveforms", tech: ["MATLAB", "Python", "5G"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Communication", difficulty: "Advanced", category: "5G" },
  { id: "ece-172", title: "IoT Cloud Data Analytics", description: "Visualizes IoT data via web", tech: ["React", "Node.js", "Cloud"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "IoT, Cloud", difficulty: "Intermediate", category: "Analytics" },
  { id: "ece-173", title: "AI Fault Diagnosis for Motors", description: "Identifies fault category", tech: ["Python", "ML", "Electrical Machines"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "Electrical Machines", difficulty: "Advanced", category: "Motors" },
  { id: "ece-174", title: "Hybrid Energy Control Simulator", description: "Controls multi-source grid", tech: ["Python", "Control Systems", "Renewable"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Hybrid Energy" },
  { id: "ece-175", title: "Virtual Energy Billing App", description: "Generates bills from usage data", tech: ["React", "Node.js", "IoT"], duration: "1-2 weeks", price: 1500, branch: "ECE", specialization: "IoT", difficulty: "Basic", category: "Billing" },
  { id: "ece-176", title: "AI Voice Controlled Dashboard", description: "Simulated voice interface", tech: ["React", "Python", "Speech Recognition"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "AI, Embedded", difficulty: "Advanced", category: "AI" },
  { id: "ece-177", title: "IoT Smart Waste Management", description: "Tracks bin levels virtually", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Smart City" },
  { id: "ece-178", title: "Renewable Source Efficiency Analyzer", description: "Compares solar/wind outputs", tech: ["Python", "Data Science", "Renewable"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-179", title: "Smart Electrical Distribution Model", description: "Simulates power distribution", tech: ["Python", "Power Systems", "Simulation"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Distribution" },
  { id: "ece-180", title: "AI Energy Consumption Predictor", description: "Forecasts home usage", tech: ["Python", "ML", "IoT"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "AI, Power Systems", difficulty: "Advanced", category: "Energy" },
  { id: "ece-181", title: "IoT Noise Monitoring System", description: "Tracks sound levels virtually", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "IoT, Signal Processing", difficulty: "Intermediate", category: "Environmental" },
  { id: "ece-182", title: "Smart Campus Grid Optimizer", description: "Distributes load efficiently", tech: ["Python", "AI", "Power Systems"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "IoT, AI", difficulty: "Advanced", category: "Smart Campus" },
  { id: "ece-183", title: "Wireless Communication Visualizer", description: "Simulates propagation patterns", tech: ["MATLAB", "Python", "Communication"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "ECE", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-184", title: "Virtual Power Line Monitoring", description: "Displays current/voltage profiles", tech: ["React", "Python", "Power Systems"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "EEE", difficulty: "Intermediate", category: "Monitoring" },
  { id: "ece-185", title: "AI for Dynamic Load Scheduling", description: "Schedules load shifts", tech: ["Python", "AI", "Power Systems"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-186", title: "IoT Building Automation Suite", description: "Controls virtual HVAC systems", tech: ["React", "Node.js", "IoT"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Building Automation" },
  { id: "ece-187", title: "Signal Distortion Analyzer", description: "Shows filter effects", tech: ["MATLAB", "Python", "Signal Processing"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "Signal Processing" },
  { id: "ece-188", title: "AI Voltage Fluctuation Detector", description: "Predicts instability", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-189", title: "Renewable Micro-Grid Simulator", description: "Mini grid balancing", tech: ["Python", "Renewable Energy", "Simulation"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Microgrid" },
  { id: "ece-190", title: "IoT Smart Vehicle Monitoring", description: "Tracks vehicle status virtually", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Automotive" },
  { id: "ece-191", title: "Power Transformer Temperature Predictor", description: "Forecasts temperature rise", tech: ["Python", "ML", "Power Systems"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "AI, EEE", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-192", title: "IoT Weather Data Visualizer", description: "Displays real-time virtual data", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "IoT, Web", difficulty: "Intermediate", category: "Weather" },
  { id: "ece-193", title: "AI Energy Cost Prediction Model", description: "Forecasts billing costs", tech: ["Python", "ML", "Data Science"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "AI", difficulty: "Advanced", category: "Finance" },
  { id: "ece-194", title: "Smart Grid Cyber Attack Simulation", description: "Demonstrates attack and response", tech: ["Python", "Cyber Security", "Power Systems"], duration: "4-5 weeks", price: 3600, branch: "ECE", specialization: "Cyber Security, EEE", difficulty: "Advanced", category: "Security" },
  { id: "ece-195", title: "Digital Signal Processing Tool", description: "Real-time FFT analysis", tech: ["MATLAB", "Python", "DSP"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "ECE", difficulty: "Intermediate", category: "DSP" },
  { id: "ece-196", title: "IoT Fire Detection Simulator", description: "Triggers alerts virtually", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "IoT, Safety", difficulty: "Intermediate", category: "Safety" },
  { id: "ece-197", title: "AI Renewable Forecast Integration", description: "Combines AI for solar/wind", tech: ["Python", "Deep Learning", "Renewable"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "AI, Energy", difficulty: "Advanced", category: "Renewable Energy" },
  { id: "ece-198", title: "Smart Power Usage Recommendation", description: "Suggests energy saving actions", tech: ["Python", "AI", "IoT"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "AI", difficulty: "Advanced", category: "Energy" },
  { id: "ece-199", title: "IoT Smart Bridge Monitor", description: "Simulates stress data logging", tech: ["React", "Node.js", "IoT"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "IoT, Civil", difficulty: "Intermediate", category: "Infrastructure" },
  { id: "ece-200", title: "AI Smart Grid Fault Locator", description: "Identifies fault distance", tech: ["Python", "ML", "Power Systems"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "AI, EEE", difficulty: "Advanced", category: "Smart Grid" },

  
  { id: "hcfp-001", title: "Patient Satisfaction Analytics Dashboard", description: "Survey-based patient satisfaction insights using analytics tools.", tech: ["Google Sheets", "Power BI", "Forms"], duration: "3 weeks", price: 6000, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Patient Care" },

  { id: "hcfp-002", title: "Hospital Inventory Optimization System", description: "Demand forecasting & stock optimization for medicines/equipment.", tech: ["Python", "Colab", "Sheets"], duration: "3-4 weeks", price: 5700, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Operations" },

  { id: "hcfp-003", title: "Nurse Auto-Scheduling Algorithm", description: "AI-based nurse shift scheduling using linear programming.", tech: ["Python", "PuLP", "Colab"], duration: "4 weeks", price: 6200, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "HR" },

  { id: "hcfp-004", title: "Bio-Medical Waste Compliance Audit", description: "Audit & gap analysis of hospital waste management workflow.", tech: ["Sheets", "Audit Checklist"], duration: "2-3 weeks", price: 4500, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Compliance" },

  { id: "hcfp-005", title: "Telemedicine Adoption Analytics", description: "Study of telemedicine adoption among patients & doctors.", tech: ["Google Forms", "Power BI"], duration: "3 weeks", price: 4900, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Digital Health" },

  { id: "hcfp-006", title: "Infection Control Process Assessment", description: "ICU and ward infection control practice evaluation.", tech: ["Sheets", "Checklists"], duration: "3 weeks", price: 5500, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Quality" },

  { id: "hcfp-007", title: "Emergency Department Delay Analysis", description: "Analysis of waiting times, bottlenecks & patient flow.", tech: ["Sheets", "Colab"], duration: "4 weeks", price: 6000, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Operations" },

  { id: "hcfp-008", title: "Hospital Dietary Services Optimization", description: "Study of food delivery timings & patient satisfaction.", tech: ["Sheets"], duration: "2 weeks", price: 4300, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Easy", category: "Hospital Services" },

  { id: "hcfp-009", title: "Patient Readmission Risk Study", description: "Identify factors causing frequent patient readmissions.", tech: ["Colab", "Datasets"], duration: "3 weeks", price: 5800, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Analytics" },

  { id: "hcfp-010", title: "Medical Billing Error Identification", description: "Revenue leakage study due to billing errors.", tech: ["Sheets"], duration: "3 weeks", price: 5200, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Finance" },

  { id: "hcfp-011", title: "Health Insurance Claim Audit", description: "Study causes for rejections & delays in claim processing.", tech: ["Sheets"], duration: "3 weeks", price: 4800, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Insurance" },

  { id: "hcfp-012", title: "Pharmacy Stockout Prediction", description: "Drug availability forecasting using ML.", tech: ["Python", "Colab"], duration: "4 weeks", price: 6100, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Pharmacy" },

  { id: "hcfp-013", title: "OPD Flow Optimization", description: "Reduce patient waiting time in OPD process.", tech: ["Sheets", "Power BI"], duration: "3 weeks", price: 5400, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Operations" },

  { id: "hcfp-014", title: "Hospital Digital Marketing Analysis", description: "Analyse hospital digital presence & marketing ROI.", tech: ["Google Analytics", "Meta Tools"], duration: "2-3 weeks", price: 4700, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Easy", category: "Marketing" },

  { id: "hcfp-015", title: "Public Health Scheme Awareness Study", description: "Awareness analysis of schemes like Ayushman Bharat.", tech: ["Forms", "Slides"], duration: "2 weeks", price: 4400, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Public Health" },

  { id: "hcfp-016", title: "Hospital HR Attrition Rate Study", description: "Analyse resignation patterns among healthcare staff.", tech: ["Sheets"], duration: "3 weeks", price: 5000, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "HR" },

  { id: "hcfp-017", title: "Surgical Error Root Cause Analysis", description: "Study & identify causes of surgical errors.", tech: ["Sheets", "5-Whys"], duration: "3 weeks", price: 5600, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Quality" },

  { id: "hcfp-018", title: "Ambulance Response Time Analysis", description: "Response time study & optimization model.", tech: ["Sheets"], duration: "3 weeks", price: 4700, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Emergency" },

  { id: "hcfp-019", title: "Operation Theatre Efficiency Study", description: "Analyse OT utilization & turnaround time.", tech: ["Sheets"], duration: "4 weeks", price: 6200, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Operations" },

  { id: "hcfp-020", title: "Patient Experience Dashboard (Advanced)", description: "Dashboard creation for patient complaints & feedback.", tech: ["Sheets", "Power BI"], duration: "3 weeks", price: 5500, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Experience" },

  { id: "hcfp-021", title: "Hospital Cash Flow Optimization Study", description: "Analyse billing delays & receivables.", tech: ["Sheets"], duration: "3 weeks", price: 5300, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Finance" },

  { id: "hcfp-022", title: "Medication Error Reduction Plan", description: "Error analysis & intervention recommendations.", tech: ["RCA Tools", "Sheets"], duration: "3 weeks", price: 4900, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Pharmacy" },

  { id: "hcfp-023", title: "Hospital Cost Minimization Model", description: "Identify non-clinical cost reduction opportunities.", tech: ["Sheets"], duration: "3 weeks", price: 5800, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Finance" },

  { id: "hcfp-024", title: "Electronic Medical Record Feasibility", description: "Study EMR adoption challenges & benefits.", tech: ["Forms", "Sheets"], duration: "3 weeks", price: 4700, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Intermediate", category: "Digital Health" },

  { id: "hcfp-025", title: "Doctor Performance KPI Tracker", description: "Create KPI dashboard for doctors’ efficiency.", tech: ["Power BI", "Sheets"], duration: "3 weeks", price: 6000, price_after_coupon: 600, branch: "MBA", specialization: "Healthcare Management", difficulty: "Advanced", category: "Performance" },
  

  {
    id: "health-061",
    title: "Nursing Staff Retention Strategy",
    description: "Strategies to reduce nurse turnover using HR analytics.",
    tech: ["SPSS", "Excel"],
    duration: "4 weeks",
    price: 8700,
    finalPrice: 600
  },
  {
    id: "health-062",
    title: "Smart Queue Management System for OPD",
    description: "AI-based crowd flow optimization for hospitals.",
    tech: ["Python", "Simulation Tools"],
    duration: "4 weeks",
    price: 9400,
    finalPrice: 600
  },
  {
    id: "health-063",
    title: "Hospital Budget Utilization Audit",
    description: "Audit of financial resource allocation across departments.",
    tech: ["Excel", "Tally"],
    duration: "4 weeks",
    price: 8800,
    finalPrice: 600
  },
  {
    id: "health-064",
    title: "Clinical Workflow Optimization",
    description: "Improving patient flow using process engineering (BPMN).",
    tech: ["BPMN Tools"],
    duration: "3 weeks",
    price: 9000,
    finalPrice: 600
  },
  {
    id: "health-065",
    title: "Digital Pharmacy Automation Study",
    description: "Feasibility analysis for robotic dispensing systems.",
    tech: ["Research Tools"],
    duration: "4 weeks",
    price: 9300,
    finalPrice: 600
  },
  {
    id: "health-066",
    title: "Chronic Disease Management Program",
    description: "Integrated care model for diabetics & cardiac patients.",
    tech: ["Survey Tools", "Analytics"],
    duration: "4 weeks",
    price: 9700,
    finalPrice: 600
  },
  {
    id: "health-067",
    title: "Predictive Analytics for Disease Outbreak",
    description: "Forecasting local outbreaks using historical data.",
    tech: ["Python", "ML"],
    duration: "3 weeks",
    price: 9500,
    finalPrice: 600
  },
  {
    id: "health-068",
    title: "Hospital Transport System Improvement",
    description: "Optimizing internal patient transport routes & timing.",
    tech: ["Excel", "GIS"],
    duration: "3 weeks",
    price: 9100,
    finalPrice: 600
  },
  {
    id: "health-069",
    title: "Medication Adherence Improvement Model",
    description: "Intervention strategies to improve patient medication adherence.",
    tech: ["Survey Tools"],
    duration: "3 weeks",
    price: 8900,
    finalPrice: 600
  },
  {
    id: "health-070",
    title: "Hospital KPI Scorecard System",
    description: "Development of a Balanced Scorecard for hospitals.",
    tech: ["Power BI", "Excel"],
    duration: "4 weeks",
    price: 9600,
    finalPrice: 600
  },
  {
    id: "health-071",
    title: "Patient Grievance Redressal System",
    description: "Redesigning complaint resolution workflow.",
    tech: ["Survey Tools", "Documentation"],
    duration: "3 weeks",
    price: 8200,
    finalPrice: 600
  },
  {
    id: "health-072",
    title: "Hospital Resource Allocation Model",
    description: "Optimization model for beds, staff & equipment.",
    tech: ["Excel", "Linear Programming"],
    duration: "4 weeks",
    price: 9800,
    finalPrice: 600
  },
  {
    id: "health-073",
    title: "Quality of Life Assessment in Cancer Patients",
    description: "QOL study using WHOQOL-BREF tools.",
    tech: ["SPSS", "Survey Tools"],
    duration: "4 weeks",
    price: 9900,
    finalPrice: 600
  },
  {
    id: "health-074",
    title: "Hospital Talent Management System",
    description: "Competency mapping & talent pipeline development.",
    tech: ["Excel", "HR Tools"],
    duration: "4 weeks",
    price: 9400,
    finalPrice: 600
  },
  {
    id: "health-075",
    title: "Cancer Registry Data Management Study",
    description: "Improving accuracy & standardization of cancer registry data.",
    tech: ["Power BI", "Excel"],
    duration: "4 weeks",
    price: 10200,
    finalPrice: 600
  },
  {
    id: "health-076",
    title: "Hospital Vendor Evaluation Model",
    description: "Vendor scoring for prioritizing procurement.",
    tech: ["Excel", "Weighted Models"],
    duration: "3 weeks",
    price: 8600,
    finalPrice: 600
  },
  {
    id: "health-077",
    title: "Blockchain in Healthcare Records",
    description: "Feasibility study for secure record management.",
    tech: ["Research Tools"],
    duration: "4 weeks",
    price: 11000,
    finalPrice: 600
  },
  {
    id: "health-078",
    title: "Tele-Radiology Efficiency Study",
    description: "Impact analysis of remote radiologist reporting.",
    tech: ["Analytics Tools"],
    duration: "3 weeks",
    price: 8800,
    finalPrice: 600
  },
  {
    id: "health-079",
    title: "Hospital HACCP Food Safety Audit",
    description: "Food service quality & contamination risk assessment.",
    tech: ["Audit Tools"],
    duration: "3 weeks",
    price: 7800,
    finalPrice: 600
  },
  {
    id: "health-080",
    title: "Healthcare Data Privacy Framework",
    description: "HIPAA & NDHM-based compliance study.",
    tech: ["Security Tools"],
    duration: "4 weeks",
    price: 10400,
    finalPrice: 600
  },
  {
    id: "health-081",
    title: "AI-based Health Claim Processing Model",
    description: "Automating claim verification using ML.",
    tech: ["Python", "ML"],
    duration: "4 weeks",
    price: 11200,
    finalPrice: 600
  },
  {
    id: "health-082",
    title: "Hospital Asset Tracking System",
    description: "RFID-based tracking for equipment movement.",
    tech: ["RFID Tools"],
    duration: "4 weeks",
    price: 9300,
    finalPrice: 600
  },
  {
    id: "health-083",
    title: "Patient Education & Awareness Program",
    description: "Effectiveness analysis of health education activities.",
    tech: ["Survey Tools"],
    duration: "3 weeks",
    price: 7600,
    finalPrice: 600
  },
  {
    id: "health-084",
    title: "Hospital Bed Turnaround Time Improvement",
    description: "Reducing time between patient discharge & new admission.",
    tech: ["Excel", "Process Tools"],
    duration: "3 weeks",
    price: 8900,
    finalPrice: 600
  },
  {
    id: "health-085",
    title: "Clinical Audit for Antibiotic Stewardship",
    description: "Reducing antibiotic misuse through audit processes.",
    tech: ["Documentation", "SPSS"],
    duration: "4 weeks",
    price: 9700,
    finalPrice: 600
  },
  {
    id: "health-086",
    title: "Hospital Climate Impact Study",
    description: "Carbon footprint measurement & sustainability planning.",
    tech: ["Audit Tools"],
    duration: "4 weeks",
    price: 10800,
    finalPrice: 600
  },
  {
    id: "health-087",
    title: "Rehabilitation Program Evaluation",
    description: "Outcome analysis of post-surgery rehabilitation programs.",
    tech: ["Analytics Tools"],
    duration: "4 weeks",
    price: 8400,
    finalPrice: 600
  },
  {
    id: "health-088",
    title: "Maternity Ward Patient Experience Study",
    description: "Experience analysis with service improvement recommendations.",
    tech: ["Survey Tools"],
    duration: "3 weeks",
    price: 7800,
    finalPrice: 600
  },
  {
    id: "health-089",
    title: "Hospital Layout Efficiency Study",
    description: "Space utilization audit and redesign suggestions.",
    tech: ["AutoCAD", "Research"],
    duration: "4 weeks",
    price: 12000,
    finalPrice: 600
  },
  {
    id: "health-090",
    title: "Digital Insurance Pre-Authorization System",
    description: "Improving pre-auth TAT using automation.",
    tech: ["HMS", "Excel"],
    duration: "3 weeks",
    price: 9800,
    finalPrice: 600
  },
  {
    id: "health-091",
    title: "Hospital CRM Implementation Study",
    description: "CRM tools for patient relationship management.",
    tech: ["CRM Tools"],
    duration: "4 weeks",
    price: 9500,
    finalPrice: 600
  },
  {
    id: "health-092",
    title: "AI-based Disease Severity Scoring",
    description: "Predictive scoring for high-risk patients.",
    tech: ["Python", "ML"],
    duration: "4 weeks",
    price: 13200,
    finalPrice: 600
  },
  {
    id: "health-093",
    title: "Outpatient Pharmacy Workflow Efficiency",
    description: "Reduce pharmacy waiting times using workflow redesign.",
    tech: ["Process Tools"],
    duration: "3 weeks",
    price: 9400,
    finalPrice: 600
  },
  {
    id: "health-094",
    title: "Hospital Mobile App Feature Analysis",
    description: "Benchmarking & gap analysis for hospital apps.",
    tech: ["Analysis Tools"],
    duration: "3 weeks",
    price: 8600,
    finalPrice: 600
  },
  {
    id: "health-095",
    title: "Hospital Death Audit Study",
    description: "Root cause analysis of mortality data.",
    tech: ["SPSS"],
    duration: "3 weeks",
    price: 10300,
    finalPrice: 600
  },
  {
    id: "health-096",
    title: "Medical Tourism Growth Strategy",
    description: "Marketing & operational plan for attracting global patients.",
    tech: ["Analytics", "SEO Tools"],
    duration: "4 weeks",
    price: 14000,
    finalPrice: 600
  },
  {
    id: "health-097",
    title: "Smart ICU Monitoring Dashboard",
    description: "Real-time ICU vitals integration dashboard.",
    tech: ["Power BI", "IoT Tools"],
    duration: "4 weeks",
    price: 15000,
    finalPrice: 600
  },
  {
    id: "health-098",
    title: "Hospital HR Competency Development",
    description: "Competency mapping for clinical & non-clinical staff.",
    tech: ["HR Tools"],
    duration: "4 weeks",
    price: 10400,
    finalPrice: 600
  },
  {
    id: "health-099",
    title: "Hospital Biomedical Equipment Audit",
    description: "Utilization & maintenance analysis of medical equipment.",
    tech: ["Audit Tools"],
    duration: "4 weeks",
    price: 11800,
    finalPrice: 600
  },
  {
    id: "health-100",
    title: "Healthcare Business Expansion Strategy",
    description: "Feasibility & market entry strategy for new medical branches.",
    tech: ["Market Research", "Financial Tools"],
    duration: "4 weeks",
    price: 15500,
    finalPrice: 600
  }
,
  {
    id: "health-026",
    title: "Hospital Staff Productivity Optimization",
    description: "Analysis of workload, shift systems & task allocation using time-motion studies.",
    tech: ["Excel", "Power BI", "SPSS"],
    duration: "4 weeks",
    price: 6000,
    finalPrice: 600
  },
  {
    id: "health-027",
    title: "Patient Satisfaction KPI Dashboard",
    description: "Real-time dashboard for patient satisfaction scores across departments.",
    tech: ["Tableau", "Survey Tools"],
    duration: "4 weeks",
    price: 6800,
    finalPrice: 600
  },
  {
    id: "health-028",
    title: "Medical Error Reduction Study",
    description: "Root cause analysis of medication & diagnostic errors using Six Sigma.",
    tech: ["Six Sigma Tools", "Excel"],
    duration: "3 weeks",
    price: 7200,
    finalPrice: 600
  },
  {
    id: "health-029",
    title: "Healthcare Cost-Minimization Analysis",
    description: "Cost–benefit evaluation of alternative treatment pathways.",
    tech: ["Financial Modeling", "Excel"],
    duration: "4 weeks",
    price: 6500,
    finalPrice: 600
  },
  {
    id: "health-030",
    title: "AI-based Appointment Scheduling Model",
    description: "Optimized OPD schedule using predictive demand modelling.",
    tech: ["Python", "ML Models"],
    duration: "4 weeks",
    price: 7500,
    finalPrice: 600
  },
  {
    id: "health-031",
    title: "Hospital Infection Spread Analysis",
    description: "Study of infection hotspots using risk mapping techniques.",
    tech: ["GIS Tools", "Power BI"],
    duration: "4 weeks",
    price: 7000,
    finalPrice: 600
  },
  {
    id: "health-032",
    title: "Telemedicine Adoption Study",
    description: "Factors influencing patient adoption of tele-health services.",
    tech: ["Survey Tools", "SPSS"],
    duration: "3 weeks",
    price: 6600,
    finalPrice: 600
  },
  {
    id: "health-033",
    title: "Emergency Response Time Optimization",
    description: "Data-driven analysis of ambulance response time delays.",
    tech: ["GIS", "Excel"],
    duration: "4 weeks",
    price: 7400,
    finalPrice: 600
  },
  {
    id: "health-034",
    title: "Patient Waiting Time Reduction Strategy",
    description: "Queue management & scheduling solution for OPD departments.",
    tech: ["Excel", "Simulation Tools"],
    duration: "3 weeks",
    price: 6800,
    finalPrice: 600
  },
  {
    id: "health-035",
    title: "Healthcare Supply Chain Cost Control",
    description: "Optimization of materials procurement & inventory levels.",
    tech: ["SCM Software", "Excel"],
    duration: "4 weeks",
    price: 7600,
    finalPrice: 600
  },
  {
    id: "health-036",
    title: "Blood Bank Management System Study",
    description: "Improving donor retention & inventory planning.",
    tech: ["Database Tools", "Excel"],
    duration: "3 weeks",
    price: 6700,
    finalPrice: 600
  },
  {
    id: "health-037",
    title: "Hospital Energy Efficiency Audit",
    description: "Cost-saving analysis for reducing electricity & HVAC expenses.",
    tech: ["Audit Tools", "Excel"],
    duration: "3 weeks",
    price: 7100,
    finalPrice: 600
  },
  {
    id: "health-038",
    title: "Medical Waste Management SOP",
    description: "Process analysis for safe & compliant biomedical waste disposal.",
    tech: ["Documentation Tools"],
    duration: "3 weeks",
    price: 6200,
    finalPrice: 600
  },
  {
    id: "health-039",
    title: "Hospital HR Attrition Analysis",
    description: "Predicting attrition causes among nurses & staff.",
    tech: ["SPSS", "Excel"],
    duration: "3 weeks",
    price: 6900,
    finalPrice: 600
  },
  {
    id: "health-040",
    title: "Digital Health Record Implementation Study",
    description: "Feasibility assessment of EMR/HMS implementation.",
    tech: ["HMS Tools", "Research"],
    duration: "4 weeks",
    price: 7500,
    finalPrice: 600
  },
  {
    id: "health-041",
    title: "Hospital Revenue Leakage Investigation",
    description: "Analyzing billing errors, missing charges & revenue leak points.",
    tech: ["Financial Tools", "Excel"],
    duration: "4 weeks",
    price: 8400,
    finalPrice: 600
  },
  {
    id: "health-042",
    title: "Nursing Workload Analysis",
    description: "Workload scoring using dependency levels & shift mapping.",
    tech: ["Excel", "Survey Tools"],
    duration: "3 weeks",
    price: 7000,
    finalPrice: 600
  },
  {
    id: "health-043",
    title: "ICU Bed Utilization Study",
    description: "Utilization forecasting and patient turnover analysis.",
    tech: ["Excel", "Tableau"],
    duration: "4 weeks",
    price: 7800,
    finalPrice: 600
  },
  {
    id: "health-044",
    title: "Outbreak Preparedness Model for Hospitals",
    description: "Risk modelling & preparedness planning for pandemics.",
    tech: ["Risk Tools", "Excel"],
    duration: "4 weeks",
    price: 8200,
    finalPrice: 600
  },
  {
    id: "health-045",
    title: "Pharmacy Inventory Loss Prevention Study",
    description: "Shrinkage, expiry & pilferage analysis with solutions.",
    tech: ["Inventory Software", "Excel"],
    duration: "3 weeks",
    price: 7600,
    finalPrice: 600
  },
  {
    id: "health-046",
    title: "Elder Care Facility Management Study",
    description: "Operational and financial feasibility for geriatric care.",
    tech: ["Research Tools"],
    duration: "4 weeks",
    price: 9000,
    finalPrice: 600
  },
  {
    id: "health-047",
    title: "Hospital Branding & Patient Acquisition Strategy",
    description: "Marketing strategy for hospitals using digital channels.",
    tech: ["Google Analytics", "SEO Tools"],
    duration: "3 weeks",
    price: 7000,
    finalPrice: 600
  },
  {
    id: "health-048",
    title: "NABH Gap Analysis Report",
    description: "Identifying gaps against NABH standards and recommending actions.",
    tech: ["NABH Standards", "Audit Tools"],
    duration: "4 weeks",
    price: 8800,
    finalPrice: 600
  },
  {
    id: "health-049",
    title: "Hospital Fire Safety Assessment",
    description: "Risk evaluation & preparedness improvement plan.",
    tech: ["Safety Audit Tools"],
    duration: "3 weeks",
    price: 6600,
    finalPrice: 600
  },
  {
    id: "health-050",
    title: "Predictive Analytics for Readmission Reduction",
    description: "ML model to identify high-risk patients.",
    tech: ["Python", "ML", "Power BI"],
    duration: "4 weeks",
    price: 8800,
    finalPrice: 600
  },
  {
    id: "health-051",
    title: "Hospital Ambulance Route Optimization",
    description: "GPS-based route efficiency analysis.",
    tech: ["GIS", "Excel"],
    duration: "3 weeks",
    price: 7800,
    finalPrice: 600
  },
  {
    id: "health-052",
    title: "Tele-ICU Implementation Study",
    description: "Feasibility and requirements for Tele-ICU setup.",
    tech: ["HMS", "Research"],
    duration: "4 weeks",
    price: 9200,
    finalPrice: 600
  },
  {
    id: "health-053",
    title: "Healthcare Insurance Fraud Detection",
    description: "Data analysis to identify fraudulent claims.",
    tech: ["Python", "Excel"],
    duration: "4 weeks",
    price: 8500,
    finalPrice: 600
  },
  {
    id: "health-054",
    title: "Mental Health Support System for Hospitals",
    description: "Employee counselling & burnout assessment framework.",
    tech: ["Survey Tools"],
    duration: "3 weeks",
    price: 6400,
    finalPrice: 600
  },
  {
    id: "health-055",
    title: "Patient Journey Mapping",
    description: "Mapping pain points across the hospital service chain.",
    tech: ["Journey Mapping Tools"],
    duration: "3 weeks",
    price: 7000,
    finalPrice: 600
  },
  {
    id: "health-056",
    title: "Hospital Disaster Management Plan",
    description: "Full emergency preparedness BPMN model.",
    tech: ["Audit Tools"],
    duration: "4 weeks",
    price: 8600,
    finalPrice: 600
  },
  {
    id: "health-057",
    title: "OPD Resource Requirement Forecasting",
    description: "Forecasting doctors & support staff needs.",
    tech: ["Excel", "Predictive Analytics"],
    duration: "3 weeks",
    price: 7600,
    finalPrice: 600
  },
  {
    id: "health-058",
    title: "Hospital Billing Efficiency System",
    description: "Audit of billing workflows & missing charges.",
    tech: ["HMS", "Excel"],
    duration: "3 weeks",
    price: 8100,
    finalPrice: 600
  },
  {
    id: "health-059",
    title: "Clinical Quality Indicator Reporting",
    description: "Quality metrics study across clinical departments.",
    tech: ["Excel", "SPSS"],
    duration: "4 weeks",
    price: 8900,
    finalPrice: 600
  },
  {
    id: "health-060",
    title: "AI Chatbot for Patient Query Automation",
    description: "Automated chatbot system design for hospitals.",
    tech: ["Python", "Dialogflow"],
    duration: "4 weeks",
    price: 9500,
    finalPrice: 600
  },
  // EMBEDDED SYSTEMS PROJECTS (100 Additional Projects)
  { id: "ece-201", title: "Virtual Embedded IoT Device Simulator", description: "Simulates sensors and controllers online", tech: ["Python", "IoT", "Simulation"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Embedded IoT", difficulty: "Intermediate", category: "Embedded" },
  { id: "ece-202", title: "AI-Based Embedded Voice Assistant", description: "Emulates Alexa-like assistant on PC", tech: ["Python", "Speech Recognition", "AI"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "AI & Embedded", difficulty: "Advanced", category: "AI" },
  { id: "ece-203", title: "Real-Time RTOS Task Scheduler Simulator", description: "Visualizes scheduling algorithms", tech: ["C", "RTOS", "Simulation"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Embedded Systems", difficulty: "Advanced", category: "RTOS" },
  { id: "ece-204", title: "Embedded Traffic Signal Controller", description: "Simulated adaptive signal system", tech: ["C", "Embedded", "Simulation"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Embedded Design", difficulty: "Intermediate", category: "Smart City" },
  { id: "ece-205", title: "Smart Home Controller (Virtual)", description: "Software-based home automation demo", tech: ["Python", "IoT", "Embedded"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "IoT & Embedded", difficulty: "Intermediate", category: "Smart Home" },
  { id: "ece-206", title: "Embedded Weather Station Emulator", description: "Simulated sensors + dashboard", tech: ["Python", "IoT", "Sensors"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "Embedded IoT", difficulty: "Intermediate", category: "IoT" },
  { id: "ece-207", title: "ARM Cortex Simulation Toolkit", description: "Shows ARM instruction execution", tech: ["C", "ARM", "Assembly"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Microcontrollers", difficulty: "Advanced", category: "Microcontrollers" },
  { id: "ece-208", title: "Smart Agriculture System (Virtual Sensors)", description: "Soil + temp control via UI", tech: ["Python", "IoT", "Agriculture"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Embedded IoT", difficulty: "Advanced", category: "Agriculture" },
  { id: "ece-209", title: "AI-Based Obstacle Detection System", description: "Vision model detects obstacles", tech: ["Python", "Computer Vision", "AI"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Robotics & AI", difficulty: "Advanced", category: "Robotics" },
  { id: "ece-210", title: "Embedded Smart Power Controller", description: "Manages virtual load profiles", tech: ["C", "Power Electronics", "Embedded"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "Power Electronics", difficulty: "Advanced", category: "Power" },
  { id: "ece-211", title: "Virtual Elevator Control System", description: "Logic simulation with GUI", tech: ["C", "Embedded", "GUI"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Embedded C", difficulty: "Intermediate", category: "Control Systems" },
  { id: "ece-212", title: "IoT-Enabled Smart Lighting Emulator", description: "Room automation simulation", tech: ["Python", "IoT", "Lighting"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "IoT & Embedded", difficulty: "Intermediate", category: "Smart Home" },
  { id: "ece-213", title: "Embedded Robotic Arm Controller", description: "GUI-based robotic arm movement", tech: ["C", "Robotics", "GUI"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Robotics & Control", difficulty: "Advanced", category: "Robotics" },
  { id: "ece-214", title: "Embedded Voice Recognition Access System", description: "Simulated voice authentication", tech: ["Python", "Speech Recognition", "Embedded"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Embedded AI", difficulty: "Advanced", category: "Security" },
  { id: "ece-215", title: "Energy-Efficient Task Scheduling (RTOS)", description: "AI-assisted energy optimization", tech: ["C", "RTOS", "AI"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "RTOS & AI", difficulty: "Advanced", category: "RTOS" },
  { id: "ece-216", title: "Virtual Drone Flight Controller", description: "Simulated autopilot control", tech: ["Python", "Simulation", "AI"], duration: "4-5 weeks", price: 3600, branch: "ECE", specialization: "Embedded Systems & AI", difficulty: "Advanced", category: "Drones" },
  { id: "ece-217", title: "Smart Grid Node Controller (Virtual)", description: "Virtual grid node simulation", tech: ["Python", "Power Systems", "Embedded"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems & Embedded", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-218", title: "Smart Car Embedded System Simulator", description: "Vehicle status + sensor emulation", tech: ["Python", "IoT", "Automotive"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Embedded IoT", difficulty: "Advanced", category: "Automotive" },
  { id: "ece-219", title: "Real-Time Embedded Data Logger", description: "Logs and visualizes data virtually", tech: ["C", "Data Logging", "Embedded"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Embedded C", difficulty: "Intermediate", category: "Data Logging" },
  { id: "ece-220", title: "Virtual ARM 7 Project Builder", description: "Build & run assembly logic", tech: ["C", "ARM", "Assembly"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "Microcontrollers", difficulty: "Intermediate", category: "Microcontrollers" },
  { id: "ece-221", title: "AI-Enhanced Embedded Scheduler", description: "Learns optimal task order", tech: ["C", "AI", "RTOS"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "AI & RTOS", difficulty: "Advanced", category: "AI" },
  { id: "ece-222", title: "Smart Fire Detection Embedded Model", description: "Sensor alert simulation", tech: ["Python", "IoT", "Safety"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "Embedded IoT", difficulty: "Intermediate", category: "Safety" },
  { id: "ece-223", title: "Bluetooth-Based Device Controller (Sim)", description: "PC-based control emulator", tech: ["Python", "Bluetooth", "Wireless"], duration: "2-3 weeks", price: 1800, branch: "ECE", specialization: "Wireless & Embedded", difficulty: "Intermediate", category: "Wireless" },
  { id: "ece-224", title: "Embedded Temperature Control System", description: "PID-based control simulation", tech: ["C", "Control Systems", "PID"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Control Systems", difficulty: "Intermediate", category: "Control Systems" },
  { id: "ece-225", title: "Smart Waste Bin Controller (Virtual)", description: "Automatic alert system simulation", tech: ["Python", "IoT", "Smart City"], duration: "2-3 weeks", price: 2100, branch: "ECE", specialization: "IoT & Embedded", difficulty: "Intermediate", category: "Smart City" },
  { id: "ece-226", title: "Embedded Fuel Monitoring System", description: "Tracks consumption virtually", tech: ["C", "Automotive", "Embedded"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Automotive Electronics", difficulty: "Advanced", category: "Automotive" },
  { id: "ece-227", title: "Smart Power Factor Controller", description: "Compensates virtually using algorithm", tech: ["C", "Power Electronics", "Embedded"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Electronics", difficulty: "Advanced", category: "Power" },
  { id: "ece-228", title: "Embedded Railway Gate Controller", description: "Automates gates virtually", tech: ["C", "Control Systems", "Embedded"], duration: "2-3 weeks", price: 2200, branch: "ECE", specialization: "Control Systems", difficulty: "Intermediate", category: "Railway" },
  { id: "ece-229", title: "Virtual ARM C Compiler Project", description: "Interactive compile/run demo", tech: ["C", "ARM", "Tools"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Embedded Tools", difficulty: "Intermediate", category: "Tools" },
  { id: "ece-230", title: "IoT + Embedded Water Quality Monitor", description: "Virtual turbidity/pH control", tech: ["Python", "IoT", "Sensors"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "IoT & Embedded", difficulty: "Advanced", category: "Water Quality" },
  { id: "ece-231", title: "Embedded Health Monitoring System", description: "Tracks HR/BP simulated data", tech: ["Python", "Biomedical", "IoT"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Biomedical IoT", difficulty: "Advanced", category: "Healthcare" },
  { id: "ece-232", title: "Embedded Car Black Box Simulation", description: "Stores event data virtually", tech: ["C", "Automotive", "Data Logging"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Automotive", difficulty: "Advanced", category: "Automotive" },
  { id: "ece-233", title: "Virtual PWM Controller Dashboard", description: "Generates PWM waveforms", tech: ["Python", "Power Electronics", "PWM"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "Power Electronics", difficulty: "Advanced", category: "Power Electronics" },
  { id: "ece-234", title: "AI-Based Gesture Recognition Controller", description: "Simulated hand gesture detection", tech: ["Python", "Computer Vision", "AI"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "AI & Embedded", difficulty: "Advanced", category: "AI" },
  { id: "ece-235", title: "Smart Load Balancer (Embedded Logic)", description: "Dynamic load shift simulation", tech: ["C", "Power Systems", "Embedded"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Systems" },
  { id: "ece-236", title: "Embedded CAN-Bus Simulation", description: "Simulates CAN bus communication", tech: ["C", "Automotive", "CAN"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Automotive", difficulty: "Advanced", category: "Automotive" },
  { id: "ece-237", title: "Virtual Traffic Flow Embedded System", description: "Road signal optimization", tech: ["C", "Embedded", "Traffic"], duration: "2-3 weeks", price: 2100, branch: "ECE", specialization: "Embedded C", difficulty: "Intermediate", category: "Smart City" },
  { id: "ece-238", title: "Embedded Smart Lock System", description: "Keypad authentication emulator", tech: ["C", "Security", "Embedded"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Security & Embedded", difficulty: "Intermediate", category: "Security" },
  { id: "ece-239", title: "AI-Based Smart Car Parking", description: "Detects free spaces virtually", tech: ["Python", "Computer Vision", "AI"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Embedded AI", difficulty: "Advanced", category: "Smart City" },
  { id: "ece-240", title: "Smart Classroom Embedded Automation", description: "Simulated classroom management", tech: ["Python", "IoT", "Automation"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "IoT & Automation", difficulty: "Advanced", category: "Education" },
  { id: "ece-241", title: "Embedded Drone Navigation AI", description: "Learns navigation path", tech: ["Python", "AI", "Robotics"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Robotics & AI", difficulty: "Advanced", category: "Drones" },
  { id: "ece-242", title: "Virtual Embedded Lab (Microcontrollers)", description: "Runs MCU code virtually", tech: ["C", "Simulation", "Tools"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Tools & Simulation", difficulty: "Advanced", category: "Education" },
  { id: "ece-243", title: "Embedded AI Image Classifier", description: "Simulates edge inference", tech: ["Python", "Deep Learning", "Embedded"], duration: "4-5 weeks", price: 3600, branch: "ECE", specialization: "Vision AI & Embedded", difficulty: "Advanced", category: "AI" },
  { id: "ece-244", title: "Smart Grid Embedded Fault Detector", description: "Locates grid issues virtually", tech: ["C", "Power Systems", "AI"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-245", title: "Embedded Smart Charger", description: "Auto cut-off logic emulator", tech: ["C", "Power Electronics", "Embedded"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Power Electronics", difficulty: "Intermediate", category: "Power Electronics" },
  { id: "ece-246", title: "IoT Virtual Industrial Automation", description: "SCADA-like visualization", tech: ["React", "Python", "Industry 4.0"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Industry 4.0 & IoT", difficulty: "Advanced", category: "Industry 4.0" },
  { id: "ece-247", title: "Smart Energy Meter Simulation", description: "Calculates virtual billing", tech: ["Python", "IoT", "Embedded"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "Embedded IoT", difficulty: "Intermediate", category: "Metering" },
  { id: "ece-248", title: "Wireless Sensor Network Emulator", description: "Visualizes node communication", tech: ["Python", "Networking", "Embedded"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Embedded Networking", difficulty: "Advanced", category: "Networking" },
  { id: "ece-249", title: "Embedded Robotics Simulator", description: "Multi-bot control platform", tech: ["Python", "Robotics", "AI"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Robotics & AI", difficulty: "Advanced", category: "Robotics" },
  { id: "ece-250", title: "Smart City Embedded Control Hub", description: "Integrates energy + traffic + safety", tech: ["Python", "IoT", "Smart City"], duration: "4-5 weeks", price: 3800, branch: "ECE", specialization: "IoT & Embedded", difficulty: "Advanced", category: "Smart City" },
  { id: "ece-251", title: "AI-Enabled Health Embedded Monitor", description: "ML-based abnormality detection", tech: ["Python", "ML", "Biomedical"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "AI & Biomedical", difficulty: "Advanced", category: "Healthcare" },
  { id: "ece-252", title: "Embedded Vehicle Collision Detector", description: "Predicts collision virtually", tech: ["Python", "AI", "Automotive"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Automotive AI", difficulty: "Advanced", category: "Automotive" },
  { id: "ece-253", title: "Virtual Microcontroller Trainer", description: "Interactive MCU learning GUI", tech: ["Python", "Education", "Tools"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Education Tools", difficulty: "Intermediate", category: "Education" },
  { id: "ece-254", title: "Real-Time Task Switching Analyzer", description: "Visual task execution viewer", tech: ["C", "RTOS", "Analysis"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "RTOS Tools", difficulty: "Advanced", category: "RTOS" },
  { id: "ece-255", title: "Embedded Home Security System", description: "Simulated motion alert UI", tech: ["Python", "Security", "IoT"], duration: "2-3 weeks", price: 2100, branch: "ECE", specialization: "Security & IoT", difficulty: "Intermediate", category: "Security" },
  { id: "ece-256", title: "IoT-Based Smart Farming Controller", description: "Virtual environment automation", tech: ["Python", "IoT", "Agriculture"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "IoT & Agritech", difficulty: "Advanced", category: "Agriculture" },
  { id: "ece-257", title: "AI-Based Robotic Vacuum Simulation", description: "Maps area & optimizes path", tech: ["Python", "Robotics", "AI"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Robotics & AI", difficulty: "Advanced", category: "Robotics" },
  { id: "ece-258", title: "Embedded PID Controller Visualizer", description: "PID response animation", tech: ["MATLAB", "Python", "Control"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "Control Systems", difficulty: "Advanced", category: "Control Systems" },
  { id: "ece-259", title: "Smart Solar Tracker (Virtual)", description: "Two-axis tracking simulation", tech: ["Python", "Renewable", "Simulation"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Solar" },
  { id: "ece-260", title: "Embedded Voice-Activated Wheelchair", description: "Virtual control through voice", tech: ["Python", "Speech Recognition", "AI"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Assistive Tech & AI", difficulty: "Advanced", category: "Assistive Tech" },
  { id: "ece-261", title: "IoT-Smart Water Distribution", description: "Balances pressure & flow", tech: ["Python", "IoT", "Water Systems"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "IoT & Embedded", difficulty: "Advanced", category: "Water Management" },
  { id: "ece-262", title: "AI-Driven Embedded Face Recognition", description: "Virtual authentication panel", tech: ["Python", "Computer Vision", "AI"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Vision AI & Embedded", difficulty: "Advanced", category: "Security" },
  { id: "ece-263", title: "Smart Railway Accident Prevention", description: "Train spacing logic simulator", tech: ["C", "Embedded", "Railway"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Embedded Control", difficulty: "Advanced", category: "Railway" },
  { id: "ece-264", title: "Embedded Smart Irrigation System", description: "Soil data–based automation", tech: ["Python", "IoT", "Agriculture"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "IoT & Agriculture", difficulty: "Intermediate", category: "Agriculture" },
  { id: "ece-265", title: "Virtual Smart Vehicle Dashboard", description: "Displays simulated telemetry", tech: ["React", "Python", "Automotive"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Embedded Systems", difficulty: "Intermediate", category: "Automotive" },
  { id: "ece-266", title: "AI Edge Analytics on Microcontrollers", description: "Lightweight inference emulator", tech: ["Python", "AI", "Embedded"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "AI Embedded", difficulty: "Advanced", category: "AI" },
  { id: "ece-267", title: "Embedded Smart Grid Load Analyzer", description: "Analyzes consumption patterns", tech: ["Python", "Power Systems", "Embedded"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Power Systems & Embedded", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-268", title: "Virtual Smart Factory Controller", description: "Integrates multiple embedded subsystems", tech: ["Python", "Industry 4.0", "IoT"], duration: "4-5 weeks", price: 3600, branch: "ECE", specialization: "Industry 4.0", difficulty: "Advanced", category: "Industry 4.0" },
  { id: "ece-269", title: "Real-Time Virtual Power Controller", description: "Controls grid simulation", tech: ["C", "Power Electronics", "Real-Time"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "Power Electronics", difficulty: "Advanced", category: "Power" },
  { id: "ece-270", title: "Embedded IoT Flood Alert System", description: "Predicts flood risk virtually", tech: ["Python", "IoT", "Safety"], duration: "2-3 weeks", price: 2000, branch: "ECE", specialization: "Safety & IoT", difficulty: "Intermediate", category: "Safety" },
  { id: "ece-271", title: "Embedded Smart Hospital System", description: "Monitors patient data", tech: ["Python", "IoT", "Healthcare"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "IoT & Healthcare", difficulty: "Advanced", category: "Healthcare" },
  { id: "ece-272", title: "Virtual Smart Elevator Group Control", description: "Multi-elevator optimization", tech: ["C", "Embedded", "Optimization"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Embedded Systems", difficulty: "Advanced", category: "Building Systems" },
  { id: "ece-273", title: "AI Power Consumption Predictor", description: "Learns from device patterns", tech: ["Python", "ML", "Embedded"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "Embedded AI", difficulty: "Advanced", category: "Energy" },
  { id: "ece-274", title: "Embedded Battery Management System", description: "Simulates charge-discharge logic", tech: ["C", "Power Electronics", "Embedded"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "Power Electronics", difficulty: "Advanced", category: "Battery" },
  { id: "ece-275", title: "IoT Smart Traffic Management", description: "Dynamic route selection", tech: ["Python", "IoT", "Smart City"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "IoT & Embedded", difficulty: "Advanced", category: "Smart City" },
  { id: "ece-276", title: "Virtual Sensor Fusion System", description: "Combines sensor data streams", tech: ["Python", "Sensor Fusion", "AI"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Embedded AI", difficulty: "Advanced", category: "Sensors" },
  { id: "ece-277", title: "Real-Time UART Simulator", description: "Serial comms visualization", tech: ["C", "Communication", "Embedded"], duration: "2-3 weeks", price: 2300, branch: "ECE", specialization: "Communication Embedded", difficulty: "Intermediate", category: "Communication" },
  { id: "ece-278", title: "AI-Controlled HVAC Simulation", description: "Learns comfort levels", tech: ["Python", "AI", "HVAC"], duration: "3-4 weeks", price: 3300, branch: "ECE", specialization: "Embedded AI", difficulty: "Advanced", category: "HVAC" },
  { id: "ece-279", title: "Virtual ARM Interrupt Handler", description: "Demonstrates ISR execution", tech: ["C", "ARM", "Embedded"], duration: "2-3 weeks", price: 2400, branch: "ECE", specialization: "Embedded C", difficulty: "Intermediate", category: "Microcontrollers" },
  { id: "ece-280", title: "Embedded Power Line Monitor", description: "Real-time data visualization", tech: ["Python", "Power Systems", "Monitoring"], duration: "3-4 weeks", price: 2900, branch: "ECE", specialization: "Power Systems", difficulty: "Advanced", category: "Monitoring" },
  { id: "ece-281", title: "IoT Smart Campus Controller", description: "Integrates labs, lights, security", tech: ["Python", "IoT", "Smart Campus"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "IoT & Embedded", difficulty: "Advanced", category: "Smart Campus" },
  { id: "ece-282", title: "Edge-AI Embedded Camera System", description: "Runs recognition locally", tech: ["Python", "Computer Vision", "Edge AI"], duration: "4-5 weeks", price: 3700, branch: "ECE", specialization: "Vision AI & Embedded", difficulty: "Advanced", category: "Computer Vision" },
  { id: "ece-283", title: "Virtual DSP Processor Emulator", description: "Implements digital filter logic", tech: ["MATLAB", "Python", "DSP"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Signal Processing", difficulty: "Advanced", category: "DSP" },
  { id: "ece-284", title: "Smart Motor Speed Control (Virtual)", description: "Closed-loop speed simulation", tech: ["C", "Power Electronics", "Control"], duration: "3-4 weeks", price: 2700, branch: "ECE", specialization: "Power Electronics", difficulty: "Advanced", category: "Motors" },
  { id: "ece-285", title: "AI-Powered Embedded Scheduler", description: "Optimizes execution time", tech: ["C", "AI", "RTOS"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "AI & RTOS", difficulty: "Advanced", category: "RTOS" },
  { id: "ece-286", title: "IoT Energy Harvesting Monitor", description: "Tracks harvested power data", tech: ["Python", "IoT", "Renewable"], duration: "3-4 weeks", price: 3000, branch: "ECE", specialization: "IoT & Renewable", difficulty: "Advanced", category: "Energy" },
  { id: "ece-287", title: "Virtual Sensor Calibration Suite", description: "Adjusts sensor accuracy virtually", tech: ["Python", "Sensors", "Calibration"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "Embedded Tools", difficulty: "Advanced", category: "Tools" },
  { id: "ece-288", title: "Embedded SCADA + IoT Dashboard", description: "Integrates SCADA & IoT UI", tech: ["React", "Python", "SCADA"], duration: "4-5 weeks", price: 3600, branch: "ECE", specialization: "Industry 4.0", difficulty: "Advanced", category: "SCADA" },
  { id: "ece-289", title: "Smart AI Drone Traffic Manager", description: "Allocates routes autonomously", tech: ["Python", "AI", "Drones"], duration: "4-5 weeks", price: 3800, branch: "ECE", specialization: "AI & Embedded", difficulty: "Advanced", category: "Drones" },
  { id: "ece-290", title: "Embedded Renewable Microgrid", description: "Controls multi-source grid", tech: ["Python", "Power Systems", "AI"], duration: "3-4 weeks", price: 3400, branch: "ECE", specialization: "Power Systems & AI", difficulty: "Advanced", category: "Microgrid" },
  { id: "ece-291", title: "Real-Time Edge AI Device", description: "Runs ML inference locally", tech: ["Python", "ML", "Edge Computing"], duration: "4-5 weeks", price: 3700, branch: "ECE", specialization: "Embedded AI", difficulty: "Advanced", category: "Edge AI" },
  { id: "ece-292", title: "Smart Grid Voltage Controller", description: "Balances grid stability", tech: ["C", "Power Systems", "Embedded"], duration: "3-4 weeks", price: 3100, branch: "ECE", specialization: "Embedded Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-293", title: "Embedded Health Data Encryption", description: "Encrypts data transfer", tech: ["C", "Security", "Encryption"], duration: "3-4 weeks", price: 2800, branch: "ECE", specialization: "Security & IoT", difficulty: "Advanced", category: "Security" },
  { id: "ece-294", title: "Virtual DC Motor Emulator", description: "Simulates motor control logic", tech: ["Python", "Motors", "Simulation"], duration: "2-3 weeks", price: 1900, branch: "ECE", specialization: "Embedded Systems", difficulty: "Intermediate", category: "Motors" },
  { id: "ece-295", title: "Embedded Fault Detection in Grid", description: "Identifies line issues", tech: ["Python", "AI", "Power Systems"], duration: "3-4 weeks", price: 3200, branch: "ECE", specialization: "Power Systems AI", difficulty: "Advanced", category: "Smart Grid" },
  { id: "ece-296", title: "IoT Air Quality Monitoring System", description: "Simulated environment sensors", tech: ["Python", "IoT", "Environmental"], duration: "2-3 weeks", price: 2500, branch: "ECE", specialization: "IoT & Embedded", difficulty: "Intermediate", category: "Environmental" },
  { id: "ece-297", title: "AI-Enhanced Embedded Vision System", description: "Object detection demo", tech: ["Python", "Computer Vision", "AI"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Vision AI & Embedded", difficulty: "Advanced", category: "Computer Vision" },
  { id: "ece-298", title: "Virtual Embedded Data Bus Analyzer", description: "Shows SPI/I2C/TCP comms", tech: ["Python", "Communication", "Analysis"], duration: "3-4 weeks", price: 2600, branch: "ECE", specialization: "Embedded Tools", difficulty: "Advanced", category: "Tools" },
  { id: "ece-299", title: "Smart Factory Predictive System", description: "Predicts faults before downtime", tech: ["Python", "ML", "Industry 4.0"], duration: "4-5 weeks", price: 3700, branch: "ECE", specialization: "Industry AI & IoT", difficulty: "Advanced", category: "Predictive Maintenance" },
  { id: "ece-300", title: "Complete Embedded IoT Ecosystem Simulator", description: "Unified platform for all use-cases", tech: ["Python", "IoT", "Cloud", "Embedded"], duration: "5-6 weeks", price: 4000, branch: "ECE", specialization: "Embedded IoT & Cloud", difficulty: "Advanced", category: "Comprehensive" },

  // MECHANICAL PROJECTS
  { id: "mech-001", title: "Pneumatic Sheet Cutter", description: "Pneumatic automation cutting tool", tech: ["Pneumatics", "Compressor", "Valve"], duration: "3-4 weeks", price: 3500, branch: "Mechanical", specialization: "Automation", difficulty: "Intermediate", category: "Manufacturing" },
  { id: "mech-002", title: "Smart Braking System", description: "Safety enhancement for vehicles", tech: ["Hydraulics", "Sensors", "Microcontroller"], duration: "4-5 weeks", price: 3900, branch: "Mechanical", specialization: "Automotive", difficulty: "Advanced", category: "Safety" },
  { id: "mech-003", title: "Pedal Operated Water Pump", description: "Manual water pumping system", tech: ["Mechanical Parts", "Pump", "Pedal"], duration: "2-3 weeks", price: 2400, branch: "Mechanical", specialization: "Fluid Mechanics", difficulty: "Basic", category: "Rural Tech" },
  { id: "mech-004", title: "Wind Powered Vehicle", description: "Renewable energy demonstration vehicle", tech: ["Wind Turbine", "Gearbox", "Chassis"], duration: "4-5 weeks", price: 3800, branch: "Mechanical", specialization: "Renewable Energy", difficulty: "Advanced", category: "Green Tech" },
  { id: "mech-005", title: "Solar Air Cooler", description: "Energy-efficient cooling design", tech: ["Solar Panel", "Fan", "Cooling Pads"], duration: "3-4 weeks", price: 3000, branch: "Mechanical", specialization: "Thermal Engineering", difficulty: "Intermediate", category: "HVAC" },
  { id: "mech-006", title: "Waste Plastic Recycling", description: "Mini mechanism for plastic recycling", tech: ["Heating Elements", "Mold", "Shredder"], duration: "4-5 weeks", price: 3800, branch: "Mechanical", specialization: "Manufacturing", difficulty: "Advanced", category: "Recycling" },
  { id: "mech-007", title: "Hydraulic Jack", description: "Small scale lifting mechanism", tech: ["Hydraulic Cylinder", "Pump", "Valve"], duration: "2-3 weeks", price: 2500, branch: "Mechanical", specialization: "Fluid Mechanics", difficulty: "Basic", category: "Tools" },
  { id: "mech-008", title: "Self-Charging Bicycle", description: "Dynamo-based phone charging system", tech: ["Dynamo", "Regulator", "Battery"], duration: "3-4 weeks", price: 3700, branch: "Mechanical", specialization: "Design", difficulty: "Advanced", category: "Innovation" },
  { id: "mech-009", title: "Automatic Car Wiper", description: "Rain-sensor based wiper integration", tech: ["Rain Sensor", "Motor", "Arduino"], duration: "2-3 weeks", price: 2900, branch: "Mechanical", specialization: "Automotive", difficulty: "Intermediate", category: "Automation" },
  { id: "mech-010", title: "Water Level Indicator", description: "Simple sensor-based level detection", tech: ["Sensor", "LED", "Buzzer"], duration: "1-2 weeks", price: 2200, branch: "Mechanical", specialization: "Basic Projects", difficulty: "Basic", category: "Monitoring" },
  { id: "mech-011", title: "Automatic Pneumatic Bumper", description: "Safety bumper for vehicles", tech: ["Pneumatic Cylinder", "Sensor", "Valve"], duration: "3-4 weeks", price: 3600, branch: "Mechanical", specialization: "Automotive", difficulty: "Advanced", category: "Safety" },
  { id: "mech-012", title: "Robotic Arm Gripper", description: "Servo motor controlled robotic arm", tech: ["Servo Motors", "Arduino", "3D Printed Parts"], duration: "3-4 weeks", price: 3800, branch: "Mechanical", specialization: "Robotics", difficulty: "Advanced", category: "Automation" },
  { id: "mech-013", title: "Stirling Engine Model", description: "Heat engine demonstration model", tech: ["Metal Parts", "Displacer", "Flywheel"], duration: "3-4 weeks", price: 3200, branch: "Mechanical", specialization: "Thermodynamics", difficulty: "Intermediate", category: "Engines" },
  { id: "mech-014", title: "Electromagnetic Braking", description: "Eddy current based braking system", tech: ["Electromagnet", "Disk", "Controller"], duration: "3-4 weeks", price: 3700, branch: "Mechanical", specialization: "Automotive", difficulty: "Advanced", category: "Braking" },
  { id: "mech-015", title: "Automatic Gear Transmission", description: "Gearbox automation system", tech: ["Gears", "Servos", "Sensors"], duration: "4-5 weeks", price: 3900, branch: "Mechanical", specialization: "Automotive", difficulty: "Advanced", category: "Transmission" },

  // CIVIL ENGINEERING PROJECTS
  { id: "civil-001", title: "Smart Drainage System", description: "IoT water level monitoring for drains", tech: ["Arduino", "Water Sensor", "IoT"], duration: "3-4 weeks", price: 3800, branch: "Civil", specialization: "Smart Infrastructure", difficulty: "Advanced", category: "Urban Planning" },
  { id: "civil-002", title: "Green Concrete Mix", description: "Cost-effective eco-friendly concrete", tech: ["Materials Testing", "Compression Test"], duration: "3-4 weeks", price: 3200, branch: "Civil", specialization: "Materials", difficulty: "Intermediate", category: "Sustainable" },
  { id: "civil-003", title: "Smart Traffic Light", description: "Infrared sensor based traffic control", tech: ["Arduino", "IR Sensors", "Traffic Lights"], duration: "2-3 weeks", price: 3300, branch: "Civil", specialization: "Transportation", difficulty: "Intermediate", category: "Traffic" },
  { id: "civil-004", title: "Rainwater Harvesting Model", description: "Automatic water reuse system", tech: ["Pump", "Filtration", "Storage Tank"], duration: "2-3 weeks", price: 3100, branch: "Civil", specialization: "Environmental", difficulty: "Intermediate", category: "Water" },
  { id: "civil-005", title: "Smart Parking Layout", description: "IoT + Ultrasonic sensor parking system", tech: ["Arduino", "Ultrasonic", "App"], duration: "4-5 weeks", price: 3900, branch: "Civil", specialization: "Smart Infrastructure", difficulty: "Advanced", category: "Urban Planning" },
  { id: "civil-006", title: "Crack Detection in Walls", description: "Sensor-based structural monitoring", tech: ["Strain Gauge", "Arduino", "Alert System"], duration: "3-4 weeks", price: 3800, branch: "Civil", specialization: "Structural", difficulty: "Advanced", category: "Safety" },
  { id: "civil-007", title: "Structural Load Monitor", description: "Real-time strain sensing system", tech: ["Load Cell", "Arduino", "Data Logger"], duration: "4-5 weeks", price: 3900, branch: "Civil", specialization: "Structural", difficulty: "Advanced", category: "Monitoring" },
  { id: "civil-008", title: "Recycled Aggregate Concrete", description: "Sustainable construction material", tech: ["Recycled Materials", "Testing"], duration: "3-4 weeks", price: 3200, branch: "Civil", specialization: "Materials", difficulty: "Intermediate", category: "Recycling" },
  { id: "civil-009", title: "Soil Stabilization", description: "Eco-friendly soil additives research", tech: ["Soil Testing", "Additives"], duration: "2-3 weeks", price: 2600, branch: "Civil", specialization: "Geotechnical", difficulty: "Basic", category: "Soil" },
  { id: "civil-010", title: "Smart Building Framework", description: "Energy optimization for buildings", tech: ["Sensors", "Arduino", "Automation"], duration: "4-5 weeks", price: 3900, branch: "Civil", specialization: "Smart Infrastructure", difficulty: "Advanced", category: "Energy" },
  { id: "civil-011", title: "Bridge Health Monitoring", description: "Vibration sensor based bridge monitoring", tech: ["Vibration Sensor", "IoT", "Analytics"], duration: "4-5 weeks", price: 3800, branch: "Civil", specialization: "Structural", difficulty: "Advanced", category: "Infrastructure" },
  { id: "civil-012", title: "Earthquake Resistant Design", description: "Seismic analysis and design model", tech: ["ETABS", "SAP2000", "Modeling"], duration: "4-5 weeks", price: 3700, branch: "Civil", specialization: "Structural", difficulty: "Advanced", category: "Design" },
  { id: "civil-013", title: "Waste Water Treatment", description: "Filtration system design model", tech: ["Filtration", "Treatment Process"], duration: "2-3 weeks", price: 3100, branch: "Civil", specialization: "Environmental", difficulty: "Intermediate", category: "Water" },
  { id: "civil-014", title: "Solar Road Pavement", description: "Energy generating road surface", tech: ["Solar Cells", "Pavement Design"], duration: "4-5 weeks", price: 3900, branch: "Civil", specialization: "Transportation", difficulty: "Advanced", category: "Innovation" },
  { id: "civil-015", title: "Smart Construction Site", description: "IoT monitoring for construction progress", tech: ["IoT", "Sensors", "Dashboard"], duration: "3-4 weeks", price: 3800, branch: "Civil", specialization: "Construction Management", difficulty: "Advanced", category: "Monitoring" },

  // IoT / ROBOTICS / EMBEDDED SYSTEMS
  { id: "iot-001", title: "Smart Dustbin", description: "Ultrasonic + Arduino waste management", tech: ["Arduino", "Ultrasonic", "Servo"], duration: "2-3 weeks", price: 2900, branch: "IT", specialization: "IoT", difficulty: "Intermediate", category: "Smart City" },
  { id: "iot-002", title: "Smart Door Lock", description: "Fingerprint + NodeMCU access control", tech: ["NodeMCU", "Fingerprint Sensor", "Relay"], duration: "3-4 weeks", price: 3800, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Security" },
  { id: "iot-003", title: "Health Monitor", description: "Pulse + Temperature + IoT tracking", tech: ["ESP32", "Pulse Sensor", "Temperature Sensor", "App"], duration: "3-4 weeks", price: 3900, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Healthcare" },
  { id: "iot-004", title: "Smart Agriculture", description: "Soil moisture + IoT display system", tech: ["Arduino", "Moisture Sensor", "ThingSpeak"], duration: "3-4 weeks", price: 3800, branch: "IT", specialization: "IoT", difficulty: "Advanced", category: "Agriculture" },
  { id: "iot-005", title: "IoT Weather Station", description: "Sensors + ThingSpeak cloud logging", tech: ["ESP8266", "DHT22", "BMP180", "ThingSpeak"], duration: "2-3 weeks", price: 3200, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Weather" },
  { id: "iot-006", title: "Fire Alert Robot", description: "Wireless navigation fire detector", tech: ["Arduino", "Fire Sensor", "Motor Driver", "RF"], duration: "4-5 weeks", price: 3900, branch: "ECE", specialization: "Robotics", difficulty: "Advanced", category: "Safety" },
  { id: "iot-007", title: "Line Follower Bot", description: "Infrared + motor driver robot", tech: ["Arduino", "IR Sensor", "Motor Driver"], duration: "1-2 weeks", price: 2600, branch: "ECE", specialization: "Robotics", difficulty: "Basic", category: "Basic Robotics" },
  { id: "iot-008", title: "Smart Helmet", description: "Accident detection + GPS tracking", tech: ["Arduino", "Accelerometer", "GPS", "GSM"], duration: "4-5 weeks", price: 3900, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Safety" },
  { id: "iot-009", title: "IoT Water Quality", description: "pH + TDS sensors monitoring", tech: ["Arduino", "pH Sensor", "TDS Sensor", "IoT"], duration: "3-4 weeks", price: 3800, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Water Quality" },
  { id: "iot-010", title: "Automatic Plant Watering", description: "Soil sensor + pump automation", tech: ["Arduino", "Soil Sensor", "Water Pump"], duration: "2-3 weeks", price: 3100, branch: "IT", specialization: "IoT", difficulty: "Intermediate", category: "Home Automation" },
  { id: "iot-011", title: "Obstacle Avoidance Robot", description: "Ultrasonic sensor based navigation", tech: ["Arduino", "Ultrasonic", "Motor Driver"], duration: "2-3 weeks", price: 2900, branch: "ECE", specialization: "Robotics", difficulty: "Intermediate", category: "Autonomous" },
  { id: "iot-012", title: "Smart Aquarium", description: "Temperature + pH + feeder automation", tech: ["Arduino", "Sensors", "Servo"], duration: "3-4 weeks", price: 3700, branch: "IT", specialization: "IoT", difficulty: "Advanced", category: "Aquatics" },
  { id: "iot-013", title: "Bluetooth Controlled Car", description: "HC-05 based remote control", tech: ["Arduino", "Bluetooth Module", "Motors"], duration: "1-2 weeks", price: 2500, branch: "ECE", specialization: "Embedded Systems", difficulty: "Basic", category: "Robotics" },
  { id: "iot-014", title: "Smart Street Light", description: "LDR + motion sensor lighting", tech: ["Arduino", "LDR", "PIR Sensor", "Relay"], duration: "2-3 weeks", price: 3000, branch: "IT", specialization: "IoT", difficulty: "Intermediate", category: "Smart City" },
  { id: "iot-015", title: "Industrial Automation", description: "PLC based conveyor control", tech: ["PLC", "HMI", "Sensors", "Ladder Logic"], duration: "4-5 weeks", price: 3900, branch: "ECE", specialization: "Automation", difficulty: "Advanced", category: "Industrial" },

  // MBA / MANAGEMENT / COMMERCE PROJECTS
  { id: "mba-001", title: "Customer Retention Study", description: "Business analytics report with insights", tech: ["Excel", "SPSS", "Tableau"], duration: "2-3 weeks", price: 3000, branch: "MBA", specialization: "Marketing", difficulty: "Intermediate", category: "Analytics" },
  { id: "mba-002", title: "Digital Marketing Plan", description: "Case study + implementation strategy", tech: ["Google Analytics", "SEO Tools"], duration: "2-3 weeks", price: 2800, branch: "MBA", specialization: "Digital Marketing", difficulty: "Intermediate", category: "Strategy" },
  { id: "mba-003", title: "E-Business Strategy", description: "Full business model development", tech: ["Business Model Canvas", "Analysis"], duration: "3-4 weeks", price: 3700, branch: "MBA", specialization: "E-Commerce", difficulty: "Advanced", category: "Strategy" },
  { id: "mba-004", title: "HR Analytics Dashboard", description: "Employee performance metrics analysis", tech: ["Excel", "Power BI", "HR Software"], duration: "3-4 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "HR" },
  { id: "mba-005", title: "Consumer Behaviour Study", description: "Survey + data visualization report", tech: ["Survey Tools", "SPSS", "Excel"], duration: "2-3 weeks", price: 2900, branch: "MBA", specialization: "Marketing", difficulty: "Intermediate", category: "Research" },
  { id: "mba-006", title: "Startup Feasibility Report", description: "Idea to launch analysis document", tech: ["Financial Modeling", "Market Research"], duration: "2-3 weeks", price: 3100, branch: "MBA", specialization: "Entrepreneurship", difficulty: "Intermediate", category: "Startup" },
  { id: "mba-007", title: "Supply Chain Optimization", description: "Case-based logistics analysis", tech: ["Supply Chain Software", "Analytics"], duration: "3-4 weeks", price: 3700, branch: "MBA", specialization: "Operations", difficulty: "Advanced", category: "Logistics" },
  { id: "mba-008", title: "Brand Awareness Report", description: "Marketing analytics and insights", tech: ["Survey Tools", "Analytics"], duration: "2-3 weeks", price: 2800, branch: "MBA", specialization: "Marketing", difficulty: "Intermediate", category: "Branding" },
  { id: "mba-009", title: "AI in Business Report", description: "Case research on AI adoption", tech: ["Research Methods", "Case Study"], duration: "3-4 weeks", price: 3600, branch: "MBA", specialization: "Business Analytics", difficulty: "Advanced", category: "Technology" },
  { id: "mba-010", title: "Online Sales Prediction", description: "Data-driven business forecasting", tech: ["Excel", "Power BI", "Predictive Analytics"], duration: "3-4 weeks", price: 3900, branch: "MBA", specialization: "Business Analytics", difficulty: "Advanced", category: "E-Commerce" },
  { id: "mba-011", title: "Financial Risk Analysis", description: "Investment portfolio assessment", tech: ["Excel", "Financial Software"], duration: "3-4 weeks", price: 3700, branch: "MBA", specialization: "Finance", difficulty: "Advanced", category: "Risk Management" },
  { id: "mba-012", title: "Social Media Marketing", description: "Campaign strategy and ROI analysis", tech: ["Social Media Tools", "Analytics"], duration: "2-3 weeks", price: 2900, branch: "MBA", specialization: "Digital Marketing", difficulty: "Intermediate", category: "Social Media" },
  { id: "mba-013", title: "Organizational Behavior", description: "Workplace culture assessment study", tech: ["Survey Tools", "SPSS"], duration: "2-3 weeks", price: 3000, branch: "MBA", specialization: "HR Management", difficulty: "Intermediate", category: "Organizational" },
  { id: "mba-014", title: "Market Research Report", description: "Industry analysis and trends", tech: ["Research Tools", "Data Analysis"], duration: "3-4 weeks", price: 3600, branch: "MBA", specialization: "Marketing", difficulty: "Advanced", category: "Market Research" },
  { id: "mba-015", title: "Business Intelligence", description: "Dashboard and analytics implementation", tech: ["Power BI", "Tableau", "SQL"], duration: "3-4 weeks", price: 3800, branch: "MBA", specialization: "Business Analytics", difficulty: "Advanced", category: "BI" },
    { id: "hr-001", title: "AI-Based Employee Attrition Prediction", description: "Machine learning model to predict employee turnover", tech: ["Python", "Power BI", "Excel"], duration: "3-4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Analytics" },

  { id: "hr-002", title: "HR Data Warehouse System", description: "Build a centralized HR analytics data mart", tech: ["SQL", "Power BI", "ETL"], duration: "3-4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "BI" },

  { id: "hr-003", title: "Competency Mapping Framework", description: "Develop competency models for job roles", tech: ["Excel", "HR Tools"], duration: "2-3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Strategy" },

  { id: "hr-004", title: "Performance Appraisal Automation System", description: "Digital performance review workflow", tech: ["Excel", "Automation Tools"], duration: "3 weeks", price: 3900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "HR Tech" },

  { id: "hr-005", title: "AI Chatbot for HR Support", description: "Chatbot to answer employee HR FAQs", tech: ["Python", "NLP"], duration: "3-4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Technology" },

  { id: "hr-006", title: "HR Predictive Analytics Dashboard", description: "Predict staffing, attendance & productivity", tech: ["Power BI", "SQL"], duration: "3 weeks", price: 4100, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Analytics" },

  { id: "hr-007", title: "Organizational Culture Analysis", description: "Framework to measure and map culture metrics", tech: ["Survey Tools", "SPSS"], duration: "3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Organizational" },

  { id: "hr-008", title: "AI-Based Resume Screening System", description: "Automated resume sorting using ML", tech: ["Python", "ML"], duration: "3-4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Recruitment" },

  { id: "hr-009", title: "Workforce Planning Optimization Model", description: "Model to forecast manpower requirements", tech: ["Excel", "Python"], duration: "3 weeks", price: 3900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Planning" },

  { id: "hr-010", title: "Employee Wellness Analytics", description: "Health, engagement & burnout risk dashboard", tech: ["Power BI", "SPSS"], duration: "2-3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Wellness" },

  { id: "hr-011", title: "Learning & Development ROI Model", description: "System to measure training ROI", tech: ["Excel", "HR LMS"], duration: "3 weeks", price: 3700, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "L&D" },

  { id: "hr-012", title: "Employee Engagement Index Study", description: "Design & measure engagement scoring model", tech: ["Survey Tools", "SPSS"], duration: "2-3 weeks", price: 3600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Engagement" },

  { id: "hr-013", title: "Remote Workforce Productivity Analysis", description: "Metrics-based productivity monitoring system", tech: ["Excel", "Power BI"], duration: "3 weeks", price: 4000, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Workforce" },

  { id: "hr-014", title: "Talent Acquisition Strategy Framework", description: "End-to-end hiring strategy model", tech: ["HRIS Tools", "Excel"], duration: "2-3 weeks", price: 3500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Recruitment" },

  { id: "hr-015", title: "Succession Planning Blueprint", description: "Leadership readiness assessment system", tech: ["Excel", "HR Suite"], duration: "2-3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Leadership" },

  { id: "hr-016", title: "Payroll Automation Simulation", description: "Payroll workflow automation model", tech: ["Excel VBA", "Automation Tools"], duration: "2 weeks", price: 3900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "HR Tech" },

  { id: "hr-017", title: "Diversity & Inclusion Metrics Dashboard", description: "Visualize diversity KPIs and gender ratios", tech: ["Power BI"], duration: "3 weeks", price: 4000, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "D&I" },

  { id: "hr-018", title: "HR Compliance Audit System", description: "Labor laws & compliance audit framework", tech: ["Excel", "HR Tools"], duration: "2-3 weeks", price: 3700, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Compliance" },

  { id: "hr-019", title: "Compensation Benchmarking Tool", description: "Analyze and benchmark salary structures", tech: ["Excel", "HR Analytics"], duration: "3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Compensation" },

  { id: "hr-020", title: "Hybrid Work Model Optimization", description: "Optimize WFH + office work strategy", tech: ["Excel", "Survey Tools"], duration: "2-3 weeks", price: 3600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Work Model" },
  { id: "hr-021", title: "AI-Based Employee Sentiment Analysis", description: "Sentiment analysis of employee feedback using NLP", tech: ["Python", "NLP"], duration: "3-4 weeks", price: 4400, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Analytics" },

  { id: "hr-022", title: "360° Feedback Evaluation System", description: "End-to-end 360-degree feedback model", tech: ["Excel", "Survey Tools"], duration: "2-3 weeks", price: 3700, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Performance" },

  { id: "hr-023", title: "Workforce Cost Optimization Framework", description: "HR cost reduction model with benchmarks", tech: ["Excel", "Power BI"], duration: "3 weeks", price: 4000, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Planning" },

  { id: "hr-024", title: "High-Potential Employee Identification Model", description: "Behavioral + performance metrics scoring system", tech: ["SPSS", "Analytics Tools"], duration: "3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Talent Management" },

  { id: "hr-025", title: "HRIS Implementation Study", description: "Evaluating and deploying HR information systems", tech: ["HRIS Software"], duration: "3-4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "HR Tech" },

  { id: "hr-026", title: "Employee Satisfaction Prediction Model", description: "Predict satisfaction scores using ML", tech: ["Python", "ML"], duration: "3-4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Engagement" },

  { id: "hr-027", title: "HR Budget Forecasting System", description: "Financial planning for HR operations", tech: ["Excel", "Forecasting Models"], duration: "2-3 weeks", price: 3600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Finance" },

  { id: "hr-028", title: "Leadership Scorecard Development", description: "Score measurement model for leadership traits", tech: ["Excel", "Survey Tools"], duration: "3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Leadership" },

  { id: "hr-029", title: "Employee Burnout Risk Prediction", description: "Burnout risk detection using analytics", tech: ["Power BI", "SPSS"], duration: "3-4 weeks", price: 4100, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Wellness" },

  { id: "hr-030", title: "HR Gamification Strategy", description: "Gamified system for HR engagement & learning", tech: ["Gamification Tools", "HR Platforms"], duration: "2-3 weeks", price: 3700, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Engagement" },

  { id: "hr-031", title: "Workplace Conflict Resolution Model", description: "Framework and tools to manage internal conflicts", tech: ["Survey Tools"], duration: "2-3 weeks", price: 3400, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Organizational" },

  { id: "hr-032", title: "Employee Lifecycle Management System", description: "Complete lifecycle from hiring to exit", tech: ["HRMS Tools"], duration: "3 weeks", price: 3900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "HR Processes" },

  { id: "hr-033", title: "Talent Retention Strategy Framework", description: "Retention strategy using analytics + surveys", tech: ["Excel", "Survey Tools"], duration: "2-3 weeks", price: 3600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Retention" },

  { id: "hr-034", title: "Workload Analysis & Resource Allocation", description: "Analytical model for workload balancing", tech: ["Excel", "Power BI"], duration: "3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Workforce" },

  { id: "hr-035", title: "Digital Onboarding Experience Design", description: "Automated onboarding workflow system", tech: ["HR Tools", "Automation"], duration: "3 weeks", price: 4000, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Onboarding" },

  { id: "hr-036", title: "Industrial Relations Audit Framework", description: "IR compliance, grievances & union mapping", tech: ["HR Tools"], duration: "2-3 weeks", price: 3700, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "IR" },

  { id: "hr-037", title: "AI Performance Evaluation Model", description: "AI scoring for employee appraisal system", tech: ["Python", "ML"], duration: "3-4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Performance" },

  { id: "hr-038", title: "Employee Grievance Redressal System", description: "Digital grievance management workflow", tech: ["HR Portals"], duration: "2-3 weeks", price: 3600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Compliance" },

  { id: "hr-039", title: "HR Service Delivery Optimization", description: "Optimize HR service turnaround time", tech: ["Power BI"], duration: "2-3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Operations" },

  { id: "hr-040", title: "AI-Based Attendance & Productivity Monitoring", description: "Face recognition + productivity analytics model", tech: ["Python", "Image Processing"], duration: "3-4 weeks", price: 4600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Technology" },
{ id: "hr-041", title: "Workplace Harassment Reporting System", description: "Anonymous reporting and issue resolution workflow", tech: ["Forms", "HRMS"], duration: "3-4 weeks", price: 4100, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Compliance" },

{ id: "hr-042", title: "Performance Management Automation", description: "Automated KPI and OKR scoring model", tech: ["Power BI", "Excel"], duration: "4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Performance" },

{ id: "hr-043", title: "Employee Skill Gap Analysis", description: "Competency vs job role skill gap analytics", tech: ["Excel", "Skill Matrix"], duration: "3-4 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Training" },

{ id: "hr-044", title: "ESG Workforce Sustainability Assessment", description: "Evaluation of HR role in sustainability", tech: ["Research Tools"], duration: "4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "ESG" },

{ id: "hr-045", title: "Absenteeism Pattern Prediction Model", description: "Predict employee absentee behaviours", tech: ["Excel", "Predictive Tools"], duration: "3 weeks", price: 3900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Workforce" },

{ id: "hr-046", title: "Diversity & Inclusion Index", description: "D&I scoring and benchmarks for workforce", tech: ["Survey Tools", "Power BI"], duration: "4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Diversity" },

{ id: "hr-047", title: "HR Digital Transformation Roadmap", description: "Full roadmap for HR tech upgrade", tech: ["HRMS", "Research Tools"], duration: "4 weeks", price: 4400, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Transformation" },

{ id: "hr-048", title: "Work-Life Balance Analytics", description: "Statistical analysis of stress, hours & output", tech: ["SPSS", "Survey Tools"], duration: "3-4 weeks", price: 4000, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Wellbeing" },

{ id: "hr-049", title: "Talent Pipeline Development Strategy", description: "Model for future-ready talent acquisition", tech: ["ATS Tools", "Excel"], duration: "3-4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Recruitment" },

{ id: "hr-050", title: "AI-generated Job Description Optimization", description: "Using AI to improve JD clarity & accuracy", tech: ["AI Tools", "HRMS"], duration: "3 weeks", price: 3900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Documentation" },

{ id: "hr-051", title: "Emotional Intelligence & Leadership Study", description: "Correlation of EI with leadership outcomes", tech: ["Survey Tools", "SPSS"], duration: "3-4 weeks", price: 4100, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Leadership" },

{ id: "hr-052", title: "Employee Motivation Drivers Analysis", description: "Identify top motivation factors using data", tech: ["Excel", "Survey Tools"], duration: "3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Motivation" },

{ id: "hr-053", title: "Hybrid Workforce Productivity Model", description: "Performance comparison: WFH vs Hybrid", tech: ["Power BI", "Survey Tools"], duration: "4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Hybrid Work" },

{ id: "hr-054", title: "Attrition Cost Estimation Model", description: "Calculate real cost of employee attrition", tech: ["Excel", "Analytics"], duration: "3 weeks", price: 3700, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "HR Finance" },

{ id: "hr-055", title: "Training ROI Calculation Framework", description: "Evaluate training effectiveness financially", tech: ["Excel", "Power BI"], duration: "3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Training" },

{ id: "hr-056", title: "Workplace Conflict Resolution Model", description: "Framework for conflict reduction & harmony", tech: ["Survey Tools", "Research Tools"], duration: "3-4 weeks", price: 3900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Behavioral" },

{ id: "hr-057", title: "Competency Mapping for Leadership Roles", description: "Mapping competencies required for leadership", tech: ["Excel", "HRMS"], duration: "4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Leadership" },

{ id: "hr-058", title: "HR Audit & Compliance Framework", description: "Designing audit checklist and compliance model", tech: ["HRMS", "Policy Tools"], duration: "3-4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Audit" },

{ id: "hr-059", title: "Employee Engagement Framework 4.0", description: "Advanced engagement strategy for modern workforce", tech: ["Survey Tools", "Power BI"], duration: "4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Engagement" },

{ id: "hr-060", title: "Gamified Recruitment System Design", description: "Game-based candidate evaluation strategy", tech: ["Gamification Tools", "ATS"], duration: "3-4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Recruitment" },

{ id: "hr-061", title: "AI Behavioral Interview Model", description: "AI-driven behavioural interview scoring", tech: ["AI Tools", "PAS"], duration: "4 weeks", price: 4600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "AI" },

{ id: "hr-062", title: "Employee Happiness Index", description: "Multi-factor happiness scoring system", tech: ["Survey Tools", "SPSS"], duration: "3-4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Wellbeing" },

{ id: "hr-063", title: "Ethical HR Practices Benchmark Study", description: "Analyze ethical HR norms across companies", tech: ["Research Tools"], duration: "3 weeks", price: 3800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Ethics" },

{ id: "hr-064", title: "AI-Driven Employee Orientation Model", description: "Smart onboarding using automation", tech: ["HRMS", "AI Tools"], duration: "3 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Onboarding" },

{ id: "hr-065", title: "Remote Team Collaboration Study", description: "Identify key success factors in remote teams", tech: ["Survey Tools"], duration: "3-4 weeks", price: 3900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Remote Work" },

{ id: "hr-066", title: "HR Budget Optimization Strategy", description: "Cost-saving strategies for HR operations", tech: ["Excel", "Financial Tools"], duration: "3 weeks", price: 4000, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Finance" },

{ id: "hr-067", title: "Organizational Restructuring Plan", description: "Restructure teams for better efficiency", tech: ["HR Analytics", "Org Charts"], duration: "4 weeks", price: 4700, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Strategy" },

{ id: "hr-068", title: "AI Bias Reduction in Hiring", description: "Strategies to minimize AI recruitment bias", tech: ["AI Tools", "Research"], duration: "3-4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "AI Ethics" },

{ id: "hr-069", title: "Future Skills 2030 Workforce Study", description: "Identify skills required for future jobs", tech: ["Research Tools"], duration: "4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Future Skills" },

{ id: "hr-070", title: "Psychometric Test Effectiveness Study", description: "Evaluate accuracy of psychometric assessments", tech: ["Assessment Tools", "SPSS"], duration: "3-4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Assessment" },


  // ADDITIONAL CSE/IT PROJECTS FROM COMPREHENSIVE LIST
  { id: "cse-101", title: "Smart Attendance System", description: "Face recognition using webcam + Raspberry Pi/PC for attendance tracking", tech: ["Python", "OpenCV", "Raspberry Pi"], duration: "3-4 weeks", price: 2000, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Computer Vision" },
  { id: "cse-102", title: "Chatbot with Context", description: "Transformer-based chatbot with domain-specific fine-tuning", tech: ["Python", "Transformers", "NLP"], duration: "3-4 weeks", price: 1000, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Chatbot" },
  { id: "cse-103", title: "Plagiarism Detector", description: "Multi-language code and text similarity detector", tech: ["Python", "NLP", "Similarity Detection"], duration: "2-3 weeks", price: 500, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Tools" },
  { id: "cse-104", title: "E-commerce Recommender", description: "Collaborative + Content-based product recommendation system", tech: ["Python", "Collaborative Filtering", "ML"], duration: "3-4 weeks", price: 300, branch: "CSE", specialization: "Data Science", difficulty: "Intermediate", category: "E-commerce" },
  { id: "cse-105", title: "Fake News Classifier", description: "NLP classifier with explainability via LIME/SHAP", tech: ["Python", "NLP", "LIME", "SHAP"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "NLP" },
  { id: "cse-106", title: "Smart Resume Parser & Ranker", description: "Parse resumes and rank candidates against job descriptions", tech: ["Python", "NLP", "PDF Parser"], duration: "3-4 weeks", price: 200, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "HR Tech" },
  { id: "cse-107", title: "Student Performance Predictor", description: "ML model to predict grades from student activity data", tech: ["Python", "ML", "Pandas"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "Data Science", difficulty: "Intermediate", category: "Education" },
  { id: "cse-108", title: "IoT-based Lab Equipment Monitor", description: "Sensors + microcontroller to track lab equipment usage", tech: ["Arduino", "IoT", "Sensors"], duration: "3-4 weeks", price: 1500, branch: "CSE", specialization: "IoT", difficulty: "Advanced", category: "Education" },
  { id: "cse-109", title: "Secure File Sharing App", description: "Client-side encryption for secure file uploads and sharing", tech: ["React", "Cryptography", "Node.js"], duration: "3-4 weeks", price: 400, branch: "CSE", specialization: "Cyber Security", difficulty: "Intermediate", category: "Security" },
  { id: "cse-110", title: "Real-time Object Detection App", description: "YOLO-lite based Android mobile object detection", tech: ["Android", "YOLO", "TensorFlow Lite"], duration: "4-5 weeks", price: 1200, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Mobile" },
  { id: "cse-111", title: "Inventory Management System", description: "Barcode/QR scanner with web dashboard for inventory", tech: ["React", "Node.js", "Barcode Scanner"], duration: "3-4 weeks", price: 800, branch: "CSE", specialization: "Web Development", difficulty: "Intermediate", category: "Business" },
  { id: "cse-112", title: "Parking Slot Detection", description: "Computer vision to detect free parking slots using edge camera", tech: ["Python", "OpenCV", "Edge Computing"], duration: "3-4 weeks", price: 1200, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Smart City" },
  { id: "cse-113", title: "Voice Controlled Home Assistant", description: "Offline keyword spotting with local command execution", tech: ["Python", "Speech Recognition", "Raspberry Pi"], duration: "3-4 weeks", price: 700, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "IoT" },
  { id: "cse-114", title: "Blockchain Certificate Verifier", description: "Issue and verify certificates on blockchain", tech: ["Blockchain", "Solidity", "Web3"], duration: "4-5 weeks", price: 800, branch: "CSE", specialization: "Blockchain", difficulty: "Advanced", category: "Blockchain" },
  { id: "cse-115", title: "Automated Essay Scoring", description: "NLP model to automatically grade essays", tech: ["Python", "NLP", "ML"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Education" },
  { id: "cse-116", title: "Adversarial Example Detector", description: "Detect noisy/adversarial inputs in images", tech: ["Python", "Deep Learning", "Security"], duration: "3-4 weeks", price: 400, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Security" },
  { id: "cse-117", title: "Emotion-aware Music Recommender", description: "Detect mood via webcam/voice and recommend music", tech: ["Python", "OpenCV", "ML"], duration: "3-4 weeks", price: 500, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Entertainment" },
  { id: "cse-118", title: "Microservices Demo App", description: "Deploy small microservices with Docker and CI/CD", tech: ["Docker", "Kubernetes", "CI/CD"], duration: "3-4 weeks", price: 300, branch: "CSE", specialization: "Cloud", difficulty: "Intermediate", category: "DevOps" },
  { id: "cse-119", title: "Personal Finance Tracker", description: "Categorize expenses and visualize budget", tech: ["React", "Node.js", "Charts"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "Web Development", difficulty: "Basic", category: "Finance" },
  { id: "cse-120", title: "Dynamic Web Crawler", description: "Crawl topics and show sentiment trends dashboard", tech: ["Python", "BeautifulSoup", "Sentiment Analysis"], duration: "3-4 weeks", price: 300, branch: "CSE", specialization: "Web Development", difficulty: "Intermediate", category: "Analytics" },
  { id: "cse-121", title: "Traffic Sign Recognition", description: "Classify traffic signs using small CNN model", tech: ["Python", "CNN", "TensorFlow"], duration: "2-3 weeks", price: 500, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Computer Vision" },
  { id: "cse-122", title: "Medical Chatbot for Triage", description: "Symptom checker using decision-tree + NLP", tech: ["Python", "NLP", "Decision Trees"], duration: "3-4 weeks", price: 400, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Healthcare" },
  { id: "cse-123", title: "Resume-to-Interview Q Generator", description: "Generate likely interview questions from resume using NLP", tech: ["Python", "NLP", "GPT"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "HR Tech" },
  { id: "cse-124", title: "Code-Smell Detector", description: "Static analysis tool for Java/Python code quality", tech: ["Python", "Static Analysis", "AST"], duration: "3-4 weeks", price: 300, branch: "CSE", specialization: "Software Engineering", difficulty: "Intermediate", category: "Tools" },
  { id: "cse-125", title: "Smart Notes App", description: "Scan notes with OCR and auto-tag content", tech: ["React", "OCR", "Tesseract"], duration: "3-4 weeks", price: 800, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Productivity" },
  { id: "cse-126", title: "Real-time Language Translator", description: "Speech to target language translation demo", tech: ["Python", "Speech Recognition", "Translation API"], duration: "3-4 weeks", price: 1200, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Translation" },
  { id: "cse-127", title: "MOOC Recommender", description: "Match online courses to learner profile", tech: ["Python", "ML", "Recommendation System"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "Data Science", difficulty: "Intermediate", category: "Education" },
  { id: "cse-128", title: "Vehicle Number Plate OCR", description: "Budget license plate detection and OCR system", tech: ["Python", "OpenCV", "Tesseract"], duration: "3-4 weeks", price: 600, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Computer Vision" },
  { id: "cse-129", title: "Face Mask Detector", description: "CV to ensure mask usage and log entries", tech: ["Python", "OpenCV", "TensorFlow"], duration: "2-3 weeks", price: 700, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Safety" },
  { id: "cse-130", title: "Resume Keyword Optimizer", description: "Suggest keywords to optimize resume for job listings", tech: ["Python", "NLP", "Web"], duration: "1-2 weeks", price: 100, branch: "CSE", specialization: "AI/ML", difficulty: "Basic", category: "HR Tech" },
  { id: "cse-131", title: "Smart Chat Room Moderator", description: "Auto-moderate toxic messages using toxicity detection", tech: ["Python", "NLP", "ML"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Moderation" },
  { id: "cse-132", title: "A/B Testing Framework", description: "Run web experiments and record metrics", tech: ["JavaScript", "React", "Analytics"], duration: "2-3 weeks", price: 150, branch: "CSE", specialization: "Web Development", difficulty: "Basic", category: "Analytics" },
  { id: "cse-133", title: "Document Summarizer", description: "Multi-document abstractive or extractive summarization", tech: ["Python", "NLP", "Transformers"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "NLP" },
  { id: "cse-134", title: "Real-Time Collaboration Editor", description: "CRDT-based collaborative text editor proof-of-concept", tech: ["React", "WebSockets", "CRDT"], duration: "3-4 weeks", price: 400, branch: "CSE", specialization: "Web Development", difficulty: "Advanced", category: "Collaboration" },
  { id: "cse-135", title: "Image Compression Analyzer", description: "Compare compression methods and quality tradeoffs", tech: ["Python", "Image Processing"], duration: "2-3 weeks", price: 150, branch: "CSE", specialization: "Computer Vision", difficulty: "Basic", category: "Tools" },
  { id: "cse-136", title: "Automated Code Reviewer", description: "Linting + simple bug pattern detection", tech: ["Python", "Static Analysis", "ESLint"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "Software Engineering", difficulty: "Intermediate", category: "Tools" },
  { id: "cse-137", title: "IoT Weather Station", description: "Sensors with short-term local forecasting", tech: ["Arduino", "Sensors", "Forecasting"], duration: "3-4 weeks", price: 1800, branch: "CSE", specialization: "IoT", difficulty: "Advanced", category: "Weather" },
  { id: "cse-138", title: "Smart Waste Segregation App", description: "Classify waste types from images using CV", tech: ["Python", "CNN", "Mobile"], duration: "3-4 weeks", price: 700, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Environment" },
  { id: "cse-139", title: "Document Management RBAC", description: "Secure role-based access control file system", tech: ["Node.js", "RBAC", "Database"], duration: "3-4 weeks", price: 250, branch: "CSE", specialization: "Web Development", difficulty: "Intermediate", category: "Security" },
  { id: "cse-140", title: "Edge ML Anomaly Detection", description: "Tiny model for anomaly detection on microcontroller", tech: ["TensorFlow Lite", "Arduino", "Edge ML"], duration: "4-5 weeks", price: 1000, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Edge Computing" },
  { id: "cse-141", title: "Handwritten Digit Recognition", description: "Classic MNIST demo with GUI interface", tech: ["Python", "TensorFlow", "Tkinter"], duration: "1-2 weeks", price: 150, branch: "CSE", specialization: "AI/ML", difficulty: "Basic", category: "Computer Vision" },
  { id: "cse-142", title: "OCR Invoice Processor", description: "Extract fields from invoice images automatically", tech: ["Python", "OCR", "Tesseract"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Automation" },
  { id: "cse-143", title: "Secure Voting System Prototype", description: "Conceptual zero-knowledge proof secure vote flow", tech: ["Blockchain", "Cryptography", "ZKP"], duration: "4-5 weeks", price: 400, branch: "CSE", specialization: "Cyber Security", difficulty: "Advanced", category: "Blockchain" },
  { id: "cse-144", title: "Music Genre Classifier", description: "Audio feature extraction + genre classification", tech: ["Python", "Librosa", "ML"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Audio" },
  { id: "cse-145", title: "Smart Crop Advisor", description: "ML model to suggest crop actions from input data", tech: ["Python", "ML", "Agriculture"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Agriculture" },
  { id: "cse-146", title: "Gesture Controlled Presentation", description: "Gesture recognition to control presentation slides", tech: ["Python", "OpenCV", "Gesture Recognition"], duration: "3-4 weeks", price: 600, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Presentation" },
  { id: "cse-147", title: "Vehicle Theft Alert System", description: "GPS + geo-fence tracker with alert prototype", tech: ["Arduino", "GPS", "GSM", "IoT"], duration: "4-5 weeks", price: 2500, branch: "CSE", specialization: "IoT", difficulty: "Advanced", category: "Security" },
  { id: "cse-148", title: "Keyword Spotting Device", description: "Small model for wake-word recognition on low-power devices", tech: ["TensorFlow Lite", "Audio Processing"], duration: "3-4 weeks", price: 700, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Audio" },
  { id: "cse-149", title: "Automated Unit Test Generator", description: "Generate unit test skeletons from source code", tech: ["Python", "AST", "Testing"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "Software Engineering", difficulty: "Intermediate", category: "Testing" },
  { id: "cse-150", title: "Fake Product Review Detector", description: "Detect suspicious reviews and review farms", tech: ["Python", "NLP", "ML"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "E-commerce" },
  { id: "cse-151", title: "Time-series Sales Forecasting", description: "ARIMA/LSTM demo for demand forecasting", tech: ["Python", "LSTM", "Time Series"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "Data Science", difficulty: "Intermediate", category: "Forecasting" },
  { id: "cse-152", title: "Fruit Ripeness Detection", description: "Computer vision to classify fruit ripeness stages", tech: ["Python", "CNN", "OpenCV"], duration: "3-4 weeks", price: 600, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Agriculture" },
  { id: "cse-153", title: "Traffic Flow Prediction", description: "Model to predict traffic density from simulated CCTV feeds", tech: ["Python", "LSTM", "Computer Vision"], duration: "3-4 weeks", price: 300, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Traffic" },
  { id: "cse-154", title: "Explainable Loan Approval ML", description: "Build model with explanation for loan decisions", tech: ["Python", "ML", "SHAP", "LIME"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "Data Science", difficulty: "Intermediate", category: "Finance" },
  { id: "cse-155", title: "Network Anomaly Detection", description: "Detect suspicious flows in network traffic logs", tech: ["Python", "ML", "Network Analysis"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "Cyber Security", difficulty: "Intermediate", category: "Security" },
  { id: "cse-156", title: "Topic Modeling Research Papers", description: "LDA-based topic clusters with UI visualization", tech: ["Python", "LDA", "NLP"], duration: "2-3 weeks", price: 150, branch: "CSE", specialization: "Data Science", difficulty: "Intermediate", category: "Research" },
  { id: "cse-157", title: "Multimodal Sentiment Analysis", description: "Combine text + audio to classify sentiment", tech: ["Python", "NLP", "Audio Processing"], duration: "3-4 weeks", price: 400, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Sentiment" },
  { id: "cse-158", title: "Image-to-Text Captioning", description: "Small encoder-decoder image captioner demo", tech: ["Python", "CNN", "LSTM"], duration: "3-4 weeks", price: 400, branch: "CSE", specialization: "AI/ML", difficulty: "Advanced", category: "Computer Vision" },
  { id: "cse-159", title: "AR Museum Guide", description: "Overlay info on museum exhibits using mobile AR", tech: ["Unity", "AR", "Mobile"], duration: "4-5 weeks", price: 1500, branch: "CSE", specialization: "AR/VR", difficulty: "Advanced", category: "AR" },
  { id: "cse-160", title: "Facial Emotion-based Game", description: "Game that reacts to player's facial emotions", tech: ["Python", "OpenCV", "Game Dev"], duration: "3-4 weeks", price: 700, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Gaming" },
  { id: "cse-161", title: "Hand Gesture Calculator", description: "Use finger gestures to input digits and operations", tech: ["Python", "OpenCV", "Gesture Recognition"], duration: "2-3 weeks", price: 500, branch: "CSE", specialization: "AI/ML", difficulty: "Intermediate", category: "Tools" },
  { id: "cse-162", title: "Smart Refrigerator Inventory", description: "Track items placed/removed using RFID tags", tech: ["Arduino", "RFID", "IoT"], duration: "4-5 weeks", price: 2500, branch: "CSE", specialization: "IoT", difficulty: "Advanced", category: "Smart Home" },
  { id: "cse-163", title: "Offline Map with POI", description: "Local maps with point-of-interest clustering features", tech: ["React", "Maps", "Clustering"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "Web Development", difficulty: "Intermediate", category: "Maps" },

  // EMBEDDED SYSTEMS & ELECTRONICS (ECE/CSE CROSSOVER)
  { id: "ece-101", title: "Smart Door Lock RFID+OTP", description: "RFID access with mobile OTP fallback system", tech: ["Arduino", "RFID", "GSM"], duration: "3-4 weeks", price: 1200, branch: "ECE", specialization: "Embedded Systems", difficulty: "Advanced", category: "Security" },
  { id: "ece-102", title: "Line-following Robot", description: "Sensors + microcontroller with obstacle avoidance", tech: ["Arduino", "IR Sensors", "Motor Driver"], duration: "3-4 weeks", price: 2500, branch: "ECE", specialization: "Robotics", difficulty: "Advanced", category: "Robotics" },
  { id: "ece-103", title: "Home Energy Monitor WiFi", description: "Measure and visualize household energy usage", tech: ["ESP8266", "Current Sensor", "IoT"], duration: "3-4 weeks", price: 2000, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Energy" },
  { id: "ece-104", title: "Wireless Heart Rate Monitor", description: "BLE sensor with smartphone dashboard", tech: ["Arduino", "BLE", "Heart Rate Sensor"], duration: "3-4 weeks", price: 1800, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Healthcare" },
  { id: "ece-105", title: "Gesture Robot Arm Control", description: "Control robotic arm with IMU arm gestures", tech: ["Arduino", "IMU", "Servo Motors"], duration: "4-5 weeks", price: 3000, branch: "ECE", specialization: "Robotics", difficulty: "Advanced", category: "Robotics" },
  { id: "ece-106", title: "Low-cost ECG System", description: "Single-lead ECG acquisition and display demo", tech: ["Arduino", "ECG Sensor", "Display"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Biomedical", difficulty: "Advanced", category: "Healthcare" },
  { id: "ece-107", title: "Smart Irrigation IoT", description: "Soil moisture based automated watering system", tech: ["Arduino", "Soil Sensor", "IoT"], duration: "3-4 weeks", price: 1800, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Agriculture" },
  { id: "ece-108", title: "Voice Controlled Wheelchair", description: "Voice commands mapped to wheelchair motor controls", tech: ["Arduino", "Voice Recognition", "Motors"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Assistive Tech", difficulty: "Advanced", category: "Healthcare" },
  { id: "ece-109", title: "Bluetooth Indoor Navigation", description: "RSSI-based beacon maps for indoor positioning", tech: ["Arduino", "BLE Beacons", "RSSI"], duration: "3-4 weeks", price: 1500, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Navigation" },
  { id: "ece-110", title: "Smart Helmet Fall Detection", description: "Accelerometer + GSM/BLE fall alert system", tech: ["Arduino", "Accelerometer", "GSM"], duration: "4-5 weeks", price: 2800, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Safety" },
  { id: "ece-111", title: "RFID Library Management", description: "Tag books with RFID for automated checkout system", tech: ["Arduino", "RFID", "Database"], duration: "3-4 weeks", price: 2000, branch: "ECE", specialization: "Embedded Systems", difficulty: "Advanced", category: "Library" },
  { id: "ece-112", title: "Automated Blind Stick", description: "Ultrasonic obstacle detection with vibration alerts", tech: ["Arduino", "Ultrasonic", "Vibration Motor"], duration: "2-3 weeks", price: 1200, branch: "ECE", specialization: "Assistive Tech", difficulty: "Intermediate", category: "Accessibility" },
  { id: "ece-113", title: "Portable Gas Leak Detector", description: "MQ gas sensor with buzzer and display alarm", tech: ["Arduino", "MQ Sensor", "Buzzer"], duration: "2-3 weeks", price: 800, branch: "ECE", specialization: "Embedded Systems", difficulty: "Intermediate", category: "Safety" },
  { id: "ece-114", title: "Voice-to-Braille Converter", description: "Convert speech to braille cell output prototype", tech: ["Arduino", "Voice Recognition", "Braille Output"], duration: "4-5 weeks", price: 3000, branch: "ECE", specialization: "Assistive Tech", difficulty: "Advanced", category: "Accessibility" },
  { id: "ece-115", title: "Smart Meter Reading Logger", description: "Automatically read analog meters using IR/optical + IoT", tech: ["Arduino", "IR Sensor", "IoT"], duration: "3-4 weeks", price: 1200, branch: "ECE", specialization: "IoT", difficulty: "Intermediate", category: "Monitoring" },
  { id: "ece-116", title: "Weather Buoy System", description: "Small deployed sensor demo for temp/salinity measurement", tech: ["Arduino", "Sensors", "Waterproofing"], duration: "4-5 weeks", price: 2500, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Environmental" },
  { id: "ece-117", title: "Drone Stabilization PID", description: "Basic PID stabilization with sensors demo", tech: ["Arduino", "IMU", "PID Controller"], duration: "4-5 weeks", price: 3500, branch: "ECE", specialization: "Robotics", difficulty: "Advanced", category: "Drones" },
  { id: "ece-118", title: "Ultrasonic Parking Assistant", description: "Distance sensing with visual display interface", tech: ["Arduino", "Ultrasonic", "LCD"], duration: "2-3 weeks", price: 800, branch: "ECE", specialization: "Embedded Systems", difficulty: "Intermediate", category: "Automotive" },
  { id: "ece-119", title: "Wearable Activity Tracker", description: "Step counting + basic sleep detection", tech: ["Arduino", "Accelerometer", "Display"], duration: "2-3 weeks", price: 1000, branch: "ECE", specialization: "Wearables", difficulty: "Intermediate", category: "Fitness" },
  { id: "ece-120", title: "Smart Glasses Prototype", description: "Heads-up display demo with simple notifications", tech: ["Arduino", "OLED", "Bluetooth"], duration: "4-5 weeks", price: 3800, branch: "ECE", specialization: "Wearables", difficulty: "Advanced", category: "AR" },
  { id: "ece-121", title: "Bluetooth Mesh Lighting", description: "Mesh network nodes controlling smart lights", tech: ["ESP32", "BLE Mesh", "Lighting"], duration: "3-4 weeks", price: 2000, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Smart Home" },
  { id: "ece-122", title: "Automated Pet Feeder", description: "Timed food dispensing controlled via mobile app", tech: ["Arduino", "Servo", "IoT App"], duration: "3-4 weeks", price: 2000, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Pet Care" },
  { id: "ece-123", title: "Vibration Structural Health", description: "Simple sensor + FFT to detect structural faults", tech: ["Arduino", "Vibration Sensor", "FFT"], duration: "3-4 weeks", price: 1200, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "Civil" },
  { id: "ece-124", title: "Gesture Smart TV Remote", description: "Map hand gestures to IR remote codes", tech: ["Arduino", "IR Emitter", "Gesture Sensor"], duration: "2-3 weeks", price: 900, branch: "ECE", specialization: "Embedded Systems", difficulty: "Intermediate", category: "Entertainment" },
  { id: "ece-125", title: "IoT Air Quality Monitor", description: "PM2.5 + CO2 sensors with mobile alerts", tech: ["ESP8266", "Air Quality Sensors", "IoT"], duration: "4-5 weeks", price: 3000, branch: "ECE", specialization: "IoT", difficulty: "Advanced", category: "Environment" },

  // SIGNAL PROCESSING & COMMUNICATION (ECE)
  { id: "ece-201", title: "DSP Noise Cancelling Demo", description: "Active noise canceling proof-of-concept", tech: ["DSP", "MATLAB", "Audio"], duration: "3-4 weeks", price: 1500, branch: "ECE", specialization: "Signal Processing", difficulty: "Advanced", category: "Audio" },
  { id: "ece-202", title: "SDR Basics Demo", description: "Receive and visualize signals using cheap SDR dongle", tech: ["SDR", "GNURadio", "RF"], duration: "3-4 weeks", price: 1200, branch: "ECE", specialization: "Communication", difficulty: "Intermediate", category: "RF" },
  { id: "ece-203", title: "Wireless Sensor Network Agriculture", description: "Mesh sensors + gateway for farm monitoring", tech: ["Arduino", "Wireless", "Sensors"], duration: "4-5 weeks", price: 3000, branch: "ECE", specialization: "Communication", difficulty: "Advanced", category: "Agriculture" },
  { id: "ece-204", title: "FM Transmitter-Receiver", description: "Low-power digital audio link demonstration", tech: ["FM Module", "Audio", "RF"], duration: "2-3 weeks", price: 1000, branch: "ECE", specialization: "Communication", difficulty: "Intermediate", category: "RF" },
  { id: "ece-205", title: "Underwater Acoustic Simulation", description: "Simulate underwater channel and simple modem", tech: ["MATLAB", "Simulation", "Acoustics"], duration: "2-3 weeks", price: 200, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "Simulation" },
  { id: "ece-206", title: "Image Steganography Tool", description: "Hide and extract payloads in images with watermarking", tech: ["Python", "Steganography", "Image Processing"], duration: "1-2 weeks", price: 100, branch: "ECE", specialization: "Signal Processing", difficulty: "Basic", category: "Security" },
  { id: "ece-207", title: "Voice Activity Detector", description: "Efficient voice detection before transmission codec", tech: ["DSP", "Audio Processing"], duration: "2-3 weeks", price: 150, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "Audio" },
  { id: "ece-208", title: "Real-time ECG Filter", description: "DSP filter and heart feature extraction", tech: ["DSP", "MATLAB", "ECG"], duration: "3-4 weeks", price: 1000, branch: "ECE", specialization: "Signal Processing", difficulty: "Advanced", category: "Healthcare" },
  { id: "ece-209", title: "Adaptive Beamforming", description: "Simulate small antenna array processing", tech: ["MATLAB", "Array Processing", "Simulation"], duration: "2-3 weeks", price: 300, branch: "ECE", specialization: "Signal Processing", difficulty: "Intermediate", category: "Antenna" },
  { id: "ece-210", title: "Visible Light Communication", description: "LED-based data link demonstration", tech: ["Arduino", "LED", "Photodiode"], duration: "3-4 weeks", price: 1200, branch: "ECE", specialization: "Communication", difficulty: "Advanced", category: "Optical" },

  // VLSI / EMBEDDED DESIGN (ECE)
  { id: "ece-301", title: "FPGA UART/SPI Core", description: "Implement and test on cheap FPGA dev-board", tech: ["FPGA", "Verilog", "UART/SPI"], duration: "4-5 weeks", price: 2500, branch: "ECE", specialization: "VLSI", difficulty: "Advanced", category: "Digital Design" },
  { id: "ece-302", title: "Low-power Timer RTC", description: "Energy measurement demo using RTC and sleep modes", tech: ["Arduino", "RTC", "Power Management"], duration: "2-3 weeks", price: 800, branch: "ECE", specialization: "Embedded Systems", difficulty: "Intermediate", category: "Power" },
  { id: "ece-303", title: "Custom ALU Design", description: "Design basic arithmetic unit in Verilog with testbench", tech: ["Verilog", "FPGA", "ALU"], duration: "2-3 weeks", price: 100, branch: "ECE", specialization: "VLSI", difficulty: "Basic", category: "Digital Design" },
  { id: "ece-304", title: "Hardware Matrix Accelerator", description: "Small FPGA accelerator demo for matrix multiplication", tech: ["FPGA", "Verilog", "Hardware Acceleration"], duration: "4-5 weeks", price: 2500, branch: "ECE", specialization: "VLSI", difficulty: "Advanced", category: "Computing" },
  { id: "ece-305", title: "FPGA Image Filter Pipeline", description: "Implement convolution filter on low-cost FPGA board", tech: ["FPGA", "Verilog", "Image Processing"], duration: "4-5 weeks", price: 3000, branch: "ECE", specialization: "VLSI", difficulty: "Advanced", category: "Image Processing" },

  // ROBOTICS & AUTOMATION (MULTIDISCIPLINARY)
  { id: "robot-001", title: "Autonomous Vacuum Cleaner", description: "Mapping + obstacle avoidance on small robot sim", tech: ["Arduino", "Sensors", "Mapping"], duration: "4-5 weeks", price: 3500, branch: "Mechanical", specialization: "Robotics", difficulty: "Advanced", category: "Automation" },
  { id: "robot-002", title: "Line Sorting Robot", description: "Vision or color-based factory sorting demo", tech: ["Arduino", "Color Sensor", "Sorting"], duration: "4-5 weeks", price: 3000, branch: "Mechanical", specialization: "Robotics", difficulty: "Advanced", category: "Manufacturing" },
  { id: "robot-003", title: "Automated Conveyor PLC", description: "Use microcontroller logic for sequence control simulation", tech: ["Arduino", "PLC Logic", "Relay"], duration: "2-3 weeks", price: 800, branch: "Mechanical", specialization: "Automation", difficulty: "Intermediate", category: "Industrial" },
  { id: "robot-004", title: "Robotic Hand EMG Control", description: "EMG sensor to control servo hand prototype demo", tech: ["Arduino", "EMG Sensor", "Servo"], duration: "4-5 weeks", price: 3800, branch: "Mechanical", specialization: "Robotics", difficulty: "Advanced", category: "Biomedical" },
  { id: "robot-005", title: "Swarm Robotics Simulation", description: "Simulate multi-agent behaviors and coordination", tech: ["Python", "Simulation", "Multi-agent"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "Robotics", difficulty: "Intermediate", category: "Simulation" },

  // MECHANICAL / CIVIL / INTERDISCIPLINARY
  { id: "mech-101", title: "Smart Traffic Light Sensors ML", description: "Optimize traffic flow with simple ML model", tech: ["Arduino", "Sensors", "ML"], duration: "3-4 weeks", price: 1000, branch: "Civil", specialization: "Smart Systems", difficulty: "Intermediate", category: "Traffic" },
  { id: "mech-102", title: "Structural Load Monitoring", description: "Strain gauge data acquisition and dashboard demo", tech: ["Arduino", "Strain Gauge", "Dashboard"], duration: "4-5 weeks", price: 2500, branch: "Civil", specialization: "Structural", difficulty: "Advanced", category: "Monitoring" },
  { id: "mech-103", title: "Rainwater Harvesting Monitor", description: "Tank level + quality sensors with IoT logging", tech: ["Arduino", "Sensors", "IoT"], duration: "3-4 weeks", price: 1800, branch: "Civil", specialization: "Environmental", difficulty: "Advanced", category: "Water" },
  { id: "mech-104", title: "Smart Bicycle Helmet", description: "Light control + crash alert with accelerometer", tech: ["Arduino", "Accelerometer", "LED"], duration: "3-4 weeks", price: 1200, branch: "Mechanical", specialization: "Safety", difficulty: "Intermediate", category: "Safety" },
  { id: "mech-105", title: "Bridge Vibration Monitoring", description: "Small sensor node + cloud logging with FFT", tech: ["Arduino", "Vibration Sensor", "IoT"], duration: "3-4 weeks", price: 2200, branch: "Civil", specialization: "Structural", difficulty: "Advanced", category: "Infrastructure" },

  // BIOTECHNOLOGY / BIOINFORMATICS
  { id: "bio-001", title: "DNA Sequence Pattern Finder", description: "Find motifs in DNA sequences and visualize", tech: ["Python", "Bioinformatics", "Visualization"], duration: "2-3 weeks", price: 100, branch: "BCA", specialization: "Bioinformatics", difficulty: "Basic", category: "Genomics" },
  { id: "bio-002", title: "Protein Structure Predictor", description: "Small ML model to predict alpha/beta regions", tech: ["Python", "ML", "Bioinformatics"], duration: "2-3 weeks", price: 200, branch: "BCA", specialization: "Bioinformatics", difficulty: "Intermediate", category: "Structural Biology" },
  { id: "bio-003", title: "Contact Tracer Dashboard", description: "Privacy-focused contact tracing simulation", tech: ["React", "Privacy", "Dashboard"], duration: "2-3 weeks", price: 200, branch: "CSE", specialization: "Web Development", difficulty: "Intermediate", category: "Healthcare" },

  // SECURITY & CRYPTOGRAPHY
  { id: "sec-001", title: "Lightweight Steganography Tool", description: "Hide and detect messages in images/audio", tech: ["Python", "Steganography", "Security"], duration: "2-3 weeks", price: 100, branch: "CSE", specialization: "Cyber Security", difficulty: "Basic", category: "Steganography" },
  { id: "sec-002", title: "Side-channel Attack Demo AES", description: "Show timing/EM leak conceptually (lab-safe simulation)", tech: ["Python", "Cryptography", "Simulation"], duration: "2-3 weeks", price: 300, branch: "CSE", specialization: "Cyber Security", difficulty: "Intermediate", category: "Cryptography" },
  { id: "sec-003", title: "Secure IoT Firmware Update", description: "Signed firmware updates and validation mechanism", tech: ["Arduino", "Security", "OTA Updates"], duration: "2-3 weeks", price: 150, branch: "CSE", specialization: "Cyber Security", difficulty: "Intermediate", category: "IoT Security" },
  { id: "sec-004", title: "Password Strength Visualizer", description: "UI + entropy calculation with suggestions", tech: ["JavaScript", "React", "Security"], duration: "1-2 weeks", price: 50, branch: "CSE", specialization: "Cyber Security", difficulty: "Basic", category: "Authentication" },
    { id: "hr-071", title: "AI-Powered Resume Shortlisting", description: "Automated candidate screening using AI scoring", tech: ["AI Tools", "ATS"], duration: "3-4 weeks", price: 4600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Recruitment" },

{ id: "hr-072", title: "Payroll Fraud Detection Analysis", description: "Identify anomalies and inconsistencies in payroll", tech: ["Excel", "Analytics"], duration: "3-4 weeks", price: 4400, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Audit" },

{ id: "hr-073", title: "Psychological Contract Breach Study", description: "Study of hidden expectations and employee trust", tech: ["Survey Tools", "SPSS"], duration: "3-4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Behavioral" },

{ id: "hr-074", title: "HR Competency Framework Development", description: "Develop industry-validated HR competency model", tech: ["Research Tools"], duration: "4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Competency" },

{ id: "hr-075", title: "Emotional Burnout Prediction Model", description: "Predict burnout risk using data-driven indicators", tech: ["SPSS", "Power BI"], duration: "4 weeks", price: 4600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Wellbeing" },

{ id: "hr-076", title: "Reward System Effectiveness Study", description: "Analyze how rewards influence employee behaviour", tech: ["Survey Tools", "Excel"], duration: "3-4 weeks", price: 4100, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Compensation" },

{ id: "hr-077", title: "Career Progression & Succession Mapping", description: "Identify successors for leadership roles", tech: ["HRMS", "Excel"], duration: "4 weeks", price: 4700, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Leadership" },

{ id: "hr-078", title: "Corporate Culture Transformation Model", description: "Framework to transition from old to modern culture", tech: ["Research Tools"], duration: "4 weeks", price: 4800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Culture" },

{ id: "hr-079", title: "Grievance Redressal System Study", description: "Evaluate effectiveness of grievance mechanisms", tech: ["Forms", "HRMS"], duration: "3 weeks", price: 3900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Compliance" },

{ id: "hr-080", title: "Employee Trust & Loyalty Index", description: "Develop measurable trust scoring for employees", tech: ["Survey Tools", "SPSS"], duration: "4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Engagement" },

{ id: "hr-081", title: "AI Chatbot for Employee Queries", description: "Build HR query assistant for faster responses", tech: ["AI Tools", "Bot Platforms"], duration: "3-4 weeks", price: 5000, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Automation" },

{ id: "hr-082", title: "Workforce Cost-Benefit Analysis", description: "Evaluate productivity vs cost for teams", tech: ["Excel", "BI Tools"], duration: "3-4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "HR Finance" },

{ id: "hr-083", title: "Organizational Agility Assessment", description: "Measure company agility through HR metrics", tech: ["Survey Tools", "Analytics"], duration: "4 weeks", price: 4600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Strategy" },

{ id: "hr-084", title: "Workplace Toxicity Detection Model", description: "Identify toxic behaviours via data patterns", tech: ["SPSS", "Survey Tools"], duration: "3-4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Behavioral" },

{ id: "hr-085", title: "Gender Pay Gap Analysis", description: "Evaluate wage equality across organization levels", tech: ["Excel", "Power BI"], duration: "3-4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Diversity" },

{ id: "hr-086", title: "Remote Employee Emotional Health Study", description: "Measure stress and mental health levels remotely", tech: ["Survey Tools", "SPSS"], duration: "4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Wellbeing" },

{ id: "hr-087", title: "HR Fraud Prevention Framework", description: "Develop controls to prevent internal HR fraud", tech: ["HRMS", "Policy Tools"], duration: "4 weeks", price: 4600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Compliance" },

{ id: "hr-088", title: "Skill-Based Recruitment Strategy", description: "Shift hiring from qualification-based to skill-based", tech: ["ATS Tools", "Skill Matrix"], duration: "3-4 weeks", price: 4400, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Recruitment" },

{ id: "hr-089", title: "Employee Retention Blueprint 2030", description: "Create future-ready retention policies", tech: ["Research Tools"], duration: "4 weeks", price: 4800, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Strategy" },

{ id: "hr-090", title: "Digital HR Maturity Assessment Model", description: "Score current digital maturity of HR department", tech: ["Survey Tools", "BI Tools"], duration: "4 weeks", price: 4700, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Transformation" },

{ id: "hr-091", title: "Employee Creativity Enhancement Study", description: "Factors that boost creativity at workplace", tech: ["Survey Tools", "SPSS"], duration: "3-4 weeks", price: 4100, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Innovation" },

{ id: "hr-092", title: "HR Governance Framework Design", description: "Create governance rules for HR operations", tech: ["Policy Tools", "HRMS"], duration: "3-4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Governance" },

{ id: "hr-093", title: "Workplace Emotional Climate Mapping", description: "Heatmap of emotions across departments", tech: ["Survey Tools", "Power BI"], duration: "3-4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Wellbeing" },

{ id: "hr-094", title: "Organizational Silence Analysis", description: "Study why employees avoid speaking up", tech: ["Survey Tools", "SPSS"], duration: "3-4 weeks", price: 4200, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Behavioral" },

{ id: "hr-095", title: "Employee Discipline Management System", description: "Framework for progressive discipline process", tech: ["HRMS", "Policy Tools"], duration: "3 weeks", price: 4000, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Compliance" },

{ id: "hr-096", title: "AI-Powered Employee Lifecycle Mapping", description: "Predict employee journey from hire to exit", tech: ["AI Tools", "HR Analytics"], duration: "4 weeks", price: 4900, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "AI" },

{ id: "hr-097", title: "Virtual Team Leadership Competency Study", description: "Analyze skills required to lead virtual teams", tech: ["Survey Tools"], duration: "3-4 weeks", price: 4300, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Leadership" },

{ id: "hr-098", title: "HR Risk Heatmap Dashboard", description: "Risk identification and mapping for HR processes", tech: ["Power BI", "Excel"], duration: "3-4 weeks", price: 4500, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Risk" },

{ id: "hr-099", title: "Employee Satisfaction Prediction Model", description: "Predict satisfaction using ML-like indicators", tech: ["Excel", "SPSS"], duration: "3-4 weeks", price: 4600, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Analytics" },

{ id: "hr-100", title: "Future Workforce Planning Model", description: "Design workforce strategy for next 10 years", tech: ["HR Analytics", "Research Tools"], duration: "4 weeks", price: 5000, branch: "MBA", specialization: "HR Management", difficulty: "Advanced", category: "Strategy" }

];

// Combine all projects including EEE
export const projectsData: Project[] = [...projects, ...eeeProjects];

// Helper functions
export const getBranches = (): string[] => {
  return Array.from(new Set(projectsData.map(p => p.branch)));
};

export const getSpecializations = (branch: string): string[] => {
  // ECE and EEE have all projects combined under "All"
  if (branch === "ECE" || branch === "EEE") {
    return ["All"];
  }
  return Array.from(new Set(
    projectsData.filter(p => p.branch === branch).map(p => p.specialization)
  ));
};

export const getProjects = (branch?: string, specialization?: string): Project[] => {
  let filtered = projectsData;
  
  if (branch) {
    filtered = filtered.filter(p => p.branch === branch);
    
    // For ECE and EEE, return all projects without specialization filtering
    if (branch === "ECE" || branch === "EEE") {
      return filtered;
    }
  }
  
  if (specialization) {
    filtered = filtered.filter(p => p.specialization === specialization);
  }
  
  return filtered;
};

export const searchProjects = (query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  return projectsData.filter(p => 
    p.title.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.tech.some(t => t.toLowerCase().includes(lowercaseQuery)) ||
    p.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterByPrice = (minPrice: number, maxPrice: number): Project[] => {
  return projectsData.filter(p => p.price >= minPrice && p.price <= maxPrice);
};

export const filterByDifficulty = (difficulty: string): Project[] => {
  return projectsData.filter(p => p.difficulty === difficulty);
};
