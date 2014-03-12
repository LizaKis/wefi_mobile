(function($) { 
  $(document).ready(function() {

    $('.view-management .views-row').each(function(i) {
      $(this).find('.views-field-field-link').find('.field-content').prepend(
      "<div class='full-biography'>Full Biography</div><div class='close-text'>Close</div>");
    });

    $('.full-biography').click(function() {
      $(this).parents('.views-field-field-link').prev().find("#content-summary").css('display','none');
      $(this).parents('.views-field-field-link').prev().find("#content-body").css('display','block');      
      $(this).css('display','none');
      $(this).parents('.views-row').addClass('views-row-open');      
    });

    $('.close-text').click(function() {
      if ($(this).parents('.views-field-field-link').prev().find("#content-summary").length > 0) {
        $(this).parents('.views-field-field-link').prev().find("#content-summary").css('display','block');
        $(this).parents('.views-field-field-link').prev().find("#content-body").css('display','none');
      }
      else {
        $(this).parents('.field-content').css('height','40px');
      }      
      $(this).parents('.views-field-field-link').prev().css('border-bottom','0px');
      $(this).parents('.views-row').removeClass('views-row-open');
      $(this).prev().css('display','block');
    });

    $("#main-menu").mmenu();

    var is_open = false;
    $("#header .open-menu").click(function() {
      if (is_open) {
        $("#main-menu").trigger("close");
      }
      else {
        $("#main-menu").trigger("open");
      }
      is_open = !is_open;
      
    });

    /*var obj = $('#main-menu ul li a');
    for (var i = 0; i < obj.length; i++) {
      if ( obj.eq(i).attr('href') == )
      obj.eq(i).;
    }*/

  });
})(jQuery);