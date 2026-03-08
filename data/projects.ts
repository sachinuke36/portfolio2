

export const projects = [
    {
    date: "March 2026 - March 2026",
    level: "PROJECT",
    location: "brAIn",
    role: "AI-powered knowledge assistant",
    company: "Personal Project",
    points: [
      "Developed brAIn, an AI-powered knowledge assistant enabling users to upload PDFs and query documents using natural language.",
      "Implemented Retrieval-Augmented Generation (RAG) with a vector database for semantic search and context-aware responses.",
      "Built an intelligent query routing system to dynamically handle PDF-based queries, web page queries, and general AI questions.",
      "Integrated web content querying and document chunk retrieval to improve answer accuracy and contextual understanding.",
      "Designed a ChatGPT-style interface with streaming AI responses and Markdown formatting for an interactive user experience."
    ],
    github:"https://github.com/sachinuke36/brain-ai",
    live:"",
    tags:["LLM", "RAG", "Langchain", "React Native","FastAPI", "Sentence Transformers" ,"TypeScript", "Groq", 'Vector Store', 'Web scrapping'] 
    },
    {
    date: "March 2026 - March 2026",
    level: "PROJECT",
    location: "Intelligence System",
    role: "ML-Based Vendor Invoice Intelligence System",
    company: "Personal Project",
    points: [
      "Built a machine learning system for vendor invoice analysis to predict freight costs and detect potentially suspicious invoices.",
      "Developed a freight cost prediction module using Linear Regression, Decision Tree, and Random Forest models with automatic model selection based on Mean Absolute Error (MAE).",
      "Implemented an invoice anomaly detection pipeline to flag mismatched invoice totals and abnormal receiving delays using a Random Forest Classifier.",
      "Applied feature scaling (StandardScaler) and hyperparameter tuning with GridSearchCV to optimize model performance.",
      "Designed a SQLite-backed data pipeline for storing invoice records and supporting ML model training and inference."
    ],
    github:"https://github.com/sachinuke36/freight_cost_prediction",
    live:"",
    tags:["ML", "SQL", "Linear Regression", "Random Forest","GridSearchCV", "Decision Tree" ,"Python", "Numpy", 'Analysis'] 
    },
    {
    date: "Feb 2026 - Feb 2026",
    level: "PROJECT",
    location: "Muscle Fatigue Monitor",
    role: "Muscle Fatigue Monitor with IMU sensors",
    company: "BTP",
    points: [
      "BLE Device Scanning & Connection: Automatically discovers and connects to nearby BLE-enabled wearable sensors",
      "Real-time Gyroscope Monitoring: Displays live 3-axis gyroscope data (Gx, Gy, Gz) in degrees per second",
      "Real-time Feedback: Visual indicators showing fatigue percentage and detection status",
      "Fatigue Detection Algorithm: Uses advanced signal processing techniques including: FIR Bandpass filtering for tremor isolation, RMS (Root Mean Square) calculation for signal magnitude, Z-score normalization for statistical analysis, CUSUM (Cumulative Sum) algorithm for change detection"
    ],
    github:"https://github.com/sachinuke36/muscle-fatigue-detection-v3/tree/main/client",
    live:"",
    tags:["App development", "BLE", "Statistics", "React Native", "TypeScript"] 
    },
      {
    date: "Jan 2026 - Jan 2026",
    level: "PROJECT",
    location: "Distributed System",
    role: "Distributed Video Processing System",
    company: "Personal Project",
    points: [
      "Built distributed processing using Node.js, Redis and BullMQ with async workers.",
      "Implemented real-time job progress tracking using Redis Pub/Sub.",
      "Automated video transcoding, thumbnails and subtitles with FFmpeg and Whisper.",
      "Designed fault-tolerant architecture with Docker-ready workers."
    ],
    github:"https://github.com/sachinuke36/video-transcoder",
    live:"",
    tags:["Distributed Systems", "Node.js", "Redis", "BullMQ", "FFmpeg", "Whisper", "Docker"]
  },
  {
    date: "Jan 2026 - Jan 2026",
    level: "PROJECT",
    location: "ML project",
    role: "Spam Email Detection System",
    company: "Personal Project",
    points: [
      "Built an end-to-end spam email classification system using classical machine learning.",
      "Preprocessed email texts and engineered features like TF-IDF vectors and email metadata.",
      "Trained and evaluated multiple classifiers including Logistic Regression, SVM and Random Forest.",
      "Achieved high accuracy and low false positive rates on a benchmark email dataset."
    ],
    github:"https://github.com/sachinuke36/email_spam_detector",
    live:"",
    tags:["ML","TF-IDF", "Logistic Regression","vectors" ,"SVM" ,"Python", "Pandas", "Scikit-learn", "NumPy"]
  },
  {
    date: "Jan 2025 - Jan 2026",
    level: "PROJECT",
    location: "Realtime App",
    role: "Connect – Chat & Video Platform",
    company: "Personal Project",
    points: [
      "Developed realtime chat and video calling using React, Express, WebRTC and Socket.io.",
      "Implemented authentication using JWT and OAuth.",
      "Built group chats, friend requests and search features.",
      "Designed responsive UI using Tailwind CSS."
    ],
    github:"https://github.com/sachinuke36/connect",
    live:"https://connect-chat-app-pern.netlify.app/",
    tags:["React", "Express", "WebRTC", "Socket.io", "JWT", "OAuth", "Tailwind CSS"]
  },
  {
    date: "Nov 2025 - Dec 2025",
    level: "PROJECT",
    location: "App development",
    role: "Finance Tracker App",
    company: "Personal Project",
    points: [
      "Built a React Native app to track personal finances, including income and expenses, for 1 user at a time.",
      "Implemented Firebase Authentication and Firestore to securely manage user data and enable 1:1 account storage.",
      "Integrated AsyncStorage to ensure transaction data persists locally across 100% of app restarts.",
      "Designed a clean, dark-themed UI with 20+ category icons and a responsive layout for a smooth user experience."
    ],
    github:"https://github.com/sachinuke36/expense-tracker",
    live:"",
    tags:["React", "React Native", "Nativewind", "TypeScript", "Firebase", "AsyncStorage"]
  },
  {
    date: "Oct 2024",
    level: "PROJECT",
    location: "Web App",
    role: "FoodyZone – Food Delivery Platform",
    company: "Personal Project",
    points: [
      "Built fullstack food delivery platform with Next.js and MongoDB handling 5000+ orders.",
      "Implemented Google authentication and Stripe payments.",
      "Created admin dashboard managing 100+ dishes.",
      "Added realtime order tracking system."
    ],
    github:"https://github.com/sachinuke36/foodyZone",
    live:"https://foody-zone-one.vercel.app/",
    tags:["Next.js", "MongoDB", "Google Auth", "Stripe", "Admin Dashboard", "Realtime Tracking"]
  }
]