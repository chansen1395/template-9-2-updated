import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Haiku from './haiku-creator.js';


$(function () {
  $('#haiku-checker-form').submit(function (event) {
    event.preventDefault();
    $("#response").empty();
    const line1 = $('#line1').val();
    const line2 = $('#line2').val();
    const line3 = $('#line3').val();
    const haiku = new Haiku(line1, line2, line3);
    const output = haiku.checkLines();
    if (output) {
      $('#response').append(`<li>${haiku.line1}</li>`);
      $('#response').append(`<li>${haiku.line2}</li>`);
      $('#response').append(`<li>${haiku.line3}</li>`);
    } else {
      $('#response').append(`<p>Your "haiku" is not a haiku. Try again.</p>`);
    }
  });
});
