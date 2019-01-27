import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProblemService } from '../problem.service';
import { Problem } from '../problem';


@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {

  problem : Problem;

  constructor(	
    private currentRoute: ActivatedRoute,
	private problemService: ProblemService,
	private location: Location
  ) {}

  ngOnInit() {
    const id = +this.currentRoute.snapshot.paramMap.get('id');
    this.problemService.getProblem(id).subscribe( problem => this.problem = problem);
  }

}
