

//スクロール位置によってスタイルを返納する
//スタイルを変更したい要素を取得
const jump1 = document.getElementsByClassName("main");
//現在のスクロール位置を取得
const scrollPosition = window.scrollY;


if (scrollPosition >500) {
    jump1.style.backgroundColor = 'red';
} else if (scrollPosition > 200) {
    jump1.style.backgroundColor = 'green';
} else {
    jump1.style.backgroundColor = 'blue';
}