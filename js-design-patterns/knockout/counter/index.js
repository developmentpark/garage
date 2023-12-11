var counterViewModel = function () {
  this.numberOfClicks = ko.observable(0);

  //simple function
  this.increase = function () {
    this.numberOfClicks(this.numberOfClicks() + 1);
  };

  /*
  This is synchronized by automatic dependency tracking. 
  disable of button linked with hasClickedTooManyTimes that 
  depends on numberOfClicks that is linked to the text of 
  the div, changes in numberOfClicks are automatically updated 
  to the disable of the button through the hasClickedTooManyTimes 
  function
  */
  this.hasClickedTooManyTimes = ko.computed(function () {
    return this.numberOfClicks() >= 3;
  }, this);

  this.reset = function () {
    this.numberOfClicks(0);
  };
};

ko.applyBindings(new counterViewModel());
