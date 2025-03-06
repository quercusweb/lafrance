<div align="center">
  <img src="https://i.ibb.co/KpZrXHPV/nyse.jpg" alt="Apple" style="border-radius: 10px;" />
</div>

# Indices Boursiers

## Qu'est-ce qu'un indice boursier ?

Il s'agit d'un indicateur qui mesure la performance boursière d'un panier d'actions déterminé, suivant certaines règles quant aux actions suivies, ainsi qu'à leur représentation dans l'indice. Il sert de référence pour évaluer l'évolution des marchés boursiers.

Exemples : le S&P 500, le NASDAQ 100, le MSCI World, le CAC 40, etc.

Pour bien comprendre leur fonctionnement, prenons l'indice du S&P 500, l'indice phare américain. Celui-ci vise à mesurer la performance du marché américain en prenant celle de ses 500 plus grosses entreprises, boursièrement parlant.

## Sa formule de calcul est la suivante :

`Capitalisation flottante des 500 entreprises de l'indice divisée par Le "divisor"`

Le divisor est une valeur, susceptible d'être modifiée, qui permet d'effacer les impacts que pourraient avoir des événements extra-boursiers. Par exemple, le remplacement d'une société à 1 M de MC dans l'indice par une société à 2 M ferait artificiellement augmenter la capitalisation flottante de l'indice, et le ferait donc augmenter.

Ce divisor est actuellement de *8 300 000 000*.

La MC flottante de l'indice au 05.02.2025 est de *51 010 000 000 000*.

Ainsi, selon notre calcul, le S&P 500 devrait coter à 6 145,78 points d'indice. En l'occurrence, son cours exact est de 6 061,48 (la MC utilisée dans notre calcul a été arrondie).

La méthode de calcul expliquée, on comprend bien que chaque société n'a pas le même poids dans l'indice, les fameuses pondérations dont on entend si souvent parler. En effet, le principal levier faisant augmenter l'indice étant sa capitalisation flottante, c'est-à-dire le nombre d'actions en circulation de chaque entreprise, multiplié par leur prix. La finance de marché raisonnant par évolution en %, et non en valeur nominale, une entreprise avec une MC de 100 000 000 n'a pas le même poids dans l'indice qu'une entreprise avec une MC de 10 000 000.

Si les actions de l'entreprise A prennent +10 %, mis de côté tout événement extérieur comme une IPO, sa MC devient alors de 110 000 000, soit une augmentation de 10 000 000.

Ainsi, on a : `MC Flottante S&P 500 + 10 000 000 / Diviseur`.

Tandis qu'une augmentation de 10 % chez l'entreprise B fera passer sa MC à 11 000 000, soit une augmentation de la MC de 1 000 000, ce qui nous donne :

`MC Flottante S&P 500 + 1 000 000 / Diviseur`

Cette même augmentation de 10 % chez les deux sociétés n'a ainsi pas le même impact sur l'indice. On peut dire que l'entreprise A a une pondération 10 fois plus importante que l'entreprise B.

Pour l'exemple, Apple a une MC au 05.02.2025 de 3 500 000 000 000 USD, pour une MC de l'indice de 51 010 000 000 000 :

`( 3 500 000 000 000 / 51 010 000 000 000 ) * 100 = 6,86`

Apple a donc une pondération dans l'indice d'environ 6.86% :
<div align="center">
  <img src="https://i.ibb.co/hJD7qXk3/image-2.png" alt="Apple" style="border-radius: 10px;" />
</div>

Reprenons un exemple, et partons du principe que toutes les entreprises du S&P 500 font 0 % sur la séance boursière, seule Apple évolue. Disons qu'Apple prenne 10 %, sa MC passera de 3 500 000 000 000 à 3 850 000 000 000, soit une augmentation de sa MC de 350 000 000 USD.

La MC globale du S&P 500 passerait ainsi de 51 010 000 000 000 à 51 360 000 000 000.

Le résultat trouvé pour une MC à 51 010 milliards était de 6 145,78.

Pour la MC après l'évolution de +10 % d'Apple, on a :

`51 860 000 000 000 / 8 300 000 000 = 6 248,19`

Soit une évolution de l'indice de 1,6 %.

À l'inverse, prenons l'entreprise Fortive Corporation, avec une MC au 05.02.2025 de 27 580 000 000 USD. Si cette même société parvenait à faire +10 % en bourse, en partant des mêmes conditions que dans l'exemple précédent, soit une performance nulle de l'ensemble des autres sociétés de l'indice, on aurait :

`27 580 000 000 * 1,1 = 30 338 000 000`

La MC avant +10 % était donc de 51 010 000 000 000, elle est à présent de 51 012 758 000 000 USD.

Procédons au calcul de notre indice :

`51 012 758 000 000 / 8 300 000 000 = 6 146,11`

Soit une évolution de 0,0053 % pour une même évolution de 10 % sur une société de l'indice.

