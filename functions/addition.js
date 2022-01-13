exports.handler = async function (event, context) {
  let x = parseInt(event.queryStringParameters.x);
  let y = parseInt(event.queryStringParameters.y);
  responseMessage =
    x && y
      ? `Wynik dodawania ${x} i ${y} to ${x + y}`
      : 'Musisz podać parametr x i y w query';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};
