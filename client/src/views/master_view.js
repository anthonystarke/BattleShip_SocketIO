const MasterView = function(masterDiv) {
  this.masterDiv = masterDiv;
}

MasterView.prototype.bindEvents = function () {
  socket.on('game-ready', () => {
    this.removeHide();
  })
};

MasterView.prototype.removeHide = function () {
  this.masterDiv.classList.remove('hide')
};

module.exports = MasterView;
