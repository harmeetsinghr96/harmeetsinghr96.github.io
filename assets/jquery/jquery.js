
$(document).ready(function(){

    /* Add active class  in nav links on click ( header menus) */
    $(".nav-link").click(function(){
        $(this).addClass("active");
        $(".nav-link").not(this).removeClass("active");
      });

    //   expand text on Read more anchor tags  
      $(".row-three .card a").click(function(e){
          // prevent the default action of an element
           e.preventDefault();  
           $(this).prev().toggleClass("extend-text-bk");

           // check class if exist
           if($(this).prev().hasClass("extend-text-bk")){  
               //change the anchor tag content
               $(this).text('Read less'); 
           }
           else{
               //change the anchor tag content
               $(this).text('Read more'); 
           }
      });

      //mouse enter function
      $(".row-three .card").mouseenter(function(){          
        $(this).find("a").css({"margin-top":"10px"});
        $(this).find("a").addClass("btn btn-info");
        
      });
      //mouse leave function
      $(".row-three .card").mouseleave(function(){
        $(".row-three .card a").removeClass("btn btn-info");
      });
      
  });



  
  