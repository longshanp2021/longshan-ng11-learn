import { Component, OnInit, ViewChild } from '@angular/core';
import { IFruits } from "../../models/i-fruits";
import { FruitsService } from "../../services/fruits.service";
import { FruitsEditComponent } from "../fruits-edit/fruits-edit.component";
@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.scss']
})
export class FruitsListComponent implements OnInit {
  name: string;
  Id: number;
  public editFormVisible: Boolean;
  @ViewChild(FruitsEditComponent)
  private editForm: FruitsEditComponent;
  public fruits: Array<IFruits>;
  constructor(
    public fruitsSrv: FruitsService
  ) { }

  public ngOnInit(): void {
    this.queryFruits();

  }
  public addFruits(): void {
    this.editFormVisible = !this.editFormVisible;
  }
  public queryFruits(): void {
    this.fruitsSrv.query().subscribe(fruits => { this.fruits = fruits; })
  }

  public closeEditFormModal(): void {
    this.editFormVisible = false;
  }
  public saveFruits(): void {
    console.log(1);
    
    this.fruitsSrv.create(this.editForm.form.value).subscribe(fruits => {
      this.queryFruits()
    });
    this.editFormVisible = false;
  }

}
