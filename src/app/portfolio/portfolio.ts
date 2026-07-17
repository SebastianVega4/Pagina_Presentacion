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
  readonly email = 'Sebastian.vegar2015@gmail.com';
  readonly linkedinUrl = 'https://www.linkedin.com/in/johan-sebastian-vega-ruiz-b1292011b';
  readonly githubUrl = 'https://github.com/SebastianVega4';
  readonly whatsappUrl = 'https://wa.me/573133890068';
  readonly menuOpen = signal(false);
  readonly formStatus = signal('');

  readonly capabilities: Capability[] = [
    { number: '01', title: 'Productos web', description: 'Interfaces Angular claras, rápidas y orientadas a una necesidad concreta.' },
    { number: '02', title: 'Integración técnica', description: 'APIs, lógica de negocio y persistencia para convertir una idea en un producto útil.' },
    { number: '03', title: 'Automatización', description: 'Procesos repetibles con Python, Git y flujos de despliegue que reducen fricción.' },
    { number: '04', title: 'Documentación', description: 'Trabajo explicable y mantenible: decisiones, contexto y próximos pasos visibles.' }
  ];

  readonly projects: Project[] = [
    {
      name: 'Music UPTC',
      eyebrow: 'Producto para comunidad universitaria',
      statement: 'Una plataforma participativa para decidir la música del restaurante estudiantil.',
      impact: 'Convierte una dinámica cotidiana del campus en una experiencia digital compartida.',
      url: 'https://sebastianvega4.github.io/Music_Uptc_Sogamoso',
      tags: ['Angular', 'TypeScript', 'Python'],
      accent: 'music'
    },
    {
      name: 'ByteBattle',
      eyebrow: 'Aprendizaje a través de retos',
      statement: 'Concepto de plataforma para retos de programación y competencias entre estudiantes.',
      impact: 'Diseñada para transformar práctica técnica en participación, progreso y comunidad.',
      url: 'https://github.com/SebastianVega4',
      tags: ['Angular', 'Node.js', 'TypeScript'],
      accent: 'battle'
    },
    {
      name: 'Triatlón UPTC',
      eyebrow: 'Operación de eventos',
      statement: 'Experiencia web para la organización y consulta de una competición universitaria.',
      impact: 'Información clara para participantes, público y equipo organizador en un momento crítico.',
      url: 'https://github.com/SebastianVega4',
      tags: ['Angular', 'GitHub', 'UX'],
      accent: 'race'
    }
  ];

  readonly stacks = [
    { label: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML / CSS'] },
    { label: 'Backend & datos', items: ['Node.js', 'Python', 'Java', 'SQL'] },
    { label: 'Infraestructura', items: ['Git / GitHub', 'Linux', 'Docker', 'Oracle Cloud'] },
    { label: 'Hardware & diseño', items: ['Arduino', 'ESP32', 'Figma', 'Power BI'] }
  ];

  readonly workingPrinciples = [
    { number: 'I', title: 'Entender antes de construir', text: 'Convierto la necesidad de usuarios y equipos en una solución clara, con prioridades definidas.' },
    { number: 'II', title: 'Entregar con criterio', text: 'Cuido la experiencia, la implementación y los detalles que hacen que un producto sea confiable.' },
    { number: 'III', title: 'Dejar contexto útil', text: 'Documento decisiones y aprendizajes para que el siguiente avance no dependa de una sola persona.' }
  ];

  readonly labItems: LabItem[] = [
    { status: 'En diseño', title: 'ATLAS Cloud', description: 'Laboratorio de redes, Object Storage, bases de datos y Terraform sobre Oracle Cloud Always Free.', stack: 'Oracle Cloud · Terraform · SQL' },
    { status: 'Próximamente', title: 'ATLAS HomeLab', description: 'Servicios autohospedados, monitorización y automatizaciones cuando exista capacidad de cómputo.', stack: 'Docker · Linux · Networking' },
    { status: 'Activo', title: 'SV Platform', description: 'Esta plataforma personal: un producto vivo para documentar proyectos, aprendizaje y evolución técnica.', stack: 'Angular · GitHub Pages · CI/CD' }
  ];

  readonly focusAreas = [
    { title: 'Software web', detail: 'Interfaces, experiencia de usuario e integración de servicios con Angular y TypeScript.' },
    { title: 'Datos y automatización', detail: 'SQL, Python y procesos repetibles para convertir información en decisiones y tiempo recuperado.' },
    { title: 'Cloud y operaciones', detail: 'Infraestructura como código, contenedores y prácticas que hacen sostenible un producto.' }
  ];

  readonly posts = [
    { category: 'En preparación', title: 'De portafolio a plataforma: construir evidencia de aprendizaje', date: 'Próximamente' },
    { category: 'ATLAS Cloud', title: 'Mi ruta para aprender Oracle Cloud sin depender de una VM', date: 'Próximamente' },
    { category: 'Desarrollo', title: 'Lo que aprendí creando productos para una comunidad universitaria', date: 'Próximamente' }
  ];

  readonly certifications = [
    { name: 'English Certificate B2', issuer: 'EF SET', date: 'Marzo 2026', url: 'https://cert.efset.org/Z4ULcb' },
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
