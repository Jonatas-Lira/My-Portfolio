import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Certificate {
  title: string;
  subject: string;
  institution: string;
  period: string;
  description?: string;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private certificates: Certificate[] = [
    {
      title: 'Mentor no Programa Mentor U',
      subject: 'Estruturas de Dados com Java',
      institution: 'Jala University',
      period: 'Janeiro - Fevereiro de 2025 (15 horas)',
      description: 'Na mentoria de programação 2 orientei estudantes no aprofundamento de Estruturas de Dados, aplicando conceitos avançados com a linguagem Java.',
      imageUrl: 'assets/Certs/mentoria-prog2-2025.png'
    },
    {
      title: 'Mentor no Programa Mentor U',
      subject: 'Banco de Dados NoSQL',
      institution: 'Jala University',
      period: 'Março - Abril de 2025 (9 horas)',
      description: 'Em banco de dados 2 tivemos sessões de estudo sobre bancos de dados NoSQL, focando em modelagem de dados e casos de uso práticos.',
      imageUrl: 'assets/Certs/mentoria-db2-2025.pdf'
    },
    {
      title: 'Mentor no Programa Mentor U',
      subject: 'Desenvolvimento de Software e Metodologias Ágeis',
      institution: 'Jala University',
      period: 'Novembro - Dezembro de 2024 (8 horas)',
      description: 'Conduzi mentorias sobre desenvolvimento de software, com foco em fortalecer habilidades de trabalho em equipe e aplicar metodologias ágeis.',
      imageUrl: 'assets/Certs/mentoria-ds1-2024-02.pdf'
    },
    {
      title: 'Mentor no Programa Mentor U',
      subject: 'Modelagem de Dados NoSQL',
      institution: 'Jala University',
      period: 'Agosto - Outubro de 2024 (10 horas)',
      description: 'Liderei grupos de estudo sobre bancos de dados NoSQL, explorando diferentes modelos e suas aplicações no mercado.',
      imageUrl: 'assets/Certs/mentoria-db2-2024.pdf'
    },
    {
      title: 'Mentor no Programa Mentor U',
      subject: 'Ciclo de Vida do Software com Metodologias Ágeis',
      institution: 'Jala University',
      period: 'Maio - Junho de 2024 (4 horas)',
      description: 'Promovi discussões sobre o ciclo de vida do desenvolvimento de software, enfatizando a importância das metodologias ágeis.',
      imageUrl: 'assets/Certs/mentoria-ds1-2024-01.pdf'
    },
    {
      title: 'Mentor no Programa Mentor U',
      subject: 'Desenvolvimento de Jogos 2D',
      institution: 'Jala University',
      period: 'Julho - Agosto de 2024 (8 horas)',
      description: 'Apoiei estudantes no desenvolvimento de jogos 2D, abordando desde a lógica de programação até a implementação de mecânicas de jogo.',
      imageUrl: 'assets/Certs/mentoria-prog3-2024.pdf'
    }
  ];

  getCertificates(): Observable<Certificate[]> {
    return of(this.certificates.sort((a, b) => new Date(b.period.slice(-12, -7)).getTime() - new Date(a.period.slice(-12, -7)).getTime()));
  }
}