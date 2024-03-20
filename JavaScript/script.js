let toggleDark = false;

//ローカルストレージ確認
function StorageCheck(){
    if (typeof window.localStorage !== 'undefined'){
        return true;
    }else{
        return false
    }
}

//フッターを下に固定するために必要なやつ
function footer() {
    let footerHeight = document.getElementById("footer").clientHeight;
    $("#root").css("padding-bottom", `${footerHeight}px`);
}

//ダークモード
function darkMode() {
    toggleDark = true;
    if(StorageCheck() == true){
        localStorage.setItem("DarkMode", toggleDark);
    }
    $("#root").find("*").addClass("dark");
    $("body").addClass("dark");
    $(".darkMode a").html("wb_sunny");
}

//通常モード (ライトモード)
function lightMode() {
    toggleDark = false;
    if(StorageCheck() == true){
        localStorage.setItem("DarkMode", toggleDark);
    }
    $("#root").find("*").removeClass("dark");
    $("body").removeClass("dark");
    $(".darkMode a").html("Nightlight");
}

//ヘッダーの文字の中身変更
function windowWidth() {
    let windowWidth = $(window).width();
    // 画面幅が500px以下の場合
    if (windowWidth <= 480) {
        $("#source").html("ソースコード");
        $("#source2").html("ソースコード");
    } else {
        $("#source").html(menu[3]);
        $("#source2").html(menu[3]);
    }
}

//base64圧縮リンク
function Base64URL(urlLink) {
    window.open(`/null.html?url=${btoa(encodeURI(urlLink))}`, "_parent");
}
function Base64Link() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("url")) {
        const url = urlParams.get("url");
        window.open(`/${decodeURI(atob(url))}`, "_parent");
    } else {
        window.open(`http://${location.host}`, "_parent");
    }
}

//読み込まれたときにダークモード関連
function OnloadDarkMode() {
    //ローカルストレージからダークモード
    if(StorageCheck() == true){
        const localDark = localStorage.getItem("DarkMode");
        if (localDark == "true") {
            darkMode();
        } else if (localDark == null || localDark == "null") {
            localStorage.setItem("DarkMode", "false");
        }
    }

    //パラメーターでダークモード 例:?dark=true
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("darkmode")) {
        const url = urlParams.get("darkmode");
        if (url == "true") {
            darkMode();
        } else if (url == "false") {
            lightMode();
        }
    }
}

//読み込まれたときに実行
function OnloadFunction() {
    //ダークモード関連
    OnloadDarkMode();
    if(StorageCheck() == true){
        console.log(`DarkMode:${localStorage.getItem("DarkMode")}`);
    }

    //パディング変更
    footer();
    windowWidth();
    $(window).resize(function () {
        footer();
        windowWidth();
    });

    //ダークモード・ライトモード変更
    $(".darkMode a").click(function (e) {
        e.preventDefault();
        if (toggleDark == false) {
            darkMode();
        } else {
            lightMode();
        }
    });
}
