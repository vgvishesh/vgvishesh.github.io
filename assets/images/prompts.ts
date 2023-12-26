const promptStructure = {
  prompts_f1: [
    {
      prompt: `
      A web application that  allows  a user to enter properties that are key, value pairs in the interface, for .eg. :
      {
        "name" : 'vishesh',
        "address" : " delhi"
      }
    The user should be able to add more properties and also remove any property from the interface.
    The form will also include a prompt field, where users can quickly reference their entered properties using the “@” symbol in a prompt window. The form on submission replaces the refrenced properties with their actual value, and make an api call.
      `,
      action: "create the vite+react app boiler plate code in the working directory called, `prompt-builder-app`."      
    },
    {
      prompt: "Write the complete and working code for this front-end part of this web application , in reactJs with type-script",
      actions: [
        "update the code for app.tsx, in 'prompt-builder-app' with the app.tsx code in the response",
        "create new file by the name pomptField.tsx, in the same directory as app.tsx in 'prompt-builder-app'",
        "create new file by the name keyvalueform.tsx, in the same directory as app.tsx in 'prompt-builder-app'",
        "run the app, show the live running app's output to the user in the result window of AppBuilder"
      ]
    }, 
    {
      prompt: "Update the prompt text box with logic to allow a user to write text strings that can use the value of the keys created above, by referencing them with `#` symbol, to generate a complete string, with user entered characters and key values ",
      action: "analysed the output and asked the gpt to update the output by doing on the the task that it proposed in the answer"
    },
    {
      prompt: "Also, build the logic for `key Selection UI`, the way you have described above, in PromptField.tsx file",
      action: [
        "update the code in file PromptField.tsx in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder"
      ]
    },
    {
      prompt: `lets build this text box component properly. Below are the updates needed the PromptField.tsx file's existing logic:
      1. Whenever user select a key from the dropdown by clicking on the key, it should be visible in the prompt field after “#” in bold fonts, rest of the text should have normal font weight.
      2. The key dropdown is opening at the current cursor postion instead of left of the prompt box. Also the dropdown should have higher z-index value
      `, 
      actions:[
        "update the code in file PromptField.tsx in code repo with the code returned in the answer.",
        "Use the error encountered in above code to create next prompt",
      ]
    },
    {
      prompt: "Error encountered in above code 'Property 'selectionStart' does not exist on type 'EventTarget & HTMLDivElement'. Did you mean 'onselectstart'?ts(2551)'. Write the correct code for PromptField.tsx",
      actions:[
        "update the code in file PromptField.tsx in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ]
    },
    {
      prompt: `This is not good. So, lets backtrack to the previous version of prompt-box component, for your ease the code for this version of PromptField.tsx file in present in this prompt. Modify this code to allow the user to do below:
      - Select a key from the drop down menu. On Selection the key should be appened to the text value already entered by the user.

      \`\`\`Prompt.tsx
      import React, { useState, useEffect, useRef } from 'react';
      interface KeyValuePair {
        key: string;
        value: string;
      }

      interface PromptFieldProps {
        promptText: string;
        keyValuePairs: KeyValuePair[];
        onChange: (newPrompt: string) => void;
      }

      const PromptField: React.FC<PromptFieldProps> = ({ promptText, keyValuePairs, onChange }) => {
        const [showDropdown, setShowDropdown] = useState<boolean>(false);
        const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
        const textareaRef = useRef<HTMLTextAreaElement>(null);

        useEffect(() => {
          const handleOutsideClick = (event: MouseEvent) => {
            if (textareaRef.current && !textareaRef.current.contains(event.target as Node)) {
              setShowDropdown(false);
            }
          };

          document.addEventListener('mousedown', handleOutsideClick);
          return () => document.removeEventListener('mousedown', handleOutsideClick);
        }, []);

        const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          onChange(e.target.value);
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.key === '#') {
            const textarea = e.currentTarget;
            const { top, left } = textarea.getBoundingClientRect();
            setDropdownPosition({ top, left });
            setShowDropdown(true);
          }
        };

        const handleKeySelection = (key: string) => {
          if (textareaRef.current) {
            const cursorPosition = textareaRef.current.selectionStart;
            const currentValue = textareaRef.current.value;
            const newValue = currentValue.slice(0, cursorPosition) + key + currentValue.slice(cursorPosition);
            onChange(newValue);
            setShowDropdown(false);
          }
        };

        return (
          <div>
            <textarea
              ref={textareaRef}
              value={promptText}
              onChange={handleTextAreaChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter prompt text here"
              style={{ width: '100%', height: '150px' }}
            />
            {showDropdown && (
              <div style={{ position: 'absolute', top: dropdownPosition.top, left: dropdownPosition.left }}>
                {keyValuePairs.map((pair, index) => (
                  <div key={index} onClick={() => handleKeySelection(pair.key)} style={{ cursor: 'pointer' }}>
                    {pair.key}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      };

      export default PromptField;

      \`\`\`
      `,
      actions: [
        "update the code in file PromptField.tsx in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ],
    },
    {
      prompt: `Lets modify the PromptField.tsx even more. Do these changes:
      1. The background color of the dropdown should be black
      2. On Selection the field value should be appened to the existing text value in the prompt box. 
      Give the neatly written code for the entire PromptField.tsx component. 
      `,
      actions:[
        "update the code in file PromptField.tsx in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ]
    },
    {
      prompt: `
      Only one of the last task is working. The value of the prompt box is not getting updated with the selected field's property value on clicking the field. So, update the logic to accomodate this. 
      `,
      actions:[
        "update the code in file PromptField.tsx in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ]
    },
    {
      prompt: `
      Nothing is happening on clicking the field. Seems like onClick functionality of property selection is not working. Can you handle it correctly and make it work on property selection by clicking
      `,
      actions:[
        "update the code in file PromptField.tsx in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ]
    },
  ],

  prompts_f2: [
    {
      prompt: 
      `
      I am already working on a building, A web application that  allows  a user to enter properties that are key, value pairs in the interface, for .eg. :
      {
        "name" : 'vishesh',
        "address" : " delhi"
      }
      The user should be able to add more properties and also remove any property from the interface.
      The form will also include a prompt field, where users can quickly reference their entered properties using the “@” symbol in a prompt window. The form on submission replaces the refrenced properties with their actual value, and make an api call.

      I have already build started to build it in react js and typescript. Below I am providing the important code files in the src directory of the project. 

      todo: Understand this code, and help me complete the front part of the above web application.
      \`\`\`App.tsx
      import React, { useState } from 'react';
      import KeyValueForm from './KeyValueForm';
      import PromptField from './PromptField';

      interface KeyValuePair {
        key: string;
        value: string;
      }

      const App: React.FC = () => {
        const [keyValuePairs, setKeyValuePairs] = useState<KeyValuePair[]>([]);
        const [promptText, setPromptText] = useState<string>('');

        const handleKeyValueChange = (newPairs: KeyValuePair[]) => {
          setKeyValuePairs(newPairs);
        };

        const handlePromptChange = (newPrompt: string) => {
          setPromptText(newPrompt);
        };

        // Add the logic for form submission here

        return (
          <div>
            <KeyValueForm keyValuePairs={keyValuePairs} onChange={handleKeyValueChange} />
            <PromptField promptText={promptText} keyValuePairs={keyValuePairs} onChange={handlePromptChange} />
            {/* Add a submit button and form submission logic here */}
          </div>
        );
      };

      export default App;
      \`\`\`

      \`\`\`KeyValueForm.tsx
      import React from 'react';

      interface KeyValuePair {
        key: string;
        value: string;
      }

      interface KeyValueFormProps {
        keyValuePairs: KeyValuePair[];
        onChange: (newPairs: KeyValuePair[]) => void;
      }

      const KeyValueForm: React.FC<KeyValueFormProps> = ({ keyValuePairs, onChange }) => {
        const handleAddPair = () => {
          onChange([...keyValuePairs, { key: '', value: '' }]);
        };

        const handleRemovePair = (index: number) => {
          const newPairs = keyValuePairs.filter((_, i) => i !== index);
          onChange(newPairs);
        };

        const handleChange = (index: number, key: string, value: string) => {
          const newPairs = keyValuePairs.map((pair, i) => {
            if (i === index) {
              return { key, value };
            }
            return pair;
          });
          onChange(newPairs);
        };

        return (
          <div>
            {keyValuePairs.map((pair, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={pair.key}
                  onChange={(e) => handleChange(index, e.target.value, pair.value)}
                  placeholder="Key"
                />
                <input
                  type="text"
                  value={pair.value}
                  onChange={(e) => handleChange(index, pair.key, e.target.value)}
                  placeholder="Value"
                />
                <button onClick={() => handleRemovePair(index)}>Remove</button>
              </div>
            ))}
            <button onClick={handleAddPair}>Add Pair</button>
          </div>
        );
      };

      export default KeyValueForm;
      \`\`\`

      \`\`\`PromptField.tsx
      import React, { useState, useEffect, useRef } from 'react';
      interface KeyValuePair {
        key: string;
        value: string;
      }

      interface PromptFieldProps {
        promptText: string;
        keyValuePairs: KeyValuePair[];
        onChange: (newPrompt: string) => void;
      }

      const PromptField: React.FC<PromptFieldProps> = ({ promptText, keyValuePairs, onChange }) => {
        const [showDropdown, setShowDropdown] = useState<boolean>(false);
        const textareaRef = useRef<HTMLTextAreaElement>(null);

        useEffect(() => {
          const handleOutsideClick = (event: MouseEvent) => {
            if (textareaRef.current && !textareaRef.current.contains(event.target as Node)) {
              setShowDropdown(false);
            }
          };

          document.addEventListener('mousedown', handleOutsideClick);
          return () => document.removeEventListener('mousedown', handleOutsideClick);
        }, []);

        const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          onChange(e.target.value);
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.key === '#') {
            setShowDropdown(true);
          }
        };

        const handleKeySelection = (value: string) => {
          if (textareaRef.current) {
            const currentValue = textareaRef.current.value;
            const newValue = currentValue + value;
            onChange(newValue);
            setShowDropdown(false);
          }
        };

        return (
          <div style={{ position: 'relative' }}>
            <textarea
              ref={textareaRef}
              value={promptText}
              onChange={handleTextAreaChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter prompt text here"
              style={{ width: '100%', height: '150px', border: '1px solid black' }}
            />
            {showDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                zIndex: 1000,
                backgroundColor: 'black',
                color: 'white',
                border: '1px solid white'
              }}>
                {keyValuePairs.map((pair, index) => (
                  <div
                    key={index}
                    onClick={() => handleKeySelection(pair.value)}
                    style={{ cursor: 'pointer', padding: '5px' }}
                  >
                    {pair.key}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      };

      export default PromptField;
      \`\`\`

      \`\`\`main.tsx
      import React from 'react'
      import ReactDOM from 'react-dom/client'
      import App from './App.tsx'
      import './index.css'

      ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      )
      \`\`\`

      `,
      actions: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ]
    },
    {
      prompt: `Now, the property selection dropdown menu is appearing below the prompt text box. Go ahead and fix this by displaying it where the present cursor location is in the prompt text box. Give the updated complete file and its name, for this component's code`,
      actions: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ]
    },
    {
      prompt: `Good job with the previous command. Now, on clicking on the property in the selection drop down the property key is not getting appended in the prompt written in the text box. Why is this happening, please fix it.`,
      actions: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "Analyzed the code and figured out why the onClick functionality is not working. [Human in the loop needed]",
      ]
    },
    {
      prompt: `The onClick function on dropdown divs in not working because of the improper state management for \`showDropdown\`. Can you update this code so that onClicking the event handler is invoked properly`,
      actions: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ]
    },
    {
      prompt: `
      Good work. Now, there is a problem in the way the property key is appeneded in the resultant prompt in the text box. Below is the demostration of the problem and the needed solution:
      Example: User is trying to write this string:
      'what is my @name'

      Here is what happend presently on selecting a property after hitting '@', and the expected behaviour

      current: what is my @na@name
      expected: what is my @name

      current: what is my @@name
      expected: what is my @name

      current: what is my @nam@name
      expected: what is my @name

      current: what is my @name@name
      expected: what is my @name

      todo: Use the above example, fix the code and return the code file.
      `,
      actions: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ]
    },
    {
      prompt: `
      The already entered properies and the text propmpt in the form disappears after refreshing the page. Can you make it such that the values of all the propery fields and the text prompt boxes are retained after the page refresh.
      `,
      actions: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
      ]
    },
    {
      prompt: `
      The property fields should be text areas instead of text input.
      `,
      actions: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      This is good. Now lets work on the css part. I want to use tailwind css library to make the below changes and more tols in later prompts:
      1. postion the form in the center of the screen.
      2. place the key, value and remove button should be aligned horizontally like below:
        e.g.:
          Key-input Value-input-area remove-button

          Explaination: key-input, value-input-area, and remove-button are aligned horizontally adacent to each other.

      Make these changes in the appropriate places and return the code for the files modified/added
      `,
      actions: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Good work. Lets make some more css. Below are the needed changes. 
      1. Align 'key', 'value' and 'remove button' from the top instead of middle.
      2. The 'remove button' should not have any padding  and no background colour, instead give text red colour
      3. The max width of the value text area should be 500px and max height should be 250px
      4. 'Add pair' button should be in dark dark grey color and should have 100% width
      5. Give a heading text as 'Custom Data' to key value recording section of the page 
      6. The Prompt text area section of page should have a heading text as 'Prompt'
      7. The sections “KeyValueForm” & “PromptField” should have 64px of gap between them
      8. The submit button should have blue background color. 

      Output: Give the update/modited/added code files
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Great going! Do below mentioned changes in the app:
      1. On submit, now the prompt data should be send in an api request. The api request has the following description:
      \'\'\'cUrl
      curl --location 'https://api.mega-mind.io/chat/command/' \
      --header 'X-Api-key: TNTbN4zC' \
      --header 'Content-Type: application/json' \
      --data '{
          "message":"why is earth round?"
      }'
      \'\'\'

      \'\'\'response
      {
        "answer": "The Earth is not a perfect sphere, but rather an oblate spheroid, meaning it is slightly flattened at the poles and bulging at the equator. This shape is a result of the Earth's rotation, which causes the equatorial region to bulge outward due to centrifugal force. The force of gravity also acts to pull the Earth's mass into a roughly spherical shape. These combined forces result in the Earth taking on a round shape."
      }
      \'\'\'
      The response object is a json with answer field with string value type.
      
      2. The returned answer text in the response should be displayed in a container beside the centrally alligned UI of the app.

      Do these tasks, and output the code for the files update/added.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Api works well! Some changes need to be made to the styling:
      1. Set the max-height of the response container to 700px and content inside the container should be scrollable. 
      2. Set the max-width of the response container to 500px. 
      Also display the text inside the response container in a well formatted manner so that it is easy on the eyes to read. 
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Good, need to make more changes, mentioned below:
      1. The request takes some time to return the response object. Currently to the user it feels like nothing is happening on clicking the submit button as there is no feedback for the user to know that api call is in progress. So, to solve this put a loader at the place of response containter until the response is available to be rendered in the container.
      2. The text color in the response container is too dark, make it appear in white color. 
      3. On refreshing the webpage, the rendered response disappears. Fix this by retaining the latest api response on page refresh as well.

      Give the complete code for the files updated/added.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Increase the width of the response container to 500px. 
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Presently, there is a problem in the way the returned answer text response is rendered. The answer text has '\n' newline character which is not getting considered in rendered output of response container. Below is a demostration of the problem:
      \`\`\`api-response
      Sure! Here's a suggested plan for your trip to Goa from Bangalore:\n\nDay 1:\n- Depart from Bangalore early in the morning to make the most of your day in Goa.
      \`\`\`

      \`\`\`current-output
      Sure! Here's a suggested plan for your trip to Goa from Bangalore: Day 1:- Depart from Bangalore early in the morning to make the most of your day in Goa.
      \`\`\`

      \`\`\`expected-output
      Sure! Here's a suggested plan for your trip to Goa from Bangalore: 
      
      Day 1:
      - Depart from Bangalore early in the morning to make the most of your day in Goa.
      \`\`\`

      On encountering the '\n' character the response new line character should be rendered.

      Update the application to fix this in the response container. Return the updated code files.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Cool. Good going. This app is presently not responsive. Make it responsive such that:
      1. It works well on devices of different resolutions espeically smart phones apple/android.
      2. For devices with smaller screen width, you need to place the response containte below the submit button. 

      Give the entire code for the files updated or added.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Ok. There is a problem in the reponsiveness of the app. When the screen size gets smaller as asked the reponse container gets rendered below the submit button, which is fine. But, all the properties that are added in the top most section under custom data are not completely visible. Only, few are visible. Fix this by making the app entirely scrollable, so that all the properties are visible along with the prompt text input area and response container, on all screen resolutions.

      Give the entire code for the files updated or added.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Still the key-value pairs property pairs are were added first and are on the top are not becoming visible, as I am not able to scroll them into the view.

      Give the entire code for the files updated or added.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      On small screen resolution the custom data section is not visible neither scrollable into the view. Fix this by making allowing user to scroll it into the view for smaller screen resolutions.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Okay. Now on clicking the submit button UI skrinks entirely and then comes back to normal when the returned asnwer is rendered in the response container. Please fix this behaviour, the UI should not get modified on Submiting the request.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      maintain a consistent width for the 'Add Pair' button, 'key' text input and the 'value' input area, even when the api request is triggered and the app is in loading state or awaitng reply from mega-mind sever. This needs to be done in order to prevent these ui display elements from shrinking too much when the app is in loading state.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Fix the width of the response container to min of 450px and maximum of whatever is good for the current screen resolution. Now fix the responsiveness of the app so that the ui components do not shrink when making an api request.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Give this app the name of 'AI Prompter'. Do these tasks:
      1. Above all the rendered UI components add a new component, that shows the name of this app. 
      2. Also write a small description below the App Name. The description needs to be small and cover what is this app doing and how to use the UI to do that.
      3. Upate the app name in the title as well.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Good. Now, make the follwoing changes:
      1. Update the app description to include this line: 'Refer the added keys by using @ symbol in the prompt box'
      2. Rename the 'Add Pair' button to 'Add Key'.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Awesome. Now, I want to deploy this application to vercel, so that it is availbale for use by anyone. How can i do this? 
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `
      Some more changes need to done in the App. Do the below mentioned things:
      1. Add a new container just above the response container to show the prompt text value sent in the api request. Make this container responsive just like response container.
      `,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `Now after adding the 'submitted prompt' container, the keyvalueform and prompt fields are not visible in the view. Something has gone wrong, please fix it.`,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    },
    {
      prompt: `Change the text color of the text rendered inside the submitted prompt container to be black.`,
      action: [
        "update the code in all the files in code repo with the code returned in the answer.",
        "run the app, show the live running app's output to the user in the result window of AppBuilder",
        "commit the present code in the repo"
      ]
    }
  ],
}


/*
const manualActions = [
  {
    action: "create the vite+react app boiler plate code in the backend system."
  },
  {
    action: "copy the code in the prompt re"
  },
]
'
A web application that  allows  a user to enter properties that are key, value pairs in the interface, for .eg. :
{
  "name" : 'vishesh',
  "address" : " delhi"
}
The user should be able to add more properties and also remove any property from the interface.
The form will also include a prompt field, where users can quickly reference their entered properties using the “@” symbol in a prompt window. The form on submission replaces the refrenced properties with their actual value, and make an api call.
'

Write the complete and working code for this front-end part of this web application , in reactJs with type-script.






I aim to develop a web application featuring a form that gathers user data key value pair properties, such as bio, interests, books read, resume, etc. Users should be able to input extensive text for each information category. Additionally, the app will enable users to create custom categories for their information.
The form will also include a prompt field, where users can quickly reference their entered information using the “@” symbol in a prompt window.
Once a user submits their query through this prompt, the application will utilize OpenAI’s LLM to generate and provide a response to their query.
*/