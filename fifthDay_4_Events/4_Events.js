$('.firstButton').on('click', () => {
    console.log('Yeah, you clicked me');
  });

  $('.secondButton').on('click', () => {
    $('.firstButton').text("You've changed this");
    $('.firstButton').css({'background-color': 'yellow'});
  });

  $('.thirdButton').on('click', () => {
    $('button').css({'background-color': 'grey'});
  });
