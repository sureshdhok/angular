import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VernaComponent } from './verna.component';

describe('VernaComponent', () => {
  let component: VernaComponent;
  let fixture: ComponentFixture<VernaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VernaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VernaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
