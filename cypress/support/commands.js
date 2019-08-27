const USERS = {
  User: 'mindaugas@blue.kns',
  Admin: 'admin@blue.kns'
};

Cypress.Commands.add('loginAs', role => {
  window.localStorage.setItem('dishesOrderBy', 'alpha');
  window.localStorage.setItem('city.id', '1');
  window.localStorage.setItem(
    'loggedUser',
    `{"email":${USERS[role]},"admin":true,"displayName":"admin","id":984,"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJsdWUua25zIiwiYWRtaW4iOnRydWUsImlkIjo5ODQsImlhdCI6MTU2NjkwMTQ1OSwiZXhwIjoxNTY3NTA2MjU5fQ.klhORN0N9B5QT41onwn-thkao_jbGXMocefEj4U60E4","__typename":"LoggedUser"}`
  );
  window.localStorage.setItem('locale.id', '1');
  window.localStorage.setItem(
    'notifications',
    '{"lunchArrived":true,"reminder":true,"fridayAdded":true,"orderRating":true}'
  );
});
