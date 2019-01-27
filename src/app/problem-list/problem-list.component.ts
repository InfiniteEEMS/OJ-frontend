import { Component, OnInit, ViewChild } from '@angular/core';
import { Problem } from '../problem';
import { ProblemService } from '../problem.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {


  problems : Problem[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor( private problemService : ProblemService) { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems() : void {
    this.problemService.getProblems().subscribe( problems => {
      this.problems = problems;
	  this.dataSource = new MatTableDataSource<Problem>(this.problems);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }



  dataSource : any;

  displayedColumns: string[] = ['id', 'name', 'desc', 'difficulty'];





 
}
