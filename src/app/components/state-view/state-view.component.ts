import { Component, OnInit } from '@angular/core';
import { StateDaoService } from 'src/app/dao/state-dao.service';

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {

  constructor(private stateDao: StateDaoService) { }

  ngOnInit() {
    console.log("State Componets");
    this.stateDao.getAllStates().subscribe(res => {
      console.log(res);
    }, (res) => {
      console.log('error:  '+ res);
    });
  }

}
