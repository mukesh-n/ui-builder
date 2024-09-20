import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSvgComponent } from './settings-svg.component';

describe('SettingsSvgComponent', () => {
  let component: SettingsSvgComponent;
  let fixture: ComponentFixture<SettingsSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
