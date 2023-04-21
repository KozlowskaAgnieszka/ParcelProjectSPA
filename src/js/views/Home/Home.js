import './styles/home.scss';
import { LogWindow } from './LogIn/LogWindow';
import { ShowLogWindowBtn } from './buttons/ShowLogWindowBtn';
import { BookOnlineBtn } from './buttons/BookOnlineBtn';
import { DatePicker } from '../../commons/datePicker/datePicker';

export function Home() {
  // Set class for Home's header & main
  const header = document.querySelector('.header_nav');
  header.setAttribute('class', 'header_nav home_header');

  const main = document.querySelector('main');
  main.setAttribute('class', 'home');

  // Hero image
  const section = document.createElement('section');
  section.setAttribute('class', 'home_hero');

  const Content = document.createElement('div');
  Content.setAttribute('class', 'home_hero_content');

  // Logo section
  const Logo = document.createElement('section');
  const src = new URL('../../../assets/logo/lotus.png', import.meta.url);
  Logo.innerHTML = `
  <img src="${src} alt="Lotus logo" class="home_hero_content_lotus"/>
  <h1 class="home_hero_content_text">Lotus<br>SPA</h1>
  `;

  // Book online section
  const bookOnline = document.createElement('section');
  bookOnline.innerHTML =
    `<input type="text" placeholder="Choose your dates..." id="callendar" class="home_callendar">
    <section class="home_buttons"></section>
    `;

  bookOnline.lastElementChild.append(BookOnlineBtn(), ShowLogWindowBtn());
  Content.append(Logo, bookOnline);
  section.append(Content, LogWindow());
  
  DatePicker(bookOnline);

  return section;
}
