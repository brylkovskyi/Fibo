$('#fiboIndex').click(function () {
    document.getElementById('input-wrap1').style="display:table; margin: 10px 0;";
    document.getElementById('input-wrap2').style="display:none; margin: 10px 0;"
});
$('#fiboNumber').click(function () {
    document.getElementById('input-wrap2').style="display:table; margin: 10px 0;";
    document.getElementById('input-wrap1').style="display:none; margin: 10px 0;"
});


$('#ok1').click(


function () {
    var n = +document.getElementById('inputIndex').value;

    var a=1;
    var b=1;
    var i=1;
    while (true) {
        var c= a+b;
        a=b;
        b=c;

        i=i+1;
        if (a===n){
            $('#resultDiv').html("Введене число є "+ i +"-им в Ряді чисел Фібоначчі");
            break;

        } else
        if (a > n) {
            $('#resultDiv').html('Введене число не належить до Ряду Фібоначчі');
            break;
        }
    }
});

$('#ok2').click(function () {
        var y = +document.getElementById('inputNumber').value;
        console.log(y);
        var a=1;
        var b=1;
        var i=1;
        while (i<=y) {
            var c= a+b;
            a=b;
            b=c;
            i=i+1;
            if (i===y) $('#resultDiv').html("Введеній позиції відповідає число "+ a +" з Ряду Фібоначчі");
        }
        }
    );


