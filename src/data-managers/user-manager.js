import { logSectionClickHandler } from '../js/views/Home/LogIn/closeLogWindow';

export const userManager = {
  logUser() {
    const userName = document.getElementById('login');
    const userPassword = document.getElementById('password');

    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((users) => {
        const user = Object.values(users);
        const logoutButton = document.querySelector('#logout-btn');
        const msg = document.querySelector('#log-message');
        let message = '';

        const usersLogins = user.map((userLogin) => userLogin.name);
        if (!usersLogins.includes(userName.value)) {
          message = 'No such user';
          msg.innerHTML = `<p>${message}</p>`;
          msg.classList.add('visible');
          return;
        }

        for (const usr of user) {
          if (
            usr.name === userName.value &&
            usr.password === userPassword.value
          ) {
            message = 'You have successfully logged in.';
            msg.innerHTML = `<p>${message}</p>`;
            msg.classList.add('visible');
            logoutButton.classList.add('visible');

            const loggedUser = localStorage.getItem(users);
            let content;

            if (loggedUser === null) {
              content = { userName: usr.name };
            } else {
              content = JSON.parse(loggedUser);
              content.userName = usr.name;
            }
            localStorage.setItem('users', JSON.stringify(content));

            const loginButton = document.querySelector('#show-log-window-btn');
            loginButton.classList.add('hide');

            setTimeout(logSectionClickHandler, 1000);

            return;
          } else if (
            usr.name === userName.value &&
            usr.password !== userPassword.value
          ) {
            message = 'Invalid login or password.';
            msg.innerHTML = `<p>${message}</p>`;
            msg.classList.add('visible');
            return;
          }
        }
      });
  },

  createUser() {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((users) => {
        const userName = document.getElementById('login');
        const userPassword = document.getElementById('password');
        const msg = document.querySelector('#log-message');
        let message = '';
        const user = Object.values(users);
        const usersLogins = user.map((userLogin) => userLogin.name);
        if (
          !usersLogins.includes(userName.value) &&
          userName.value !== '' &&
          userPassword.value !== ''
        ) {
          fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: userName.value,
              name: userName.value,
              password: userPassword.value,
            }),
          })
            .then((response) => response.json())
            .then(() => {
              const createAccountBtn = document.querySelector('.log_window_create-account-btn')
              createAccountBtn.parentNode.removeChild(createAccountBtn)
              message = 'New user was created. You can now log in.';
              msg.innerHTML = `<p>${message}</p>`;
              msg.classList.add('visible');
            });

          return;
        }
      });
  },

  logoutUser() {
    localStorage.removeItem('users');

    const logoutButton = document.querySelector('#logout-btn');
    logoutButton.classList.remove('visible');

    const loginButton = document.querySelector('#show-log-window-btn');
    loginButton.classList.remove('hide');
  },
};
