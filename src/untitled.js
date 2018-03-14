var makePigDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="coolDancer"></span>');
};

makePigDancer.prototype = Object.create(makeDancer.prototype);

makePigDancer.prototype.constructor = makePigDancer;

var oldStep = makePigDancer.prototype.step;

makePigDancer.prototype.step = function() {
  var randomHeight = $('body').height() * Math.random();
  // var randomWidth = $('body').width() * Math.random();
  var animationTime = 500;
  // if(!$("pigDancer").hasClass(".lineUp")) {
    $('pigDancer').animate({top: randomHeight, animationTime});
    $('pigDancer').animate({width: this.getRandomInt(50, 100), height: this.getRandomInt(50, 100)}, 200);
    $('pigDancer').hover(function() {
      $(this).height(400);
      $(this).width(400);
    });
  // } 
  // if ($("pigDancer").hasClass(".lineUp")) {
  //   alert('hasLineUp!')
  //   $('pigDancer').css("animation", "none");
  // }
    oldStep.call(this);

};

