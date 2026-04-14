import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignerBhusawalComponent } from './web-designer-bhusawal.component';

describe('WebDesignerBhusawalComponent', () => {
  let component: WebDesignerBhusawalComponent;
  let fixture: ComponentFixture<WebDesignerBhusawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesignerBhusawalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignerBhusawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
