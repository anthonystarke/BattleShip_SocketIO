const LoadingView = function(loadingDiv) {
  this.loadingDiv = loadingDiv;
}

LoadingView.prototype.bindEvents = function () {
  socket.on('game-ready',() => {
    this.hideDiv();
  })
};

LoadingView.prototype.hideDiv = function () {
  this.loadingDiv.classList.add('hide');
};

module.exports = LoadingView;;
