Question 1: How did you manage to fetch the list and what tool did you use?
Ans: I made use of the fetch method to execute a get response. Other way would be to use axios to make the API call

Question 2: What steps would you take to future improve this?
Ans: Would use the axios package to make sure the the API call is made through it. Also define ENV variables to seperate DEV, STAGE and PROD endpoint urls

Question 4: What makes the createSlice in redux-toolkit difference then A Reducer in redux?
Ans: In createSlice, the action creators and action types are made implicitly and in reducer they are declared explicitly. createSlice simplifies defining actions and reducers for a specific piece of the app state by combining them into a single unit.

Question 5: Describe the benefits of immutable code.
Ans: Improved code readability, easier debugging and predictable state management

Question 6: How can you verify the action has been dispatched?
Ans: By making use of the Redux Dev Tool extension installed via Chrome Store. We can trace down the details on what actions have been fired.

Question 7: explain the use of useEffect hook in React
Ans: useEffect is a predefined hook in React to handle side-effects. Technically its an infinite loop which executes some side-effect based on the dependency array. We can map the state/function dependencies on the array and make sure that the side-effect is executed only then.

Question 8: What is A High Order Component? 
Ans: Its a function that takes in a argument(could be a component) and returns a function with some additional funcitonalities.

Question 9: What use cases would a HOC be useful?
Ans: Error Boundary, Auth, Feature-based rendering, Translation, 

Question 10: What does it indicate when a component is prefixed with use and with
Ans: use are mostly predefined or custom hooks (eg, useState), while with are HOCs (withRouter)

Question 11: What is a Generic type in typescript? 
Ans: Generics are used to create reusable types that can be used for variety of purposes, we can define them in class, interface and funcitons as well

Question 12: Whats the difference between a controlled and uncontrolled input in React?
Controlled component - state handles all the form data, while, for an uncontrolled component, the HTML form element data is managed by only the DOM, eg: if the state is driven through useRef
