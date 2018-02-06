import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})

export class ShowListComponent implements OnInit {
  notes: Note[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.notes.subscribe(
      (notes) => {this.notes = notes}
    )
  }

  delete(data){
    console.log(data);
    this._dataService.deleteTask(data);
  }

}
