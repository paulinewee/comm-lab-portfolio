//CHANGE IMAGE ON CLICK

function changeImage() {
    console.log(document.getElementById("clickChange").src)
    if (document.getElementById("clickChange").src.includes("img/1.svg")){
        console.log("ITS 1")
        document.getElementById("clickChange").src = "img/2.svg";
    } else {
        console.log("ITS 2")
        document.getElementById("clickChange").src = "img/1.svg";
    }
}
