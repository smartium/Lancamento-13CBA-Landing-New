import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';

import './main.html';

Template.body.onCreated(()=> {
});

Template.body.onRendered(()=> {
  stageH = $(window).innerHeight();
  $('.container').css('height', stageH);

  $(window).resize(()=> {
    stageH = $(window).innerHeight();
    $('.container').css('height', stageH);
  });
});

Template.body.helpers({
});

Template.body.events({
});
