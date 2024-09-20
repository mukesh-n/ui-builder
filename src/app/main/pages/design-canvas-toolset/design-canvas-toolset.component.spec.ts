import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCanvasToolsetComponent } from './design-canvas-toolset.component';

describe('DesignCanvasToolsetComponent', () => {
  let component: DesignCanvasToolsetComponent;
  let fixture: ComponentFixture<DesignCanvasToolsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignCanvasToolsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignCanvasToolsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
