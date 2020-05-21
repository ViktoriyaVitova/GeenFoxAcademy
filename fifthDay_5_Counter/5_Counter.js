let i = 1;
let total = 0;

$('.increase').on('click', () => {
console.log(total);
total = total + i;
$('#counter').text(total);
});

$('.decrease').on('click', () => {
    console.log(total);
    total = total - i;
    $('#counter').text(total);
    });