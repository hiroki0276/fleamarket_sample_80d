window.addEventListener('DOMContentLoaded', function(){

  //id名が"payment_card_submit-button"というボタンが押されたら取得
  let submit = document.getElementById("payment_card_submit-button");

  Payjp.setPublicKey('pk_test_3f51f9d05bf06841e98690d1'); //公開鍵の記述(ご自身の公開鍵コードを記述しよう！)

    submit.addEventListener('click', function(e){ //ボタンが押されたらトークン作成開始。

    e.preventDefault(); //ボタンを1度無効化

    let card = { //入力されたカード情報を取得(id名の記載ミスに注意！)
        number: document.getElementById("payment_card_no").value,
        cvc: document.getElementById("payment_card_cvc").value,
        exp_month: document.getElementById("payment_card_month").value,
        exp_year: document.getElementById("payment_card_year").value
    };


    Payjp.createToken(card, function(status, response) {  // トークンを生成
      if (status === 200) { //成功した場合(status === 200はリクエストが成功している状況)
        //データを自サーバにpostしないようにremoveAttr("name")で削除
        $(".number").removeAttr("name");
        $(".cvc").removeAttr("name");
        $(".exp_month").removeAttr("name");
        $(".exp_year").removeAttr("name"); 
        $("#charge-form").append(
          $('<input type="hidden" name="payjp_token">').val(response.id)
        ); //取得したトークンを送信できる状態
        document.inputForm.submit();
        alert("登録が完了しました"); 
      } else {
        alert("カード情報が正しくありません。"); 
      }
    });
  });
});

$(window).on("load resize", function(){
  let width = $(".buy-item__image").width();
  $(".buy-item__image").css({"height": width});
});