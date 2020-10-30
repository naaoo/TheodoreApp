import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingThumbnailComponent } from './tasting-thumbnail.component';

describe('TastingThumbnailComponent', () => {
  let component: TastingThumbnailComponent;
  let fixture: ComponentFixture<TastingThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
