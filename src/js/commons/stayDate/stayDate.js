import "./styles/stayDate.scss"
import { DatePicker } from "../datePicker/datePicker";

export function StayDate() {
const stayDate = document.createElement('div');
stayDate.setAttribute('class', 'stay');

stayDate.innerHTML = `
<label for="callendar" class="subpages-callendar_label">Your stay:</label>
<input 
    type="text" 
    placeholder="Choose your dates..." 
    id="callendar"
    class = "subpages-callendar" 
  >`;

  DatePicker(stayDate)
  return stayDate;
}