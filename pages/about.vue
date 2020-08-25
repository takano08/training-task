<template>
<div class="about-container">
  <div class="about-top">
    <img height="230px" width="1000px" src="/image/aboutVue.jpg">
  </div>
  <div class="about-body">
    <h2>会社概要</h2>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="table_about">
            <tbody>
            <tr>
              <th width="20%" scope="row">商号</th>
              <td>株式会社 R&D ビジネスファクトリー</td>
            </tr>
            <tr>
              <th scope="row">所在地</th>
              <td>福岡市中央区天神二丁目13番1号</td>
            </tr>
            <tr>
              <th scope="row">代表者</th>
              <td>丸田 哲也</td>
            </tr>
            <tr>
              <th scope="row">株主</th>
              <td>株式会社福岡銀行100％</td>
            </tr>
            <tr>
              <th scope="row">資本金</th>
              <td>1億円</td>
            </tr>
            <tr>
              <th scope="row">設立日</th>
              <td>2018年7月2日</td>
            </tr>
            <tr>
              <th scope="row">事業内容</th>
              <td>金融サービス高度化に関する研究開発など</td>
            </tr>
            </tbody>
    </table>
  </div>
  <div class ="map">
    <h3>東京オフィスへのアクセス</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0167101271322!2d139.76576945091026!3d35.67659053773653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be35dd5120d%3A0xc05ec8c00576ae22!2z56aP5bKh6YqA6KGMIOadseS6rOaUr-W6lw!5e0!3m2!1sja!2sjp!4v1597293538463!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
    </iframe>
  </div>
</div>
</template>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Noto+Sans+JP:wght@300&display=swap');
  .about-top {

    height:200px;
    }
  .about-body {
    font-family: 'Lato', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .map {
    font-family: 'Lato', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .about-body h2 {
    border-bottom:solid 2px #333;
  }

  .about-body th {
    border-bottom:solid 1px #333;
  }

  .about-body td {
    text-align: left;
  }

</style>
