interface ResultData {
  webclient: string;
  timestamp: Date;
  spinResultIndex: number;
}

export const setResults = (data: ResultData) => {
  // Wrap the ResultData object inside a root property 'sheet1'
  const requestData = {
    sheet1: {
      ...data,
      email: 'shreedhar@xoxoday.com',
    },
  };

  fetch(
    'https://api.sheety.co/17267ff37d62e285ee88e1cead7a5f36/spinTheWheelTest/sheet1',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    },
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(json => {
      // Do something with the response object
      console.log(json.sheet1);
    })
    .catch(error => {
      // Log and handle errors
      console.error(error.message);
    });
};
