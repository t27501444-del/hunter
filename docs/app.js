//-----------------------------------------
// 수정
//-----------------------------------------

// AndroidManifest의 intent-filter
const packageName = "com.noroo.user";

// URL에서 id 읽기
const params = new URLSearchParams(window.location.search);
const id = params.get("id") ?? "";

// 페이지에 표시
document.getElementById("idValue").textContent = id;

// 클립보드 저장
if (id) {
    navigator.clipboard.writeText(id)
        .catch(err => {
            console.log("클립보드 저장 실패:", err);
        });
}

// apk 다운로드 주소
const apkUrl =
    "https://github.com/t27501444-del/hunter/releases/download/user.2026.07.01.0703/2026.07.01.0703-com.noroo.user-release.apk";

// Intent URL 생성
const intentUrl =
`intent://user#Intent;
scheme=noroo;
package=${packageName};
end`;

//-----------------------------------------

document
    .getElementById("installButton")
    .addEventListener("click", launchApp);

function launchApp() {

    const start = Date.now();

    window.location = intentUrl;

    setTimeout(function () {

        // 앱이 실행되면 브라우저가 백그라운드로 가므로
        // elapsed 시간이 거의 증가하지 않음

        if (Date.now() - start < 2000) {
            window.location = apkUrl;
        }

    }, 1500);

}
