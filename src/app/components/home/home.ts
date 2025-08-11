import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SkillService, Skill } from '../../services/skill';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home  implements OnInit {
  private skillService = inject(SkillService);

  public principalSkills$!: Observable<Skill[]>;
  public secondarySkills$!: Observable<Skill[]>;
  public familiarSkills$!: Observable<Skill[]>;

  ngOnInit(): void {
    const skills$ = this.skillService.getSkills();

    this.principalSkills$ = skills$.pipe(
      map(skills => skills.filter(s => s.level === 'Principal'))
    );

    this.secondarySkills$ = skills$.pipe(
      map(skills => skills.filter(s => s.level === 'Bom Conhecimento'))
    );

    this.familiarSkills$ = skills$.pipe(
      map(skills => skills.filter(s => s.level === 'Familiaridade'))
    );
  }
}