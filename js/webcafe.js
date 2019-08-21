let items = $('.menu-item');

items.attr('tabindex','0');

items.on('mouseover focusin', function(){
  items.removeClass('menu-act');
  $(this).addClass('menu-act')
});