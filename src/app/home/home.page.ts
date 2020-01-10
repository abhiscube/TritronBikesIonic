import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getDetails();
  }

  ionViewWillEnter() {
    this.getDetails();
}

 // http://3.15.207.80:8080/ElderlyAssistApi/completedAssist?ursID=433
  getDetails(){  
  
    const req = this.http.get('http://3.15.207.80:8080/ElderlyAssistApi/completedAssist?ursID=433',{})
        .subscribe(
          res => {
            console.log("Response 0");
           console.log(Object.values(res));
           let rescod =  Object.values(res)[0];
           let smsg   =  Object.values(res)[1];
           let jwtoken   =  Object.values(res)[2];
           console.log("Response");
           console.log(rescod);
           console.log(smsg); 
           console.log(jwtoken);      
        });
  }
}
