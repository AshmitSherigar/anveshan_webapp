// Resources.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roadmap = [
  {
    label: "Foundations",
    subtopics: ["Mathematics", "Programming Basics", "Logic Building", "Data Structures"]
  },
  {
    label: "Version Control & Tools",
    subtopics: ["Git & GitHub", "CLI Tools", "VS Code", "Debugging"]
  },
  {
    label: "Data Handling",
    subtopics: ["Data Cleaning", "EDA", "Data Wrangling", "Visualization"]
  },
  {
    label: "Statistics & Probability",
    subtopics: ["Descriptive Stats", "Probability", "Distributions", "Hypothesis Testing"]
  },
  {
    label: "Machine Learning",
    subtopics: ["Linear Regression", "Classification", "Clustering", "Feature Engineering"]
  },
  {
    label: "Model Evaluation",
    subtopics: ["Metrics", "Bias-Variance", "Cross-Validation", "Hyperparameter Tuning"]
  },
  {
    label: "Deep Learning",
    subtopics: ["Neural Networks", "CNNs", "RNNs", "Transfer Learning"]
  },
  {
    label: "NLP & Transformers",
    subtopics: ["Tokenization", "RNN vs Transformer", "BERT", "LLMs"]
  },
  {
    label: "Computer Vision",
    subtopics: ["Image Prep", "CNN Architectures", "YOLO", "Image Augmentation"]
  },
  {
    label: "MLOps & Deployment",
    subtopics: ["Flask/FastAPI", "Docker", "CI/CD", "Monitoring"]
  },
  {
    label: "Project Portfolio",
    subtopics: ["End-to-End Projects", "Capstone", "Team Work", "GitHub Showcase"]
  }
];

const Resources = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray(".timeline-node");
      const totalWidth = containerRef.current.scrollWidth;

      // Horizontal scroll setup
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

      // Progress line animation
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

      // Dot scaling on scroll
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
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen bg-white py-20 overflow-hidden">
      <h2 className="text-5xl font-bold text-center text-black mb-20">AI & Machine Learning Explorer</h2>

      <div
        ref={containerRef}
        className={`flex w-[${roadmap.length * 100}vw] items-center h-[90vh] relative`}
      >
        {/* Timeline line */}
        <div className="absolute top-[calc(50%-3px)] left-0 w-full h-[6px] bg-gray-300 z-0">
          <div className="progress-line h-full bg-black transform origin-left scale-x-0"></div>
        </div>

        {roadmap.map((topic, index) => (
          <div
            key={index}
            className="timeline-node w-[50vw] flex-shrink-0 flex flex-col items-center justify-center px-6 relative"
          >
            <div className="timeline-dot w-9 h-9 bg-gray-700 rounded-full absolute top-[calc(50%-16px)] left-1/2 transform -translate-x-1/2 z-10 shadow-md"></div>

            <h3 className="text-3xl font-bold text-black mb-70 z-10">{topic.label}</h3>
            <div className="bg-white/90 p-6 rounded-2xl shadow-lg text-black z-10 w-[80%] max-w-md border border-gray-200">
              <ul className="space-y-3">
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
