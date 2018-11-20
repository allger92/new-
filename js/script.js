(function ($) {
    $(document).ready(function () {


        $("input").addClass("form-control");

        $("#t4").hide(); //прячем 4 вкладку

        $("#tab1").show(); // показываем контент 1 табика



        $("#t1").addClass("tabstart"); // делаем первый табик "активным"
        $(".main").css({
            "border-top-left-radius": "0px"
        });


        // переключение табов
        $(".tab").click(function () {
            $(".main").hide();
            $("#t1").removeClass("tabstart");
            $(".main").css({
                "border-top-left-radius": "10px"
            });
            var a = $(this).attr("data-name");

            $("#" + a).show();

        });


        // переключение скругления верхних углов в завимисомти от нажатого таба
        $("#t1").click(function () {
            $(".main").css({
                "border-top-left-radius": "0px"
            });
        });

        $("#t3").click(function () {
            $(".main").css({
                "border-top-right-radius": "0px"
            });
        });
        $("#t2").click(function () {
            $(".main").css({
                "border-top-right-radius": "10px",
                "border-top-left-radius": "10px"
            });
        });


        // переключение внешки ссылок (вертикальная разделительная черта)
        $("#l1").click(function () {
            $(".line").show();
            $("#img1-2").hide();
        });

        $("#l2").click(function () {

            $("#img1-2").hide();
            $("#img2-3").hide();
        });

        $("#l3").click(function () {
            $(".line").show();
            $("#img2-3").hide();
        });

        // добавление Tab 4 при выборе селекта
        $("#select1").change(function () {
            var value1 = $("#select1 option:selected").val();
            if (value1 === "tab4") {
                $("#t4").show(); // показываем 4й таб 
                $(".tab").css({
                    "width": "23.85%"
                }); // меняем ширину табов
                $("#t4").click(function () {
                    $(".main").css({
                        "border-top-right-radius": "0px"
                    });
                });
                $("#t3").click(function () {
                    $(".main").css({
                        "border-top-right-radius": "10px",
                        "border-top-left-radius": "10px"
                    });
                }); // скругление верхних углов с учетом 4х вкладок

            } else { // если выбираем обратно пункт без добвления 4го таба
                $("#t4").hide(); // прячем 4й таб
                $(".tab").css({
                    "width": "32%"
                }); // возвращаем ширину
                $("#t3").click(function () {
                    $(".main").css({
                        "border-top-right-radius": "0px"
                    });
                });
                $("#t2").click(function () {
                    $(".main").css({
                        "border-top-right-radius": "10px",
                        "border-top-left-radius": "10px"
                    });
                }); // возвращаем скргуление углов с учетом 3 вкладок

            }


        });



        // выбор "другое" в списке
        $("#oth").hide();
        $("#back").hide();
        $("#sel").change(function () {
            var val = $("#sel option:selected").val();
            if (val === "other") {
                $("#sel").hide();
                $("#oth").show();
                $("#back").show();
            }

        });


        $("#back").click(function () {
            $("#sel").show();
            $("#oth").hide();
            $("#back").hide();
        });









    });
})(jQuery);
