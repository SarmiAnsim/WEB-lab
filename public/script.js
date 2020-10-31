
function getArgValue(argument) {
	return argument;
}

function calcSumm(a, b) {
	return a+b;
}

function changeArray(Arr) {
	for (let i = 0; i < Arr.length; i++)
		if(typeof(Arr[i]) == typeof(i))
			Arr[i] *= Arr[i];
		else
			Arr[i] = 0;
	alert(Arr);
}

$(document).ready(function () {

    let show_js = false;
    $("#showJs").click(function() {
    	show_js = !show_js;
        $("#table").toggle("hidden");
        $("#showJs").html(show_js?"Все, достаточно!":"Проверим js?");
        window.scrollTo(0,150);
    });

    $(".image").click(function() {
        $("#desc").css({
        	'opacity': 1-$("#desc").css('opacity')
        });
    });

    $("#getText").click(function() {
        $("#resultText").html("Получите: " + $("#text1").val());
    });

    $("#getSumm").click(function() {
        $("#resultSumm").html("Сумма: " + (Number($("#num1").val()) + Number($("#num2").val())))
    });

    $("#getSqtArr").click(function() {
        let resultArr = "";
        $("#textArr").val().split(' ').forEach(function (item, i) {

        	resultArr += " " + (isNaN(Number(item))?" 0" : Number(item) * Number(item));

        });
        $("#resultSqrArr").html("Квадраты значений: " + resultArr);
    });
});