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
    _id: '$type',
    totalOfEachType: {$sum: 1}
  }
  },
  { $sort: {totalOfEachType: -1}}
    ],
    baseAttackAve: [
      { $unwind: '$type'},
  { $group: {
    _id: '$type',
    
    baseAttackAve: {$avg: '$base.Attack'},
  }},
  { $sort: { baseAttackAve: 1}}
    ],
    totalByLetter: [
      { $group: {
        _id: { $substr: [ '$name.english', 0, 1]},
          totalByLetter: { $sum: 1}
      }},
      { $sort: { totalByLetter: -1}}
    ],
    fastestPokemon: [
      { $unwind: '$type'},
  { $group: {
    _id: '$type',
    speedAve: { $avg: '$base.Speed'}
  }},
  { $match: {
    speedAve: { $gte: 80}
  }},
  { $sort: { speedAve: -1}}
    ],
    baseStatAverage: [{ $unwind: '$type'},
    { $project: {
      _id: '$type',
    baseStatAve: {$divide: [{$add: ['$base.HP', '$base.Attack', '$base.Defense', '$base.Speed']}, 4]}
    }},
    { $group: {
      _id: '$_id',
      baseStatAve: {$avg: '$baseStatAve'}
    }},
    { $sort: { baseStatAve: -1}}]
  }},

  // Your aggregation stages go here
]);

for await (const doc of aggCursor) {
  console.log(doc);
}

process.exit(0); // Comment this out to leave the MongoDB instance running to inspect the data with your MongoDB Client of choice.
