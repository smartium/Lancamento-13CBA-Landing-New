import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';

// import './hideaddrbar';

import './main.html';

var stageSize = new ReactiveVar({});

Template.body.onCreated(()=> {
});

Template.body.onRendered(()=> {
  stageSize.set({
    w: $(window).innerWidth(),
    h: $(window).innerHeight()
  });
  // stageW = $(window).innerWidth();
  // stageH = $(window).innerHeight();
  $('.container').css('height', stageSize.get().h);

  $(window).resize(()=> {
    stageSize.set({
      w: $(window).innerWidth(),
      h: $(window).innerHeight()
    });
    $('.container').css('height', stageSize.get().h);
  });

  var audio = new Audio('https://lancamento13cba.com.br/audio/musica.mp3');
  audio.play();
  audio.loop = true;
});

Template.body.helpers({
  isDevelopment() {
    return Meteor.isDevelopment ? true : false;
  },

  stageSize() {
    return `(${stageSize.get().w} x ${stageSize.get().h})`;
  }
});

Template.body.events({
  'click button'(e) {
    e.preventDefault();
    location.reload();
  },
});
