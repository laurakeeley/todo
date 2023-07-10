import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  todos= [
    new Todo(1, "Learn Angular", false, new Date()),
    new Todo(2, "Walk Zia", false, new Date()),
    new Todo(3, "Do dishes", false, new Date()),
    new Todo(4, "Change laundry", false, new Date())

    // {id: 1, description: "Learn Angular"},
    // {id: 2, description: "Walk Zia"},
    // {id: 3, description: "Do Dishes"}
  ]
}
