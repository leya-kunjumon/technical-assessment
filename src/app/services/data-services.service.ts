import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  API_PATH: string = environment.apiPath;
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient,
    public router: Router) { }

     // Sign-in
  signIn(user: any) {
    return this.http.post(`${this.API_PATH}v1/accounts/login/`, user, this.httpOption)
  }

  // User details
  userDetails(id:any){
    return this.http.get(`${this.API_PATH}v1/accounts/user/${id}/`, this.httpOption)

  }

  // Graph and stage counts
  graphStageCounts(stage_type:any){
    return this.http.get(`${this.API_PATH}v1/leads/dashboard/graph/?stage_type=${stage_type}`, this.httpOption)

  }

  //Probability
  probabilty(stage_type:any){
    return this.http.get(`${this.API_PATH}v1/leads/probability/analysis/?stage_type=${stage_type}`, this.httpOption)

  }

  //Active lead status
  activeLead(){
    return this.http.get(`${this.API_PATH}v1/leads/stage/`, this.httpOption)

  }

  //Leads list
  leadsList(stage_type:any,limit:any,offset:any,search:any){
    return this.http.get(`${this.API_PATH}v1/leads/?stage_type=${stage_type}&limit=${limit}&offset=${offset}&search=${search}&ordering=-probability`,this.httpOption)

  }
}
