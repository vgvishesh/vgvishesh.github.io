---
layout: post
title:  "How to use Server-Sent Events to stream response with OpenAI Apis"
author: vishesh gupta
description: A 0 to 1 application in react to stream text response.
---
![OpenAi](/assets/images/OpenAI-logo.jpg)

In this post we will build an AI web application with javascript using OpenAI. 
To get the response of our questions from OpenAI we are going to use their Chat Completion [endpoint](https://platform.openai.com/docs/api-reference/chat/create), with _Stream_ set to `true`.

When _Stream_ is set to _true_, the OpenAI server sends data as __Server-Sent Events*(SSE)*__ with the stream terminated by a `data: [DONE]`. 

# Server-Sent Events (SSE)
Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as Events + data inside the web page. This is a one-way connection, so you can't send events from a client to a server.
Refer these mdn [docs](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) for details.


## Application Code
We are going to create a very simple html page with javascript to make api calls and handle returned responses from OpenAI. 

Lets create a bare bone html page, with the below code, name it *app.html*.
```
<!-- embeddable.html -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SSE Open AI Demo</title>
</head>

<body>
  <script src="script.js"></script>
  <form>
    Enter your Question:
    <input type="text" id="questionBox" size="50"></input>
    <input type="submit" value="Submit">
  </form>
  <div id="answer">
  </div>
</body>

</html>
```
###### app.html

In the above code the script tag refers to a _script.js_ file. Now, lets write the code in this file. Below is the starting code or the boiler plate code, as famously called by programmers, for this file. 

```
// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value from the input box
    var question = document.getElementById("question-box").value;

    // Call the function to process the question and update the answer
    sendApiRequest(question);
  }

  // Function to process the question and update the answer
  function sendApiRequest(question) {
    // Replace this with your actual logic or API call to get the answer
    var answer = "This is a placeholder answer for: " + question;

    // Update the answer section
    document.getElementById("answer").textContent = answer;
  }

  // Attach the submit event listener to the form
  document.querySelector("form").addEventListener("submit", handleSubmit);
});
```
###### script.js

Things to add in _script.js_ file are:
1. making a http request to openAI with the question submitted by the user
2. listening and rendering the server response send by the OpenAI server.

#### Making API request to the openAI server
[Here](https://platform.openai.com/docs/api-reference/chat/create), is the official OpenAI docs for this API endpoint. So, lets update the `sendApiRequest()` function to actually make an API request. Here is the udpdate function code:
```
async function sendApiRequest(question) {
    // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
    var apiKey = 'YOUR_OPENAI_API_KEY';

    // OpenAI API endpoint
    var apiUrl = 'https://api.openai.com/v1/chat/completions';

    // Prepare the request payload
    var payload = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: "user",
          content: question
        }
      ]
    };

    try {
      // Send the API request
      var response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify(payload)
      });

      // Parse the response as JSON
      var result = await response.json();

      // Extract the answer from the response
      var answer = result.choices[0].message.content;

      // Update the answer section
      document.getElementById("answer").textContent = answer;
    } catch (error) {
      console.error('Error sending API request:', error);
      // Handle the error appropriately (e.g., display an error message)
    }
  }
```
###### script.js

In the above code, we are not streaming the response. It is a plain POST http request. It returns a response object in [this](https://platform.openai.com/docs/api-reference/chat/object) format. 


#### Making a stream API request to the openAI server
In the code above we have to set the field in payload `Stream` to `true`, to request streamed responses from the server. This will establish a connection between the client(browser) and server(openAI server), on which the OpenAI server sends multiple response objects in [this](https://platform.openai.com/docs/api-reference/chat/streaming) format: 
```
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"role":"assistant","content":""},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":"Hello"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":"!"},"finish_reason":null}]}

....

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":" today"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":"?"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{},"finish_reason":"stop"}]}

data: [DONE]
```
Mesage like these gets sent in burst. Sometimes in a stream you can have 1 such message and sometimes it can be multiple. Therefore, we get multiple `\n` separated lines of data. 

The last message that the API request receives from the server is `data: [DONE]`. This is when the stream ends, and the server has sent the entire response.

Let spend some time in examining a single response data object/chunk. A single response chunk is a JSON object of format below:
```
const response = {
  "id": "chatcmpl-123",
  "object": "chat.completion.chunk",
  "created": 1694268190,
  "model": "gpt-3.5-turbo-0613",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [
    {
      "index": 0,
      "delta": {
        "content": "Hello!"
      },
      "finish_reason": null
    }
  ]
}
```
The data we need to make our application work is the answer to our initial question. This answer arrives in form of these response chunks, and for each response chunk, we can get the partial answer content from: `response.choices[0].delta.content` field. The choices array in the response object is of size 1 here because while making the API request, we used the default value of parameter, [**_N_**](https://platform.openai.com/docs/api-reference/chat/create#chat-create-n), i.e. 1. 

To get the entire answer for the question asked, we need to concatenate all the partial answer strings. Now, lets update the code to do exactly this.

#### Updating the code to handle the streaming responses
Below is the updated code of `sendApiRequest()` to stream response from the API request.
```
// Function to process the question and update the answer
  async function sendApiRequest(question) {
    // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
    var apiKey = 'YOUR_OPENAI_API_KEY';

    // OpenAI API endpoint
    var sseUrl = 'https://api.openai.com/v1/chat/completions';

    // Prepare the request payload
    var payload = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: "user",
          content: question
        }
      ],
      stream: true,
    };

    // Send the API request with streaming
    var response = await fetch(sseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify(payload)
    });

    // Check if the response is a successful HTTP response (status code 2xx)
    if (response.ok) {
      // Create a ReadableStream from the response body
      var stream = response.body;

      // Create a TextDecoder to convert the stream chunks to text
      var decoder = new TextDecoder();

      // Read and process chunks of the streaming response
      var reader = stream.getReader();
      var result = '';
      while (true) {
        var { done, value } = await reader.read();

        // Break the loop if the streaming is done
        if (done) {
          break;
        }

        // Convert the chunk to text and update the result
        const responseData = decoder.decode(value);
        const dataChunks = responseData.split('\n').filter(line => line.trim() !== '');
        dataChunks.forEach(element => {
          try {
            const dataString = element.replace(/^data: /, '');
            const parsedDataString = JSON.parse(dataString);
            const answer = parsedDataString.choices[0].delta.content;
            if (answer) {
              result += answer;
              document.getElementById('answer').textContent = result;
            }
          } catch (err) {
            console.log(err);
          }
        })
      }
    } else {
      console.error('Error with API request. HTTP Status:', response.status);
      // Handle the error appropriately (e.g., display an error message)
    }

  }
```

Here is the video of how the application works after open the `app.html` file. 
<iframe width="750" height="350" src="https://www.youtube.com/embed/vH1ytBza7Io" frameborder="0" allowfullscreen></iframe>


Here is the link to the complete web application: [SSE_Demo_App](https://github.com/vgvishesh/Demos/tree/main/sse-OpenAI). Please feel free to copy, modify and use this code anyhow you see fit. 


