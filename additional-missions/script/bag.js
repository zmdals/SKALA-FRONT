function showMyBag(){
    const myBag = [
        {name:"노트북",count:1},
        {name:"태블릿",count:1},
        {name:"충전기",count:2}
    ]
    let message = "[내 가방 속 물품 목록]";
    message += "\n-----------------------";
    for(let i = 0; i < myBag.length; i++){
        message += "\n " + myBag[i].name + " : " + myBag[i].count + "개";
    }
    message += "\n-----------------------";
    message += "\n 총 물품 종류: " + myBag.length + "가지"

    alert(message);
}