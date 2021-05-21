function start(){
    document.querySelector(".popUp").style.display="block";
}

function closePopUp(){
    document.querySelector(".popUp").style.display="none";
    document.getElementById("start").remove();
}

function likeButton(){
    var likeCount=document.querySelector('#likeButton>span').innerHTML;
    likeCount--;
    if(likeCount!=-1){
        if(likeCount<-9){
            document.getElementById('likeButton').remove();
        } else {
            document.getElementById('likeButton').innerHTML='<span>'+likeCount+'</span> Likes';
        }
    } else {
        document.getElementById('likeButton').innerHTML='<span>'+likeCount+'</span> Like';
    }
}

function checkYourComputer(){
    alert('This is Oscar from tech support. Your computer is no longer working. Please insert your credit card into your disk drive to fix this problem. Call 1-800-WINDOWS-HELP-NOW for additional support.');
    if(confirm('Would you like to restart Windows now?')){
        var container=document.querySelector(".container")
        container.style.backgroundColor="darkslategrey";
        setTimeout(function(){
            container.style.backgroundColor="#afcff2";
            setTimeout(function(){
                container.style.backgroundColor="darkslategrey";
                setTimeout(function(){
                    container.style.backgroundColor="#afcff2";
                    setTimeout(function(){
                        container.style.backgroundColor="black";
                    },100);
                    setTimeout(function(){
                        location.reload();
                    },1000);
                },200);
            },50);
        },5000);
    } else {
        checkYourComputer();
    }

}

function internetExplorer(){
    document.getElementById('internetExplorer').remove();
}