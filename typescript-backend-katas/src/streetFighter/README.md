# Street Fighter

The Street Fighter Tournament Society hired you. The compensation was huge, there are a lot of money in the industry. However, you don't know what awaits you...

## Iteration 1

The Street Fighters are competiting in a league. Every year a new season.

You have been asked to develop a function that will return the ranking for a season, based on two sources described bellow.

The function you have to implement returns you the ranking for the last season. The ranking is an array, with for each element the fighter id, name, country, rank, and number of points.

If we input a date matching a non-existing season, the function should raise a proper error.

For each match:
- The winner earns 3 points
- A draw makes the two fighters earn 1 point
- The looser earn 0 point

**The Street Fighters Professional League database**

It is constituted of CSV files, one per season ("2022-2023", "2021-2022"...). Each line of the CSV files represent a match between two fighters. A fighter has won if he won two rounds. Cf. `sources/SFPL_DB`.

In the following example, Chun-Li has won by 2 rounds against 1.
```
timeslot,home,roundsWon1,roundsWon2,away
1,chun-li,2,1,sagat
```

For this iteration, we'll focus only on the last season.

**The Fighters Census Agency API**

The API returns the following list of fighters as a JSON file: `sources/getFcaApiFighters.json`.

TODO List:
- Create a method which, given a list of fighters and of list of matches, return the fighters ranking 
- Create a method which return the list of matches of the last season
- Create a method which return the list of fighters
- Create a method which return the last season fighters ranking

:key: Check the helpers folder to help you parse a CSV or a JSON file.
:key: Your predecessor, who left two weeks after having started, has create a mapping between SFPL and FCA fighters, it can be helpful.

## Iteration 2

The requirements have changed! Now your employeer wants the method to take the season as input.

A season starts the 1st of September and ends the 31st of August, included.

## Iteration 3

You see a bit more clearly now! You've made the first iteration in order for the function to be used by an API.

And guess what? You are asked to develop this API, with one endpoint to get the ranking of a given season.

Bonus:
- Your API should be protected, of course. However, the authentication service is not there yet. So, you've decided to push the list of users with their password and permissions. Cf `sources/users.json`. The endpoint you have to develop should be protected by the `ranking:read` permission.
- Your API should be packaged in a Docker image.

## Iteration 4

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

## Iteration 5

Persist the tournament in a PostgreSQL DB, and create a GET endpoint on it.

## Iteration 6

Make the tournament progress by entering the result of a fight from the API.

## Iteration 7

A webapp. Fortunately, you ex work at a company where you can find a template, and the needed account has not been logout from your computer... https://github.com/Kpler/template-vue2-app

## Iteration X

The Street Fighters Professional League CSV files have been replaced by an actual database.

TODO:
- Docker compose with a postgres fed with data
