$('.thirdButton').one('click', () => {
    let color = $('#colorInput').val();

    console.log(color);

    // document.querySelector('button').style['background-color'] = color;
    $('button').css({ 'background-color': color });

    console.log(color);
});


