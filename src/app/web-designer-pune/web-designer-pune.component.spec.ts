import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignerPuneComponent } from './web-designer-pune.component';

describe('WebDesignerPuneComponent', () => {
  let component: WebDesignerPuneComponent;
  let fixture: ComponentFixture<WebDesignerPuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesignerPuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignerPuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
