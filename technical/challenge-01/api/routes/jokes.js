export function get(jokeService) {
  return async (request, response) => {
    try {
      const jokes = await jokeService.get(request.query.term);
      response.send({
        data: jokes,
      });
    } catch (err) {
      console.error(err);
      response.status(500).send({
        errors: [
          {
            status: 500,
            source: { pointer: '' },
            title: 'Unable to process your request',
            detail:
              'The service was not able to retrieve a joke. Please try again.',
          },
        ],
      });
    }
  };
}
