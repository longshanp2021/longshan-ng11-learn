import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


    public constructor(
        private http: HttpClient
    ) {

    }

    public ngOnInit(): void {

    }

    public requestByProxy(): void {
        this.http.post('/api/auth/login', {
            username: 'pu123456',
            password: '123456'
        }).subscribe(res => {
            console.log(2, res);

        });
    }

    public request(): void {
        this.http.post('http://localhost:3000/auth/login', {
            username: 'pu123456',
            password: '123456'
        }).subscribe(res => {
            console.log(1, res);

        });
    }

}
