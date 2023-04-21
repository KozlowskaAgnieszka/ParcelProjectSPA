import '../styles/main.scss';
import '../styles/footer.scss';
import '../styles/buttons.scss';
import { Home } from './views/Home/Home';
import { Header } from './navigation/Header/Header';

const main = document.querySelector('main');

main.before(Header());

document.body.addEventListener('navigate', (event) => {
  const Component = event.detail;

  main.innerHTML = '';

  main.append(Component());
});
localStorage.setItem('dates', JSON.stringify({ totalDays: 0 }));
localStorage.setItem('cart', JSON.stringify({}));
main.append(Home());
