/* eslint-disable no-irregular-whitespace */
import '@css/header_style.css'
import '@css/body_style.css'
import receiptImg from '@img/receipt.png'
import toggleImg from '@img/toggle.png'
import searchImg from '@img/search.png'
import { headerHTML } from '@components/header'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
${headerHTML}
<main id="main_title">
<h1>Zettel?</h1>
<!-- 検索 -->
<div class="search">
<h3>レシート検索</h3>
<form action="">
  <input type="text" size="40">
  <input type="image" src="${searchImg}" class="toggle_icon" alt="　[検索]　">


<label for="toggle" onclick=""  for="menuToggle"><img class="toggle_icon" src="${toggleImg}" alt="絞り込み"></label>
<input type="checkbox" id="toggle">
<!-- autocomplete="off" -->


<ul id="menu">
  <li>
    <span class="genre">種別</span>
    <span class="sub">
      <input type="checkbox" name="genre" id="food" value="1">
      <label for="food" class="check_genre">飲食代</label>
      <input type="checkbox" name="genre" id="carfare" value="2">
      <label for="carfare" class="check_genre">旅行交通費</label>
      <input type="checkbox" name="genre" id="supply" value="3">
      <label for="supply" class="check_genre">消耗品</label>
      <input type="checkbox" name="genre" id="adv" value="4">
      <label for="adv" class="check_genre">広告費</label>
      <input type="checkbox" name="genre" id="social" value="5">
      <label for="social" class="check_genre">接待交際費</label>
      <input type="checkbox" name="genre" id="com" value="6">
      <label for="com" class="check_genre">通信費</label>
    </span>
  </li>
  <hr class="list_search">
  <li>
    <span class="genre">タグ別</span>
    <span class="sub">
      <input type="radio" name="tag" id="color_1" value="1">
      <label for="color_1" class="color_genre">経費</label>
      <input type="radio" name="tag" id="color_2" value="2">
      <label for="color_2" class="color_genre">個人</label>
      <input type="radio" name="tag" id="color_3" value="3">
      <label for="color_3" class="color_genre">公費</label>
      <input type="radio" name="tag" id="color_4" value="1">
      <label for="color_4" class="color_genre">グループ１</label>
    </span>
  </li>
  <hr class="list_search">
  <li>
    <span class="genre">価格</span>
    <span class="sub">
      <input type="number" id="min_price" size="8">円　～　
      <input type="number" id="max_price" size="8">円
    </span>
  </li>
  <hr class="list_search">
  <li>
    <span class="genre">日時</span>
    <span class="sub">
      <input type="date" name="start_date" id="time">　～　
      <input type="date" name="end_date" id="time">
    </span>
  </li>
</ul>
</form>
</div>

<h2>レシート一覧</h2>
<div class="list">
<div class="image_frame"><img src="${receiptImg}" class="receipt"></div>
<div class="image_frame"><img src="${receiptImg}" class="receipt"></div>
<div class="image_frame"><img src="${receiptImg}" class="receipt"></div>
<div class="image_frame"><img src="${receiptImg}" class="receipt"></div>
</div>
</main>
`
