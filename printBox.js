var height = 0, width = 0;
function printbox(width,height){
  var tab="";
    for(var i=1; i<=height; i++){
      for(var j=1; j<=width; j++){
        if(i==1 || i==height || j==1 || j==width){

          tab = tab + "*";
        }
        else{
              tab = tab + " ";

        }
      }
            tab = tab + "\n";
    }
      console.log(tab);
}
printbox(5,4);
printbox(6,5);
module.exports = printbox;