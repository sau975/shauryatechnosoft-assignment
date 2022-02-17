import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBindingListAndFormComponent } from './dropdown-binding-list-and-form.component';

describe('DropdownBindingListAndFormComponent', () => {
  let component: DropdownBindingListAndFormComponent;
  let fixture: ComponentFixture<DropdownBindingListAndFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownBindingListAndFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownBindingListAndFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
