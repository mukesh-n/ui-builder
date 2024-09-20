import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  NgbActiveModal,
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbDateStructAdapter,
  NgbTimeStruct,
} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'shared-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit, OnChanges {
  @Input() public dateTime: Date = new Date();
  date?: NgbDateStruct;
  time?: NgbTimeStruct;
  constructor(
    public activeModal: NgbActiveModal,
    private calendar: NgbCalendar
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit() {
    var today = moment(this.dateTime);
    this.date = {
      year: parseInt(today.format('yyyy')),
      month: parseInt(today.format('M')),
      day: parseInt(today.format('D')),
    };
    this.time = {
      hour: parseInt(today.format('HH')),
      minute: parseInt(today.format('mm')),
      second: 0,
    };
  }

  Ok() {
    this.dateTime = moment(
      `${this.date?.day} ${this.date?.month} ${this.date?.year} ${this.time?.hour}:${this.time?.minute}:00`,
      'DD MM YYYY hh:mm:ss'
    ).toDate();
    this.activeModal.close(this.dateTime);
  }
  cancel() {
    this.activeModal.close();
  }
}
