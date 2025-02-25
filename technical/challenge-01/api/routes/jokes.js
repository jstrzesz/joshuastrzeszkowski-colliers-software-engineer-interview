export function get(jokeService) {
  return async (request, response) => {
    try {
      const joke = await jokeService.get();
      console.log(joke, 'line 5')
      response.send({
        data: [{ type: 'joke', attributes: { joke } }],
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
