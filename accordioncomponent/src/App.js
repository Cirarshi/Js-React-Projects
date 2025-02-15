import Accordion from "./Accordion";

const faqs = [
  {
    title: " What is JSX?",
    text: "Do qui in laboris elit dolore nisi culpa aute qui.JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM. All the React components are written in JSX. To embed any JavaScript expression in a piece of code written in JSX we will have to wrap that expression in curly braces {}.",
  },
  {
    title: "How do browsers read JSX?",
    text: "Id pariatur nulla velit voluptate incididunt quis adipisicing adipisicing aliquip veniam.In general, browsers are not capable of reading JSX and only can read pure JavaScript. The web browsers read JSX with the help of a transpiler. Transpilers are used to convert JSX into JavaScript. The transpiler used is called Babel.",
  },
  {
    title: "What is a key in React?",
    text: "Cupidatat reprehenderit consequat commodo irure do non cupidatat cupidatat amet reprehenderit anim.A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists.",
  },
  {
    title: "Explain the use of render method in React?",
    text: "React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app.",
  },
  {
    title: "What is state in React?",
    text: "The state is an instance of React Component Class that can be defined as an object of a set of observable properties that control the behaviour of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.",
  },
  {
    title: "What is props in React?",
    text: "React allows us to pass information to a Component using something called props (which stands for properties). Props are objects which can be used inside a component.",
  },
  {
    title: "What is higher-order component in React?",
    text: "Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component. HOC are beneficial as they are easy to code and read. Also, helps to get rid of copying the same logic in every component.",
  },
  {
    title: " Explain one way data binding in React?",
    text: "ReactJS uses one-way data binding which can be Component to View or View to Component. It is also known as one-way data flow, which means the data has one, and only one way to be transferred to other parts of the application. In essence, this means child components are not able to update the data that is coming from the parent component. It is easy to debug and less prone to errors.",
  },
  {
    title: "What is conditional rendering in React?",
    text: "Conditional rendering in React involves selectively rendering components based on specified conditions. By evaluating these conditions, developers can control which components are displayed, allowing for dynamic and responsive user interfaces in React applications.",
  },
  {
    title: "What is react router?",
    text: "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
  },
];

export default function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}
