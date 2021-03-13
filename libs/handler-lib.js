export default function handler(lambda) {
    return async function (event, context) {
      let body, statusCode;
      try {
        // Run the Lambda
        body = await lambda(event, context);
        statusCode = 200;
      } catch (e) {
        body = { error: e.message };
        statusCode = 500;
      }
      // Return HTTP response
      return {
        statusCode,
        body: JSON.stringify(body),
      };
    };
  }
  //476bdc40-839c-11eb-bb3e-b1c70a4294e3\