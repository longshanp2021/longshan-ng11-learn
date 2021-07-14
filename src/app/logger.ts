import { OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy } from "@angular/core";
import { Directive } from "@angular/core";
@Directive()
export abstract class Logger implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {


    abstract title: string;
    ngOnChanges() {
        console.log(`ngOnChanges`);

    };
    ngOnInit() {
        console.log(`ngOnInit`);
    };
    ngDoCheck() {
        console.log(`ngDoCheck`);
    };
    ngAfterContentInit() {
        console.log(`ngAfterContentInit`);
    };
    ngAfterContentChecked() {
        console.log(`ngAfterContentChecked`);
    };
    ngAfterViewInit() {
        console.log(`ngAfterViewInit`);
    };
    ngAfterViewChecked() {
        console.log(`ngAfterViewChecked`);
    };
    ngOnDestroy() {
        console.log(`ngOnDestroy`);
    };

}