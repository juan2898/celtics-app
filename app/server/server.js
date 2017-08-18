const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

let app = express();
app.use(bodyParser.json())
app.use(cors());

var games = 
/* Cavaliers */ [{"homeOrAway":"Away", "opponent": "Cavaliers", "arena": "Quicken Loans Arena, Cleveland, OH", "time": "8:00PM ET", "date": "Tuesday OCT 17"},
/* Bucks */ {"homeOrAway":"Home", "opponent": "Bucks", "arena": "TD Garder, Boston, MA", "time": "7:30PM ET", "date": "Wednesday OCT 18"},
/*76ers */ {"homeOrAway":"Away", "opponent": "76ers", "arena": "Wells Fargo Center, Philadelphia, PA", "time": "7:30PM ET", "date": "Friday OCT 20"},
/*Knicks */ {"homeOrAway":"Home", "opponent": "Knicks", "arena": "TD Garder, Boston, MA", "time": "7:30PM ET", "date": "Tuesday OCT 24"},
/*Bucks */ {"homeOrAway":"Away", "opponent": "Bucks", "arena": "BMO Harris Bradley Center, Milwaukee, WI", "time": "8:00PM ET", "date": "Thursday OCT 26"},
/*Heat */ {"homeOrAway":"Away", "opponent": "Heat", "arena": "American Airlines Arena, Miami, FL", "time": "8:00PM ET", "date": "Saturday OCT 28"},
/*Spurs */ {"homeOrAway":"Home", "opponent": "Spurs", "arena": "TD Garder, Boston, MA", "time": "7:30PM ET", "date": "Monday OCT 30"},
/*Kings */ {"homeOrAway":"Home", "opponent": "Kings", "arena": "TD Garder, Boston, MA", "time": "7:30PM ET", "date": "Wednesday NOV 01"},
/*Thunder */ {"homeOrAway":"Away", "opponent": "Thunder", "arena": "Cheasapeake Energy Arena, Oklahoma City, OK", "time": "9:30PM ET", "date": "Friday NOV 03"},
/*Magic */ {"homeOrAway":"Away", "opponent": "Magic", "arena": "Amway Center, Orlando, FL", "time": "6:00PM ET", "date": "Sunday NOV 05"}, 
/*Hawks */ {"homeOrAway":"Away", "opponent": "Hawks", "arena": "Philips Arena, Atlanta, GA", "time": "7:30PM ET", "date": "Friday NOV 06"},
/*Lakers */ {"homeOrAway":"Home", "opponent": "Lakers", "arena": "TD Garder, Boston, MA", "time": "8:00PM ET", "date": "Friday NOV 08"}]

app.get('/api/games', (req, res) => {
    console.log('Recieved request')
    res.send(games)
})

app.listen(3002, () => {
    console.log('listening on post ' + 3002)
})