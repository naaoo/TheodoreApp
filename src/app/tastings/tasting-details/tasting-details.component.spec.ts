import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingDetailsComponent } from './tasting-details.component';

describe('TastingDetailsComponent', () => {
  let component: TastingDetailsComponent;
  let fixture: ComponentFixture<TastingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
