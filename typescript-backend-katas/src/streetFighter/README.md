# Street Fighter

The Street Fighter Tournament Society hired you. The compensation was huge, there is a lot of money in the industry. However, you don't know what awaits you...

## Iteration 1: the ranking logic

The Street Fighters are competing in a league.

You have been asked to develop a function that will return the ranking, based on a list of matches.

The ranking is an array, with for each element the fighter identifier, rank, and number of points.

For each match:
- The winner earns 3 points
- A draw makes the two fighters earn 1 point
- The loser earn 0 point

Create a method which, given a list of matches, return the fighters ranking.

## Iteration 2: a first data source

Now we want to integrate a new data source. This the official list of fighters. In our ranking, we want to return information given in this source.

The ranking should be improved to contain, for each element the fighter id, name, country, rank, and number of points.

**The Fighters Census Agency API**

The API returns the following list of fighters as a JSON file: `sources/getFcaApiFighters.json`.

TODO List:
- Create a method which return the list of fighters from the FCA API
- Use this method in your ranking method

:key: Check the helpers folder to help you parse a JSON file.

## Iteration 3: a second data source

The matches are now coming from a source...

**The Street Fighters Professional League database**

It is a CSV file. Each line of the CSV file represents a match between two fighters. A fighter has won if he wins two rounds. Cf. `sources/sfplDb.csv`.

In the following example, Chun-Li has won the match, by 2 rounds against 1.
```
timeslot,home,roundsWon1,roundsWon2,away
1,chun-li,2,1,sagat
```

In this next example, we have a draw between Zangief and Blanka.
```
timeslot,home,roundsWon1,roundsWon2,away
1,zangief,2,2,blanka
```

TODO List:
- Create a method to get the ranking from the SFPL DB

:key: Check the helpers folder to help you parse a CSV file.
:key: Your predecessor, who left two weeks after having started, has created a mapping between SFPL and FCA fighters, it can be helpful.

## Iteration 4

The requirements have changed! Now your employer wants the method to take the season as input.

A season starts the 1st of September and ends the 31st of August, included.

## Iteration 5

You see a bit more clearly now! You've made the first iteration in order for the function to be used by an API.

And guess what? You are asked to develop this API, with one endpoint to get the ranking of a given season.

Bonus:
- Your API should be protected, of course. However, the authentication service is not there yet. So, you've decided to push the list of users with their password and permissions. Cf `sources/users.json`. The endpoint you have to develop should be protected by the `ranking:read` permission.
- Your API should be packaged in a Docker image.

## Iteration 6

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

## Iteration 7

Persist the tournament in a PostgreSQL DB, and create a GET endpoint on it.

## Iteration 8

Make the tournament progress by entering the result of a fight from the API.

## Iteration 9

A webapp. Fortunately, you ex work at a company where you can find a template, and the needed account has not been logout from your computer... https://github.com/Kpler/template-vue2-app

## Iteration X

The Street Fighters Professional League CSV files have been replaced by an actual database.

TODO:
- Docker compose with a postgres fed with data
