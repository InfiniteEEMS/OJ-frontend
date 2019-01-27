import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProblemService } from '../problem.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  code = new FormControl('');

  selectedLang : string  = "Python";

  languages = [ "Python", "Java", "C++" ];

  output : any;

  constructor(
	private problemService: ProblemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  submit() : void {
    this.problemService.test( {
	  id : +this.route.snapshot.paramMap.get('id'), 
      lang:this.selectedLang, 
      code:this.code.value 
   }).subscribe(res =>{
      this.output = res;
   });

  }

}
