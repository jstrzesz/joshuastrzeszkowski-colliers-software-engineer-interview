# Technical challenge 02: Pokémon Aggregate

> **All submissions should include a clear statement of whether or not AI tools were used and, if so, how they were used. Submissions without this statement will not be considered.**

This challenge asks you to generate some statistics about the original 151 Pokémon using MongoDB's Aggregation Pipelines (https://www.mongodb.com/docs/manual/aggregation). You're provided with some boilerplate code to get you started in `aggregate.js`. Here are the general steps you'll need to take to complete the problem.

(**Note**: For this part, you should not need to modify "package.json".)

1. Run the MongoDB aggregate script by running `npm start` in this folder.
2. Modify the aggregate script in `aggregate.js` to generate the following stats:
  - Sum the `base HP` stat for all Pokémon with the 'Grass' type.
  - Find the count of Pokémon with each type, sorted by descending count.
  - Find the average `base Attack` for each Pokémon type, sorted by ascending average.

Include in your PR description the results of the aggregation as well as any challenges you faced with implementing the solution.

If you are applying for a senior software engineer position, also include 3 additional stats that you find interesting. Some examples might include:
  - Find the average of all `base` stats for each Pokémon type and sort them by descending average.
  - Find the ratio of `Sp. Attack` to `Attack` and sort by descending ratio.
  - Any other aggregate about the data that you find interesting.
