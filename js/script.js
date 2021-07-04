$( document ).ready(function() {
    console.log( "ready!" );

    $("#btn-home").click(function() {
        location.href = '/maxdoctor.html' ;
    })

    $.get( "https://servicodados.ibge.gov.br/api/v1/localidades/estados", function(result) {
        result.forEach(element => {
            $("#uf").append('<option>' + element.nome + '</option>');
        });
    });

    $("#btn-continue").click(function(e) {
        e.preventDefault();
        let crm = $("#crm").val();
        let uf = $("#uf").val();
        
        $(".crm-required").removeClass("show");
        $(".crm-required").addClass("hide");
        $(".crm-invalid").removeClass("show");
        $(".crm-invalid").addClass("hide");
        $(".uf-required").removeClass("show");
        $(".uf-required").addClass("hide");

        if(crm == '') {
           $(".crm-required").addClass("show");
           $(".crm-required").removeClass("hide");
        } else if (crm.length < 5 ){
            $(".crm-invalid").addClass("show");
            $(".crm-invalid").removeClass("hide");
        } else if(uf == '') {
            $(".uf-required").addClass("show");
            $(".uf-required").removeClass("hide");
        } else {
            if( $(".crm-required").hasClass("show") ) {
                $(".crm-required").removeClass("show");
                $(".crm-required").addClass("hide");
            }
            if( $(".crm-invalid").hasClass("show") ) {
                $(".crm-invalid").removeClass("show");
                $(".crm-invalid").addClass("hide");
            }
            if( $(".uf-required").hasClass("show") ) {
                $(".uf-required").removeClass("show");
                $(".uf-required").addClass("hide");
            }
            
            $(".overlay-success").removeClass("hide");
            $(".overlay-success").addClass("show");
        }
    })

    $("#btn-close").click(function() {
        $(".overlay-success").removeClass("show");
        $(".overlay-success").addClass("hide");

        $("#crm").val('');
        $("#uf").val('');

    })
 
    
});