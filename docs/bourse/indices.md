# Indices Boursiers et Fonds Indiciels (ETFs)

## Objectif du Salon

Ce salon a pour objectif d'éclaircir les notions d'indices boursiers et de fonds indiciels (ETFs).

---

## Indices Boursiers

### Qu'est-ce qu'un indice boursier ?

Un indice boursier est un indicateur qui mesure la performance boursière d'un panier d'actions déterminé, suivant certaines règles quant aux actions suivies, ainsi qu'à leur représentation dans l'indice. Il sert de référence pour évaluer l'évolution des marchés boursiers.

**Exemples :** le S&P500, le NASDAQ100, le MSCI World, le CAC40, etc.

### Fonctionnement d'un indice boursier

Pour bien comprendre leur fonctionnement, prenons l'exemple de l'indice S&P500, l'indice phare américain. Celui-ci vise à mesurer la performance du marché américain en se basant sur ses 500 plus grosses entreprises cotées en bourse.

#### Formule de calcul du S&P500

La formule de calcul est la suivante :

\[
\text{Capitalisation flottante des 500 entreprises de l'indice} \div \text{Le "divisor"}
\]

- **Capitalisation flottante** : Nombre d'actions en circulation de chaque entreprise multiplié par leur prix.
- **Divisor** : Valeur susceptible d'être modifiée pour effacer les impacts d'événements extra-boursiers. Actuellement, le divisor est de 8 300 000 000.

#### Exemple de calcul

- **Capitalisation flottante de l'indice au 05.02.2025** : 51 010 000 000 000
- **Calcul du S&P500** :

\[
\frac{51 010 000 000 000}{8 300 000 000} = 6145.78 \text{ points d'indice}
\]

Le cours exact du S&P500 est de 6061.48 (la capitalisation flottante utilisée dans notre calcul a été arrondie).

### Pondérations dans l'indice

Chaque société n'a pas le même poids dans l'indice. Les pondérations dépendent de la capitalisation flottante de chaque entreprise. Par exemple :

- Une entreprise avec une capitalisation de 100 000 000 aura un impact plus important qu'une entreprise avec une capitalisation de 10 000 000.
- Si les actions de l'entreprise A augmentent de 10%, sa capitalisation devient 110 000 000, soit une augmentation de 10 000 000.
- Si les actions de l'entreprise B augmentent de 10%, sa capitalisation devient 11 000 000, soit une augmentation de 1 000 000.

#### Impact sur l'indice

- **Entreprise A** :

\[
\text{MC Flottante S&P500} + 10 000 000 \div \text{Diviseur}
\]

- **Entreprise B** :

\[
\text{MC Flottante S&P500} + 1 000 000 \div \text{Diviseur}
\]

Ainsi, une augmentation de 10% n'a pas le même impact sur l'indice pour les deux entreprises. L'entreprise A a une pondération 10 fois plus importante que l'entreprise B.

### Exemple avec Apple

Pour illustrer, Apple a une capitalisation boursière de 3 500 000 000 000 USD au 05.02.2025, pour une capitalisation totale de l'indice de 51 010 000 000 000 USD.

\[
\left( \frac{3 500 000 000 000}{51 010 000 000 000} \right) \times 100 = 6.86
\]

Apple a donc une pondération dans l'indice d'environ 6.86%.

#### Scénario d'évolution

- **Apple augmente de 10%** :
  - Nouvelle capitalisation d'Apple : 3 850 000 000 000
  - Nouvelle capitalisation globale du S&P500 : 51 860 000 000 000
  - Nouveau calcul du S&P500 :

\[
\frac{51 860 000 000 000}{8 300 000 000} = 6248.19
\]

Soit une évolution de l'indice de 1.6%.

- **Fortive Corporation augmente de 10%** :
  - Nouvelle capitalisation de Fortive Corporation : 30 338 000 000
  - Nouvelle capitalisation globale du S&P500 : 51 012 758 000 000
  - Nouveau calcul du S&P500 :

\[
\frac{51 012 758 000 000}{8 300 000 000} = 6146.11
\]

Soit une évolution de 0.0053% pour une même évolution de 10% sur une société de l'indice.

### Pondération par capitalisation flottante

C'est ce qu'on appelle la pondération par capitalisation flottante. D'autres indices adoptent des méthodes de pondération différentes, comme le NASDAQ100, qui utilise une pondération par capitalisation modifiée.

#### Pondération par capitalisation modifiée

- **NASDAQ100** : Aucune société ne doit peser pour plus de 24%, et le poids total des sociétés pesant plus de 4.5% ne doit pas excéder 48%.
- **CAC40** : Limite la pondération de ses composants à 15%.

## Fonds Indiciels (ETFs)

### Qu'est-ce qu'un ETF ?

Les ETFs sont des fonds d'investissement dont l'objectif est de répliquer la performance d'un indice boursier. Pour ce faire, l'ETF peut acheter les actions de sociétés incluses dans l'indice, dans les mêmes pondérations, ou répliquer la performance de l'indice de manière synthétique via des contrats financiers, comme des swaps.

### Teneur de marché

Le teneur de marché ajuste l'offre et la demande, rendant l'ETF liquide et contrôlant son cours pour qu'il corresponde à la valeur liquidative, c'est-à-dire la valeur totale des actifs détenus par le fond divisée par le nombre de parts émises.

### Participant Autorisé

Généralement une banque ou une institution financière, le participant autorisé est un acteur financier en accord avec le gérant de l'ETF pour créer ou racheter des parts d'ETFs en fonction de la demande.

### Avantages des ETFs

- **Frais de gestion** : Prélevés sur la performance.
- **Prêt de titres** : Les ETFs peuvent prêter leurs titres moyennant une somme.

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
