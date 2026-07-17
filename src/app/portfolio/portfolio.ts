import { Component, ElementRef, AfterViewInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

interface Education {
  title: string;
  institution: string;
  period: string;
  credential?: string;
  credentialUrl?: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements AfterViewInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly photoUrl = '';
  readonly cvUrl = '/CV_SebastianVega.pdf';
  readonly email = 'Sebastian.vegar2015@gmail.com';
  readonly phone = '+57 313 389 0068';
  readonly location = 'Colombia';
  readonly linkedinUrl = 'https://www.linkedin.com/in/johan-sebastian-vega-ruiz-b1292011b';
  readonly githubUrl = 'https://github.com/SebastianVega4';

  readonly skills: string[] = [
    'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Node.js',
    'Python', 'Java', 'SQL', 'C++', 'Git/GitHub', 'Docker',
    'Firebase', 'Linux', 'Arduino', 'ESP32'
  ];

  readonly projects: Project[] = [
    {
      title: 'Music UPTC',
      description: 'Plataforma para que estudiantes voten por canciones a reproducir en el restaurante estudiantil. Asociado con UPTC.',
      url: 'https://sebastianvega4.github.io/Music_Uptc_Sogamoso',
      tags: ['Angular', 'TypeScript', 'Python']
    },
    {
      title: 'Web ByteBattle',
      description: 'Retos de programación para estudiantes con remuneración. Plataforma de competencias de código.',
      url: 'https://github.com/SebastianVega4',
      tags: ['Angular', 'Node.js', 'TypeScript']
    },
    {
      title: 'Triatlon UPTC 2025-2',
      description: 'Gestión y edición de la segunda edición de la triatlón UPTC-Sogamoso. Clasificación en vivo.',
      url: 'https://github.com/SebastianVega4',
      tags: ['Angular', 'GitHub']
    },
    {
      title: 'Semana Técnica Geología',
      description: 'Aplicación web para la XVII Semana Técnica de Geología en UPTC Sogamoso.',
      url: 'https://xviisemanatecnicadegeologia.com',
      tags: ['Angular', 'TypeScript']
    }
  ];

  readonly education: Education[] = [
    {
      title: 'Ingeniería de Sistemas',
      institution: 'Universidad Pedagógica y Tecnológica de Colombia',
      period: 'ago. 2020 – dic. 2026'
    },
    {
      title: 'English Certificate B2',
      institution: 'EF',
      period: 'mar. 2026',
      credential: 'Z4ULcb',
      credentialUrl: 'https://cert.efset.org/Z4ULcb'
    },
    {
      title: 'Emprendimiento G5 - ONE',
      institution: 'Alura Latam',
      period: 'jul. 2023',
      credential: 'ac1bfff1-1704-4f04-8706-0cc58a6646ed',
      credentialUrl: 'https://app.aluracursos.com/degree/certificate/ac1bfff1-1704-4f04-8706-0cc58a6646ed'
    }
  ];

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    el.querySelectorAll('.reveal').forEach((s: Element) => observer.observe(s));
  }
}
