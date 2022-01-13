exports.handler = async function (event, context) {
  let x = parseInt(event.queryStringParameters.x);
  let y = parseInt(event.queryStringParameters.y);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Wynik dodawania ${x} i ${y} to ${x + y}`,
    }),
  };
};
