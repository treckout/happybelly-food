import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const url = 'https://api.paystack.co/transaction/initialize';

    // Gather the data to be sent to the endpoint
    const data = {
      email: 'treckoutvlogs@gmail.com',
      amount: 100 * 100,
      // callback_url: 'https://example.com/verify',
    };

    const headers = {
      Authorization: 'Bearer sk_live_82902ffc972a41a161dedabcf4a57e7c5b85e9cd',
      'Content-Type': 'application/json',
    };

    // Create a function to handle the API request
    const sendRequest = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
        });

        const result = await response.json();
        window.location.href = result.date.Authorization_url;
        // Handle the response data or redirect to the Authorization_url
        console.log(result);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };

    // Call the function to send the API request
    sendRequest();
  }, []);

  return <div>Your React component</div>;
};

export default MyComponent;
