# Street Fighter

The Street Fighter Tournament Society hired you. The compensation was huge, there are a lot of money in the industry. However, you don't know what awaits you...

## Iteration 1

The Street Fighters are competiting in a league. Every year a new season.

You have been asked to develop a function that will return the ranking for a season, based on two sources.

**The Street Fighters Professional League database**

It is constituted of CSV files, one per season ("2022-2023", "2021-2022"...). Each line of the CSV files represent a match between two fighters. A fighter has won if he won two rounds. Cf. `sources/SFPL_DB`.

In the following example, Chun-Li has won by 2 rounds against 1.
```
timeslot,home,roundsWon1,roundsWon2,away
1,chun-li,2,1,sagat
```

:warning: A season starts the 1st of September and ends the 31st of August, included.

**The Fighters Census Agency API**

The following API endpoint is supposed to give you the official list of fighters:
```
GET http://fighters-census-agency-api.yolo/fighters?category=street
```

However, the API is currently down. Fortunately, you've called it once when it was working, and you saved the result. Cf. `sources/getFcaApiFighters.json`.

For each match:
- The winner earns 3 points
- A draw makes the two fighters earn 1 point
- The looser earn 0 point

The function you have to implement shall takes as input a date, and return you the ranking for the season the date is in. The ranking is an array, with for each element the fighter id, name, country, rank, and number of points.

## Iteration 2

You see a bit more clearly now! You've made the first iteration in order for the function to be used by an API.

And guess what? You are asked to develop this API, with one endpoint to get the ranking of a given season.

Your API should be protected, of course. However, the authentication service is not there yet. So, you've decided to push the list of users with their password and permissions. Cf `sources/users.json`.

The endpoint you have to develop should be protected by the `ranking:read` permission.

Finally, your API should be packaged in a Docker image.

## Iteration 3

It starts to make sense! The Street Fighter Tournament Society wants to organize some tournaments!

You're being asked to implement a new function, that will take as input a list of fighters, and return as output a generated tournament.

A finished tournament can be represented as in the following example with cities:
```
_Boston______
             \_New York____
_New York____/             \
                            \_New York_
_Charlotte___               /          \
             \_Charlotte___/            \
_Atlanta_____/                           \
                                          \_St. Paul_
_St. Paul____                             /
             \_St. Paul____              /
_Chicago_____/             \            /
                            \_St. Paul_/
_Los Angeles_               /
             \_Los Angeles_/
_Phoenix_____/
```
However, when you intialize it, your tournament is far from being finished...

And you have an additional rule: you should generate your tournament based on the last season ranking: in the first round of the tournament, the fighters in the first half of the ranking should only fight those ranked in the second half.

## Iteration 4

Persist the tournament in a PostgreSQL DB, and create a GET endpoint on it.

## Iteration 5

Make the tournament progress by entering the result of a fight from the API.

## Iteration 6

A webapp. Fortunately, you ex work at a company where you can find a template, and the needed account has not been logout from your computer... https://github.com/Kpler/template-vue2-app
