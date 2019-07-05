let pollLogic = {
  btns: document.querySelectorAll('.btn'),
  mainScreen: document.querySelector('.main-screen'),
  pollSect: document.querySelectorAll('.poll-item'),
  pollWrap: document.querySelector('.poll-wrap'),
  progressBar: document.querySelector('.determinate'),

  init () {
    let self = this;
    this.pollWrap.style.display = 'none'
    this.showPollSections ();
    this.btns.forEach(function(btn, i, arr) {
      btn.addEventListener('click', e => {
          self.pollWrap.style.display = 'block'
          self.mainScreen.style.display = 'none';
          self.getNextSection(i)
      })
    })
  },
  showPollSections () {
    this.pollSect.forEach(item => {
      item.style.display = 'none'
    })
  },
  getNextSection (i) {
    this.showPollSections();
    this.progressBar.style.width = 100 / (this.pollSect.length - 1) * i + '%';
    this.pollSect[i].style.display = 'block';
    this.pollWrap.style.height = this.pollSect[i].offsetHeight + 100 + 'px'
  }
}
pollLogic.init()