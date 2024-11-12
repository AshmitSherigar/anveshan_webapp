import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from '../subscribe/subscribe.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule , SubscribeComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  imageUrl: string = '../../../assets/blog/fourier_series.gif';

  // Blog content data
  blogTitle: string = 'Machine Learning vs. Traditional Methods: When to Choose ML for Complex Data';
  introTitle: string = 'Introduction';
  introText: string = 'Machine learning (ML) is more than just a technological trend—it\'s a transformative tool that\'s impacting industries from healthcare to finance. But the question remains: why is machine learning so crucial today? And when should you choose ML over traditional methods? To answer these questions, we need to explore the evolution of data analysis and the conditions where machine learning provides an advantage.';

  historicalTitle: string = 'Historical Context: Traditional Data Analysis vs. Machine Learning';
  historicalText: string = 'Before the rise of machine learning, data was typically analyzed using classical methods such as regression models and the Fourier series. These methods have been invaluable in helping us make sense of data in fields like signal processing, physics, and economics.';

  fourierTitle: string = 'Fourier Series: A Traditional Approach to Periodic Data';
  fourierText: string = 'The Fourier series has long been a cornerstone in fields like signal processing because it is specifically designed for analyzing periodic data. It works by transforming a signal from the time domain to the frequency domain, allowing us to study its periodic components.';
  fourierImageCaption: string = 'Figure 1. Fourier series approximation of square wave';

  mlWhenToChooseTitle: string = 'When to Choose Machine Learning Over Traditional Methods';
  mlWhenToChooseText: string = 'While methods like the Fourier series work well for certain types of data, machine learning offers much greater flexibility and power when dealing with complex, non-periodic, or unstructured datasets...';

  mlHowWorksTitle: string = 'How Machine Learning Works';
  mlHowWorksText: string = 'Machine learning doesn\’t follow a one-size-fits-all approach. It\’s a broad field involving various techniques and algorithms that enable machines to learn from data...';

  mlApplicationsTitle: string = 'Applications of Machine Learning';
  applications: string[] = [
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Marketing'
  ];

  conclusionTitle: string = 'Conclusion';
  conclusionText: string = 'In summary, while traditional methods like Fourier series are invaluable when dealing with periodic data, machine learning offers a far more flexible and powerful way to handle the complexities of modern, unstructured data.';

  constructor() {}

  ngOnInit(): void {
    // Add any initialization logic here
  }
}
