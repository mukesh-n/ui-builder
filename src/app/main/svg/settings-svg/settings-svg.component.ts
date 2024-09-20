import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-settings-svg',
  templateUrl: './settings-svg.component.html',
  styleUrls: ['./settings-svg.component.scss'],
})
export class SettingsSvgComponent implements OnInit {
  @Input() width = 0;
  @Input() height = 0;
  @Input() outline = '#fff';
  @Input() fill = '#fff';
  constructor() {}

  ngOnInit(): void {}
}
