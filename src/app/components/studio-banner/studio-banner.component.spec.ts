import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioBannerComponent } from './studio-banner.component';

describe('StudioBannerComponent', () => {
  let component: StudioBannerComponent;
  let fixture: ComponentFixture<StudioBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
