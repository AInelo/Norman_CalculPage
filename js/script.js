jQuery(document).ready(function(){
  // var stickyOffset=jQuery('.head-banner').offset().top;
// jQuery(window).scroll(function(){
//   if(jQuery(window).scrollTop()>=stickyOffset){
//     jQuery('.head-banner, body').addClass('fixed')
//   }
//   else{
//     jQuery('.head-banner, body').removeClass('fixed')
//   }});
  var HomePageHeightBannerBtn=jQuery('.home .matrice.flex.flex_type_12').outerHeight();
  jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop()>=HomePageHeightBannerBtn){
      jQuery('body, .btn-fixed-site').addClass('display-btn-fixed')
    }
    else{
      jQuery('body, .btn-fixed-site').removeClass('display-btn-fixed')}});

      jQuery('input[value="min"]').click(function(){
        var currentvalue=parseInt(jQuery(this).parents('.acf-field-radio').parent().find('input[type="number"]').val());
        if(!isNaN(currentvalue)&&currentvalue>0){
          jQuery(this).parents('.acf-field-radio').parent().find('input[type="number"]').val(currentvalue-1)}});
          jQuery('input[value="add"]').click(function(){var currentvalue=parseInt(jQuery(this).parents('.acf-field-radio').parent().find('input[type="number"]').val());jQuery(this).parents('.acf-field-radio').parent().find('input[type="number"]').val(currentvalue+1)})});jQuery(document).ready(function($){if(typeof acf==='undefined')
return;acf.add_action('load',function($el){jQuery(".acf-input-date input.form-control").attr("placeholder","jj/mm/aaaa")});$('.acf-google-map input.search, .acf-date-picker input.input').addClass('form-control');acf.addAction('validation_begin',function($form){$form.find('.acf-error-message').remove()});acf.addAction('invalid_field',function(field){field.$el.find('.acf-notice.-error').addClass('alert alert-danger').insertAfter(field.$el.find('.acf-input'))});acf.addAction('invalid_field',function(field){field.$el.find('.acf-notice.-error').remove()});$('.acf-google-map input.search, .acf-date-picker input.input').addClass('form-control');acf.addAction('validation_begin',function($form){$form.find('.acf-error-message').remove()});acf.addAction('invalid_field',function(field){field.$el.find('.acf-notice.-error').addClass('alert alert-danger').insertAfter(field.$el.find('.acf-input'))});acf.unload.disable()})
