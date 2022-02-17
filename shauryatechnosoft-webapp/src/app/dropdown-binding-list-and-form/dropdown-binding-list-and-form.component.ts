import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownBindingService } from '../dropdown-binding.service';

@Component({
  selector: 'app-dropdown-binding-list-and-form',
  templateUrl: './dropdown-binding-list-and-form.component.html',
  styleUrls: ['./dropdown-binding-list-and-form.component.css']
})
export class DropdownBindingListAndFormComponent implements OnInit {

  states: any[]=[];
  divisions: any[]=[];
  districts: any[]=[];
  talukas: any[]=[];
  villages: any[]=[];
  savedData: any[]=[];
  buttonLabel: string = "Submit";

  constructor(
    private dropdownBindingService: DropdownBindingService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    let data: any = localStorage.getItem("data")
    this.savedData = JSON.parse(data);
    this.dropdownBindingService.getStates().subscribe(res => this.states = res.responseData);
  }

  getDivisions(){
    let state = this.form.get('state')?.value;
    this.dropdownBindingService.getDivisions(state.id).subscribe(res => this.divisions = res.responseData);
  }

  getDistricts(){
    let division = this.form.get('division')?.value;
    this.dropdownBindingService.getDistricts(division.id).subscribe(res => this.districts = res.responseData);
  }

  getTalukas(){
    let district = this.form.get('district')?.value;
    this.dropdownBindingService.getTalukas(district.id).subscribe(res => this.talukas = res.responseData);
  }

  getVillages(){
    let taluka = this.form.get('taluka')?.value;
    this.dropdownBindingService.getVillages(taluka.id).subscribe(res => this.villages = res.responseData);
  }

  form: FormGroup = this.formBuilder.group({
    state: [null, Validators.required],
    division: [null, Validators.required],
    district: [null, Validators.required],
    taluka: [null, Validators.required],
    village: [null, Validators.required]
  })

  save(){
    this.savedData.push(this.form.value);
    localStorage.setItem("data", JSON.stringify(this.savedData));
    alert("Added");
    this.form.reset();
  }

  edit(item:any){
    this.buttonLabel = "Update";
    this.form.patchValue({
      state: item.state,
      division: item.division,
      district: item.district,
      taluka: item.taluka,
      village: item.village
    })
  }

  delete(item:any){
    this.savedData = this.savedData.filter(x => x != item);
    localStorage.setItem("data", JSON.stringify(this.savedData));
    alert("Deleted");
    this.form.reset();
    this.buttonLabel = "Submit";
  }

  reset(){
    this.form.reset();
    this.buttonLabel = "Submit";
  }

}
