import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    parentItem = 'lamp';
    public menuOpen = true;
    public constructor(
        private router: Router
    ) {

    }

    public ngOnInit(): void {

    }

    public goto(url: string): void {
        this.router.navigateByUrl(url);
    }
}
