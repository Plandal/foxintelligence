console.log('load js oki')


$('#fiHtmlFile').on('change', function (e) {
    let file = $(this).get(0).files[0];
    if (file && file.type === "text/html") {
        var json = $.fn.fiHtmlToJson(file,$('#temp'));
        console.log('json = ',json);
    }
});