C'est ce qu'on appelle la pondération par capitalisation flottante.

D'autres indices adoptent néanmoins des méthodes de pondération différentes. C'est le cas du NASDAQ 100, par exemple, qui, bien qu'étroitement basé sur un système de pondération par MC flottante, a recours à des modifications dans ses pondérations, empêchant certaines sociétés trop grosses d'avoir une importance excessive dans l'indice.

Ce qui sera appelé la pondération par capitalisation modifiée.

En effet, dans cet indice, aucune société ne doit peser pour plus de 24 %. De plus, le poids total de toutes les sociétés qui pèsent pour plus de 4,5 % de l'indice ne doit excéder les 48 %.

Mais comment est-ce que cette limitation dans les capitalisations et pondérations s'opère ?

Eh bien, les MC utilisées lors du calcul de l'indice sont redistribuées. Plusieurs manières de redistribuer les excédents de MC peuvent être utilisées.

Un exemple tiré de données fictives juste ici :

<div align="center">
  <img src="https://i.ibb.co/XZXBXWzn/image.png" alt="Image 1" style="border-radius: 10px;" />
  <br>
  <img src="https://i.ibb.co/7trf8t6g/image-1.png" alt="Image 2" style="border-radius: 10px;" />
</div>

Ainsi, dans cet exemple, plus aucune entreprise ne pèse pour plus de 20 % de l'indice, là où l'entreprise A aurait par exemple eu une pondération de 40 % si l'on avait suivi une simple pondération par MC flottante.

Pour reprendre notre exemple d'Apple, qui, pour rappel, pesait pour environ 6,86 % de l'indice, si l'indice souhaitait limiter la pondération de ses composants à 5 % maximum, celui-ci aurait ainsi fictivement retiré l'excédent de MC d'Apple, qui lui fait dépasser les 5 % de MC de l'indice.

Pour ensuite, par exemple, les redistribuer équitablement parmi les autres sociétés.

Si la MC globale de l'indice était de 100 et qu'Apple avait une MC de 6, on aurait fictivement soustrait 1 pour les redistribuer, mettant ainsi la MC d'Apple à 5 (sur 100, soit 5 %) pour le calcul de l'indice.

Plusieurs indices ont recours à des limitations dans la pondération de leurs composants, c'est le cas également du CAC 40, qui la limite à 15 %.

## Fonds Indiciels ou ETFs

Les ETFs sont des fonds d'investissement dont l'objectif est de répliquer la performance d'un indice boursier.

Pour ce faire, l'ETF peut par exemple acheter les actions de sociétés incluses dans l'indice, dans les mêmes pondérations, lui permettant d'avoir une performance proche ou équivalente de celle de l'indice.

L'ETF peut également répliquer la performance de l'indice de manière dite synthétique, c'est-à-dire que le fonds ne détient pas les actions sous-jacentes directement, mais qu'il passe un contrat financier, généralement un swap, avec un autre établissement financier, lui permettant d'échanger la performance d'un panier d'actions détenu par le fonds contre la performance d'un autre panier d'actions, celles comprises dans l'indice, dans les mêmes proportions dans notre cas.

Néanmoins, une question est susceptible de se poser. En effet, si les parts de l'ETF sont librement négociées en bourse, qu'est-ce qui fait qu'elles évoluent de la même manière que l'indice suivi par le fonds, étant donné que le panier d'actions directement ou indirectement détenu par le fonds n'a aucun impact sur les parts émises ?

Eh bien, cela se justifie par la présence d'un teneur de marché, ou market maker :

## Teneur de marché

Celui-ci va ajuster l'offre et la demande en proposant des quantités très importantes visibles sur le carnet d'ordres, rendant non seulement l'ETF liquide, mais contrôlant également son cours.

Le market maker doit ainsi faire correspondre le prix de la part à l'évolution du panier d'actions détenu par le fonds, ce qu'on appelle la valeur liquidative.

C'est-à-dire la valeur totale des actifs détenus par le fonds (panier d'actions ou valeur du swap) divisée par le nombre de parts émises par l'ETF.

Si le fonds détient un panier d'actifs atteignant les 100 000 000 €, et que l'ETF a émis 100 000 parts, le teneur de marché essaiera de faire coller le prix de chaque part à 1 000 €.

Les ETFs sont gagnants sur :

Les frais de gestion qu'ils prélèvent sur la performance
Ou encore grâce au prêt de titres. En effet, ceux-ci peuvent prêter leurs titres, moyennant une somme, à des vendeurs à découvert, par exemple.

**Le Participant Autorisé**

Généralement, une banque ou une autre grande institution financière, il s'agit d'un acteur financier en accord avec le gérant de l'ETF pour créer ou racheter des parts d'ETFs.

Si, par exemple, la demande pour l'ETF venait à augmenter, celui-ci pourrait créer de nouvelles parts.

