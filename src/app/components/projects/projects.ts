import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService, GitHubRepo } from '../../services/github';
import { FeaturedProject, FeaturedProjectService } from '../../services/featured-project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  private featuredProjectService = inject(FeaturedProjectService);
  private githubService = inject(GithubService);

  public featuredProjects$!: Observable<FeaturedProject[]>;
  public otherRepos$!: Observable<GitHubRepo[]>;

  ngOnInit(): void {
    this.featuredProjects$ = this.featuredProjectService.getFeaturedProjects();
    this.otherRepos$ = this.githubService.getRepos();
  }
}