import { getDb } from './db.js';

const pokemon = getDb().collection('pokemon');

const aggCursor = pokemon.aggregate([
  
  
  { $facet: {
    grassPokemonHP: [
        { $match: {
    type: 'Grass'
  }},
  { $group: {
    _id: 'Grass',
    totalOfGrassHP: { $sum: '$base.HP'}
  }},
    ],
    totalTypes: [
      { $unwind: '$type'},

  { $group: {
    _id: {
      type:'$type'},
    totalOfEachType: {$sum: 1}
  }
  },
  { $sort: {totalOfEachType: -1}}
    ],
    baseAttackAve: [
      { $unwind: '$type'},
  { $group: {
    _id: {
      type: '$type',
    },
    baseAttackAve: {$avg: '$base.Attack'},
  }},
  { $sort: { baseAttackAve: 1}}
    ]
  }},

  // Your aggregation stages go here
]);

for await (const doc of aggCursor) {
  console.log(doc);
}

process.exit(0); // Comment this out to leave the MongoDB instance running to inspect the data with your MongoDB Client of choice.