## Liens utiles

- [Market Cap Actualisée du S&P500](https://www.slickcharts.com/sp500/marketcap#:~:text=The%20S%26P%20500%20has%20a,the%20outstanding%20float%20share%20count.)
- [Diviseur actualisé du S&P500](https://ycharts.com/indicators/sp_500_divisor#:~:text=S%26P%20500%20Divisor%20is%20at,0.88%%20from%20one%20year%20ago.)
- [Pondérations et composants du S&P500](https://www.slickcharts.com/sp500#google_vignette)
- [Pondérations et composants d'autres indices](https://www.slickcharts.com/)
- [Paper officiel des indices américains Standart&Poor's](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)
- [Paper officiel des indices Nasdaq](https://indexes.nasdaq.com/docs/Methodology_NDX.pdf)

## Tableaux des principaux Indices boursiers

| Nom de l'indice | Pays | Nombre de composants | ETF |
| --- | --- | --- | --- |
| 🇺🇸 [S&P 500](https://www.google.com/finance/quote/.INX:INDEXSP) | États-Unis | 505 | [ETF](https://www.google.com/finance/quote/SPY:NYSEARCA) |
| 🇺🇸 [Dow Jones Industrial Average](https://www.google.com/finance/quote/.DJI:INDEXDJX) | États-Unis | 30 | [ETF](https://www.google.com/finance/quote/DIA:NYSEARCA) |
| 🇺🇸 [NASDAQ 100](https://www.google.com/finance/quote/NDX:INDEXNASDAQ?window=MAX) | États-Unis | 100 | [ETF](https://www.google.com/finance/quote/QQQ:NASDAQ) |
| 🇬🇧 [FTSE 100](https://www.google.com/finance/quote/UKX:INDEXFTSE) | Royaume-Uni | 100 | [ETF](https://www.google.com/finance/quote/ISF:LON) |
| 🇩🇪 [DAX](https://www.google.com/finance/quote/GDAXI:INDEXDEUTSCHE) | Allemagne | 40 | [ETF](https://www.google.com/finance/quote/DAX:EPA) |
| 🇫🇷 [CAC 40](https://www.google.com/finance/quote/PX1:INDEXEURO) | France | 40 | [ETF](https://www.google.com/finance/quote/CACC:EPA) |
| 🇯🇵 [Nikkei 225](https://www.google.com/finance/quote/HSI:INDEXHANGSENG?window=MAX) | Japon | 225 | [ETF](https://www.google.com/finance/quote/1321:TSE) |
| 🇭🇰 [Hang Seng](https://www.google.com/finance/quote/HSI:INDEXHANGSENG) | Hong Kong | 80 | [ETF](https://www.google.com/finance/quote/2800:HKG) |
| 🇮🇳 [Nifty 50](https://www.google.com/finance/quote/NIFTY_50:INDEXNSE) | Inde | 50 | [ETF](https://www.google.com/finance/quote/NIFTYBEES:NSE) |
| 🇨🇦 [S&P/TSX Composite](https://www.google.com/finance/quote/TSX:INDEXSPTSX) | Canada | 230 | [ETF](https://www.google.com/finance/quote/XIC:TOR) |
| 🇦🇺 [S&P/ASX 200](https://www.google.com/finance/quote/AXJO:INDEXASX) | Australie | 200 | [ETF](https://www.google.com/finance/quote/IOZ:ASX) |
| 🇪🇺 [Euro Stoxx 50](https://www.google.com/finance/quote/SX5E:INDEXSTOXX?window=MAX) | Europe | 50 | [ETF](https://www.google.com/finance/quote/FEZ:NYSEARCA) |
| 🇪🇺 [Stoxx Europe 600](https://www.google.com/finance/quote/SXXP:INDEXSTOXX?window=MAX) | Europe | 600 | [ETF](https://www.google.com/finance/quote/SX6E:INDEXSTOXX) |
| 🌎 [MSCI World](https://www.msci.com/indexes/index/990100) | Monde | [1 396](https://www.msci.com/documents/10199/255599/msci-world-index.pdf) | [ETF](https://www.google.com/finance/quote/URTH:NYSEARCA) |
| 🌎 [MSCI Emerging Markets](https://www.msci.com/indexes/index/891800) | Marchés émergents | 1 400+ | [ETF](https://www.google.com/finance/quote/EEM:NYSEARCA) |
| 🇺🇸 [Russell 2000](https://www.google.com/finance/quote/RUT:INDEXRUSSELL?window=MAX) | États-Unis | 2 000+ | [ETF](https://www.google.com/finance/quote/IWM:NYSEARCA) |
| 🇮🇹 [FTSE MIB](https://www.google.com/finance/quote/FTSEMIB:INDEXBIT?window=MAX) | Italie | 40 | [ETF](https://www.justetf.com/fr/etf-profile.html?isin=IE00B53L4X51) |
