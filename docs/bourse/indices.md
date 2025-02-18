![NYSE](https://i.ibb.co/zhG1M93J/nyse.jpg)

## Indices Boursiers

### Qu'est-ce qu'un indice boursier ?

 Il s'agit d'un indicateur qui mesure la performance boursière d'un panier d'action déterminé, suivant certaines règles quant aux actions suivies, ainsi qu'à leur représentation dans l'indice. Il sert de référence pour évaluer l'évolution des marchés boursiers.
 Eemples : le S&P500, le NASDAQ100, le MSCI World, le CAC40 etc.

Pour bien comprendre leur fonctionnement, prenons l'indice du S&P500, l'indice phare américain.
Celui-ci vise à mesurer la performance du marché américain, en prenant celle de ses 500 plus grosses entreprises, boursièrement parlant.

### Sa formule de calcul est la suivante :

`Capitalisation flottante des 500 entreprises de l'indice divisée par Le "divisor"`

Le divisor est une valeur, susceptible d'être modifiée, et qui permet d'effacer les impacts que pourraient avoir des événements extra-boursiers, par exemple, le remplacement d'une société à 1M de MC dans l'indice pour une société à 2M, ce qui ferait artificiellement augmenter la Capitalisation flottante de l'indice, et le ferait donc augmenter.

Ce divisor est actuellement de *8 300 000 000*

La MC Flottante de l'indice au 05.02.2025 est de *51 010 000 000 000*

Ainsi, selon notre calcul, le S&P500 devrait coter à 6145.78 points d'indice, en l'occurence, son cours exact est de 6061.48 (La MC utilisée dans notre calcul a été arrondie)


La méthode de calcul expliquée, on comprend bien que chaque société n'a pas le même poids dans l'indice, les fameuses pondérations dont on entend si souvent parler. 
En effet, le principal levier faisant augmenter l'indice étant sa Capitalisation Flottante, càd le nombre d'actions en circulation de chaque entreprise, multipliée par leur prix, et la finance de marché raisonnant par évolution en %, et non en valeur nominale, une entreprise avec une MC de 100 000 000, n'a pas le même poids dans l'indice qu'une entreprise avec une MC de 10 000 000.


Si les actions de l'entreprise A prennent +10%, mis de côté tout événement extérieur comme une IPO, sa MC devient alors de 110 000 000, soit une augmentation de 10 000 000

Ainsi on a : `MC Flottante S&P500 + 10 000 000 / Diviseur`

Tandis qu'une augmentation de 10% chez l'entreprise B, fera passer sa MC à 11 000 000, soit une augmentation de la MC de 1 000 000, ce qui nous donne :

`MC Flottante S&P500 + 1 000 000 / Diviseur`

Cette même augmentation de 10% chez les deux société n'a ainsi pas le même impact sur l'indice, on peut dire que l'entreprise A, à une pondération 10x plus importante que l'entreprise B
Bob — 06/02/2025 12:06

Pour l'exemple, Apple a une MC au 05.02.2025 de 3 500 000 000 000 USD, pour une MC de l'indice de 51 010 000 000 000 :

`( 3 500 000 000 000 / 51 010 000 000 000 ) * 100 = 6.86`

Apple a donc une pondération dans l'indice d'environ 6.86% :
![Apple](https://i.ibb.co/hJD7qXk3/image-2.png)

Reprenons un exemple, et partons du principe que toutes les entreprises du S&P500 font 0% sur la séance boursière, seule Apple évolue, disons qu'Apple prenne 10%, sa MC passera de 3 500 000 000 000 à 3 850 000 000 000, soit une augmentation dans sa MC de 350 000 USD.

La MC Globale du S&P500 passerait ainsi de 51 010 000 000 000 à 51 860 000 000 000

Le résultat trouvé pour une MC à 51 010Mds était de 6145.78, 

Pour la MC après l'évolution de +10% d'Apple, on a :

`51 860 000 000 000 / 8 300 000 000 = 6248.19`

Soit une évolution de l'indice de 1.6%

A l'inverse, prenons l'entreprise Fortive Corporation, avec une MC au 05.02.2025 de 27 580 000 000 USD, si cette même société parvenait à faire +10% en bourse, en partant des mêmes conditions que dans l'exemple précédant, soit une performance nulle de l'ensemble des autres sociétés de l'indice, on aurait :
`27 580 000 000 * 1.1 = 30 338 000 000`

La MC avant +10% était donc de 51 010 000 000 000, elle est à présent de 51 012 758 000 000 USD

Procédons au calcul de notre indice :

`51 012 758 000 000 / 8 300 000 000 = 6146.11`

Soit une évolution de 0.0053% pour une même évolution de 10% sur une société de l'indice.

C'est ce qu'on appelle la pondération par capitalisation flottante

D'autres indices adoptent néanmoins des méthodes de pondération différentes, c'est le cas du NASDAQ100 par exemple, qui, bien qu'étroitement basé sur un système de pondération par MC Flottante, a recours à des modification dans ses pondérations, empêchant certaines sociétés trop grosses, d'avoir une importance dans l'indice.

Ce qui sera appelé la pondération par capitalisation modifiée.

En effet, dans cet indice, aucune société ne doit peser pour plus de 24%, de plus, le poids total de toutes les sociétés qui pèsent pour + de 4.5% de l'indice, ne doit excéder les 48%.

Mais comment est-ce que cette limitation dans les capitalisations et pondérations s'opère.

Et bien les MC utilisées lors du calcul de l'indice sont redistribuées, plusieurs manières de redistribuer les excédents de MC peuvent être utilisées.

Un exemple tiré de données fictives juste ici :
![Image 1](https://i.ibb.co/XZXBXWzn/image.png)
![Image 2](https://i.ibb.co/7trf8t6g/image-1.png)

Ainsi dans cet exemple, plus aucune entreprise ne pèse pour plus de 20% de l'indice, là où l'entreprise A aurait par exemple eu une pondération de 40%, si l'on avait suivi une simple pondération par MC Flottante.

Pour reprendre notre exemple d'Apple, qui pour rappel, pesait pour environ 6.86% de l'indice, si l'indice souhaitait limiter la pondération de ses composants à 5% maximum, celui-ci aurait ainsi fictivement retiré l'excédent de MC d'Apple, qui lui fait dépasser les 5% de MC de l'indice.

Pour ensuite, par exemple, les redistribuer équitablement parmi les autres sociétés.

Si la MC globale de l'indice était de 100, et qu'Apple avait une MC de 6, on aurait fictivement soutrait 1, pour les redistribuer, mettant ainsi la MC d'Apple à 5 (sur 100, soit 5%) pour le calcul de l'indice.
.

Plusieurs indices ont recours à des limitations dans la pondération de leurs composants, c'est le cas également du CAC40, qui la limite à 15%.

## Fonds Indiciels ou ETFs

Les ETFs sont des fonds d'investissement dont l'objectif est de répliquer la performance d'un indice boursier

Pour ce faire, l'ETF peut par exemple acheter les actions de sociétés incluses dans l'indice, dans les mêmes pondérations, lui permettant d'avoir une performance proche ou équivalente de celle de l'indice.

L'ETF peut également répliquer la performance de l'indice de manière dite synthétique, càd que le fond ne détient pas les actions sous-jacentes direcement, mais qu'il passe un contrat financier, généralement un swap, avec un autre établissement financier, lui permettant d'échanger la performance d'un panier d'action détenu par le fond, contre la performance d'un autre panier d'actions, celles comprises dans l'indice dans les mêmes proportions dans notre cas.

Néanmoins, une question est susceptible de se poser, en effet, si les parts de l'ETF sont librement négociées en bourse, qu'est ce qui fait qu'elles évoluent de la même manière que l'indice suivi par le fond, étant donné que le panier d'action directement ou indirectement détenu par le fond n'a aucun impact sur les parts émises.

Et bien cela se justifie par la présence d'un teneur de marché, ou market maker :

### Teneur de marché

Celui-ci va ajuster l'offre et la demande, en proposant des quantités très importantes visibles sur le carnet d'ordre notamment, rendant non seulement l'ETF liquide, mais contrôlant également son cours. 

Le marker maker doit ainsi faire correspondre le prix de la part, à l'évolution du panier d'actions détenu par le fond
Ce qu'on appelle la valeur liquidative

C'est à dire la valeur totale des actifs détenus par le fond (panier d'action ou valeur du swap) divisée par le nombre de part émises par l'ETF

Si le fond détient un panier d'actifs atteignant les 100 000 000€, et que l'ETF a émis 100 0000 parts, et bien le teneur de marché essaiera de faire coller le prix de chaque part à 1000€.

Les "ETFs" sont gagnants sur :

- Les frais de gestion qu'ils prélèvent sur la performance
- Ou encore grâce au de prêt de titres, en effet, ceux-ci peuvent prêter leurs titres, moyennant une somme, à des vendeurs à découvert par exemple.

**Le Participant Autorisé**

Généralement une banque ou autre grosse institution financière, il s'agit d'un acteur financier, en accord avec le gérant de l'ETF pour créer ou racheter des parts d'ETFs.

Si par exemple, la demande pour l'ETF venait à augmenter, celui-ci pourrait créer de nouvelles parts 


## Liens utiles

- [Market Cap Actualisée du S&P500](https://www.slickcharts.com/sp500/marketcap#:~:text=The%20S%26P%20500%20has%20a,the%20outstanding%20float%20share%20count.)
- [Diviseur actualisé du S&P500](https://ycharts.com/indicators/sp_500_divisor#:~:text=S%26P%20500%20Divisor%20is%20at,0.88%%20from%20one%20year%20ago.)
- [Pondérations et composants du S&P500](https://www.slickcharts.com/sp500#google_vignette)
- [Pondérations et composants d'autres indices](https://www.slickcharts.com/)
- [Paper officiel des indices américains Standart&Poor's](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)
- [Paper officiel des indices Nasdaq](https://indexes.nasdaq.com/docs/Methodology_NDX.pdf)

# Tableaux des principaux Indices boursiers

| Nom de l'indice | Pays | Nombre de composants | ETF |
| --- | --- | --- | --- |
| 🇺🇸 [S&P 500](https://www.google.com/finance/quote/SPX:INDEXSP) | États-Unis | 505 | [ETF](https://www.google.com/finance/quote/SPY:NYSEARCA) |
| 🇺🇸 [Dow Jones Industrial Average](https://www.google.com/finance/quote/DJI:INDEXDJX) | États-Unis | 30 | [ETF](https://www.google.com/finance/quote/DIA:NYSEARCA) |
| 🇺🇸 [NASDAQ 100](https://www.google.com/finance/quote/NDX:INDEXNASDAQ) | États-Unis | 100 | [ETF](https://www.google.com/finance/quote/QQQ:NASDAQ) |
| 🇬🇧 [FTSE 100](https://www.google.com/finance/quote/UKX:INDEXFTSE) | Royaume-Uni | 100 | [ETF](https://www.google.com/finance/quote/ISF:LON) |
| 🇩🇪 [DAX](https://www.google.com/finance/quote/GDAXI:INDEXDEUTSCHE) | Allemagne | 40 | [ETF](https://www.google.com/finance/quote/DAX:EPA) |
| 🇫🇷 [CAC 40](https://www.google.com/finance/quote/PX1:INDEXEURO) | France | 40 | [ETF](https://www.google.com/finance/quote/CACC:EPA) |
| 🇯🇵 [Nikkei 225](https://www.google.com/finance/quote/N225:INDEXNIKKEI) | Japon | 225 | [ETF](https://www.google.com/finance/quote/1321:TSE) |
| 🇭🇰 [Hang Seng](https://www.google.com/finance/quote/HSI:INDEXHANGSENG) | Hong Kong | 80 | [ETF](https://www.google.com/finance/quote/2800:HKG) |
| 🇮🇳 [Nifty 50](https://www.google.com/finance/quote/NIFTY_50:INDEXNSE) | Inde | 50 | [ETF](https://www.google.com/finance/quote/NIFTYBEES:NSE) |
| 🇨🇦 [S&P/TSX Composite](https://www.google.com/finance/quote/TSX:INDEXSPTSX) | Canada | 230 | [ETF](https://www.google.com/finance/quote/XIC:TOR) |
| 🇦🇺 [S&P/ASX 200](https://www.google.com/finance/quote/AXJO:INDEXASX) | Australie | 200 | [ETF](https://www.google.com/finance/quote/IOZ:ASX) |
| 🇪🇺 [Euro Stoxx 50](https://www.google.com/finance/quote/SX5E:INDEXSTOXX) | Europe | 50 | [ETF](https://www.google.com/finance/quote/FEZ:NYSEARCA) |
| 🇪🇺 [Stoxx Europe 600](https://www.google.com/finance/quote/SXXP:INDEXSTOXX) | Europe | 600 | [ETF](https://www.google.com/finance/quote/SX6E:INDEXSTOXX) |
| 🌎 [MSCI World](https://www.msci.com/indexes/index/990100) | Monde | 1 600+ | [ETF](https://www.google.com/finance/quote/URTH:NYSEARCA) |
| 🌎 [MSCI Emerging Markets](https://www.msci.com/indexes/index/891800) | Marchés émergents | 1 400+ | [ETF](https://www.google.com/finance/quote/EEM:NYSEARCA) |
| 🇺🇸 [Russell 2000](https://www.google.com/finance/quote/RUT:INDEXRUSSELL) | États-Unis | 2 000+ | [ETF](https://www.google.com/finance/quote/IWM:NYSEARCA) |
| 🇮🇹 [FTSE MIB](https://www.google.com/finance/quote/FTMIB:INDEXFTSE) | Italie | 40 | [ETF](https://www.justetf.com/fr/etf-profile.html?isin=IE00B53L4X51) |
