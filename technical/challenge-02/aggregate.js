import { getDb } from './db.js';

const pokemon = getDb().collection('pokemon');

const aggCursor = pokemon.aggregate([
  { $match: {
    type: 'Grass'
  }},
  { $group: {
    _id: 'Grass',
    totalOfGrassHP: { $sum: '$base.HP'}
  }}
  // Your aggregation stages go here
]);

for await (const doc of aggCursor) {
  console.log(doc);
}

process.exit(0); // Comment this out to leave the MongoDB instance running to inspect the data with your MongoDB Client of choice.
