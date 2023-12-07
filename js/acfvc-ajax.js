function refresh_volumes(){
  var furnitures=jQuery('#volume-calculator').serialize();
  var data={
    'action':'volume_calculator',
    'mode':'m3',
    'furnitures':furnitures,
  };

  jQuery.post(ajaxurl,data,function(response){
    jQuery('#results .result-m3 span.value').empty().html(response)
  });
    var data={
      'action':'volume_calculator',
      'mode':'listing',
      'furnitures':furnitures,
    };
    jQuery.post(ajaxurl,data,function(response){
      jQuery('#results .result-inventaire span.listing').empty().html(response)
    })
  }
jQuery(document).ready(function(){
  jQuery('#volume-calculator').on('change','input',function(){
    if(!jQuery(this).is(':input[class*=add_furniture]')) {
      refresh_volumes()
    }
  });
  refresh_volumes()
})
