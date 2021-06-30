alert("hello");
var favoriteMovie = prompt("what is your favorite movie");
if (favoriteMovie != null )
{
  if(favoriteMovie=="DORA") 
{
  var color1 = prompt("enter a color to change somthing");
  document.getElementById("myH2").style.color = color1;
  document.write("<h2>"+ favoriteMovie +"<h2>");
  document.write("<h2>"+ color1 +"<h2>");

  document.getElementsByTagName('p').style.color = color1;
}  
else if (favoriteMovie =="Fast&Furious" ||favoriteMovie =="Fast and Furious ")
{
  var color1 = prompt("enter a color u need to change it ");
  document.getElementById("myH1").style.color = color1;
  document.write("<h2>"+ favoriteMovie +"<h2>");
  document.write("<h2>"+ color1 +"<h2>");
} else if (favoriteMovie =="The Quslizer2")
{
  var color1 = prompt("enter a color u need to change it ");
  document.getElementById("myH0").style.color = color1;
  document.write("<h2>"+ favoriteMovie +"<h2>");
  document.write("<h2>"+ color1 +"<h2>");
} else 
{
  alert(" choose movie name form the website");
}

}
