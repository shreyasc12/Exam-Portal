import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnablestudentsComponent } from './enablestudents.component';

describe('EnablestudentsComponent', () => {
  let component: EnablestudentsComponent;
  let fixture: ComponentFixture<EnablestudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnablestudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnablestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
