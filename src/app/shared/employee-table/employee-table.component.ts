import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


interface EmpData {
  name: string;
  dob: string;
  empid: number;
}


const EMPDATA: EmpData[] = [
  {
    name: 'Aman',
    dob: '05-02-1995',
    empid: 100
  },
  {
    name: 'Dipesh',
    dob: '05-02-1995',
    empid: 101
  },
  {
    name: 'Piyush',
    dob: '05-02-1995',
    empid: 102
  },
  {
    name: 'Sourabh',
    dob: '05-02-1995',
    empid: 103
  }
];


function search(text: string, pipe: PipeTransform): EmpData[] {
  return EMPDATA.filter(data => {
    const term = text.toLowerCase();
    return data.name.toLowerCase().includes(term)
    || pipe.transform(data.empid).includes(term)
  });
}



@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  providers: [DecimalPipe]
})


export class EmployeeTableComponent {
  
  finalData$: Observable<EmpData[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.finalData$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

}
