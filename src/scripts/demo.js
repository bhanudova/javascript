function RegisterClick(){
    document.getElementById("DetailsContainer").className="d-block"
    document.getElementById("lblName").innerHTML=document.getElementById("Name").value;
    document.getElementById("lblPrice").innerHTML=document.getElementById("Price").value;
    document.getElementById("lblCity").innerHTML=document.getElementById("City").value;
    var StockStatus = ""
    var Stock = document.getElementById("Stock")
    if(Stock.checked){
        StockStatus = "Available"
    }else{
        StockStatus = "Out of Stock"
    }
    document.getElementById("lblStock").innerHTML=StockStatus;
    document.getElementById("lblMfd").innerHTML=document.getElementById("Mfd").value;
    document.querySelector(".btnContianer").className="d-none";

}
function EditClick(){
    document.getElementById("RegisterBtn").innerHTML="Update";
    document.getElementById("RegisterBtn").className="btn btn-success"
}