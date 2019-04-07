const LoadingView = require('./views/loading_view.js');
const MasterView = require('./views/master_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const masterDiv = document.querySelector('.gameWrapper');
  const masterView = new MasterView(masterDiv);
  masterView.bindEvents();

  const loadingDiv = document.querySelector('.loadingMessage');
  const loadingView = new LoadingView(loadingDiv);
  loadingView.bindEvents();

});
