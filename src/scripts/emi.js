function amountChange(){
   document.getElementById("txtAmount").value=document.getElementById("rangeAmount").value;
}
function yearChange(){
    document.getElementById("txtYear").value=document.getElementById("yearRange").value;
}
function interestChange(){
    document.getElementById("txtInterest").value=document.getElementById("interestRange").value;
}

function txtamountChange(){
    document.getElementById("rangeAmount").value=document.getElementById("txtAmount").value;
}
function txtyearChange(){
    document.getElementById("yearRange").value=document.getElementById("txtYear").value;
}
function txtinterestChange(){
    document.getElementById("interestRange").value=document.getElementById("txtInterest").value;
}


function CalculateClick() {
    var P = parseInt(document.getElementById("txtAmount").value);
    var N = parseInt(document.getElementById("txtYear").value)*12;
    var R = parseFloat(document.getElementById("txtInterest").value)/12/100;

    var EMI = P*R*Math.pow(1+R,N)/Math.pow(1+R,N)-1
    document.getElementById("result").innerHTML=`Your Monthly Installment is:<span class="text-primary display-1">${Math.round(EMI)}</span> For Months:${P} and Year:${(N/12)}`
}