import "bootstrap/js/src/index";
import $ from "jquery";
import Accordion from "../../components/accordion/accordion.js";
import parallaxBanner from "../../components/parallaxbanner/parallaxbanner.js";

//auto closing when clicked outside navbar or accordion
$('body').click(function(event){
    console.log(event.target);
    if ($('.navbar').find(event.target).length === 0){
      $(".navbar > .navbar-collapse").removeClass("show");
    }
    if ($('.accordion').find(event.target).length === 0){
      console.log("g");
      $(".collapse").removeClass("show");
      $(".btn.btn-link").addClass("collapsed");
    }
  });

  Accordion();

  parallaxBanner();


