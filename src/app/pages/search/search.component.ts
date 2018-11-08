import { Component, OnInit } from '@angular/core';
import { Fretista } from '../../interfaces/fretistas'
import { FretistaService } from '../../_services/fretistas.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Fretistas: any[];
  constructor(private bd :FretistaService) { }

  ngOnInit() {

  this.bd.getFretista()
  .subscribe(res => this.Fretistas = res);
  }

}
