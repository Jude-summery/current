function getLoginInfo() {
  return fetch('http://localhost:3000/api/login/info', {});
}

function getLoginInfo2() {
  return fetch('http://localhost:3000/api/login/info');
}

export { getLoginInfo, getLoginInfo2 };
