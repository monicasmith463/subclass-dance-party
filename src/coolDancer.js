// // var coolDancer = function(top, left, timeBetweenSteps) {
// //   makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
// //   // this.setPosition(top, left);
// //   this.step();
// // }

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
// coolDancer.prototype = Object.create(makeBlinkyDancer.prototype);
// coolDancer.prototype.constructor = coolDancer;

// var oldStep = coolDancer.prototype.step;

// coolDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   // clearInterval();
//   // console.log("hi");
//   // oldStep.call(this);
  
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
// };


