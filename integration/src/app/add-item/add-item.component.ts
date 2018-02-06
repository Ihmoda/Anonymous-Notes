import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  notes;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.notes.subscribe(
      (notes) => {this.notes = notes}
    )
  }

  addTask(){
    this._dataService.addTask(this.notes);
  }

}
