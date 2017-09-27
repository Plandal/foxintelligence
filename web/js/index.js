$('#fiHtmlFile').on('change', function (e) {
    console.log('1')
    let file = $(this).get(0).files[0];
    console.log('2')
    if (file && file.type === "text/html") {
        console.log('3')
//        $.ajax({
//            url: 'upload',
//            type: 'POST',
//            data: file,
//            dataType: 'json',
//            success: function (json) {
//                console.log('retour ok = ', json);
//            },
//            error: function (error) {
//                console.log('error = ', error);
//            }
//        });

        var http = new XMLHttpRequest();
        var url = "upload";
        var params = file;
        http.open("POST", url, true);

//Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function () {//Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                console.log('retour oki');
            }
        }
        http.send(params);
    }
});