import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownBindingService {

  constructor(
    private http: HttpClient
  ) { }

  getStates() {
    return this.http.get<any>('http://awsmaster.mahamining.com/master/states/GetState');
  }

  getDivisions(stateId: number) {
    return this.http.get<any>(`http://awsmaster.mahamining.com/master/divisions/${stateId}`);
  }

  getDistricts(divisionId: number) {
    return this.http.get<any>(`https://awsmaster.mahamining.com/master/districts/GetDistrictByDivisionId/${divisionId}`);
  }

  getTalukas(districtId: number) {
    return this.http.get<any>(`http://awsmaster.mahamining.com/master/talukas/GetTalukaByDistrictId/${districtId}`);
  }

  getVillages(talukaId: number) {
    return this.http.get<any>(`http://awsmaster.mahamining.com/master/villages/GetVillagesByCriteria/${talukaId}`);
  }

}
