$('#addToDoButton').on('click', () => {
    let todoItem = $('#todoItem').val();
    //  $('ul').append('<li>' + todoItem + '</li>');
    const item = $(`
<div class="item">
    <li class="name"><span class="text"></span></li>
    <div class="icons">
        <button class="doneIcon"><i class="far fa-check-square"></i></button>
        <button class="deleteIcon"><i class="fas fa-eraser" ></i></button>
    </div>
</div>`);

    item.find('.text').text(todoItem);
    item.find('.deleteIcon').on('click', () => {
        $(item).remove();
    });
    item.find('.doneIcon').on('click', () => {
        $(item).css('color', '#dce5f2');
        item.find('.text').css('text-decoration', 'line-through');
        item.find('.doneIcon').attr("disabled", "disabled");
    });


    $('ul').append(item);
    $('#todoItem').val([]);
});


