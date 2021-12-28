(function ($) {
    'use strict';
    //Timepicker
    $('.timepicker').timepicker({
        showInputs: false
    });
    Dropzone.autoDiscover = false; 

  
        $(".dropzone").dropzone({
            maxFiles: 2000,
            url: "/ajax_file_upload_handler/",
            success: function (file, response) {
                console.log(response);
            }
        });

    $('.input-daterange-timepicker').daterangepicker({
        minDate: new Date(),
        timePicker:true,
        singleDatePicker: true,
        locale: { format: 'MM/DD/YYYY hh:mm A' }
    });
    //datedropper
    $('.datedropper').dateDropper();

    //jQueryUI Slider
    $(".input-slider").slider({
        range: "min",
    });
    $(".input-rangeslider").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
    });

    function readFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(input).parents('.avatar-input').find('.avatar-img').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    $('.avatar-file-picker').on('change', function () {
         readFile(this);
    });

})(window.jQuery);