// 作品一覧 HTMLのflex-itemの順番と対応している
const works = [
    {
        workTitle: "プログラミングの学習について",
        imgSrc: "images/work00.jpg",
        explanation: "私がプログラミングを勉強したきっかけや、各言語の勉強方法などをご紹介しています！",
        pageUrl: "",
        gitUrl: ""
    },
    {
        workTitle: "私の自己紹介",
        imgSrc: "images/work01.jpg",
        explanation: "私の自己紹介になります！私の趣味について書いています！",
        pageUrl: "",
        gitUrl: ""
    },
    {
        workTitle: "笑顔にするプログラム",
        imgSrc: "images/work02.jpg",
        explanation: "入力した文字列に「www」をつけて、何でも笑わせるプログラムを作りました！",
        pageUrl: "",
        gitUrl: ""
    }
];

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
        console.log(works[index]);
    });
});