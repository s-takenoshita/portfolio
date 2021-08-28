'use strict';

// headerのイメージをクリックした時

let sw = true;
let d = new Date();
console.log(d);
console.log(d.getTime());

function process() {
  if (sw) {
    document.getElementById('header_text').textContent = '目標：年内に収入を得る！';
    document.getElementById('takenoko').classList.add('img_changed');
    sw = false;
  } else {
    document.getElementById('header_text').textContent = 'フリーランスを目指し勉強中のアラフィフです。';
    document.getElementById('takenoko').classList.add('img_changed_back');
    sw = true;
  }
}
document.getElementById('takenoko').addEventListener('click', process);
