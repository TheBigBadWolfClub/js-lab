import * as express from 'express';
import * as path from "path";
import {allowCors} from "./app/utils/midlewares";
import {cards, deckBySuit, newDeck, suits} from "./app/rest/route";
const __dirname = path.resolve();


const app = express()
const port = process.env.port || 3333;


//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(cookieParser());
app.use(allowCors);

app.get('/info', (req, res) => {
  res.send('this is a GameCard')
})

app.get('/deck',  newDeck)
app.get('/deck/:suit',  deckBySuit)
app.get('/cards',  cards)
app.get('/suits',  suits)

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('*', express.static(path.join(__dirname, 'public')));

const server = app.listen(port, () => {
  console.log(`DeckApi app listening at http://localhost:${port}`)
})
server.on('error', console.error);

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
