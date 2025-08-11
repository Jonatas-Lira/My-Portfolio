import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Skill {
  name: string;
  level: 'Principal' | 'Bom Conhecimento' | 'Familiaridade';
  iconClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skills: Skill[] = [
    { name: 'Java', level: 'Principal',  iconClass: 'devicon-java-plain'  },
    { name: 'Angular', level: 'Principal', iconClass: 'devicon-angularjs-plain' },
    { name: 'TypeScript', level: 'Principal', iconClass: 'devicon-typescript-plain'  },
    { name: 'PostgreSQL', level: 'Principal', iconClass: 'devicon-postgresql-plain' },
    { name: 'Spring Boot', level: 'Principal', iconClass: 'devicon-spring-plain'  },

    { name: 'Git', level: 'Bom Conhecimento', iconClass: 'devicon-git-plain'  },
    { name: 'Python', level: 'Bom Conhecimento', iconClass: 'devicon-python-plain'  },
    { name: 'C#', level: 'Bom Conhecimento', iconClass: 'devicon-csharp-plain'  },
    { name: 'React.js', level: 'Bom Conhecimento', iconClass: 'devicon-react-original' },
    { name: 'Docker', level: 'Bom Conhecimento', iconClass: 'devicon-docker-plain'  },
    { name: 'MongoDB', level: 'Bom Conhecimento', iconClass: 'devicon-mongodb-plain'  },
    { name: 'MySQL', level: 'Bom Conhecimento', iconClass: 'devicon-mysql-plain'  },

    { name: 'GitLab', level: 'Familiaridade', iconClass: 'devicon-gitlab-plain'  },
    { name: 'Express', level: 'Familiaridade', iconClass: 'devicon-fastapi-plain' },
    { name: 'FastAPI', level: 'Familiaridade', iconClass: 'devicon-android-plain' },
  ];

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }
}