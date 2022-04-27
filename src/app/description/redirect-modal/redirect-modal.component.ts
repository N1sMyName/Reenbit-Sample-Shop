import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-modal',
  templateUrl: './redirect-modal.component.html',
  styleUrls: ['./redirect-modal.component.sass'],
})
export class RedirectModalComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() style: any;

  ngOnInit(): void {}
  continue() {
    this.style.modal = !this.style.modal;
    this.style.hidden = !this.style.hidden;
  }
  toCart() {
    this.router.navigate(['/cart']);
  }
}
