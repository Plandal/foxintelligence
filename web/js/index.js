console.log('load js oki')


$('#fiHtmlFile').on('change', function (e) {
    let file = $(this).get(0).files[0];
    if (file && file.type === "text/html") {
        $.ajax({
            // Your server script to process the upload
            url: 'upload',
            type: 'POST',

            // Form data
            data: new FormData(file),

            // Tell jQuery not to process data or worry about content-type
            // You *must* include these options!
            cache: false,
            processData: false,
            contentType: "text/html",
            success: function (data) {
                console.log('upload successful!');
            },

            // Custom XMLHttpRequest
            xhr: function () {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    // For handling the progress of the upload
                    myXhr.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            $('progress').attr({
                                value: e.loaded,
                                max: e.total,
                            });
                        }
                    }, false);
                }
                return myXhr;
            },
        });

    } else {
        alert("Ce document n'est pas reconnus comme un fichier text/html")
    }
});
//
////function submitForm(event, data)
//{
//  // Create a jQuery object from the form
//    $form = $(event.target);
//
//    // Serialize the form data
//    var formData = $form.serialize();
//
//    // You should sterilise the file names
//    $.each(data.files, function(key, value)
//    {
//        formData = formData + '&filenames[]=' + value;
//    });

//}