var last_res="";
var prev_calcu=""
var calculation=""
var screen=document.getElementById("scr");

function onbtClick(x) 
{


    if(screen.value=="000000")
        screen.value=""


    if(x=="c")
    {
        last_res=screen.value;
        screen.value="";
        prev_calcu=calculation;
        calculation=""
    }

    else if(x=="=")
    {
        last_res=screen.value;
        prev_calcu=calculation;
        screen.value=eval(calculation);
        
    }

    else if(x=="^")
    {
        screen.value+=x;
        x="**";
        calculation+=x;
    }


    else if(x=="x")
    {
        screen.value+=x;
        x="*";
        calculation+=x;
    }

    else if(x=="sin(")
    {
        screen.value+=x;
        x="Math.sin(Math.PI/180*";
        calculation+=x;
    }

    else if(x=="cos(")
    {
        screen.value+=x;
        x="Math.cos(Math.PI/180*";
        calculation+=x;
    }
    else if(x=="tan(")
    {
        screen.value+=x;
        x="Math.tan(Math.PI/180*";
        calculation+=x;
    }

    else
    {
        screen.value+=x;
        calculation+=x;
    }

}






function backSpace()
{
    scrValue=screen.value
    screen.value=scrValue.slice(0, scrValue.length-1);
    calculation=calculation.slice(0, calculation.length-1);
}

function getHistory()
{
    screen.value=last_res;
    calculation=prev_calcu;
}