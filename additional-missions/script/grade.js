const calAvgBtn = document.getElementById("calAvgBtn");
function calculateAvg(){
    const subjects = ["HTML", "CSS", "JavaScript"];
    let total = 0;
    for(let i = 0; i < subjects.length; i++){
        const score = getValidScore(subjects[i],0,100);

        //사용자 취소
        if(score === null) return;

        total += score;
    }
    const avg = Math.round((total/subjects.length) * 100)/100;
    //const avg = (total/subjects.length).toFixed(2); 문자열 반환
    if(avg >= 60) (alert("총점: " + total + ",평균: " + avg + ", 결과: 합격입니다!"));
    else (alert("총점: " + total + ",평균: " + avg + ", 결과: 불합격입니다."));
}

function getValidScore(subject,min,max) {
    while(true){
        let userInput = prompt(subject + " 점수를 입력하세요.");

        //사용자가 취소 눌렀을 때 -> 종료
        if(userInput === null){
            alert("종료합니다.");
            return null;
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
        if(userInput < min || userInput > max){
            alert(min + " ~ "+ max +"사이의 값만 입력할 수 있습니다.");
            continue;
        }

        //정상흐름 - 숫자 점수 반환
        return userInput;
    }
}

calAvgBtn.addEventListener("click",calculateAvg);
