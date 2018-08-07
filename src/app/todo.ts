export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;


  constructor(values = {}) {
    Object.assign(this, values);
  }
}
