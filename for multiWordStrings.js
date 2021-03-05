//for multiple word strings
for(var x = 1;x<word.length;x++){
  //if theres a space make a empty space
  word[x] != ' ' ? htmlString += `<div></div>` : htmlString += '<div class="empty-letter"></div>';
}

/* and in the style section
 this is for multiple word strings (this is a comment)
.empty-letter{
  border-bottom:none !important;
}
*/