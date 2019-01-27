import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Problem } from './problem';
import { TestInput } from './testInput';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  private apiUrlPrefix = 'http://localhost:3000/api/v1/problems';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
 
  constructor( private http: HttpClient ) {}


  //Get All Problems
  getProblems(): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.apiUrlPrefix).pipe(
      //catchError(this.handleError('getHeroes', []))
    );
  }

  //Get One Problem
  getProblem(id:number) :  Observable<Problem> {
    const url = `${this.apiUrlPrefix}/${id}`;
    return this.http.get<Problem>(url).pipe(
      //tap(_ => this.log(`fetched hero id=${id}`)),
      //catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  test( testInput : TestInput ) : Observable<any> {
    return this.http.post<TestInput>(
	  'http://127.0.0.1:3000/api/v1/build_and_run',
      testInput, 
      this.httpOptions).pipe(
    );
  }

}
