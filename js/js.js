$(document).ready(function(){
    $("#colorPicker").ColorPicker({
        color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('.tshirt_img').css('background-color', '#' + hex);
                $('#colorPicker').css('background-color', '#' + hex);
	}})

    $(".logos_wrapper img").draggable({ 'revert': true, helper: 'clone'});
    $(".tshirt_img").droppable({
        drop: function(event, ui){
            $(this).css('background', $(this).css('background-color')+' url('+ui.draggable.attr('src')+') no-repeat center')
        }
    });

    $("#switch_tshirt").on('click', function(){
        $(this).fadeOut('slow');
        $(".tshirt_wrapper").hide('slide', {direction: 'left'}, 500);
        setTimeout( function() {$(".tshirt_list_wrapper").show('slide', {direction: 'left'},500)}, 500);
    })

    $(".tshirt_list li img ").on('click', function(){
        $(this).effect('highlight', { 'color': 'lightgrey' } , 1000);
        $(".tshirt_list_wrapper").fadeOut('slow');
        var tshirt_url = $(this).attr('src');
        setTimeout( function() {
            $("#switch_tshirt").fadeIn('slow');
            $(".tshirt_img").attr('src', tshirt_url);
            $(".tshirt_wrapper").show('slide', {direction: 'left'}, 500) }, 500);
    })
})