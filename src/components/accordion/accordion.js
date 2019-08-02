import $ from "jquery";
var Accordion=()=>{
    $(document).ready(function() {
        var url = document.location.toString();
        if ( url.match('#') ) {
            var hash = url.split('#')[1];
    
            // collapse the expanded panel
            $('.btn.btn-link').addClass('collapsed');
            $('.collapse').removeClass('show');
            
            // expand the requested panel
            $('#' + hash).addClass('show');
            $('[data-target="#'+ hash +'"]').removeClass('collapsed');
        }
      });
}

  export default Accordion;