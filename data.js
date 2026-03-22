const portfolioData = {
  personal: {
    name: "Md Shahadat Hossain",
    title: "Software Engineer (Laravel)",
    tagline: "Building scalable web applications with Laravel, MySQL & modern frontend.",
    email: "shahadathossain1563@gmail.com",
    phone: "01620925191",
    location: "Nikunja-2, Khilkhet, Dhaka-1229",
    github: "https://github.com/Shahadat-Hossain-Shanto",
    linkedin: "",  // Add your LinkedIn URL here, e.g. "https://linkedin.com/in/your-profile"
    avatar: "img/me.jpeg" // put image URL or relative path e.g. "assets/me.jpg"
  },

  services: [
    {
      icon: "fas fa-code",
      title: "Laravel Web Development",
      description: "Full-stack web applications built with PHP Laravel — clean architecture, RESTful APIs, Eloquent ORM, and robust backend logic."
    },
    {
      icon: "fas fa-paint-brush",
      title: "Frontend UI Design",
      description: "Responsive, user-friendly interfaces using HTML, CSS, Bootstrap, JavaScript, Alpine.js, and jQuery."
    },
    {
      icon: "fas fa-database",
      title: "Database Management",
      description: "MySQL & MongoDB design, query optimization, indexing, migrations, seeders, and data modeling for scalable applications."
    },
    {
      icon: "fas fa-plug",
      title: "API Development & Integration",
      description: "RESTful API development, Sanctum/Passport auth, third-party integrations including payment gateways, SMS, Firebase, and more."
    },
    {
      icon: "fas fa-server",
      title: "VPS & Server Deployment",
      description: "Linux/Ubuntu VPS setup, Nginx/Apache config, SSL (Let's Encrypt), Supervisor, firewall (UFW), and zero-downtime deployments."
    },
    {
      icon: "fas fa-chart-line",
      title: "ERP & POS Systems",
      description: "Custom ERP, POS, inventory, and business management systems with real-time tracking, multi-level roles, and reporting."
    },
    {
      icon: "fas fa-lock",
      title: "Auth & Security",
      description: "Laravel Sanctum, Passport, JWT, role-based access control (Spatie), OTP/2FA, rate limiting, and CSRF/XSS protection."
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Performance & Caching",
      description: "Redis caching, Laravel Queues, Horizon, event broadcasting, query optimization, and application profiling."
    }
  ],

  experiences: [
      {
        role: "Laravel Developer",
        company: "Softvence Delta",
        location: "Dhaka, Bangladesh",
        period: "December 2025 – Present",
        type: "Full-time",
        points: [
          "Developing and maintaining scalable Laravel applications with clean, well-structured MVC architecture.",
          "Building and consuming RESTful APIs integrated with mobile and third-party platforms.",
          "Designing normalized database schemas, writing optimized queries, and managing migrations and seeders.",
          "Implementing role-based access control, authentication (Sanctum/Passport), and application security best practices.",
          "Deploying and managing applications on VPS — configuring Nginx, SSL (Let's Encrypt), Supervisor, and UFW firewall.",
          "Collaborating with frontend and mobile teams to deliver seamless, user-focused features on schedule."
        ]
      },
      {
        role: "Software Engineer (Laravel)",
        company: "Inovex Idea Solution Limited",
        location: "Middle-Badda, Dhaka",
        period: "January 2025 – November 2025",
        type: "Full-time",
        points: [
          "Developing and maintaining scalable web applications using Laravel, MySQL, JavaScript, AJAX, jQuery, HTML, CSS, and Bootstrap.",
          "Collaborating with teams to deliver efficient, user-friendly solutions.",
          "Implementing database structures, optimizing queries, and ensuring application performance.",
          "Contributing to full-stack development, from frontend UI to backend logic and VPS deployment."
        ]
      },
      {
        role: "Software Engineer Internship (Laravel)",
        company: "Inovex Idea Solution Limited",
        location: "Middle-Badda, Dhaka",
        period: "July 2024 – December 2024",
        type: "Internship",
        points: [
          "Contributed to developing multiple web applications using Laravel, MySQL, HTML, CSS, Bootstrap, JavaScript, AJAX, and jQuery.",
          "Collaborated with a team to build responsive, user-friendly interfaces.",
          "Gained hands-on experience in full-stack development, database management, and debugging."
        ]
      }
  ],

  projects: [
    {
      title: "Adriyan Real Estate",
      description: "Company landing/portfolio website and admin dashboard to showcase services, enable appointments, and facilitate the sale of Excel templates via mailing system.",
      tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      repo: "https://github.com/Shahadat-Hossain-Shanto/adriyan",
      live: "https://adriyancre.com"
    },
    {
      title: "Digital Signage System",
      description: "Manage and display dynamic content (ads, notices, videos, images) across multiple screens in real-time with content scheduling and playlist management.",
      tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      repo: "https://github.com/Shahadat-Hossain-Shanto/Digital-Signage",
      live: "https://digitalsignage.bikroyik.com"
    },
    {
      title: "EMI Locker – Walton",
      description: "Automatically lock devices with overdue EMI payments and unlock once payment is received, with full device tracking.",
      tags: ["Laravel", "Firebase", "RESTful APIs", "MySQL"],
      repo: "",
      live: "https://emimanager.waltonbd.com"
    },
    {
      title: "Payprotect EMI Locker – SSL Wireless",
      description: "Device EMI locking system with location tracking and integrated online payment system.",
      tags: ["Laravel", "Firebase", "RESTful APIs", "jQuery"],
      repo: "",
      live: "https://ssl.bikroyik.com"
    },
    {
      title: "Online Voting System",
      description: "Secure election system for Dhaka College HSC Batch 96 with OTP verification via SMS and email for voter authentication.",
      tags: ["Laravel", "MySQL", "Bootstrap", "OTP"],
      repo: "https://github.com/Shahadat-Hossain-Shanto/voting_dc",
      live: ""
    },
    {
      title: "Raeno Technology ERP",
      description: "Custom ERP to manage device sales across RSM, ASM, TSM, Distributor, and Retailer levels with real-time tracking and inventory management.",
      tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      repo: "https://github.com/Shahadat-Hossain-Shanto/Raeno-Technology-ERP",
      live: ""
    },
    {
      title: "Bikroyik Eshop POS",
      description: "Cloud-based Point of Sale system for small/medium businesses with sales tracking, inventory management, expense monitoring, and reporting.",
      tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      repo: "https://github.com/Shahadat-Hossain-Shanto/pos-eshop",
      live: "https://eshop.bikroyik.com"
    },
    {
      title: "Vehicle Rental System",
      description: "Vehicle rental management for distributors to rent vehicles to drivers, track fuel usage, driver salaries, and rental history.",
      tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      repo: "https://github.com/Shahadat-Hossain-Shanto/vehicle_rental_system",
      live: ""
    }
  ],

  // ── PORTFOLIO DOCUMENTS ─────────────────────────────────────────────────────
  // 1. Create a folder called "portfolio/" next to index.html
  // 2. Drop your PDF files inside it
  // 3. Add each one below — they will appear as clickable cards that open the PDF
  // "cover" is optional: put a preview image path or leave ""
  portfolioDocs: [
    // Add more documents here as:
    // { title: "...", description: "...", file: "portfolio/xxx.pdf", cover: "", tags: ["..."] }
    {
      title: "CV – Md Shahadat Hossain",
      description: "My latest curriculum vitae including education, work experience, skills, and notable projects.",
      file: "portfolio/CV.pdf",
      cover: "img/me.jpeg",
      tags: ["CV", "Resume"]
    }
    // Uncomment and fill in when you have the files ready:
    // { title: "Breast Cancer Prediction Research", description: "ML research using 6 algorithms on the WDBC dataset.", file: "portfolio/breast-cancer-research.pdf", cover: "", tags: ["Python", "Machine Learning", "Research"] },
    // { title: "Raeno ERP – Technical Documentation", description: "Full technical documentation including architecture, DB schema, and API reference.", file: "portfolio/raeno-erp-docs.pdf", cover: "", tags: ["Laravel", "ERP", "Documentation"] }
  ],

  // ── SKILLS ──────────────────────────────────────────────────────────────────
  skills: {
    "PHP & Laravel Core": [
      "PHP 8.x", "Laravel 10/11", "Eloquent ORM", "Blade Templates",
      "Artisan CLI", "Service Providers", "Facades", "Middleware",
      "Form Requests", "Observers", "Events & Listeners", "Laravel Mix / Vite"
    ],
    "Authentication & Security": [
      "Laravel Sanctum", "Laravel Passport", "JWT", "Spatie Permissions",
      "Role-Based Access Control", "OTP / 2FA", "Rate Limiting",
      "CSRF Protection", "XSS Prevention", "Input Validation"
    ],
    "Frontend": [
      "HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap 5",
      "jQuery", "AJAX", "Alpine.js", "DataTables",
      "Chart.js", "Livewire (basics)"
    ],
    "Database": [
      "MySQL", "MongoDB", "Database Design", "Migrations & Seeders",
      "Query Builder", "Query Optimization", "Indexing",
      "Transactions", "Stored Procedures", "Relationships (1:1, 1:N, M:N)"
    ],
    "API & Integrations": [
      "RESTful APIs", "JSON", "API Versioning", "Postman",
      "SSLCommerz", "bKash Gateway", "Firebase",
      "SMS Gateway", "Webhook Handling", "Third-party SDKs"
    ],
    "Caching & Queues": [
      "Redis", "Laravel Queues", "Laravel Horizon",
      "Job Batching", "Scheduled Tasks (Cron)",
      "Event Broadcasting", "Laravel Echo (basics)"
    ],
    "VPS & Deployment": [
      "Linux / Ubuntu", "Nginx", "Apache",
      "VPS Setup & Hardening", "SSL – Let's Encrypt / Certbot",
      "UFW Firewall", "Supervisor", "SSH Key Auth",
      "Git Deployment", "cPanel", "Zero-Downtime Deploy",
      ".env Management", "Storage & Symlinks"
    ],
    "Version Control": [
      "Git", "GitHub", "Bitbucket",
      "Git Flow", "Pull Requests", "Branch Strategy"
    ],
    "Dev Tools": [
      "Composer", "NPM", "VS Code", "Postman",
      "Laravel Telescope", "Laravel Debugbar",
      "PHPUnit (basics)", "Docker (basics)", "Figma (reading)"
    ],
    "Languages": ["PHP", "JavaScript", "Python", "Java", "C"]
  },

  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Southeast University, Tejgaon, Dhaka",
      result: "CGPA: 3.77 / 4.00",
      year: "2024"
    },
    {
      degree: "HSC – Science",
      institution: "Milestone College, Uttara, Dhaka",
      result: "GPA: 4.58 / 5.00",
      year: "2018"
    },
    {
      degree: "SSC – Science",
      institution: "Hasan Ali Govt. High School, Chandpur",
      result: "GPA: 4.72 / 5.00",
      year: "2016"
    }
  ]
};