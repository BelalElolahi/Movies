var favoriteMovie = prompt("what is your favorite movie");
if (favoriteMovie != null )
{
  if(favoriteMovie=="DORA" || favoriteMovie =="Fast&Furious"||favoriteMovie =="The Quslizer2" ) 
{
  var color1 = prompt("enter a color to change somthing");
  
  document.getElementById("myH2").style.color = color1;
  document.getElementById("myH3").style.color= color1;
  document.getElementById("myH4").style.color = color1;
  document.write("<h2>"+ favoriteMovie +"<h2>");
  document.write("<h2>"+ color1 +"<h2>");

  document.getElementsByTagName('p').style.color = color1;
} else{ 
  var color1 = prompt("enter a color to change somthing");
  
  document.getElementById("myH1").style.color = color1;
  document.write("<h2>"+ favoriteMovie +"<h2>");
  document.write("<h2>"+ color1 +"<h2>");


  
}

}
