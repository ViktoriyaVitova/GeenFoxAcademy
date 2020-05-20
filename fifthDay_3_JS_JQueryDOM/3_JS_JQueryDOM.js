
let nameList = ['John', 'Anna', 'Sofie', 'Mark'];

nameList.forEach((name) => {
    $('ul').append('<li class="name">' + name + '</li>');
    $('.name').css({'font-weight': 'bold'});
});


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('body').append('<h1>' + additionalBlock.title + '</h1>');
  $('body').append('<p>' + additionalBlock.text + '</p>');
 