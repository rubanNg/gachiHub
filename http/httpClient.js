export function HttpClient() {}


HttpClient.get = function(url, options = {}) {

  const promise = fetch(url, { method: 'GET', ...options }).then(function(response) {
    return response.json();
  });

  return new AsyncOperation(promise);
}

class AsyncOperation {

  constructor(promise) {
    this.promise = promise;
  }

  ready(succesCallback, errorCallback) {
    this.promise.then(function(response) {
      if (succesCallback) succesCallback(response);
    }).catch(function(error) {
      if (errorCallback) errorCallback(error);
    });
  }
}