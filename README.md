# WinsipediaQuestion3

"Which current FBS school(s) have NEVER played Georgia Tech in football?"

I began combing Winsipedia and Wikipedia, comparing Tech's football record to the current list of FBS teams.  Once I determined there were more than a few teams on this list, I knew there had to be a better way!

```
npm install
node app.js
```

I created a node.js app to scrape two Winsipedia pages (Georgia Tech and All Teams).  Then, I compared the results to each other, revealing the answer.  65 teams in all, including UAB and not including Georgia Tech:

```
AKRON
APPALACHIAN STATE
ARIZONA STATE
ARKANSAS STATE
BALL STATE
BOISE STATE
BOWLING GREEN
BUFFALO
CENTRAL MICHIGAN
CHARLOTTE
CINCINNATI
COLORADO
COLORADO STATE
EAST CAROLINA
EASTERN MICHIGAN
FIU
FLORIDA ATLANTIC
GEORGIA STATE
HAWAII
HOUSTON
IDAHO
ILLINOIS
INDIANA
KANSAS STATE
KENT STATE
LOUISIANA TECH
LOUISIANA-LAFAYETTE
LOUISIANA-MONROE
LOUISVILLE
MARSHALL
MIAMI (OH)
MINNESOTA
NEVADA
NEW MEXICO
NORTH TEXAS
NORTHERN ILLINOIS
NORTHWESTERN
OHIO
OHIO STATE
OKLAHOMA
OKLAHOMA STATE
OLD DOMINION
OREGON
OREGON STATE
SAN DIEGO STATE
SAN JOSE STATE
SOUTH ALABAMA
SOUTH FLORIDA
SOUTHERN MISS
TEMPLE
TEXAS STATE
TOLEDO
UAB
UCLA
UMASS
UNLV
UTAH STATE
UTEP
UTSA
WASHINGTON
WASHINGTON STATE
WESTERN KENTUCKY
WESTERN MICHIGAN
WISCONSIN
WYOMING
```
need to: 
  fix async issue and remove setTimeout() bandaid, write my own function to determine array differences, display results on a hosted website
