const environmentUrls = new Map();

environmentUrls.set('localhost','http://localhost:8080');
environmentUrls.set('brunos-bookstore-client.herokuapp.com','https://brunos-demo-store.herokuapp.com');

export default environmentUrls.get(window.location.hostname);