<head>
    <meta property="og:image" content="https://kusacurrency.com/wp-content/uploads/2019/05/dollCostHeader3.jpg" />
</head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js"></script>
<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
<style>
/* ///////////// */
/* ここから */
/* ///////////// */
body{
	font-family: Helvetica,"游ゴシック",YuGothic,"Hiragino Kaku Gothic ProN",Meiryo,sans-serif;
  color: #3e3e3e;
}

header img{
	width: 100%;
}

.wrapper{
  font-size: 62.5%;
  /* デフォルトが16px→10pxに訂正 */
  /* remはpxの10分の1だから考えやすくなる */
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 3rem;
}

h2::first-letter {
  font-size: 3.8rem;
	font-weight: bold;
  color: #7172ac;
}

h2 img{
	width: 7rem;
	padding-left: 1rem;
}

.wow{
	width: 9rem;
	padding-left: 0rem;
}

.result-button {
  font-size: 2rem;
}

.wrapper{
  margin-top: 1rem;
  margin-left: 1rem;
}

.content{
  margin-top: 1rem;
  margin-bottom: 1rem;

}

.crypts{
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.crypto-select{
	margin: 0 1rem 1rem 0;
	cursor: pointer;
}

.crypto-select:hover{
	border: 11px solid #aaffff;
	border-radius: 2.3rem;
}

.crypto-select img{
  width: 30rem;
	display: block;
	overflow: hidden;
}

.crypto-select img:hover{
  cursor: pointer;
	margin: -11px;
	/* box-sizing: border-box;
	border: 10px solid black; */
}

.crypto-selected{
	border: 11px solid #aaffff;
	border-radius: 2.3rem;
}

.crypto-selected img{
	margin: -11px;
}


.crypt-click-select{
  border: solid 2px blue;
}

.loading{
	opacity: 0.2;
}

#btc, #eth, #xrp, #ltc{

}

.assets {
	width: 30%;
  margin: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.asset-select{
	margin: 1rem auto;
	padding: 0 5rem 0 0;
	text-align: center;
	width: 15rem;
	cursor: pointer;
}

.asset-select p{
	width: 80%;
	font-size: 2rem;
	position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 0.75em 0.8em;
  text-decoration: none;
  color: #00BCD4;
  background: #f8f8f8;
  border-radius: 0 15px 15px 0;
  transition: .25s;
}

.asset-select p:hover{
	background: #636363;
}

.asset-selected p{
	background: #636363;
}

.terms{
	width: 30%;
  margin: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.term-select{
	margin: 1rem auto;
	padding: 0 5rem 0 0;
	text-align: center;
	width: 15rem;
}

.term-select p{
	width: 80%;
	font-size: 2rem;
	position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 0.75em 0.8em;
  text-decoration: none;
  color: #00BCD4;
  background: #f8f8f8;
  border-radius: 0 15px 15px 0;
  transition: .25s;
	cursor: pointer;
}

.term-select p:hover{
	background: #636363;
}

.term-selected p{
	background: #636363;
}

.results {
  margin: 2rem 0 0 0;
  font-size: 2rem;
}

.result {
  margin: 1rem;
	padding: 0 0 0 1rem;
}

.result p {
	padding: 1rem 0 0 0;
	line-height: 2.2rem;
}

.chart-description{
	padding: 0.5rem 0;
}

#term {
  font-size: 1.8rem;
}

#beggining-month, #today-show{
	margin-top: 2rem;
	font-size: 2.5rem;
	font-weight: bold;
}

/* ここから下がボタンのCSS　*/

.hide-button{
	display: none;
	transition: .5s;
}

