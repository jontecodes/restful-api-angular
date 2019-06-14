import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { discardPeriodicTasks } from "@angular/core/testing";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Restful Tasks API";
  tasks = [];


  constructor(private _httpService: HttpService) {}

  ngOnInit(){
    this.getTasksFromService()
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our data!', data);
      for (let i = 0; i < data['data'].length; i++){
        this.tasks.push(data['data'][i].title);
      }
      // this.tasks = data['data'][0].title;
      console.log(this.tasks);
    })
  }
}
