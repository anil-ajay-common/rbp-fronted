import { Component, OnInit } from '@angular/core';
import { StateDaoService } from 'src/app/dao/state-dao.service';
import { IStateResponse } from 'src/app/model/state.model';

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {

  stateData: IStateResponse;

  constructor(private stateDao: StateDaoService) { }

  ngOnInit() {
    console.log("State Componets");
    this.stateDao.getAllStates().subscribe((res: IStateResponse) => {
      this.stateData = res;
    }, (res) => {
      console.log('error:  '+ res);
    });
  }

}
