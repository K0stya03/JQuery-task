
/* Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 
 */

$(document).ready(function() {
  $('h3').each(function() {
    let $h3 = $(this);
    let $div = $h3.next('div');
    $div.insertBefore($h3);
    let element3 = $('div:contains("div3")');
    let element4 = $('div:contains("div4")');
    let header2 = $('h3:contains("header2")');
    element3.insertBefore(header2);
    element4.insertBefore(header2);


  });
});