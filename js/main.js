 $(document).ready(function () {
            $("#a").click(function () {
                $(".nav_hidden").slideToggle();
            });
            $(window).resize(function(){
            if(window.innerWidth>=1200){
                $(".nav_hidden").show();
            }
        });
        $(window).resize(function(){
            if(window.innerWidth<=1199){
                $(".nav_hidden").hide();
            }
        });
        });
        