<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
	<a id="test" href="#"> CLick </a>
	<script type="text/javascript">
		document.getElementById("test").onclick = function(){
			window.open("http://www.google.com",'_blank');
			window.open("http://www.p3php.in",'_blank');
		}
</script>

 <?php
/* Redirect browser */
header("Location: http://theos.in/");
 
/* Make sure that code below does not get executed when we redirect. */
exit;
?>
 </body>
</html>
