import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Event {
  title: string;
  description: string;
  date: Date;
  time: string;
  venue: string;
  highlights: string[];
  additionalInfo?: string;
}



@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule , MatIconModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  upcomingEvents: Event[] = [];
  pastEvents: Event[] = [];
  currentDate = new Date();

  events: Event[] = [
    {
      title: 'Opening Ceremony of ANVESHAN',
      description: 'Join us as we officially launch ANVESHAN, the AI, ML, and Research Club at The National Institute of Engineering! The event will feature keynote speakers, introductions to upcoming club activities, and a showcase of some of our exciting projects.',
      date: new Date('2024-10-20'),
      time: '10:00 AM - 12:00 PM',
      venue: 'NIE Auditorium, Mysuru',
      highlights: [
        'Keynote address by industry experts',
        'Introduction to ANVESHAN\'s vision and mission',
        'Showcase of ongoing projects',
        'Networking session'
      ]
    },
    {
      title: 'Conference / Symposium: Paper Presentation on AI and ML Innovations',
      description: 'We are hosting a conference on AI and ML Innovations. The symposium will feature paper presentations on cutting-edge research and emerging trends in AI and ML.',
      date: new Date('2024-12-10'),
      time: '9:00 AM - 5:00 PM',
      venue: 'NIE Conference Hall, Mysuru',
      highlights: [
        'Paper presentations on AI/ML advancements',
        'Interactive Q&A sessions',
        'Panel discussions with industry experts',
        'Best paper awards'
      ],
      additionalInfo: 'Call for Papers: Submission deadline is November 25, 2024.'
    },
    {
      title: 'Workshop: AI in the Real World with an Ex-NVIDIA Expert',
      description: 'This hands-on workshop will focus on practical AI applications, led by an Ex-NVIDIA AI Expert. Engage in real-world projects under expert guidance.',
      date: new Date('2025-01-15'),
      time: '10:00 AM - 4:00 PM',
      venue: 'NIE Computer Science Lab',
      highlights: [
        'Introduction to advanced AI techniques',
        'Hands-on sessions on deep learning with NVIDIA hardware',
        'Networking with industry professionals'
      ],
      additionalInfo: 'Limited Seats Available: Register by January 5, 2025.'
    },
    {
      title: 'Hackathon: Innovate Next! 48-Hour Hackathon',
      description: 'Join ANVESHAN\'s first-ever 48-Hour Hackathon! Showcase your coding skills and come up with innovative solutions in AI, ML, and tech innovation.',
      date: new Date('2025-02-25'),
      time: '9:00 AM (Feb 25) - 9:00 AM (Feb 27)',
      venue: 'NIE Innovation Lab',
      highlights: [
        'AI and ML-based problem statements',
        'Mentorship from industry experts',
        'Exciting prizes for top teams',
        'Live coding and rapid prototyping',
        'Closing ceremony with awards'
      ],
      additionalInfo: 'Team Registration: Opens on February 1, 2025.'
    }
  ];

  ngOnInit() {
    this.sortEvents();
  }

  private sortEvents() {
    this.events.forEach(event => {
      if (event.date > this.currentDate) {
        this.upcomingEvents.push(event);
      } else {
        this.pastEvents.push(event);
      }
    });

    // Sort upcoming events by date (ascending)
    this.upcomingEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
    // Sort past events by date (descending)
    this.pastEvents.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
}