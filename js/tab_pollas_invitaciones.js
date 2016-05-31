$(function()
{	    

   $("#nav li a").click(function() {
 
        $("#ajax-content").empty().append("<div id='loading'><img src='../img/loading2.gif' alt='Loading' /></div>");
        $("#nav li a").removeClass('current');
        $(this).addClass('current');

        var url = this.href;                
        var urlAux = url;
        console.log(urlAux);
	    
        $.ajax({ url: urlAux, async:true, global:false,success: function(html) {
            $("#ajax-content").empty().append(html);
    		}
    	});
    	return false;
    });
 
    //se ejecuta el evento click en el primer tab para forzar la carga
    $("#nav li a").first().trigger('click');

    $('.volver-btn').click(function() {
        event.preventDefault(); 
        history.back(1); 
    });

});