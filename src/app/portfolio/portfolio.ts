import { AfterViewInit, Component, ElementRef, OnDestroy, inject, signal } from '@angular/core';
import { ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Project {
  name: string;
  eyebrow: string;
  statement: string;
  impact: string;
  url: string;
  tags: string[];
  accent: string;
  image: string;
}

interface Capability {
  number: string;
  title: string;
  description: string;
}

interface LabItem {
  status: 'Activo' | 'En diseño' | 'Próximamente';
  title: string;
  description: string;
  stack: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private observer?: IntersectionObserver;

  readonly cvUrl = '/CV_SebastianVega.pdf';
  readonly profilePhotoUrl = '/Profile.jpeg';
  readonly bannerUrl = '/Banner.jpeg';
  readonly email = 'Sebastian.vegar2015@gmail.com';
  readonly linkedinUrl = 'https://www.linkedin.com/in/johan-sebastian-vega-ruiz-b1292011b';
  readonly githubUrl = 'https://github.com/SebastianVega4';
  readonly whatsappUrl = 'https://wa.me/573133890068';
  readonly menuOpen = signal(false);
  readonly formStatus = signal('');
  readonly isDark = signal(true);

  constructor() {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      this.isDark.set(false);
      document.documentElement.classList.add('light-theme');
    }
  }

  toggleTheme(): void {
    this.isDark.update(v => !v);
    if (this.isDark()) {
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  readonly capabilities: Capability[] = [
    { number: '01', title: 'Desarrollo Full Stack', description: 'Aplicaciones web completas con Angular, Spring Boot, Flask y bases de datos relacionales y NoSQL.' },
    { number: '02', title: 'Redes e Infraestructura', description: 'Configuración de servidores Linux/Windows, DNS, SMTP, protocolos TCP/IP, routing y virtualización.' },
    { number: '03', title: 'Automatización y DevOps', description: 'Procesos repetibles con Python, Docker, Git, CI/CD y administración de infraestructura en la nube.' },
    { number: '04', title: 'Ciberseguridad', description: 'Fundamentos en hardening, análisis de vulnerabilidades, seguridad en redes y buenas prácticas de protección.' }
  ];

  readonly projects: Project[] = [
    {
      name: 'XVII Semana Técnica de Geología',
      eyebrow: 'Sitio oficial de evento académico',
      statement: 'Portal informativo y platforma de inscripción para el evento académico de geología más importante de la UPTC.',
      impact: 'Facilitó la difusión, inscripción y comunicación del evento para estudiantes y profesionales del sector.',
      url: 'https://xviisemanatecnicadegeologia.com/acerca-de',
      tags: ['Angular', 'TypeScript', 'TailwindCSS'],
      accent: 'geology',
      image: '/project-geologia.jpg'
    },
    {
      name: 'Triatlón UPTC',
      eyebrow: 'Operación de eventos deportivos',
      statement: 'Sistema para gestión de participantes y visualización de resultados en tiempo real de la competición universitaria.',
      impact: 'Información clara para participantes, público y equipo organizador en un momento crítico.',
      url: 'https://www.uptctriatlonsogamoso.com/acercade',
      tags: ['Angular', 'TypeScript', 'UX'],
      accent: 'race',
      image: '/project-triatlon.jpg'
    },
    {
      name: 'Music UPTC',
      eyebrow: 'Producto para comunidad universitaria',
      statement: 'Una plataforma participativa para decidir la música del restaurante estudiantil, integrada con Spotify API.',
      impact: 'Convierte una dinámica cotidiana del campus en una experiencia digital compartida.',
      url: 'https://uptcmusic.com/about',
      tags: ['Angular', 'Flask', 'MySQL', 'Spotify API'],
      accent: 'music',
      image: '/project-music.jpg'
    },
    {
      name: 'ByteBattle',
      eyebrow: 'Aprendizaje a través de retos',
      statement: 'Plataforma para retos de programación y competencias entre estudiantes con rankings y gestión de contenido.',
      impact: 'Diseñada para transformar práctica técnica en participación, progreso y comunidad.',
      url: 'https://sebastianvega4.github.io/ByteBattleFront/about',
      tags: ['Angular', 'Flask', 'Supabase'],
      accent: 'battle',
      image: '/project-bytebattle.jpg'
    }
  ];

  readonly stacks = [
    { label: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Bootstrap'] },
    { label: 'Backend', items: ['Java / Spring Boot', 'Python / Flask', 'Node.js', 'PHP'] },
    { label: 'Bases de Datos', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Cassandra', 'Firebase'] },
    { label: 'Redes y Sistemas', items: ['Linux (Apache/Nginx)', 'Windows Server', 'DNS · SMTP · TCP/IP', 'Cisco Packet Tracer', 'VirtualBox'] },
    { label: 'DevOps y Cloud', items: ['Docker', 'Git / GitHub', 'CI/CD', 'Oracle Cloud', 'Vercel / Railway'] },
    { label: 'Lenguajes y Herramientas', items: ['Java', 'Python', 'C++', 'C#', 'R', 'MATLAB / Octave', 'Assembly'] }
  ];

  readonly workingPrinciples = [
    { number: 'I', title: 'Entender antes de construir', text: 'Convierto la necesidad de usuarios y equipos en una solución clara, con prioridades definidas.' },
    { number: 'II', title: 'Entregar con criterio', text: 'Cuido la experiencia, la implementación y los detalles que hacen que un producto sea confiable.' },
    { number: 'III', title: 'Dejar contexto útil', text: 'Documento decisiones y aprendizajes para que el siguiente avance no dependa de una sola persona.' }
  ];

  readonly labItems: LabItem[] = [
    { status: 'En diseño', title: 'ATLAS Security Lab', description: 'Laboratorio de ciberseguridad: análisis de vulnerabilidades, hardening de servidores, monitoreo de redes y prácticas de ethical hacking en entornos controlados.', stack: 'Linux · Wireshark · Metasploit · pfSense' },
    { status: 'En diseño', title: 'ATLAS Cloud', description: 'Laboratorio de redes, Object Storage, bases de datos, DNS y SMTP sobre Oracle Cloud Always Free con infraestructura como código.', stack: 'Oracle Cloud · Terraform · Docker · SQL' },
    { status: 'Próximamente', title: 'ATLAS HomeLab', description: 'Servicios autohospedados (DNS, correo, VPN), monitorización y automatizaciones con equipos dedicados.', stack: 'Docker · Linux · Networking · Raspberry Pi' },
    { status: 'Activo', title: 'SV Platform', description: 'Esta plataforma personal: un producto vivo para documentar proyectos, aprendizaje y evolución técnica.', stack: 'Angular · GitHub Pages · CI/CD' }
  ];

  readonly focusAreas = [
    { title: 'Desarrollo Full Stack', detail: 'Aplicaciones web completas con Angular, Spring Boot, Flask, REST APIs, y bases de datos relacionales y NoSQL.' },
    { title: 'Redes y Comunicaciones', detail: 'Configuración de redes, protocolos TCP/IP, DNS, SMTP, routing y administración de servidores Linux y Windows Server.' },
    { title: 'Ciberseguridad', detail: 'Hardening de servidores, análisis de vulnerabilidades, seguridad en redes y fundamentos de protección de la información.' },
    { title: 'Infraestructura y DevOps', detail: 'Docker, CI/CD, nube, virtualización con VirtualBox y automatización con Python y Git.' }
  ];

  readonly posts = [
    { category: 'En preparación', title: 'De portafolio a plataforma: construir evidencia de aprendizaje', date: 'Próximamente' },
    { category: 'ATLAS Security Lab', title: 'Mi ruta para aprender ciberseguridad desde la práctica', date: 'Próximamente' },
    { category: 'Redes', title: 'Configuración de servidores DNS, SMTP y hardening en Linux', date: 'Próximamente' },
    { category: 'Desarrollo', title: 'Lo que aprendí creando productos para una comunidad universitaria', date: 'Próximamente' }
  ];

  readonly certifications = [
    { name: 'English Certificate B2', issuer: 'EF SET', date: 'Marzo 2026', url: 'https://cert.efset.org/Z4ULcb' },
    { name: 'SQL con MySQL Server de Oracle', issuer: 'Alura Latam', date: '2024', url: '#' },
    { name: 'Java y Spring Boot G5', issuer: 'Oracle Next Education · Alura Latam', date: '2024', url: '#' },
    { name: 'Emprendimiento G5', issuer: 'Oracle Next Education · Alura Latam', date: 'Julio 2023', url: 'https://app.aluracursos.com/degree/certificate/ac1bfff1-1704-4f04-8706-0cc58a6646ed' }
  ];

  readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) return;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    const revealSections: Element[] = Array.from(this.host.nativeElement.querySelectorAll('.reveal'));
    revealSections.forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  sendMessage(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) {
      this.formStatus.set('Revisa los campos marcados antes de enviar el mensaje.');
      return;
    }
    const value = this.contactForm.getRawValue();
    const subject = encodeURIComponent(`Contacto desde sebastianvega.site — ${value.name}`);
    const body = encodeURIComponent(`Nombre: ${value.name}\nCorreo: ${value.email}\n\n${value.message}`);
    this.formStatus.set('Abriendo tu cliente de correo…');
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
  }
}
