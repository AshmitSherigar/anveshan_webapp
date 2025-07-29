// Resources.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roadmap = [
  {
    label: "Foundations",
    description: "Build strong basics in programming and problem solving.",
    subtopics: [
      "Mathematics",
      "Programming Basics",
      "Logic Building",
      "Data Structures"
    ]
  },
  {
    label: "Version Control & Tools",
    description: "Learn essential tools that support development workflows.",
    subtopics: [
      "Git – Tracks changes in code, enables collaboration.",
      "GitHub – Cloud platform to host and share Git repositories.",
      "CLI Tools – Command Line Interfaces help automate tasks quickly.",
      "VS Code – Lightweight code editor with powerful extensions.",
      "Debugging – The process of identifying and fixing issues in code."
    ]
  },
  {
    label: "Data Handling",
    description: "Understand how to work with, clean, and analyze data.",
    subtopics: [
      "Data Cleaning – Removing inconsistencies and errors from data.",
      "EDA – Exploratory Data Analysis helps understand data patterns.",
      "Data Wrangling – Reshaping and organizing data.",
      "Visualization – Turning data into graphs and charts for insights."
    ]
  },
  {
    label: "Statistics & Probability",
    description: "Gain insights into data using statistical thinking.",
    subtopics: [
      "Descriptive Stats – Mean, median, mode, etc.",
      "Probability – The mathematics of uncertainty.",
      "Distributions – Normal, binomial, and others.",
      "Hypothesis Testing – Making decisions from data."
    ]
  },
  {
    label: "Machine Learning",
    description: "Learn core machine learning algorithms and concepts.",
    subtopics: [
      "Linear Regression – Predict continuous values.",
      "Classification – Predict categories (e.g., spam vs not spam).",
      "Clustering – Group similar items together.",
      "Feature Engineering – Creating better input features for models."
    ]
  },
  {
    label: "Model Evaluation",
    description: "Evaluate model performance using robust techniques.",
    subtopics: [
      "Metrics – Accuracy, precision, recall, etc.",
      "Bias-Variance – Balancing simplicity and performance.",
      "Cross-Validation – Ensures reliable performance estimation.",
      "Hyperparameter Tuning – Optimizing model settings."
    ]
  },
  {
    label: "Deep Learning",
    description: "Explore how deep neural networks work and are applied.",
    subtopics: [
      "Neural Networks – Brain-inspired models.",
      "CNNs – Great for image recognition.",
      "RNNs – Designed for sequential data.",
      "Transfer Learning – Reusing models on new tasks."
    ]
  },
  {
    label: "NLP & Transformers",
    description: "Work with text data and state-of-the-art language models.",
    subtopics: [
      "Tokenization – Splitting text into words or tokens.",
      "RNN vs Transformer – Evolution of language models.",
      "BERT – A popular pre-trained NLP model.",
      "LLMs – Large Language Models like GPT, PaLM, LLaMA."
    ]
  },
  {
    label: "Computer Vision",
    description: "Dive into image analysis using modern computer vision techniques.",
    subtopics: [
      "Image Prep – Preprocessing images for ML.",
      "CNN Architectures – ResNet, VGG, etc.",
      "YOLO – Real-time object detection.",
      "Image Augmentation – Making data more diverse."
    ]
  },
  {
    label: "MLOps & Deployment",
    description: "Deploy and manage ML models in production environments.",
    subtopics: [
      "Flask/FastAPI – Lightweight web servers for ML apps.",
      "Docker – Containerization for reproducibility.",
      "CI/CD – Automating deployment and testing.",
      "Monitoring – Keeping track of your models' behavior live."
    ]
  },
  {
    label: "Project Portfolio",
    description: "Build and showcase real-world ML projects.",
    subtopics: [
      "End-to-End Projects – From data to deployment.",
      "Capstone – A big, well-documented final project.",
      "Team Work – Collaborative project development.",
      "GitHub Showcase – Presenting your work to the world."
    ]
  }
];

const Resources = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray(".timeline-node");
      const totalWidth = containerRef.current.scrollWidth;

      const horizontalScrollTween = gsap.to(nodes, {
        xPercent: -100 * (nodes.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (nodes.length - 1),
          end: () => `+=${totalWidth}`,
          id: "timelineScroll"
        }
      });

      gsap.to(".progress-line", {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1
        }
      });

      // Dot animations
      nodes.forEach((node, i) => {
        const dot = node.querySelector(".timeline-dot");

        gsap.fromTo(dot,
          { scale: 0.5, opacity: 0.5 },
          {
            scale: 1.6,
            opacity: 1,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: node,
              containerAnimation: horizontalScrollTween,
              start: "left center",
              end: "right center",
              toggleActions: "play reverse play reverse",
              scrub: true
            }
          });

        // Fade-up animation for content
        gsap.fromTo(node,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              containerAnimation: horizontalScrollTween,
              start: "left center",
              toggleActions: "play none none reverse"
            }
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen bg-white py-20 overflow-hidden">
      <h2 className="text-5xl font-bold text-center text-black mb-20">
        AI & Machine Learning Explorer
      </h2>

      <div
        ref={containerRef}
        className="flex w-[5500px] items-center h-[90vh] relative space-x-20 px-10"
      >
        {/* Timeline Line */}
        <div className="absolute top-[calc(50%-3px)] left-0 w-full h-[6px] bg-gray-300 z-0">
          <div className="progress-line h-full bg-black transform origin-left scale-x-0"></div>
        </div>

        {roadmap.map((topic, index) => (
          <div
            key={index}
            className="timeline-node w-[45vw] h-[80vh] flex-shrink-0 flex flex-col items-center justify-center px-6 relative opacity-0"
          >
            <div className="timeline-dot w-7 h-7 bg-gray-700 rounded-full absolute top-[calc(50%-16px)] left-1/2 transform -translate-x-1/2 z-10 shadow-md"></div>
            <div className="absolute top-[10%] flex flex-col items-center justify-center shadow-md">
              <h3 className=" text-3xl font-bold text-black mb-4 z-10 text-center">{topic.label}</h3>
              <p className="text-md text-gray-700 mb-6 text-center max-w-xs z-10">{topic.description}</p>
            </div>
            <div className="absolute top-[55%] bg-white/90 p-6 rounded-2xl shadow-lg text-black z-10 w-[80%] max-w-md border border-gray-200">
              <ul className="space-y-2">
                {topic.subtopics.map((sub, idx) => (
                  <li key={idx} className="text-lg font-medium">
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
