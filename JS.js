
var favoriteMovie = prompt("what is your favorite Movie ?");
FavoriteMovie();

function FavoriteMovie()
{
while(favoriteMovie != "Fast&Furious" && favoriteMovie !="The Quslizer2" && favoriteMovie != "DORA")
{
  favoriteMovie =prompt("choose form tha list  1- Fast&Furious 2- " )
}

var times = prompt("how many time u need to see it in my page");
while(times >10)
{
 times = prompt("The number of repetitions allowed for a movie is between 1 and 10, so re-enter the number of repetitions");
}
 
if (favoriteMovie == "DORA")
{
   for(var i =0 ; i<times ; i++)
   {
     document.write("<div>"+"<h3 class='clP1'>"+ favoriteMovie +"</h3>"+"<img/src='https://occ-0-2895-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcoM7uEXJmW-dhwDYJljHDKGYOz-FWyRDeSZAjFw6XP4dqermIxAQlc10_3idELDlLgomPw2ktpPqEWppYwQJlq9nAs.jpg?r=973'>"+"</div>");
   }
   document.write("<p class='clP1'>"+"times "+i+"</p>");

} else if(favoriteMovie == "Fast&Furious") {
   for(var i =0 ; i<times ; i++)
   {
     document.write("<div>"+"<h3 class='clP1'>"+ favoriteMovie +"</h3>"+"<img src='https://occ-0-2895-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQMi0BDgRXkVIOp-fbeeMKrC0kEbOZX-G2OojoTM7BTl6lkCRqN_Ilgl-KSPc42lFCGczx_C_EZ7XlB-ktuq_xyva3s.jpg?r=87c'>"+"</div>");
   }
   document.write("<p class='clP1'>"+"times "+i+"</p>");

} else {
   for(var i =0 ; i<times ; i++)
   {
     document.write("<div>"+"<h3 class='clP1'>"+ favoriteMovie +"</h3>"+"<img src='https://occ-0-2895-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSpB1old9NSiu1wiHBR2x4f4FuLTmBHTzvXVFmTEHBPQEU5BqsKwe0VJdH2Lidq7S_C6S31vdW4bdgufpin9esY1834.jpg?r=cf9' >"+"</div>");
   }
   document.write("<p class='clP1'>"+"times "+i+"</p>");
}

}


var star = prompt("How many stars for this page ");
stars(star);
function stars(number)
{
  for( var i =0;i<number;i++)
  {
    document.write("<div>"+"<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3dGmyiQcvk6Q_uayM8xFi1XbjTAEPOdwxyyAW7c3sHRy0H0_fIFaBm8S_gG1zIXcpvk&usqp=CAU'"+"</div>");
  }

} 

function ChangeCOLOR()
{
 var color = prompt("Enter the a color name ");
  
  return color;
}


var result= ChangeCOLOR();
document.getElementById("myH1").style.color = result;







    

  
  
  
     
  


