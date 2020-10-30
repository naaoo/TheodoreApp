import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionThumbnailComponent } from './edition-thumbnail.component';

describe('EditionThumbnailComponent', () => {
  let component: EditionThumbnailComponent;
  let fixture: ComponentFixture<EditionThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
