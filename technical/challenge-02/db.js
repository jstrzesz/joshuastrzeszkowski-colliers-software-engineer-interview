import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import pokemon from './pokemon.json' assert { type: 'json' };

const mongod = await MongoMemoryServer.create();
const uri = mongod.getUri();
const client = new MongoClient(uri);

export function getDb() {
  return client.db('challenge-db');
}

async function seedDb() {
  const db = getDb();
  const collection = db.collection('pokemon');
  const insertResult = await collection.insertMany(pokemon);
  console.info(`Inserted ${insertResult.insertedCount} Pokémon`);
}

await seedDb();

console.info('MongoDB instance available at', uri);
