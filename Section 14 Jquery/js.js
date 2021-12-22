var h1text;
$("input").keypress(function(event){
   return h1text = event.key;
})

$("h1").text("h1text");