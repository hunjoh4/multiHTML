let items = $('.menu-item');
let section = $('.board section');
let tab = $('.tab');
let tabsubject = $('.board ul a');

items.attr('tabindex','0');
tabsubject.addClass('icon-dot-circled');
tab.attr('tabindex','0');

items.on('mouseover focusin', function(){
  items.removeClass('menu-act');
  $(this).addClass('menu-act')
});

tab.on('click keyup', function(e){
  if(e.type === 'click' || (e.type === 'keyup' && e.keydode === 13)){
    section.removeClass('tab-act');
    $(this).parent().addClass('tab-act');
  }
  
});

