'use strict';

// 日付をフッターに表示
let d = new Date();
console.log(d);
console.log(d.getTime());
document.getElementById('date').textContent = d;

// ヘッダーのアイコンの角丸を変える
document.getElementById('takenoko').addEventListener('click', () => {
  const target = document.getElementById('takenoko');
  target.classList.toggle('changeradius');
});

// 経歴を追加する
const history = [
  {yaer: 1985, lang: 'C Unix', desc: '経歴' },
  {yaer: 1995, lang: 'C++ Macintosh', desc: '経歴' },
];
document.querySelector('button').addEventListener('click', () => {
  const parenttarget1 = document.getElementById('profile');
  history.forEach(h => {
    console.log(h.yaer);
    const tg_yaer = document.createElement('div');
    tg_yaer.textContent = h.yaer;
    tg_yaer.className = 'yaer';
    const tg_histry = document.createElement('div');
    tg_histry.className = 'history';
    tg_histry.appendChild(tg_yaer);
    parenttarget1.appendChild(tg_histry);
  });
});

// クリックされたリストに色を付ける
document.querySelector('ul').addEventListener('click', e => {
  const lis = document.querySelectorAll('li');
  console.log(lis);
  lis.forEach(li => {
    li.classList.remove('color');
  });
  e.target.classList.add('color');
});

// モーダルウィンドウ
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');
open.addEventListener('click', () => {
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
});
close.addEventListener('click', () => {
  modal.classList.add('hidden');
  mask.classList.add('hidden');
});
mask.addEventListener('click', () => {
  close.click();
});

