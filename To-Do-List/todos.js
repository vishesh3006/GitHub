//check off specific todos by clicking
$("ul").on('click','li',function(){
	$(this).toggleClass("completed");
});
 
 //Deleting
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut('slow',function(){
		$(this).remove();
	});
	event.stopPropagation();
});




$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		//create new li
	$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + '</li>');
		$('input[type="text"]').val("");
	} 
 
});

$('.fa-plus').click(function(){
$("input[type='text']").fadeToggle();
});



















/*$("li").click(function(){
	//if li is gray, turn black else turn gray
	if($(this).css('color') === 'rgb(128, 128, 128)'){
		$(this).css({
			color: "black",
			textDecoration:"none"
			
		});
	}

	else{
		$(this).css({
			color: "gray",
			textDecoration:"line-through"
		});
	}
});*/

