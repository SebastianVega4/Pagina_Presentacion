import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface SeoData {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

const TITLES: Record<string, SeoData> = {
  '/': {
    title: 'Sebastián Vega | Systems Engineering Student',
    description: 'Portafolio de Sebastián Vega: estudiante de Ingeniería de Sistemas y Computación UPTC, desarrollador web y entusiasta de cloud, automatización y software.',
    ogTitle: 'Sebastián Vega | Systems Engineering Student',
    ogDescription: 'Proyectos, laboratorio y recorrido técnico de Sebastián Vega.',
  },
  '/links': {
    title: 'Links | Sebastián Vega',
    description: 'Todas las redes sociales y enlaces de Sebastián Vega: GitHub, LinkedIn, Instagram, YouTube y más.',
    ogTitle: 'Links | Sebastián Vega',
    ogDescription: 'Todas las redes sociales y enlaces de Sebastián Vega.',
  },
};

const DEFAULT_SEO: SeoData = {
  title: 'Sebastián Vega | Systems Engineering Student',
  description: 'Portafolio de Sebastián Vega: estudiante de Ingeniería de Sistemas y Computación UPTC, desarrollador web y entusiasta de cloud, automatización y software.',
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
  ) {}

  init(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTags();
      });

    this.updateTags();
  }

  private updateTags(): void {
    const path = this.router.url.split('?')[0].replace('#', '') || '/';
    const seo = TITLES[path] || DEFAULT_SEO;

    this.title.setTitle(seo.title);

    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.ogTitle || seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.ogDescription || seo.description });
    this.meta.updateTag({ name: 'twitter:title', content: seo.ogTitle || seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.ogDescription || seo.description });
  }
}
