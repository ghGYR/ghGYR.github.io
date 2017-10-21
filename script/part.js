   function show_title(obj)
                      {   //alert("aaa");
                          var div=document.createElement("div")
                          //var par=obj.parentNode;
                          var title=obj.getAttribute('t');
                          div.className="part-title";
                          div.style.animation="in 0.4s linear "; 
                          div.style.webkitAnimation="in 0.4s linear ";
                         var s= '<div >'+title+'</div>';
                          div.innerHTML=s;
                         obj.appendChild(div);
                         obj.addEventListener('mouseleave', function(){
                          div.style.animation="out 0.2s linear "; 
                          div.style.webkitAnimation="out 0.4s linear ";
                          div.addEventListener("animationend", function() {
                          obj.removeChild(div);}, false);});
                       }  

 function jump(page){
    var a=$("#next_page").load("../page/"+page+".html",function(){ $("#next_page").fadeIn(100);}); 
    $("#myCarousel").carousel("next");
 }   