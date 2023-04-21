import './styles/datepicker.scss';
import Litepicker from 'litepicker';
import { dateManager } from '../../../data-managers/date-manager';

export function DatePicker(target) {
  const picker = new Litepicker({
    element: target.querySelector('#callendar'),
    autoApply: true,
    allowRepick: true,
    autoRefresh: true,
    position: 'top',
    resetButton: false,
    singleMode: false,
    format: 'DD MMM YY',
    maxDays: 365,
    minDate: Date.now(),
    minDays: 2,
    showTooltip: true,
    numberOfColumns: 2,
    numberOfMonths: 2,
    setup: (picker) => {
      picker.on('selected', (date1, date2) => {
        dateManager.addDate(date1, date2);
      });
    },
  });

  const arriveDate = dateManager.getDates();
  const [startDate, endDate] = arriveDate;
  if (startDate && endDate !== 'Invalid Date') {
    picker.setDateRange(startDate, endDate);
  }
  return picker;
}