.result-button {
	margin-left: 1rem;
  display: inline-block;
  width: 24rem;
  text-align: center;
  font-size: 2rem;
  color: #FFF;
  text-decoration: none;
  font-weight: bold;
  padding: 24px 24px;
  border-radius: 4px;
  background-image: linear-gradient(-90deg, #FF006E, #FFD500);
  transition: .5s;
  background-size: 200%;
}

.result-button:hover {
  background-position: right center;
}

.result-button:disabled {
	opacity: 0.3;
}

#resimulate-button{
	margin-left: 1rem;
  display: inline-block;
  width: 24rem;
  text-align: center;
  font-size: 16px;
  color: #FFF;
  text-decoration: none;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 4px;
  background-image: linear-gradient(-90deg, #68a56f, #92e59c);
  transition: .5s;
  background-size: 200%;
	cursor: pointer;
}

#twitter{
	margin: 1.5rem 0;
	margin-left: 1rem;
  display: block;
  width: 30rem;
  text-align: center;
  font-size: 1.8rem;
  color: #FFF;
  text-decoration: none;
  font-weight: bold;
  padding: 26px 34px;
  border-radius: 4px;
  background-image: linear-gradient(-90deg, #2780db, #66a6e8);
  transition: .5s;
  background-size: 200%;
	cursor: pointer;
}

#twitter img{
	margin-top: 1rem;
	text-align: center;
	width: 5rem;
	display: inline-block;
}

/* ///////////// */
/* コインマーケットキャップ */
/* ///////////// */
.now-price{
	display: grid;
	grid-template-columns: 1fr 1fr;
}
 @media only screen and (max-width: 767px)  {
 	.now-price{
      grid-template-columns: 1fr;
   }
}

.coinmarketcap-currency-widget{
	margin: 0.3rem 0.3rem 0 0;
}


/* ///////////// */
/* 背景デザイン */
/* ///////////// */
#inner-content {
	background-color: #fcfeff;
	background-image:
	 radial-gradient(#ededed 1px, transparent 1px);
	background-size: 20px 20px;
}



/* ///////////// */
/* storkテンプレート対策 */
/* ///////////// */
.entry-content h2{
	background: initial;
	color: initial;
	box-shadow: initial;
	padding: initial;
	font-size: initial;
}

#myChart{

}

h2 {
	line-height: initial;
	/* h2のfont-sizeが効かないので */

}

.h_balloon .entry-content h2:after{
	/* h2タグのオレンジの吹き出しを消す */
	content: initial;
}

#content.lp-wrap h2{
	font-size: initial;
	font-size: 1.8rem;
}

img {
	/* h2の画像の位置をずらしていた */
	vertical-align: initial;
	/* 銘柄を選ぶの画像を小さくしていた */
	max-width: initial;
}

.entry-content img{
	/* h2の画像のズレを消す */
	margin: initial;
	max-width: initial;
}

.crypto-select img{
	width: initial;
	width: 18rem;
}

.asset-select p{
	width: initial;

	/* 投資金額の選択項目を調節 */
	padding: initial;
	padding: .25em .8em;
}

.term-select p{
	width: initial;

	/* 投資金額の選択項目を調節 */
	padding: initial;
	padding: .25em .8em;
}

.entry-content p{
	margin: initial;
	margin: 0;
}

.bgfull .footer, .footer.bg, .footer .inner{
 width: 100%;
}

.crypto-selected img {
	margin: -11px !important;
}

#main .article header{
	padding: initial;
}

#content.lp-wrap .hentry header{
	padding: initial;
	padding: .8rem;
}

.single-title, .page-title, .entry-title{
	margin: initial;
	margin: .2em 0;
}


