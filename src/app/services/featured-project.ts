import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface FeaturedProject {
  name: string;
  role: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  isPrivate: boolean; 
  liveUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeaturedProjectService {

  private featuredProjects: FeaturedProject[] = [
    {
      name: 'AniDetect (Identificador de Personagens de Anime)',
      role: 'Desenvolvedor Frontend',
      description: 'Um projeto que une Arquitetura Orientada a Eventos (EDA), Inteligência Artificial e orquestração com Docker para identificar personagens de animes.',
      technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'Docker', 'GitLab', 'Express'],
      githubUrl: '#',
      isPrivate: true,
    },
    {
      name: 'MindAI',
      role: 'Desenvolvedor Backend',
      description: 'Neste projeto, treinamos um modelo de IA para auxiliar pessoas com dificuldades em lidar com questões de saúde mental.',
      technologies: ['Python', 'FastAPI', 'PyTorch', 'GitLab'],
      githubUrl: '#',
      isPrivate: true,
    },
    {
      name: 'Plataforma de E-commerce',
      role: 'Desenvolvedor Full-Stack (Acadêmico)',
      description: 'Desenvolvimento de uma plataforma de e-commerce como projeto acadêmico, utilizando as principais tecnologias do mercado para criar uma solução completa e funcional.',
      technologies: ['Java', 'Spring Boot', 'React', 'SQL'],
      githubUrl: '#',
      isPrivate: true,
    }
  ];

  getFeaturedProjects(): Observable<FeaturedProject[]> {
    return of(this.featuredProjects);
  }
}