// var doc =  document.getElementsByClassName("recherche");
// var word = "foo", queue = [document.body], curr;
// while(curr = queue.pop()){
//     if(!curr.textContent.match(woed))
//         continue;
//     for(var i = 0; i < curr.childNodes.length;i++){
//         switch(curr.childNodes[i].nodeType){
//             case Node.TEXT_NODE:
//                 if(curr.childNodes[i].textContent.match(word)){
//                     console.log("FOUND!");
//                     console.log(curr)
//                 }
//                 break;
//             case Node.ELEMENT_NODE:
//             queue.push(curr.childNodes[i])
//         }
//     }
// }
// findText(node,text){
//     if(node.childNodes.legnth==0){
//         if(node.textContent.indexOf(text)==-1)
//             return[];
//         return [node];
//     }
//     var matchingNodes = new Array();
//     for(child in node.childNodes){
//         matchingNodes.concat(findText(child, text));
//     }
//     return matchingNodes;
// }
var barre=document.getElementsByClassName("recherche");
var contenu=document.getElementsByClassName("corps");
var nombre=document.getElementById("occurrence");
var motTrouve=document.getElementById("resultat");
var effacer=document.getElementById("annuler");
var text=contenu.innerHTML;