function DeleteClick(){
    console.log("Delete Button Clicked")
    flag = confirm('Delete\nRecord Will Be Deleted') //Flag is variable
    if(flag==true){
        console.warn("Ok Button Clicked - Record Will Be Deleted")
        document.querySelector("p").outerHTML="<h2>Record Will Be Deleted</h2>";
    }else{
     alert("You Canceled..")
     console.error("Cancel Clicked")
    }
 }