/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoxControlComponent } from './box-control.component';

describe('BoxControlComponent', () => {
  let component: BoxControlComponent;
  let fixture: ComponentFixture<BoxControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
