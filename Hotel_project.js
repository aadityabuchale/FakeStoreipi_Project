
/* var inpDate = document.getElementById("inpdate").value;

var inpPerson = document.getElementById("inpPerson").value;






function submitClick(){
    
    
    

    if(inpPerson>=2){
        totalCost=1000*inpPerson;
    }

    if(inpAdvance==true){
        document.getElementById(reqMsg).innerHTML="";
    }
    else{
        document.getElementById(reqMsg).innerHTML="This is Required Field";
    }

    document.getElementById("lblName").innerHTML=document.getElementById("inpName").value;
    
    
    document.getElementById("lblPerson").innerHTML=inpPerson;
}
*/

function submitClick(){
    document.getElementById("lblName").innerHTML=document.getElementById("inpName").value;
    document.getElementById("lblDate").innerHTML=document.getElementById("inpDate").value;
    document.getElementById("lblDays").innerHTML= parseInt(document.getElementById("inpDays").value);
    document.getElementById("lblPerson").innerHTML= parseInt(document.getElementById("inpPerson").value);

    var totalCost=0;
    var roomName ="";
    var ameniName ="";
    var roomCost =0;
    var ameniCost =0;
    var inpDays=parseInt(document.getElementById("inpDays").value);
    var inpAdvance=parseInt(document.getElementById("inpAdvance").value);

    var inpDelux =document.getElementById("inpDelux");
    var inpSuite = document.getElementById("inpSuite");
    if(inpDelux.checked==true){
        roomName +=inpDelux.value;
        roomCost = 2500;
    }
    if(inpSuite.checked==true){
        roomName +=inpSuite.value;
        roomCost=4000;
    }

    var inpAc = document.getElementById("inpAc");
    var inpLocker = document.getElementById("inpLocker");
    if(inpAc.checked==true){
        ameniName +=inpAc.value;
        ameniCost=1000;
        roomCost= ameniCost+roomCost;
    }
    if(inpLocker.checked==true){
        ameniName +=inpLocker.value;
        ameniCost=300;
        roomCost=ameniCost+roomCost;
    }
    totalCost = roomCost*inpDays;
    // after removing advance 

    var totalCost2 =0;
    totalCost2=totalCost-inpAdvance;
    
    document.getElementById("lblRoom").innerHTML=roomName;
    document.getElementById("lblAmeni").innerHTML=ameniName;
    document.getElementById("lblTotal").innerHTML=totalCost;
    document.getElementById("lblTotal2").innerHTML=totalCost2;
}