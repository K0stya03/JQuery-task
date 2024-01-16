/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function () {
  let $allHTag = $("h2.head");
  $allHTag.css("background-color", "green");

  let $innerElements = $allHTag.find(".inner");
  $innerElements.css("font-size", "35px");

});
