//-----------------------------------------
// 수정
//-----------------------------------------

// AndroidManifest의 intent-filter
const packageName = "com.noroo.user";

// apk 다운로드 주소
const apkUrl =
    "https://github.com/t27501444-del/hunter/releases/download/user.2026.07.01.0703/2026.07.01.0703-com.noroo.user-release.apk";

//-----------------------------------------

const intentUrl =
`intent://user/#Intent;
scheme=noroo;
package=${packageName};
end`;

document
.getElementById("installButton")
.addEventListener("click", launchApp);

function launchApp(){

    const start = Date.now();

    window.location = intentUrl;

    setTimeout(function(){

        // 앱이 실행되면 브라우저가 백그라운드로 가므로
        // elapsed 시간이 거의 증가하지 않음

        if(Date.now() - start < 2000){

            window.location = apkUrl;

        }

    },1500);

}
