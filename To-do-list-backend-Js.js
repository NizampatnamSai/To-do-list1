var orglist=document.getElementById('prginal-list')
var input=document.getElementById('input');
var inp='';
input.addEventListener('input',function(e){
     inp=e.target.value;
   
})
var btnadd=document.getElementById('btnadd');
var img=document.getElementById('img')
function tocreateelements(){
if (inp===undefined || inp===null || inp===''){
    alert('Please wrire anything!')
}
else {
var newelmt=document.createElement('li');
var newtxt=document.createTextNode(inp+img);
newelmt.appendChild(newtxt);

console.log()
orglist.append(newelmt)
inp='';
input.value='';
return newelmt;
}}

btnadd.addEventListener('click',function(){
    tocreateelements();
    })
document.body.addEventListener('keypress',function(key){
    var codekey=key.keyCode;
    if(codekey===13){
    tocreateelements();}
})
var btndel=document.getElementById('btndelete')
btndel.addEventListener('click',function(){
    var ftscld=orglist.firstElementChild;
    console.log(ftscld)
    orglist.removeChild(ftscld)
})
var btnupdate=document.getElementById('btnreplace')
btnupdate.addEventListener('click',function(){
    var newelmt=tocreateelements()
    var ftscld=orglist.firstElementChild;
    console.log(ftscld)
    orglist.replaceChild(ftscld,newelmt)
})