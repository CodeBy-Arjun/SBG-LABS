// EEE MATLAB-Based Projects (Below ₹3000)

export interface EEEProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  duration: string;
  price: number;
  branch: string;
  specialization: string;
  difficulty: "Basic" | "Intermediate" | "Advanced";
  category: string;
}

export const eeeProjects: EEEProject[] = [
  // MATLAB Power Systems Projects
  { id: "eee-001", title: "Power Flow Analysis using MATLAB", description: "Analyzes load flow in transmission systems", tech: ["MATLAB", "Power Systems"], duration: "2-3 weeks", price: 2200, branch: "EEE", specialization: "Power Systems", difficulty: "Intermediate", category: "Power Analysis" },
  { id: "eee-002", title: "Transformer Design Calculator", description: "MATLAB-based transformer parameter calculator", tech: ["MATLAB", "Electrical"], duration: "2-3 weeks", price: 1800, branch: "EEE", specialization: "Power Systems", difficulty: "Intermediate", category: "Transformers" },
  { id: "eee-003", title: "Load Frequency Control Simulator", description: "Simulates LFC in power systems", tech: ["MATLAB", "Control Systems"], duration: "2-3 weeks", price: 2400, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Control" },
  { id: "eee-004", title: "Economic Load Dispatch", description: "Optimizes generation cost using MATLAB", tech: ["MATLAB", "Optimization"], duration: "2-3 weeks", price: 2600, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Optimization" },
  { id: "eee-005", title: "Fault Analysis Tool", description: "Analyzes short circuit faults", tech: ["MATLAB", "Protection"], duration: "2-3 weeks", price: 2300, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Protection" },
  
  // MATLAB Control Systems Projects
  { id: "eee-006", title: "PID Controller Design", description: "Designs and tunes PID controllers", tech: ["MATLAB", "Control"], duration: "1-2 weeks", price: 1900, branch: "EEE", specialization: "Control Systems", difficulty: "Intermediate", category: "Controllers" },
  { id: "eee-007", title: "State Space Analysis Tool", description: "Analyzes system behavior in state space", tech: ["MATLAB", "Modern Control"], duration: "2-3 weeks", price: 2100, branch: "EEE", specialization: "Control Systems", difficulty: "Advanced", category: "Analysis" },
  { id: "eee-008", title: "Root Locus Plotter", description: "Interactive root locus analysis", tech: ["MATLAB", "Classical Control"], duration: "1-2 weeks", price: 1600, branch: "EEE", specialization: "Control Systems", difficulty: "Intermediate", category: "Analysis" },
  { id: "eee-009", title: "Bode Plot Analyzer", description: "Frequency response analysis tool", tech: ["MATLAB", "Control"], duration: "1-2 weeks", price: 1700, branch: "EEE", specialization: "Control Systems", difficulty: "Intermediate", category: "Frequency Analysis" },
  { id: "eee-010", title: "Lead-Lag Compensator Design", description: "Designs compensators for stability", tech: ["MATLAB", "Control"], duration: "2-3 weeks", price: 2000, branch: "EEE", specialization: "Control Systems", difficulty: "Advanced", category: "Compensation" },
  
  // MATLAB Electrical Machines Projects
  { id: "eee-011", title: "Induction Motor Characteristics", description: "Simulates motor performance curves", tech: ["MATLAB", "Machines"], duration: "2-3 weeks", price: 2200, branch: "EEE", specialization: "Electrical Machines", difficulty: "Intermediate", category: "Motors" },
  { id: "eee-012", title: "DC Motor Speed Control", description: "Simulates various speed control methods", tech: ["MATLAB", "Machines"], duration: "2-3 weeks", price: 1900, branch: "EEE", specialization: "Electrical Machines", difficulty: "Intermediate", category: "DC Machines" },
  { id: "eee-013", title: "Synchronous Machine Model", description: "Models synchronous generator behavior", tech: ["MATLAB", "Power"], duration: "2-3 weeks", price: 2500, branch: "EEE", specialization: "Electrical Machines", difficulty: "Advanced", category: "Generators" },
  { id: "eee-014", title: "Motor Efficiency Calculator", description: "Calculates efficiency for various loads", tech: ["MATLAB", "Analysis"], duration: "1-2 weeks", price: 1500, branch: "EEE", specialization: "Electrical Machines", difficulty: "Basic", category: "Efficiency" },
  { id: "eee-015", title: "Three Phase Fault Analyzer", description: "Analyzes motor faults", tech: ["MATLAB", "Protection"], duration: "2-3 weeks", price: 2400, branch: "EEE", specialization: "Electrical Machines", difficulty: "Advanced", category: "Fault Analysis" },
  
  // MATLAB Power Electronics Projects
  { id: "eee-016", title: "Buck Converter Design", description: "DC-DC converter simulation", tech: ["MATLAB", "Power Electronics"], duration: "2-3 weeks", price: 2100, branch: "EEE", specialization: "Power Electronics", difficulty: "Intermediate", category: "Converters" },
  { id: "eee-017", title: "Boost Converter Analysis", description: "Step-up converter characteristics", tech: ["MATLAB", "Power Electronics"], duration: "2-3 weeks", price: 2100, branch: "EEE", specialization: "Power Electronics", difficulty: "Intermediate", category: "Converters" },
  { id: "eee-018", title: "Inverter Waveform Analysis", description: "Analyzes inverter output waveforms", tech: ["MATLAB", "Power Electronics"], duration: "2-3 weeks", price: 2300, branch: "EEE", specialization: "Power Electronics", difficulty: "Advanced", category: "Inverters" },
  { id: "eee-019", title: "Rectifier Circuit Simulator", description: "Simulates various rectifier circuits", tech: ["MATLAB", "Power Electronics"], duration: "1-2 weeks", price: 1800, branch: "EEE", specialization: "Power Electronics", difficulty: "Intermediate", category: "Rectifiers" },
  { id: "eee-020", title: "PWM Signal Generator", description: "Generates PWM signals for control", tech: ["MATLAB", "Control"], duration: "1-2 weeks", price: 1600, branch: "EEE", specialization: "Power Electronics", difficulty: "Intermediate", category: "Modulation" },
  
  // MATLAB Renewable Energy Projects
  { id: "eee-021", title: "Solar Panel I-V Curve Tracer", description: "Plots solar panel characteristics", tech: ["MATLAB", "Solar"], duration: "2-3 weeks", price: 1900, branch: "EEE", specialization: "Renewable Energy", difficulty: "Intermediate", category: "Solar" },
  { id: "eee-022", title: "Wind Turbine Power Curve", description: "Models wind turbine output", tech: ["MATLAB", "Wind"], duration: "2-3 weeks", price: 2000, branch: "EEE", specialization: "Renewable Energy", difficulty: "Intermediate", category: "Wind" },
  { id: "eee-023", title: "MPPT Algorithm Simulation", description: "Maximum power point tracking", tech: ["MATLAB", "Optimization"], duration: "2-3 weeks", price: 2500, branch: "EEE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Optimization" },
  { id: "eee-024", title: "Hybrid System Optimizer", description: "Optimizes solar-wind hybrid system", tech: ["MATLAB", "Optimization"], duration: "3-4 weeks", price: 2800, branch: "EEE", specialization: "Renewable Energy", difficulty: "Advanced", category: "Hybrid Systems" },
  { id: "eee-025", title: "Battery Charge Controller", description: "Simulates battery charging methods", tech: ["MATLAB", "Storage"], duration: "2-3 weeks", price: 2200, branch: "EEE", specialization: "Renewable Energy", difficulty: "Intermediate", category: "Storage" },
  
  // Additional MATLAB Projects
  { id: "eee-026", title: "Harmonic Analysis Tool", description: "Analyzes power system harmonics", tech: ["MATLAB", "Power Quality"], duration: "2-3 weeks", price: 2100, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Quality" },
  { id: "eee-027", title: "Voltage Sag Analyzer", description: "Detects and analyzes voltage sags", tech: ["MATLAB", "Power Quality"], duration: "2-3 weeks", price: 2200, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Power Quality" },
  { id: "eee-028", title: "Power Factor Correction", description: "Designs PFC circuits", tech: ["MATLAB", "Power"], duration: "2-3 weeks", price: 1900, branch: "EEE", specialization: "Power Electronics", difficulty: "Intermediate", category: "Compensation" },
  { id: "eee-029", title: "Transmission Line Model", description: "Models transmission line parameters", tech: ["MATLAB", "Transmission"], duration: "2-3 weeks", price: 2300, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Transmission" },
  { id: "eee-030", title: "Distribution System Analysis", description: "Analyzes radial distribution systems", tech: ["MATLAB", "Distribution"], duration: "2-3 weeks", price: 2400, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Distribution" },
  { id: "eee-031", title: "Relay Coordination Tool", description: "Coordinates protection relays", tech: ["MATLAB", "Protection"], duration: "2-3 weeks", price: 2600, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Protection" },
  { id: "eee-032", title: "Smart Grid Simulator", description: "Simulates smart grid operations", tech: ["MATLAB", "Smart Grid"], duration: "3-4 weeks", price: 2900, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Smart Grid" },
  { id: "eee-033", title: "Energy Management System", description: "Optimizes energy usage", tech: ["MATLAB", "Optimization"], duration: "2-3 weeks", price: 2500, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Energy Management" },
  { id: "eee-034", title: "Circuit Breaker Analyzer", description: "Analyzes breaker operation", tech: ["MATLAB", "Protection"], duration: "2-3 weeks", price: 2000, branch: "EEE", specialization: "Power Systems", difficulty: "Intermediate", category: "Protection" },
  { id: "eee-035", title: "Feeder Loss Calculator", description: "Calculates distribution losses", tech: ["MATLAB", "Analysis"], duration: "1-2 weeks", price: 1700, branch: "EEE", specialization: "Power Systems", difficulty: "Intermediate", category: "Loss Analysis" },
  { id: "eee-036", title: "Thyristor-Based Controller", description: "Designs thyristor control circuits", tech: ["MATLAB", "Power Electronics"], duration: "2-3 weeks", price: 2200, branch: "EEE", specialization: "Power Electronics", difficulty: "Advanced", category: "Controllers" },
  { id: "eee-037", title: "IGBT Switching Analysis", description: "Analyzes IGBT switching behavior", tech: ["MATLAB", "Power Electronics"], duration: "2-3 weeks", price: 2400, branch: "EEE", specialization: "Power Electronics", difficulty: "Advanced", category: "Switching" },
  { id: "eee-038", title: "Capacitor Placement Optimizer", description: "Optimizes capacitor placement in grid", tech: ["MATLAB", "Optimization"], duration: "2-3 weeks", price: 2500, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Optimization" },
  { id: "eee-039", title: "Motor Starting Analysis", description: "Analyzes motor starting methods", tech: ["MATLAB", "Machines"], duration: "2-3 weeks", price: 1900, branch: "EEE", specialization: "Electrical Machines", difficulty: "Intermediate", category: "Motors" },
  { id: "eee-040", title: "Grid Stability Analyzer", description: "Analyzes power system stability", tech: ["MATLAB", "Stability"], duration: "3-4 weeks", price: 2800, branch: "EEE", specialization: "Power Systems", difficulty: "Advanced", category: "Stability" },
];