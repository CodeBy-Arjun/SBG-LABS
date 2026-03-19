// Comprehensive courses database with 50+ programming languages and 30+ professional courses

export interface Course {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  tech_tags: string[];
  instructor: string;
  thumbnail_url?: string;
  is_featured: boolean;
}

export const coursesData: Course[] = [
  // PROGRAMMING LANGUAGES (50+ courses)
  { id: "lang-001", name: "Python", category: "Programming Languages", price: 999, duration: "8 weeks", difficulty: "Beginner", description: "Master Python from basics to advanced concepts including OOP, data structures, and popular libraries", tech_tags: ["Python", "Data Science", "AI"], instructor: "SBG LABS", is_featured: true },
  { id: "lang-002", name: "C", category: "Programming Languages", price: 899, duration: "6 weeks", difficulty: "Beginner", description: "Learn C programming fundamentals, pointers, memory management, and system programming", tech_tags: ["C", "Systems", "Embedded"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-003", name: "C++", category: "Programming Languages", price: 999, duration: "8 weeks", difficulty: "Intermediate", description: "Object-oriented programming with C++, STL, templates, and modern C++ features", tech_tags: ["C++", "OOP", "Systems"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-004", name: "Java", category: "Programming Languages", price: 999, duration: "8 weeks", difficulty: "Intermediate", description: "Learn Java programming, OOP concepts, collections, multithreading, and enterprise development", tech_tags: ["Java", "OOP", "Enterprise"], instructor: "SBG LABS", is_featured: true },
  { id: "lang-005", name: "JavaScript", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Beginner", description: "Master JavaScript from basics to ES6+, DOM manipulation, async programming, and frameworks", tech_tags: ["JavaScript", "Web", "Frontend"], instructor: "SBG LABS", is_featured: true },
  { id: "lang-006", name: "TypeScript", category: "Programming Languages", price: 1099, duration: "6 weeks", difficulty: "Intermediate", description: "Type-safe JavaScript with TypeScript, interfaces, generics, and modern development", tech_tags: ["TypeScript", "JavaScript", "Web"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-007", name: "Kotlin", category: "Programming Languages", price: 999, duration: "7 weeks", difficulty: "Intermediate", description: "Modern Android development with Kotlin, coroutines, and best practices", tech_tags: ["Kotlin", "Android", "Mobile"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-008", name: "Swift", category: "Programming Languages", price: 1099, duration: "7 weeks", difficulty: "Intermediate", description: "iOS app development with Swift, SwiftUI, and Apple frameworks", tech_tags: ["Swift", "iOS", "Mobile"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-009", name: "PHP", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Beginner", description: "Server-side web development with PHP, MySQL integration, and modern frameworks", tech_tags: ["PHP", "Backend", "Web"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-010", name: "Go (Golang)", category: "Programming Languages", price: 1099, duration: "7 weeks", difficulty: "Intermediate", description: "Concurrent programming with Go, goroutines, channels, and microservices", tech_tags: ["Go", "Backend", "Cloud"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-011", name: "Rust", category: "Programming Languages", price: 1199, duration: "8 weeks", difficulty: "Advanced", description: "Systems programming with Rust, memory safety, ownership, and performance", tech_tags: ["Rust", "Systems", "Performance"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-012", name: "Ruby", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Beginner", description: "Elegant programming with Ruby, Rails framework, and web development", tech_tags: ["Ruby", "Rails", "Web"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-013", name: "Perl", category: "Programming Languages", price: 899, duration: "5 weeks", difficulty: "Intermediate", description: "Text processing and scripting with Perl, regex, and automation", tech_tags: ["Perl", "Scripting", "Automation"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-014", name: "Scala", category: "Programming Languages", price: 1099, duration: "7 weeks", difficulty: "Advanced", description: "Functional and object-oriented programming with Scala for big data", tech_tags: ["Scala", "Functional", "Big Data"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-015", name: "Dart", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Beginner", description: "Flutter app development with Dart, widgets, and cross-platform mobile apps", tech_tags: ["Dart", "Flutter", "Mobile"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-016", name: "R Programming", category: "Programming Languages", price: 1099, duration: "7 weeks", difficulty: "Intermediate", description: "Statistical computing and data visualization with R language", tech_tags: ["R", "Statistics", "Data Science"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-017", name: "MATLAB", category: "Programming Languages", price: 1199, duration: "8 weeks", difficulty: "Advanced", description: "Technical computing with MATLAB, matrix operations, and simulations", tech_tags: ["MATLAB", "Engineering", "Simulation"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-018", name: "Assembly Language", category: "Programming Languages", price: 899, duration: "6 weeks", difficulty: "Advanced", description: "Low-level programming with Assembly, CPU architecture, and optimization", tech_tags: ["Assembly", "Systems", "Hardware"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-019", name: "Shell Scripting", category: "Programming Languages", price: 999, duration: "4 weeks", difficulty: "Beginner", description: "Linux automation with Bash scripting, command-line tools, and system administration", tech_tags: ["Bash", "Linux", "DevOps"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-020", name: "PowerShell", category: "Programming Languages", price: 999, duration: "4 weeks", difficulty: "Intermediate", description: "Windows automation with PowerShell, scripting, and system management", tech_tags: ["PowerShell", "Windows", "Automation"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-021", name: "SQL", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Beginner", description: "Database querying with SQL, joins, optimization, and database design", tech_tags: ["SQL", "Database", "Backend"], instructor: "SBG LABS", is_featured: true },
  { id: "lang-022", name: "NoSQL", category: "Programming Languages", price: 1099, duration: "6 weeks", difficulty: "Intermediate", description: "MongoDB, Cassandra, and modern NoSQL database technologies", tech_tags: ["NoSQL", "MongoDB", "Database"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-023", name: "PL/SQL", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Intermediate", description: "Oracle database programming with PL/SQL, stored procedures, and triggers", tech_tags: ["PL/SQL", "Oracle", "Database"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-024", name: "C#", category: "Programming Languages", price: 999, duration: "8 weeks", difficulty: "Intermediate", description: ".NET development with C#, ASP.NET, and Windows applications", tech_tags: ["C#", ".NET", "Windows"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-025", name: "Objective-C", category: "Programming Languages", price: 1099, duration: "7 weeks", difficulty: "Advanced", description: "iOS and macOS development with Objective-C and Cocoa frameworks", tech_tags: ["Objective-C", "iOS", "macOS"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-026", name: "Haskell", category: "Programming Languages", price: 999, duration: "7 weeks", difficulty: "Advanced", description: "Pure functional programming with Haskell, type systems, and monads", tech_tags: ["Haskell", "Functional", "Advanced"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-027", name: "Lua", category: "Programming Languages", price: 999, duration: "5 weeks", difficulty: "Beginner", description: "Scripting with Lua for game development and embedded systems", tech_tags: ["Lua", "Game Dev", "Scripting"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-028", name: "F#", category: "Programming Languages", price: 1099, duration: "7 weeks", difficulty: "Advanced", description: "Functional-first programming on .NET with F# language", tech_tags: ["F#", ".NET", "Functional"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-029", name: "COBOL", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Intermediate", description: "Legacy systems programming with COBOL for enterprise applications", tech_tags: ["COBOL", "Legacy", "Enterprise"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-030", name: "Fortran", category: "Programming Languages", price: 899, duration: "6 weeks", difficulty: "Intermediate", description: "Scientific computing with Fortran for numerical analysis", tech_tags: ["Fortran", "Scientific", "Computing"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-031", name: "VB.NET", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Beginner", description: "Visual Basic .NET for Windows application development", tech_tags: ["VB.NET", ".NET", "Windows"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-032", name: "Julia", category: "Programming Languages", price: 1099, duration: "7 weeks", difficulty: "Intermediate", description: "High-performance numerical computing with Julia language", tech_tags: ["Julia", "Scientific", "Performance"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-033", name: "Elixir", category: "Programming Languages", price: 1099, duration: "7 weeks", difficulty: "Intermediate", description: "Functional concurrent programming with Elixir and Phoenix framework", tech_tags: ["Elixir", "Functional", "Web"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-034", name: "Solidity (Blockchain)", category: "Programming Languages", price: 1199, duration: "8 weeks", difficulty: "Advanced", description: "Smart contract development with Solidity for Ethereum blockchain", tech_tags: ["Solidity", "Blockchain", "Web3"], instructor: "SBG LABS", is_featured: true },
  { id: "lang-035", name: "VHDL", category: "Programming Languages", price: 999, duration: "7 weeks", difficulty: "Advanced", description: "Hardware description language for FPGA and digital design", tech_tags: ["VHDL", "FPGA", "Hardware"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-036", name: "Verilog", category: "Programming Languages", price: 999, duration: "7 weeks", difficulty: "Advanced", description: "Digital circuit design with Verilog HDL for VLSI", tech_tags: ["Verilog", "VLSI", "Hardware"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-037", name: "Prolog", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Advanced", description: "Logic programming with Prolog for AI and expert systems", tech_tags: ["Prolog", "Logic", "AI"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-038", name: "Lisp", category: "Programming Languages", price: 899, duration: "6 weeks", difficulty: "Advanced", description: "Functional programming with Lisp, macros, and symbolic computation", tech_tags: ["Lisp", "Functional", "AI"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-039", name: "Bash", category: "Programming Languages", price: 999, duration: "4 weeks", difficulty: "Beginner", description: "Unix shell scripting with Bash for automation and DevOps", tech_tags: ["Bash", "Linux", "Scripting"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-040", name: "Groovy", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Intermediate", description: "Dynamic JVM language with Groovy for scripting and automation", tech_tags: ["Groovy", "JVM", "Scripting"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-041", name: "Crystal", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Intermediate", description: "Ruby-like syntax with C-like performance using Crystal language", tech_tags: ["Crystal", "Performance", "Systems"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-042", name: "Ada", category: "Programming Languages", price: 899, duration: "6 weeks", difficulty: "Intermediate", description: "Safety-critical programming with Ada for aerospace and defense", tech_tags: ["Ada", "Safety", "Systems"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-043", name: "D Language", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Intermediate", description: "Systems programming with D language combining performance and productivity", tech_tags: ["D", "Systems", "Performance"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-044", name: "Smalltalk", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Intermediate", description: "Object-oriented programming pioneer with Smalltalk language", tech_tags: ["Smalltalk", "OOP", "Classic"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-045", name: "Scratch (for kids)", category: "Programming Languages", price: 799, duration: "4 weeks", difficulty: "Beginner", description: "Visual programming for kids to learn coding concepts with Scratch", tech_tags: ["Scratch", "Kids", "Education"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-046", name: "Assembly x86", category: "Programming Languages", price: 999, duration: "6 weeks", difficulty: "Advanced", description: "x86 assembly programming for reverse engineering and optimization", tech_tags: ["Assembly", "x86", "Systems"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-047", name: "XML/JSON Handling", category: "Programming Languages", price: 899, duration: "3 weeks", difficulty: "Beginner", description: "Data serialization with XML and JSON for APIs and configuration", tech_tags: ["XML", "JSON", "Data"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-048", name: "YAML", category: "Programming Languages", price: 799, duration: "2 weeks", difficulty: "Beginner", description: "Configuration files with YAML for DevOps and cloud infrastructure", tech_tags: ["YAML", "Config", "DevOps"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-049", name: "HTML & CSS (Basic)", category: "Programming Languages", price: 799, duration: "4 weeks", difficulty: "Beginner", description: "Web fundamentals with HTML5 and CSS3 for responsive design", tech_tags: ["HTML", "CSS", "Web"], instructor: "SBG LABS", is_featured: true },
  { id: "lang-050", name: "Markdown", category: "Programming Languages", price: 699, duration: "2 weeks", difficulty: "Beginner", description: "Documentation with Markdown for README files and technical writing", tech_tags: ["Markdown", "Documentation", "Writing"], instructor: "SBG LABS", is_featured: false },
  { id: "lang-051", name: "LaTeX", category: "Programming Languages", price: 799, duration: "4 weeks", difficulty: "Intermediate", description: "Professional typesetting with LaTeX for academic papers and documents", tech_tags: ["LaTeX", "Typesetting", "Academic"], instructor: "SBG LABS", is_featured: false },

  // PROFESSIONAL COURSES (30+ courses)
  { id: "pro-001", name: "Full Stack Web Development", category: "Professional Courses", price: 2499, duration: "12 weeks", difficulty: "Advanced", description: "Complete web development bootcamp with React, Node.js, databases, and deployment", tech_tags: ["React", "Node.js", "Full Stack", "AI"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-002", name: "App Development (Android + iOS)", category: "Professional Courses", price: 2299, duration: "12 weeks", difficulty: "Advanced", description: "Cross-platform mobile app development with React Native and Flutter", tech_tags: ["React Native", "Flutter", "Mobile", "4.0"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-003", name: "AI & Machine Learning", category: "Professional Courses", price: 2499, duration: "14 weeks", difficulty: "Advanced", description: "Deep learning, neural networks, computer vision, and NLP with hands-on projects", tech_tags: ["AI", "ML", "Deep Learning", "AI"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-004", name: "Data Science & Analytics", category: "Professional Courses", price: 2399, duration: "12 weeks", difficulty: "Advanced", description: "Data analysis, visualization, statistics, and machine learning for business insights", tech_tags: ["Data Science", "Analytics", "Python", "AI"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-005", name: "Cyber Security & Ethical Hacking", category: "Professional Courses", price: 2499, duration: "14 weeks", difficulty: "Advanced", description: "Network security, penetration testing, cryptography, and ethical hacking", tech_tags: ["Security", "Ethical Hacking", "Networking", "4.0"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-006", name: "Cloud Computing (AWS, Azure, GCP)", category: "Professional Courses", price: 2499, duration: "12 weeks", difficulty: "Advanced", description: "Master cloud platforms, serverless, containers, and cloud architecture", tech_tags: ["AWS", "Azure", "Cloud", "4.0"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-007", name: "DevOps Fundamentals", category: "Professional Courses", price: 2299, duration: "10 weeks", difficulty: "Intermediate", description: "CI/CD pipelines, Docker, Kubernetes, automation, and DevOps culture", tech_tags: ["DevOps", "Docker", "Kubernetes", "Automation"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-008", name: "Internet of Things (IoT)", category: "Professional Courses", price: 2299, duration: "10 weeks", difficulty: "Intermediate", description: "IoT architecture, sensors, Arduino, Raspberry Pi, and cloud integration", tech_tags: ["IoT", "Arduino", "Sensors", "4.0"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-009", name: "Robotics with Python", category: "Professional Courses", price: 2499, duration: "12 weeks", difficulty: "Advanced", description: "Robot programming, computer vision, path planning, and autonomous systems", tech_tags: ["Robotics", "Python", "Automation", "AI"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-010", name: "Blockchain Development", category: "Professional Courses", price: 2499, duration: "12 weeks", difficulty: "Advanced", description: "Smart contracts, DApps, Ethereum, Solidity, and Web3 development", tech_tags: ["Blockchain", "Web3", "Solidity", "4.0"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-011", name: "AR/VR Development", category: "Professional Courses", price: 2499, duration: "12 weeks", difficulty: "Advanced", description: "Augmented and virtual reality apps with Unity and Unreal Engine", tech_tags: ["AR", "VR", "Unity", "Metaverse"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-012", name: "UI/UX Design & Prototyping", category: "Professional Courses", price: 1999, duration: "8 weeks", difficulty: "Intermediate", description: "User interface design, user experience, Figma, prototyping, and usability testing", tech_tags: ["UI/UX", "Figma", "Design"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-013", name: "Game Development (Unity + Unreal)", category: "Professional Courses", price: 2399, duration: "14 weeks", difficulty: "Advanced", description: "2D and 3D game development with Unity and Unreal Engine", tech_tags: ["Game Dev", "Unity", "Unreal", "AI"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-014", name: "Embedded Systems (ECE Special)", category: "Professional Courses", price: 2299, duration: "10 weeks", difficulty: "Advanced", description: "Microcontrollers, RTOS, embedded C, IoT devices, and hardware programming", tech_tags: ["Embedded", "IoT", "Hardware", "4.0"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-015", name: "VLSI Design & Verification", category: "Professional Courses", price: 2299, duration: "12 weeks", difficulty: "Advanced", description: "Digital design, Verilog, FPGA, ASIC design flow, and verification", tech_tags: ["VLSI", "FPGA", "Hardware"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-016", name: "3D Animation & Motion Design", category: "Professional Courses", price: 2199, duration: "10 weeks", difficulty: "Intermediate", description: "Blender, Maya, 3D modeling, animation, and motion graphics", tech_tags: ["3D", "Animation", "Design"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-017", name: "Artificial Intelligence 4.0", category: "4.0 Technologies", price: 2499, duration: "14 weeks", difficulty: "Advanced", description: "Next-gen AI including LLMs, generative AI, transformers, and AGI concepts", tech_tags: ["AI 4.0", "LLM", "Generative AI", "AI"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-018", name: "Digital Marketing + SEO", category: "Professional Courses", price: 1999, duration: "8 weeks", difficulty: "Beginner", description: "SEO, SEM, social media marketing, content marketing, and analytics", tech_tags: ["Marketing", "SEO", "Digital"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-019", name: "Web 4.0 & Metaverse Technologies", category: "4.0 Technologies", price: 2499, duration: "12 weeks", difficulty: "Advanced", description: "Decentralized web, metaverse platforms, VR integration, and Web3", tech_tags: ["Web 4.0", "Metaverse", "VR", "4.0"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-020", name: "Chatbot & Voice AI Systems", category: "AI Development", price: 2399, duration: "10 weeks", difficulty: "Advanced", description: "Conversational AI, NLP, voice assistants, and chatbot development", tech_tags: ["Chatbot", "Voice AI", "NLP", "AI"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-021", name: "Big Data Engineering", category: "Professional Courses", price: 2399, duration: "12 weeks", difficulty: "Advanced", description: "Hadoop, Spark, data pipelines, streaming, and big data analytics", tech_tags: ["Big Data", "Spark", "Analytics", "AI"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-022", name: "Cloud Native Applications", category: "Professional Courses", price: 2299, duration: "10 weeks", difficulty: "Advanced", description: "Microservices, containers, service mesh, and cloud-native architecture", tech_tags: ["Cloud Native", "Microservices", "Kubernetes", "4.0"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-023", name: "Edge Computing", category: "4.0 Technologies", price: 2199, duration: "8 weeks", difficulty: "Advanced", description: "Edge AI, fog computing, distributed systems, and IoT edge processing", tech_tags: ["Edge Computing", "IoT", "AI", "4.0"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-024", name: "Automation with Python", category: "Professional Courses", price: 1999, duration: "8 weeks", difficulty: "Intermediate", description: "Task automation, web scraping, process automation, and Python scripting", tech_tags: ["Automation", "Python", "Scripting"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-025", name: "RPA (Robotic Process Automation)", category: "Professional Courses", price: 2399, duration: "10 weeks", difficulty: "Advanced", description: "UiPath, Blue Prism, workflow automation, and business process automation", tech_tags: ["RPA", "Automation", "Business", "4.0"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-026", name: "Computer Vision Projects", category: "AI Development", price: 2499, duration: "12 weeks", difficulty: "Advanced", description: "Image processing, object detection, facial recognition, and CV applications", tech_tags: ["Computer Vision", "Deep Learning", "AI", "AI"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-027", name: "Natural Language Processing", category: "AI Development", price: 2499, duration: "12 weeks", difficulty: "Advanced", description: "Text processing, sentiment analysis, LLMs, and NLP applications", tech_tags: ["NLP", "LLM", "Text Processing", "AI"], instructor: "SBG LABS", is_featured: true },
  { id: "pro-028", name: "Drone Technology (AI Integrated)", category: "4.0 Technologies", price: 2399, duration: "10 weeks", difficulty: "Advanced", description: "UAV programming, autonomous flight, computer vision for drones, and AI integration", tech_tags: ["Drones", "UAV", "AI", "4.0"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-029", name: "Renewable Tech & Smart Grids", category: "4.0 Technologies", price: 2299, duration: "10 weeks", difficulty: "Advanced", description: "Solar, wind energy systems, smart grid technology, and IoT integration", tech_tags: ["Renewable", "Smart Grid", "IoT", "4.0"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-030", name: "Startup & Project Management", category: "Professional Courses", price: 1999, duration: "8 weeks", difficulty: "Intermediate", description: "Agile, Scrum, product management, startup lifecycle, and funding", tech_tags: ["Management", "Startup", "Agile"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-031", name: "Software Testing & QA", category: "Professional Courses", price: 1899, duration: "8 weeks", difficulty: "Intermediate", description: "Manual and automated testing, Selenium, test strategies, and QA processes", tech_tags: ["Testing", "QA", "Selenium"], instructor: "SBG LABS", is_featured: false },
  { id: "pro-032", name: "Git, GitHub & Version Control", category: "Professional Courses", price: 1499, duration: "4 weeks", difficulty: "Beginner", description: "Version control, Git workflows, GitHub, collaboration, and open source", tech_tags: ["Git", "GitHub", "DevOps"], instructor: "SBG LABS", is_featured: false },
];

// Helper functions
export const getCategories = (): string[] => {
  return Array.from(new Set(coursesData.map(c => c.category)));
};

export const getCoursesByCategory = (category: string): Course[] => {
  return coursesData.filter(c => c.category === category);
};

export const searchCourses = (query: string): Course[] => {
  const lowercaseQuery = query.toLowerCase();
  return coursesData.filter(c => 
    c.name.toLowerCase().includes(lowercaseQuery) ||
    c.description.toLowerCase().includes(lowercaseQuery) ||
    c.tech_tags.some(t => t.toLowerCase().includes(lowercaseQuery)) ||
    c.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterByPrice = (minPrice: number, maxPrice: number): Course[] => {
  return coursesData.filter(c => c.price >= minPrice && c.price <= maxPrice);
};

export const filterByDifficulty = (difficulty: string): Course[] => {
  return coursesData.filter(c => c.difficulty === difficulty);
};

export const getFeaturedCourses = (): Course[] => {
  return coursesData.filter(c => c.is_featured);
};

export const getAICourses = (): Course[] => {
  return coursesData.filter(c => c.tech_tags.includes("AI") || c.category === "AI Development");
};

export const get4_0Courses = (): Course[] => {
  return coursesData.filter(c => c.tech_tags.includes("4.0") || c.category === "4.0 Technologies");
};
