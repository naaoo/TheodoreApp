import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingsListComponent } from './tastings-list.component';

describe('TastingsListComponent', () => {
  let component: TastingsListComponent;
  let fixture: ComponentFixture<TastingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
