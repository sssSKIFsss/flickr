// JavaScript Document
var main = function () {
 "use strict";
 // на самом деле это всего одна строка,
 // но я разделил ее на несколько
 // для улучшения восприятия
 var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
 "tags=dogs&format=json&jsoncallback=?";
 $.getJSON(url, function (flickrResponse) {
  flickrResponse.items.forEach(function(photo) {
   // создаем новый элемент jQuery для помещения в него изображения
   var $img = $("<img>");
   // помещаем в атрибут URL, хранящийся в ответе Flickr
   $img.attr("src", photo.media.m);
   // прикрепляем тег img к элементу main.photos
   $("main .photos").append($img);   
  });
 });
};
$(document).ready(main);