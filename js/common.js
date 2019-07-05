let pollLogic = {
  btns: document.querySelectorAll('.btn'),
  mainScreen: document.querySelector('.main-screen'),
  pollSect: document.querySelectorAll('.poll-item'),

  init () {
    let self = this;
    this.showPollSections ();
    this.btns.forEach(function(btn, i, arr) {
      btn.addEventListener('click', e => {
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
    this.showPollSections()
    this.pollSect[i].style.display = 'block'
  }


}

pollLogic.init()