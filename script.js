function changevalue1(event) {
    console.log("changevalue1");
    console.log(event.target.innerText);
    document.getElementsByClassName("option")[0].innerText = event.target.innerText
}
function changevalue2(event) {
    console.log("changevalue2");
    console.log(event.target.innerText);
    document.getElementsByClassName("option")[1].innerText = event.target.innerText
    
}
