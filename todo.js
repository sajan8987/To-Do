var myArr = [ ]

function content()
{
    var inputText = document.getElementById("event").value;
    
    //append data to the array
    myArr.push(inputText);
    var pval = "";
    for(i=0; i < myArr.length; i++)
    {
        pval = pval + myArr[i] + "<br/>";
    }
    //display the array value
    document.getElementById("pText").innerHTML = pval;

}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].content = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}