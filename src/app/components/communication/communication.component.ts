import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from "../child/child.component";
@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  // @ViewChild(ChildComponent)
  // public child: ChildComponent;
  @ViewChildren(ChildComponent) public children: QueryList<ChildComponent>;
  public constructor() { }

  public ngOnInit(): void {
  }

  click() {
    // console.log(this.child.title);
    console.log(1);
    // console.log(this.children.first.title);
    // console.log(this.children.last.title);





  }
  // console.log(3, this.children[0]);

  // let arr = new Person();
  // arr.forEach();78

  // this.children.forEach(it => {
  //   // console.log(it);
  //   it.greet('yyuunn');
  // });

  // const arr = this.children.toArray();
  // arr.forEach(it => {
  //   it.title = '9900';
  //   // it.
  //   it.greet('mmuui');
  // });
  // console.log(arr);


  // for(let it of this.children){

  // }

  // let str = 'Leon';
  // console.log(str[0]);


  // this.child.greet();
}

