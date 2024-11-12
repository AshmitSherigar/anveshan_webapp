import { Component, OnInit } from '@angular/core';
import { Init } from 'v8';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Concept {
  name: string;
  subtopics: string[];
}

interface ConceptSection {
  title: string;
  concepts: Concept[];
}

interface ResearchTopic {
  title: string;
  description: string;
  subtopics: string[];
  papers: string[];
  status: 'Active' | 'Emerging' | 'In Progress' | 'Completed';
}

interface ResearchArea {
  area: string;
  topics: ResearchTopic[];
}


@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss'
})
export class ResourcesComponent implements OnInit {
  activeTab: 'concept-map' | 'research' = 'concept-map';

  conceptMap: ConceptSection[] = [
    {
      title: "Foundations",
      concepts: [
        {
          name: "Mathematics",
          subtopics: ["Linear Algebra", "Calculus", "Statistics", "Probability"]
        },
        {
          name: "Programming",
          subtopics: ["Python", "Data Structures", "Algorithms"]
        }
      ]
    },
    {
      title: "Machine Learning",
      concepts: [
        {
          name: "Supervised Learning",
          subtopics: ["Classification", "Regression", "Neural Networks"]
        },
        {
          name: "Unsupervised Learning",
          subtopics: ["Clustering", "Dimensionality Reduction"]
        }
      ]
    },
    {
      title: "Deep Learning",
      concepts: [
        {
          name: "Neural Networks",
          subtopics: ["CNNs", "RNNs", "Transformers"]
        },
        {
          name: "Applications",
          subtopics: ["Computer Vision", "NLP", "Reinforcement Learning"]
        }
      ]
    }
  ];


  researchTopics: ResearchArea[] = [
    {
      area: "Problem Identification and Statement",
      topics: [
        {
          title: "Identifying Research Gaps",
          description: "How to spot gaps in existing literature and formulate relevant research questions.",
          subtopics: [
            "Surveying Existing Research",
            "Identifying Open Problems",
            "Formulating Research Questions"
          ],
          papers: ["A Survey of Research Gaps", "Identifying Research Questions in ML", "Review of AI Research Trends"],
          status: "Active"
        },
        {
          title: "Formulating Problem Statements",
          description: "Creating clear and concise problem statements based on identified gaps.",
          subtopics: [
            "Problem Formulation Techniques",
            "Defining Scope and Constraints",
            "Refining Research Objectives"
          ],
          papers: ["Problem Statements in AI Research", "Writing Effective Research Proposals"],
          status: "In Progress"
        }
      ]
    },
    {
      area: "Literature Review",
      topics: [
        {
          title: "Conducting Systematic Literature Reviews",
          description: "Methodologies for conducting comprehensive reviews of existing research.",
          subtopics: [
            "Search Strategies",
            "Inclusion and Exclusion Criteria",
            "Data Extraction and Analysis"
          ],
          papers: ["Systematic Review Methodology", "Best Practices in Literature Review", "AI Literature Review Guidelines"],
          status: "Active"
        },
        {
          title: "Synthesis of Research",
          description: "Synthesizing findings from the literature and identifying trends.",
          subtopics: [
            "Qualitative vs Quantitative Synthesis",
            "Meta-analysis Techniques",
            "Critical Analysis of Findings"
          ],
          papers: ["Meta-analysis in AI Research", "Synthesizing Results from Literature"],
          status: "Emerging"
        }
      ]
    },
    {
      area: "Research Design and Methodology",
      topics: [
        {
          title: "Choosing Research Methodologies",
          description: "Selecting the appropriate research methodology for different types of studies.",
          subtopics: [
            "Qualitative Research Methods",
            "Quantitative Research Methods",
            "Mixed Methods Approach"
          ],
          papers: ["Choosing Research Methodology", "Qualitative vs Quantitative Research in AI"],
          status: "In Progress"
        },
        {
          title: "Experiment Design and Validation",
          description: "Designing experiments and validation methods for research studies.",
          subtopics: [
            "Hypothesis Testing",
            "Designing Control Groups",
            "Validation Metrics"
          ],
          papers: ["Experimental Design in AI", "Validating AI Models", "Best Practices in Experimentation"],
          status: "Active"
        }
      ]
    },
    {
      area: "Results and Analysis",
      topics: [
        {
          title: "Data Collection and Management",
          description: "Best practices for collecting and managing research data.",
          subtopics: [
            "Data Collection Tools",
            "Data Quality Assurance",
            "Data Preprocessing Techniques"
          ],
          papers: ["Data Collection in Research", "Data Management Practices in AI"],
          status: "Active"
        },
        {
          title: "Statistical Analysis and Inference",
          description: "Analyzing results using statistical methods to draw meaningful conclusions.",
          subtopics: [
            "Statistical Testing",
            "Inference Techniques",
            "Dealing with Outliers"
          ],
          papers: ["Statistical Methods in AI", "Inference Techniques in Machine Learning", "Outliers and Statistical Models"],
          status: "Emerging"
        }
      ]
    },
    {
      area: "Writing and Presentation",
      topics: [
        {
          title: "Writing Research Papers",
          description: "Guidelines and best practices for writing research papers for publication.",
          subtopics: [
            "Structuring Research Papers",
            "Writing Abstracts and Introductions",
            "Referencing and Citations"
          ],
          papers: ["Writing Research Papers in AI", "How to Publish Papers", "Common Mistakes in Research Writing"],
          status: "Active"
        },
        {
          title: "Presenting Research Findings",
          description: "Best practices for presenting research findings in conferences and seminars.",
          subtopics: [
            "Creating Effective Slides",
            "Delivering Clear Presentations",
            "Handling Q&A Sessions"
          ],
          papers: ["Effective Conference Presentations", "Public Speaking for Researchers"],
          status: "In Progress"
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  setActiveTab(tab: 'concept-map' | 'research'): void {
    this.activeTab = tab;
  }
}