import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.scss']
})
export class LostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // au bout de 5sec la page est redirigé vers :  "excuses de dev"
    setTimeout(() => {
      this.router.navigate(['']);
  }, 5000)
  }

}
