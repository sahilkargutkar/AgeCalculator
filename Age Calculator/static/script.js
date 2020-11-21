function ageinDays()
{
    var birthyear=prompt('What was the year you were born ?');
    var currYear=prompt('Whats the current year');

    var yourAge=(currYear-birthyear)*365;
    
    var h1=document.createElement('h1');
    var Answer=document.createTextNode('You are '+yourAge+' days old');
    h1.setAttribute('id','ageinDays');
    h1.appendChild(Answer);
    document.getElementById('flex-box-result').appendChild(h1); 



}
function reset()
{
    document.getElementById('ageinDays').remove();

}