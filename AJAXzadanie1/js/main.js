$(document).ready(function () {

    $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function (data) {
            $('#btn').click(function () {

                var obj = $.parseJSON(data);
                console.log(obj);
                $('#dane-programisty').text(obj.imie+' '+obj.nazwisko+' '+obj.zawod+' '+obj.firma);

            })
        })
        .fail(function (error) {
            console.error(error);
        })
});
