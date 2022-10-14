// 作品一覧 HTMLのflex-itemの順番と対応している
const works = [
    {
        workTitle: "プログラミングの学習について",
        imgSrc: "images/work00.png",
        explanation: "私がプログラミングを勉強したきっかけや、各言語の勉強方法などをご紹介しています！",
        pageUrl: "https://yamaji0723.github.io/learn_prog/",
        gitUrl: "https://github.com/yamaji0723/learn_prog"
    },
    {
        workTitle: "私の自己紹介",
        imgSrc: "images/work01.png",
        explanation: "私の自己紹介になります！私の趣味について書いています！",
        pageUrl: "https://yamaji0723.github.io/my_profile/",
        gitUrl: "https://github.com/yamaji0723/my_profile"
    },
    {
        workTitle: "笑顔にするプログラム",
        imgSrc: "images/work02.png",
        explanation: "入力した文字列に「www」をつけて、何でも笑わせるプログラムを作りました！",
        pageUrl: "https://yamaji0723.github.io/egao/",
        gitUrl: "https://github.com/yamaji0723/egao"
    },
    {
        workTitle: "安濃津よさこいについて",
        imgSrc: "images/work03.png",
        explanation: "安濃津よさこいと、どすこいについて紹介しています！",
        pageUrl: "https://yamaji0723.github.io/yosakoi/",
        gitUrl: "https://github.com/yamaji0723/yosakoi"
    }
];

// モーダルを表示
function modalOpen () {
    $("body").css({
        overflow: "hidden"
    });

    $("#modalOverlay").css({
        top: $(window).scrollTop() + "px"
    });

    $("#modal").css({
        top: $(window).scrollTop() + "px"
    });

    $("#modalOverlay, #modal").fadeIn(200);
};

// モーダルを非表示
function modalClose () {
    $("body").css({
        overflow: "auto"
    });

    $("#modalOverlay, #modal").fadeOut(200);
};

// モーダルの中身をセット
function setModal (target) {
    // モーダルのタイトルをセット
    $("#workTitle_Modal").html(target.workTitle);

    // モーダルの画像をセット
    $("#workImg_Modal img").attr({
        src: target.imgSrc,
        alt: target.workTitle
    });

    // モーダルの説明欄をセット
    $("#workExplanation_Modal").html(target.explanation);

    // ページのURLをセット
    $("#pageUrl_Modal a").attr({
        href: target.pageUrl
    });

    // GitのURLをセット
    $("#gitUrl_Modal a").attr({
        href: target.gitUrl
    });
};

$(document).ready(function () {
    // スムーススクロール
    $('a[href^="#"]').click(function(){
        const adjust = 55;
        const speed = 300;
        const href= $(this).attr("href");
        const target = $(href == "#" || href == "" ? 'html' : href);
        const position = target.offset().top - adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

    // 作品をクリックでモーダルを表示
    $("#works .flex-item").click(function(){
        const index = $("#works .flex-item").index($(this)); // 何番目の作品か取得
        // console.log(works[index]);
        const target = works[index];
        setModal(target);
        modalOpen();
    });

    // 外側か×ボタンでモーダルを閉じる
    $(".modal-close").click(function(){
        modalClose();
    });
});