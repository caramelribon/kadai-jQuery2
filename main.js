/**
 * selectorに該当するタブを表示する関数
 */
const showTab = (selector) => {
  //引数selectorの中身をコンソールで確認する
  console.log(selector);
  
  /* タブの選択状態のリセット */
  //いったん、すべての.tabs-menu > divからactiveクラスを削除
  $('.tabs-menu > div').removeClass('active');
  
  //いったん、すべての.tabs-content > divを非表示
  $('.tabs-content > div').hide();
  
  /* 選択されたタブの表示 */
  if (selector == 'tab-menu-a') {
    $(`.tabs-menu div[id="${selector}"]`).addClass('active');
    $('#tabs-a').show();
  } 
  else if (selector == 'tab-menu-b') {
    $(`.tabs-menu div[id="${selector}"]`).addClass('active');
    $('#tabs-b').show();
  }
  else if (selector == 'tab-menu-c') {
    $(`.tabs-menu div[id="${selector}"]`).addClass('active');
    $('#tabs-c').show();
  }
};

//タブがクリックされたらコンテンツを表示
$('.tabs-menu div').on('click', (e) => {
  const selector = $(e.target).attr('id');
  showTab(selector);
});

//初期状態としてタブaを表示
showTab('#tabs-a');