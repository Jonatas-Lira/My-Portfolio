import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Education {
  title: string;
  institution: string;
  period: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private education: Education[] = [
    {
      title: 'Ensino Médio',
      institution: 'Escola Estadual Alto dos Guararapes',
      period: '2018 - 2020',
      description: 'Cursando seguindo o regulamento do MEC.'
    },
    {
      title: 'Bacharelado em Engenharia de Software',
      institution: 'Jala University',
      period: '2023 - 2026 (previsto)',
      description: 'Foco em desenvolvimento de software com viés comercial.'
    }
  ];

  getEducation(): Observable<Education[]> {
    return of(this.education);
  }
}