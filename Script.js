//console.log("hello world");

send_btn = document.querySelector(".send-button");

send_btn.onclick =function(){
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML ="Message Sent!";
        this.style = "background: linear-gradient(90deg, rgba(25,193,61,1) 2%, rgba(18,119,27,1) 81%); color white";
    }, 1800);
}

