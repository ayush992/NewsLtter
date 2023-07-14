{
    function date(){
        const date = new Date() ;
        let dd = date.getDate();
        let mm = date.getMonth();
        let yyyy = date.getFullYear();
        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        return (mm+"/"+dd+"/"+yyyy);
    }

    document.getElementById("day").innerHTML = date();
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

