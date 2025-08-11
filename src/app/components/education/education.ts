import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EducationService, Education } from '../../services/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent implements OnInit {
  private educationService = inject(EducationService);
  public education$!: Observable<Education[]>;

  ngOnInit(): void {
    this.education$ = this.educationService.getEducation();
  }
}