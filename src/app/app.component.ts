import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public name: string = '默认值';
    public areaManage: any = {
        area: 'baoshan',
        county: 'dachang'
    };
    public constructor(

    ) {

    }

    public ngOnInit(): void {

    }

    public valueChange(name: string) {
        console.log('name change:', name);
    }

    public areaChange(val: any) {
        console.log('area cccc:', val);
    }
}
