import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';

@Injectable()
export class DataService {
  notes: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) {
    this.retrieveTask();
  }

  retrieveTask() {
    this._http.get('http://localhost:8000/notes').subscribe(
      (data: any[]) => { this.notes.next(data)}
    )
  }

  addTask(new_note: any) {
    this._http.post('http://localhost:8000/'+new_note.text, new_note).subscribe(
      (data: any[]) => { this.notes.next(data) }
    )
  }

  deleteTask(id: any) {
    console.log('Inside DataService : ', id);
    this._http.delete('http://localhost:8000/notes/' + id).subscribe(
      (data: any[]) => { this.notes.next(data) }
    )
  }

}
