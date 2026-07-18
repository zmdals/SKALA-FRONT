//return: URLSearchParams 객체 {userName : 임승민 , ... key : value 형태}
const searchParams = new URLSearchParams(window.location.search);
//매핑
const keyLabelMap = {
    userName: "이름",
    userId: "아이디",
    userPw: "비밀번호",
    userEmailId: "이메일",
    userTel: "전화번호",
    contract: "약관 동의",
    userBirth: "생년월일",
    userGender: "성별",
    interest: "관심 분야",
    route: "가입경로",
    userRegion: "거주 지역",
    intro: "자기소개",
};

const tbody = document.getElementById("resultTable");

//복수 값은 키가 여러개일수 있으므로 set으로 변환.
for (const key of new Set(searchParams.keys())) {
    //이메일 따로 처리 - 추가 과제
    if(key === "domain") continue;

    //구조 1개 row(tr)에 data(td) 두 개
    const tr = document.createElement("tr"); //tr 태그

    const tdLabel = document.createElement("td"); //td 태그 항목
    tdLabel.textContent = keyLabelMap[key] || key;

    const tdValue = document.createElement("td"); //td 태그2 입력값
    //이메일 합쳐서 처리
    if(key === "userEmailId"){
        tdValue.textContent = getFullEmail();
    }
    else tdValue.textContent = searchParams.getAll(key);

    tr.appendChild(tdLabel);
    tr.appendChild(tdValue);

    tbody.appendChild(tr); 
}

function getFullEmail(){
    const id = searchParams.get("userEmailId");
    const domain = searchParams.get("domain");
    return id+"@"+domain;
}