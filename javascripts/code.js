
$( function () {
  var allPanels = $('.accordion > .video-body').hide();
  $('.video-body').first().slideDown();
    
  $('.accordion > .video-header > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
      }
      
    return false;
  });

})
;
