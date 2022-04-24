import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data = [
    { empName: 'MN',overallInv: '15.2', item: 3, },
    {  empName: 'MN',overallInv: '15.2',item: 6,},
    {  empName: 'MN',overallInv: '63',item: 7,},
    // { state: 'MN', county: '1', item: 0.0374 }, 
    // { state: 'CA', county: '8', item: 0.037 },
    // { state: 'CA', county: '2', item: 0.019 },
    // { state: 'CA', county: '3', item: 0.14 }
  ];

  dataExt: any[] = [];

  constructor() {
    this.processData();
  }

  private processData() {
    const empSeen = {};
    const InvolvementsSeen = {};

    this.dataExt = this.data.sort((a, b) => {
      const empComp = a.empName.localeCompare(b.empName);
      return empComp ? empComp : a.overallInv.localeCompare(b.overallInv);
    }).map(x => {
      const empSpan = empSeen[x.empName] ? 0 : //3
        this.data.filter(y => y.empName === x.empName).length;

        empSeen[x.empName] = true; 

      const invSpan = InvolvementsSeen[x.empName] && InvolvementsSeen[x.empName][x.overallInv] ? 0 :
        this.data.filter(y => y.empName === x.empName && y.overallInv === x.overallInv).length;

        InvolvementsSeen[x.empName] = InvolvementsSeen[x.empName] || {};
        InvolvementsSeen[x.empName][x.overallInv] = true;

      return { ...x, empSpan, invSpan };
    });
  }
}