@media only screen and (max-width: 767px)  {
		#content.lp-wrap h2{
			font-size: initial;
			font-size: 1.2rem;
		}
		h2 img{
			width: 4rem;
			padding-left: 0.2rem;
		}
		h2::first-letter {
		  font-size: 2.8rem;
		}
		.wow{
			width: 5rem;
		}
		.crypto-select img{
			width: 8rem;
		}
		.crypto-selected img{
			margin: -4px !important
		}
		.crypto-selected{
			border: 4px solid #aff;
			border-radius: 1rem;
		}
		.crypto-select:hover{
			border: 4px solid #aff;
			border-radius: 1rem;
		}
		.assets{
			margin: 1rem;
		}
		.asset-select{
			text-align: initial;
			width: 10rem;
			padding: 0 1rem 0 0;
		}
		.asset-select p{
			padding: .15em .4em;
			font-size: 1.5rem;
		}
		.terms{
			margin: 1rem;
		}
		#term{
			font-size: 1.3rem;
		}
		.term-select{
			text-align: initial;
			width: 10rem;
			padding: 0 1rem 0 0;
		}
		.term-select p{
			padding: .15em .4em;
			font-size: 1.5rem;
		}
		.result-button{
			width: 14rem;
			font-size: 1.5rem;
		}
		.result{
			margin: 0;
			font-size: 1.6rem;
			padding: 0 0 0.3rem 0;
		}
		#beggining-month, #today-show{
			font-size:  1.8rem;
		}
		#term{
			font-size: 1.2rem;
			margin-bottom: 1rem;
		}
		#twitter{
			width: 16rem;
			margin-left: 0rem;
			font-size: 1rem;
			padding: 24px 14px;
		}
		#resimulate-button{
			margin-left: 0rem;
			width: 14rem;
			font-size: 0.8rem;
		}
		.chart-description{
			font-size: 1.4rem;
		}
  }

</style>
<body>
  <div class="wrapper">
    <h2>1STEP：銘柄を選ぶ<img src="https://kusacurrency.com/wp-content/uploads/2019/05/scienticstCat2.png"/></h2>
    <div class="content crypts loading" id="loading-crypts">
      <div class="crypto-select" id="btc" onclick="setCrypto(id)"><img src="https://kusacurrency.com/wp-content/uploads/2019/05/BTCcard2.png" /></div>
      <div class="crypto-select" id="eth" onclick="setCrypto(id)"><img src="https://kusacurrency.com/wp-content/uploads/2019/05/ETHcard.png" /></div>
      <div class="crypto-select" id="xrp" onclick="setCrypto(id)"><img src="https://kusacurrency.com/wp-content/uploads/2019/05/XRPcard.png" /></div>
      <div class="crypto-select" id="ltc" onclick="setCrypto(id)"><img src="https://kusacurrency.com/wp-content/uploads/2019/05/LTCcard.png" /></div>
    </div>
    <h2>2STEP：月の投資金額を選ぶ<img src="https://kusacurrency.com/wp-content/uploads/2019/05/scienticstCat2.png"/></h2>
    <div class="content assets">
      <div class="asset-select" onclick="setYen(10000)" id="10000yen"><p>1万円</p></div>
      <div class="asset-select" onclick="setYen(30000)" id="30000yen"><p>3万円</p></div>
      <div class="asset-select" onclick="setYen(50000)" id="50000yen"><p>5万円</p></div>
      <div class="asset-select" onclick="setYen(100000)" id="100000yen"><p>10万円</p></div>
      <div class="asset-select" onclick="setYen(200000)" id="200000yen"><p>20万円</p></div>
      <div class="asset-select" onclick="setYen(500000)" id="500000yen"><p>50万円</p></div>
    </div>
    <h2>3STEP：投資期間を選ぶ<img class="wow" src="https://kusacurrency.com/wp-content/uploads/2019/05/scienceCat3.png"/></h2>
    <div class="content terms">
      <div class="term-select" onclick="setTerm(6)" id="6months"><p>6ヶ月</p></div>
      <div class="term-select" onclick="setTerm(12)" id="12months"><p>12ヶ月</p></div>
      <div class="term-select" onclick="setTerm(18)" id="18months"><p>18ヶ月</p></div>
      <div class="term-select" onclick="setTerm(24)" id="24months"><p>24ヶ月</p></div>
      <div class="term-select" onclick="setTerm(30)" id="30months"><p>30ヶ月</p></div>
      <div class="term-select" onclick="setTerm(36)" id="36months"><p>36ヶ月</p></div>
    </div>
    <button disabled class="result-button" id="know-profit" type="submit">結果を見る</button>
    <div class="results" id="button-add">
      <div class="result" id="today-show"></div>
      <div class="result"><p id="term"></p></div>
      <div class="result" id="percentNow"></div>
      <div class="result" id="profitNow"></div>
      <div class="result" id="investmentSumNow"></div>
      <div class="result" id="beggining-month"></div>
      <div class="result" id="percent"></div>
      <div class="result" id="profit"></div>
      <div class="result" id="investmentSum"></div>
      <div class="chartResult">
        <canvas id="myChart"></canvas>
        <p class="chart-description" id="plusAnalysis"></p>
        <p class="chart-description" id="minusAnalysis"></p>
      </div>
    </div>
    <h2>現在価格</h2>
    <div class="now-price">
      <div class="coinmarketcap-currency-widget" data-currencyid="1" data-base="JPY" data-secondary="" data-ticker="true" data-rank="false" data-marketcap="false" data-volume="false" data-stats="USD" data-statsticker="false"></div>
      <div class="coinmarketcap-currency-widget" data-currencyid="1027" data-base="JPY" data-secondary="" data-ticker="true" data-rank="false" data-marketcap="false" data-volume="false" data-stats="USD" data-statsticker="false"></div>
      <div class="coinmarketcap-currency-widget" data-currencyid="52" data-base="JPY" data-secondary="" data-ticker="true" data-rank="false" data-marketcap="false" data-volume="false" data-stats="USD" data-statsticker="false"></div>
      <div class="coinmarketcap-currency-widget" data-currencyid="2" data-base="JPY" data-secondary="" data-ticker="true" data-rank="false" data-marketcap="false" data-volume="false" data-stats="USD" data-statsticker="false"></div>
    </div>
  </div>
