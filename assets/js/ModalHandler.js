
class ModalHandler{

  constructor(options) {
    var defaults = {
      modalClass: '.modal--lec',
      modalCloseBtn: '.modal__btn--close',
      openClass: 'modal--open'
    };

    let populated = Object.assign(defaults, options);
    for(let key in populated) {
      if(populated.hasOwnProperty(key)) {
        this[key] = populated[key];
      }
    }

    this.modelOpen(this);
  }

  modelOpen (that){
    var instance = that;
    let modalClassObj = document.querySelector(that.modalClass);
    if(modalClassObj){
      modalClassObj.classList.add(that.openClass);
    }

    this.modalClose(this);
  }

  modalClose(that){
    var instance = that;
    let modalClassObj = document.querySelector(that.modalClass);

    //close on outside click
    modalClassObj.addEventListener('click', function (e) {
      // console.log("in");
      let element = e.target;
      let parentElement = element.parentNode;
      let grandParentElement = parentElement.parentNode;
      if(!element.classList.contains('modal__wrap') && !parentElement.classList.contains('modal__wrap') && !grandParentElement.classList.contains('modal__wrap')){
        modalClassObj.classList.remove(that.openClass);
        // console.log("done");
      }
    });
  }


};
