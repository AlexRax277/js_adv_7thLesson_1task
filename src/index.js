class Validator {
  constructor(inputName) {
    this.inputName = inputName;
  }

  validateUsername() {
    return new RegExp('^([a-z])([-|_]?)([a-z]{1,10}|[0-9]{0,3})([-|_]?)([a-z]{1,10})([-|_]?)([a-z]{1,10}|[0-9]{0,3})([-|_]?)([a-z])$', 'igm').test(this.inputName);
  }
}

export default Validator;
