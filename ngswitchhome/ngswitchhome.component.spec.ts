import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchhomeComponent } from './ngswitchhome.component';

describe('NgswitchhomeComponent', () => {
  let component: NgswitchhomeComponent;
  let fixture: ComponentFixture<NgswitchhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswitchhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