</body>
<script type="text/javascript">
function setCrypto(n){switch(n){case"btc":priceHistory=BTCpriceHistory;cryptoChoosedPrice=todayPrice[0];cryptoName="BTC";break;case"eth":priceHistory=ETHpriceHistory;cryptoChoosedPrice=todayPrice[1];cryptoName="ETH";break;case"xrp":priceHistory=XRPpriceHistory;cryptoChoosedPrice=todayPrice[2];cryptoName="XRP";break;case"ltc":priceHistory=LTCpriceHistory;cryptoChoosedPrice=todayPrice[3];cryptoName="LTC"}cryptoSwitch&&document.getElementById(cryptoSwitch).classList.remove("crypto-selected");document.getElementById(n).classList.add("crypto-selected");cryptoSwitch=n;buttonCheck(termSwitch)}function setYen(n){investChoosed=n;assetSwitch&&document.getElementById(assetSwitch+"yen").classList.remove("asset-selected");document.getElementById(n+"yen").classList.add("asset-selected");assetSwitch=n;buttonCheck(termSwitch)}function setTerm(n){var t,i;if(termChoosed=n,termSwitch&&document.getElementById(termSwitch+"months").classList.remove("term-selected"),document.getElementById(n+"months").classList.add("term-selected"),termSwitch=n,buttonCheck(termSwitch),t=Math.floor(n/12),n%12==0){termStart=year-t+"年"+(month+1)+"月1日";return}if(t>0){if(i=n-t*12,i>month){t+=1;termMonth=12-(i-(month+1));termStart=year-t+"年"+termMonth+"月1日";return}termMonth=month+1-i;termStart=year-t+"年"+termMonth+"月1日";return}if(n>month){termMonth=12-(n-(month+1));t=1;termStart=year-t+"年"+termMonth+"月1日";return}termMonth=month+1-n;termStart=year+"年"+termMonth+"月1日"}function buttonCheck(){termSwitch&&assetSwitch&&cryptoSwitch&&(document.getElementById("know-profit").disabled=!1)}function RemoveAddButton(){document.getElementById("know-profit").classList.add("hide-button");document.getElementById("know-profit").classList.remove("result-button");btnCount==0&&(TwitterBtn(),ResultBtn(),btnCount=1);document.getElementById("resimulate-button").onclick=function(n){location.reload();window.scrollTo(0,0);n.preventDefault?n.preventDefault():n.returnValue=!1}}function TwitterBtn(){var t=`https://kusacurrency.com/post_lp/dollar-cost-averaging/`,i=today+"まで"+termChoosed+"ヶ月間、"+cryptoName+"で月"+investChoosed*.0001+"万円を積立投資していた場合の利益率は"+profitPercentCalNow.toFixed(1)+"%で、利益額は"+profitCalNow.toFixed(0)+"円です",r="https://twitter.com/intent/tweet?url="+encodeURIComponent(t)+"&text="+encodeURIComponent(i)+"&hashtags="+encodeURIComponent("仮想通貨の積立投資シミュレータ")+"&related="+encodeURIComponent("@CryptoKusacoin"),n=document.createElement("a");n.id="twitter";n.href=r;n.target="_blank";n.innerHTML="結果をTwitterでシェアする";n.classList.add("chart-description");document.getElementById("button-add").appendChild(n)}function ResultBtn(){var n=document.createElement("a"),t=document.getElementById("button-add");n.id="resimulate-button";n.innerHTML="もう一回シミュレートする";n.classList.add("chart-description");t.appendChild(n)}var now=new Date,year=now.getFullYear(),month=now.getMonth()+1,day=now.getDate(),today=year+"年"+month+"月"+day+"日",BegginingOfMonth=year+"年"+month+"月1日",catchCoinmarketPrice=[],todayPrice=[],getCryptoPrice=function(){var u,t;if(catchCoinmarketPrice.length<8){catchCoinmarketPrice=document.querySelectorAll("div.coinmarketcap-currency-widget > div > div > div > span");setTimeout(getCryptoPrice,"1000");return}var r=/^\d+\.?\d{2}/,n=[];for(i=0;catchCoinmarketPrice.length>i;i++)i%2==1&&n.push(catchCoinmarketPrice[i]);return u=n.map(function(n){var t=n.innerText,i=t.replace(",",""),u=r.exec(i);todayPrice.push(u)}),t=document.getElementById("loading-crypts"),t.classList.remove("loading"),todayPrice},hideResultButton,btnCount;window.onload=getCryptoPrice();var cryptoSelector=document.getElementsByClassName("crypto-select"),assetSelector=document.getElementsByClassName("asset-select"),termSelector=document.getElementsByClassName("term-select"),cryptoSwitch="",assetSwitch="",termSwitch="",BTCpriceHistory=[45747,63479,64986,60250,49704,42474,36984,44891,38346,25471,30400,29331,28164,28572,32249,35344,27907,28285,37999,46452,51803,44728,49340,46911,47669,58788,69451,63747,59523,61621,73528,85385,112671,109532,133085,119946,150066,253478,279645,316561,517053,488629,731952,1147648,1590022,1117811,1107768,744075,1011556,816151,709260,869200,782960,752611,713571,457421,410527,376819,429270,454915,596306,928375],ETHpriceHistory=[164,88,111,108,112,281,712,1283,933,1562,1284,1214,1207,1334,1149,984,933,1212,1787,5600,8828,25575,32911,22567,42170,33942,34747,50099,85151,122224,91311,42208,73308,62965,50359,48541,31508,26515,22310,12889,14619,11667,15242,15676,18074,29066],XRPpriceHistory=[.548,.422,.383,.533,.508,.509,.531,1.33,2.927,1.678,1.553,.933,.959,1.027,1.386,1.048,.956,.661,.565,.517,.726,.775,.893,.832,.724,.631,.687,.606,.622,.893,.859,.769,.763,.712,.623,2.434,5.741,27.022,29.49,18.525,28.131,22.244,22.756,28.172,258.693,126.756,96.444,54.597,91.666,66.689,51.543,48.731,37.267,66.339,50.667,41.208,38.625,33.847,35.095,34.262,34.49,47.504],LTCpriceHistory=[1117,1112,908,775,505,490,410,424,326,221,221,198,172,203,500,576,345,361,460,446,418,372,389,365,389,515,433,415,393,389,419,447,506,460,426,745,1748,2807,4533,4743,7792,6206,6334,9903,26102,17872,21667,12421,16220,12843,9016,8994,6862,6946,5598,3652,3337,3454,5150,6734,8280,12395],priceHistory=BTCpriceHistory,cryptoChoosed=0,cryptoName="",investChoosed=1e4,termChoosed=0,termStart="",termMonth=0;var investSum=0,storeCrypto=0,assetJpyTotal=0,assetJpyTotalNow=0,profitCal=0,profitPercentCal=0,profitCalNow=0,profitPercentCalNow=0,profitPercentData=[],investTerm=[],plusTerm=0,begginingMonth=document.getElementById("beggining-month"),todayShow=document.getElementById("today-show"),percent=document.getElementById("percent"),percentNow=document.getElementById("percentNow"),profit=document.getElementById("profit"),profitNow=document.getElementById("profitNow"),investmentSum=document.getElementById("investmentSum"),investmentSumNow=document.getElementById("investmentSumNow"),term=document.getElementById("term"),getResult=document.getElementById("know-profit"),plusAnalysis=document.getElementById("plusAnalysis"),minusAnalysis=document.getElementById("minusAnalysis");getResult.onclick=function(){var t,n,r;for(selectHistory=priceHistory.slice(-termChoosed),t=selectHistory.map(function(n){investSum+=investChoosed;storeCrypto+=investChoosed/n;assetJpyTotal=storeCrypto*n;profitCal=assetJpyTotal-investSum;profitPercentCal=assetJpyTotal/investSum*100-100;profitPercentData.push(profitPercentCal.toFixed(2))}),i=1;profitPercentData.length>=i;i++)profitPercentData[i-1]>0&&(plusTerm+=1),investTerm.push(i+"ヶ月目");assetJpyTotalNow=cryptoChoosedPrice*storeCrypto;profitCalNow=assetJpyTotalNow-investSum;profitPercentCalNow=assetJpyTotalNow/investSum*100-100;investTerm.push(today);profitPercentData.push(profitPercentCalNow.toFixed(2));term.innerHTML="仮に"+termStart+"~"+BegginingOfMonth+"("+termChoosed+"ヶ月)<br/>の間で毎月１日に"+cryptoName+"で"+investChoosed+"円を投資していた場合の投資結果("+today+"現在の時点)です。";percentNow.innerHTML="利益率："+profitPercentCalNow.toFixed(1)+"%";profitNow.innerHTML="利益総額："+profitCalNow.toFixed(0)+"円（保有している資産総額は"+assetJpyTotalNow.toFixed(0)+"円です。）";investmentSumNow.innerHTML="投資総額："+investSum+"円";begginingMonth.innerHTML=BegginingOfMonth+" 時点での損益";todayShow.innerHTML=today+" 時点での損益";percent.innerHTML="利益率："+profitPercentCal.toFixed(1)+"%";profit.innerHTML="利益総額："+profitCal.toFixed(0)+"円（保有している資産総額は"+assetJpyTotal.toFixed(0)+"円です。）";investmentSum.innerHTML="投資総額："+investSum+"円";plusAnalysis.innerHTML="利益がプラスの期間は"+plusTerm+"ヶ月間でした。";minusAnalysis.innerHTML="利益がマイナスの期間は"+(profitPercentData.length-plusTerm-1)+"ヶ月間でした。";document.getElementById("know-profit").disabled=!0;n=document.getElementById("myChart").getContext("2d");r=new Chart(n,{type:"line",data:{labels:investTerm,datasets:[{label:"利益率の遷移",data:profitPercentData,backgroundColor:"rgba(153,255,51,0.4)"},]}})};hideResultButton=document.getElementById("know-profit");hideResultButton.addEventListener("click",RemoveAddButton);btnCount=0</script>
