jQuery(document).ready(function() {
    jQuery(document).on('click', '.minus', function() {
        var $input = jQuery(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        if ($input.val() < 1) {
            var elem = jQuery(this).parent().parent().parent().parent().removeClass('furniture_on');
            if (elem.is('.removable')) {
                elem.parent().remove()
            }
        }
        return !1
    });
    jQuery(document).on('click', '.plus', function() {
        var $input = jQuery(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        if ($input.val() >= 1) {
            jQuery(this).parent().parent().parent().parent().addClass('furniture_on')
        }
        return !1
    });
    var idx = 100;
    jQuery('.add-action .btn').click(function() {
        var furniture = jQuery('<div class="col_furniture furniture_on col-12 col-md-6 col-xl-2dot4 removable">' + '<div class="furniture removable">' + '<div class="container_illustration"><span class="illustration"><img src="https://www.demenageur.com/wp-content/mu-plugins/acfvc-volume-calculator/assets/images/objet-ajout.png" alt=""></span></div>' + '<div class="infos">' + '<span class="sub_content">' + '<span class="name"></span>' + '</span>' + '<div class="number_qty">' + '<span class="minus"><span>-</span></span>' + '<input type="number" class="furniture_qty" name="add_furniture[' + idx + '][qty]" value="" required="required" />' + '<span class="plus"><span>+</span></span> ' + '</div>' + '<input type="hidden" class="furniture_name" name="add_furniture[' + idx + '][name]" value="" />' + '<input type="hidden" class="furniture_largeur" name="add_furniture[' + idx + '][largeur]" value="" />' + '<input type="hidden" class="furniture_longueur" name="add_furniture[' + idx + '][longueur]" value="" />' + '<input type="hidden" class="furniture_hauteur" name="add_furniture[' + idx + '][hauteur]" value="" />' + '</div>' + '</div>' + '</div>' + '	</div>');

        furniture.find('.name').text(jQuery('.add_furniture .add_furniture_name').val());
        for (let name of ['name', 'largeur', 'longueur', 'hauteur', 'qty']) {
            var val = jQuery('.add_furniture .add_furniture_' + name).val();
            if (!val) {
                alert('Merci de vérifier votre saisie (' + name + ').');
                return
            } else {
                furniture.find('input[name$="[' + name + ']"]').val(val)
            }
        }
        jQuery('.custom_furnitures').append(furniture);
        refresh_volumes();
        ++idx
    });
    jQuery('#Tabs-types li:first-child a').tab('show');
    jQuery('.add-action .btn').click(function() {
        jQuery('.add_furniture input').empty()
    });
    jQuery('.view_all_reset').hide();
    jQuery('.view_all').click(function() {
        jQuery('#Tabs-types li a').tab('show');
        jQuery('.tab-pane.fade.furnitures').addClass('active show"');
        jQuery('div[class^="col_furniture"]:not(.furniture_on)').hide();
        jQuery('.view_all').hide();
        jQuery('.view_all_reset').show()
    });
    jQuery('.view_all_reset').click(function() {
        jQuery('.tab-pane.fade.furnitures').removeClass('active show"');
        jQuery('#Tabs-types li:first-child a').tab('show');
        jQuery('div[class^="col_furniture"]').show();
        jQuery('.view_all').show();
        jQuery('.view_all_reset').hide()
    });
    jQuery(".remove_form").click(function() {
        jQuery("#volume-calculator")[0].reset();
        jQuery('#results .result-m3 span.value').empty().html('0 <span class="m3">m<sup>3</sup></span>');
        jQuery('#results .result-inventaire span.listing').empty().html('<span class="cartons"><b>0</b> cartons</span><span class="scotch"><b>0</b> rouleau de scotch</span>')
    })
})
