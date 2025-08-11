import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Certificate, CertificateService } from '../../services/certificate';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class CertificatesComponent implements OnInit {
  private certificateService = inject(CertificateService);
  public certificates$!: Observable<Certificate[]>;

  ngOnInit(): void {
    this.certificates$ = this.certificateService.getCertificates();
  }
}