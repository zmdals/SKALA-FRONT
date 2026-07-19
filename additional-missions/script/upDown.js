const startBtn = document.getElementById("startBtn");

function startGame(){
    let computerrNum = Math.floor(Math.random() * 50 + 1);
    console.log(computerrNum);//정답 확인용

    let cnt = 1;

    while(true){
        let userInput = prompt("1 ~ 50사이의 숫자를 입력하세요.");

        //사용자가 취소 눌렀을 때 -> 종료
        if(userInput === null){
            alert("종료합니다.");
            break;
        }

        //예외처리
        //1. 공백 or 그냥 엔터 입력
        if(userInput.trim().length === 0){
            alert("공백은 입력할 수 없습니다.");
            continue;
        }

        userInput = Number(userInput);

        //2. 숫자 외 값 입력(NaN)
        if(isNaN(userInput)){
            alert("숫자만 입력 가능합니다. 다시 입력하세요.");
            continue;
        } 

        //3. 범위 밖의 값 입력
        if(userInput > 50 || userInput < 1){
            alert("1 ~ 50사이의 값만 입력할 수 있습니다.");
            continue;
        }

        //정상흐름
        if(computerrNum > userInput) alert("Up!");
        else if(computerrNum < userInput) alert("Down!");
        else{
            alert("축하합니다! " + cnt +"번 만에 맞추셨습니다.");
            break;
        } 
        cnt++;
    }
}
startBtn.addEventListener("click", startGame);