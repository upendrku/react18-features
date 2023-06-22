# React 18 Summary

This file summarizes all the React 18 features, with the most important key points specific to each hook to remember for an interview for a senior software developer.

## What’s New in React 18

### Automatic Batching

```jsx
// Before: only React events were batched.
setTimeout(() => {
  setCount((c) => c + 1)
  setFlag((f) => !f)
  // React will render twice, once for each state update (no batching)
}, 1000)

// After: updates inside of timeouts, promises,
// native event handlers or any other event are batched.
setTimeout(() => {
  setCount((c) => c + 1)
  setFlag((f) => !f)
  // React will only re-render once at the end (that's batching!)
}, 1000)
```

### Transitions

A transition is a new concept in React to distinguish between urgent and non-urgent updates.

Urgent updates reflect direct interaction, like typing, clicking, pressing, and so on.
Transition updates transition the UI from one view to another.

### New Suspense Features

Support for Suspense on the server and expanded its capabilities using concurrent rendering features.

Suspense in React 18 works best when combined with the transition API. If you suspend during a transition, React will prevent already-visible content from being replaced by a fallback. Instead, React will delay the render until enough data has loaded to prevent a bad loading state.

### New Client and Server Rendering APIs

React DOM Client -

createRoot (Use it instead of ReactDOM.render), hydrateRoot (Use it instead of ReactDOM.hydrate in conjunction with the new React DOM Server APIs)
Both createRoot and hydrateRoot accept a new option called onRecoverableError in case you want to be notified when React recovers from errors during rendering or hydration for logging. By default, React will use reportError, or console.error in the older browsers.

React DOM Server -
These new APIs are now exported from react-dom/server and have full support for streaming Suspense on the server:
renderToPipeableStream: for streaming in Node environments.
renderToReadableStream: for modern edge runtime environments, such as Deno and Cloudflare workers.

### New Strict Mode Behaviors

React 18 introduces a new development-only check to Strict Mode. This new check will automatically unmount and remount every component, whenever a component mounts for the first time, restoring the previous state on the second mount.

Before this change, React would mount the component and create the effects.

### New Hooks

useId, useTransition, useDeferredValue, useSyncExternalStore, useInsertionEffect

## Hooks

### useState

The `useState` hook is used to manage state in functional components. It takes an initial state value as an argument and returns an array with two values: the current state value and a function to update the state value.

### useEffect

The `useEffect` hook is used to run side effects in functional components. It takes a callback function as an argument, which is executed after the component is mounted and whenever the component's props or state change.

### useContext

The `useContext` hook is used to access context data in functional components. It takes a context object as an argument and returns the current value of the context data.

### useRef

The `useRef` hook is used to create a ref object in functional components. The ref object can be used to access a DOM element or other value from within the component.

### useReducer

The `useReducer` hook is used to manage state in functional components using reducers. It takes a reducer function as an argument and returns an array with two values: the current state value and a function to dispatch actions.

### useMemo

The `useMemo` hook is used to memoize a value in functional components. It takes a callback function as an argument and returns the result of the callback function the first time it is called, and then the memoized value for subsequent calls.

### useCallback

The `useCallback` hook is used to memoize a function in functional components. It takes a callback function as an argument and returns a memoized version of the callback function.

### useRefCallback

The `useRefCallback` hook is used to create a ref object that contains a memoized function. It takes a callback function as an argument and returns a ref object that contains the memoized function.

### useLayoutEffect

The `useLayoutEffect` hook is similar to the `useEffect` hook but is executed after the layout has been calculated. This can be useful for effects that need to be executed after the DOM has been rendered.

### useDebugValue

The `useDebugValue` hook is used to debug values in functional components. It takes a value and an optional object of options as arguments. The options object can be used to customize the label and value that are rendered in the React DevTools.

### useTransition

The `useTransition` hook is used to manage transitions in functional components. It takes a configuration object as an argument and returns an object with two values: the current transition state and a function to update the transition state.

### useDeferredValue

The `useDeferredValue` hook is used to defer the evaluation of a value. It takes a value as an argument and returns a promise that resolves to the value after a delay.

### useSyncExternalStore

The `useSyncExternalStore` hook is used to subscribe to an external store. It takes an external store function as an argument and returns the current value of the external store.

### useId

The `useId` hook is used to generate a unique ID for a component. The hook returns a string that can be used to identify the component.

### useImperativeHandle

The `useImperativeHandle` hook is used to expose a mutable ref to a component. The hook takes a ref object as an argument, and the hook returns a function that can be used to update the ref object.

## React 18 Built-in Components

This README file provides information about the built-in components of React 18 and their functionalities.

### Fragment

The `Fragment` component is a lightweight component that does not add any extra nodes to the DOM. It can be used to group a list of children without having to wrap them in a div or other container element. Using the `Fragment` component can help improve the performance of your application and enhance code readability.

Example Usage:

```jsx
import React, { Fragment } from 'react'

function MyComponent() {
  return (
    <Fragment>
      <ChildComponent1 />
      <ChildComponent2 />
      <ChildComponent3 />
    </Fragment>
  )
}
```

### Profiler

The `Profiler` component enables measuring the cost of rendering a component and its descendants. It is a useful tool for debugging performance problems and identifying components that may be causing performance bottlenecks. By collecting performance data, you can optimize your application's rendering process.

Example Usage:

```jsx
import React, { Profiler } from 'react'

function App() {
  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(`Component ${id} took ${actualDuration}ms to render`)
  }

  return (
    <Profiler id="MyComponent" onRender={onRender}>
      <MyComponent />
    </Profiler>
  )
}
```

### StrictMode

The `StrictMode` component enables strict mode for a component and its descendants. Strict mode enforces a set of rules that help prevent common mistakes and errors in React code. Enabling strict mode can improve code quality, identify potential problems, and catch potential errors early.

Example Usage:

```jsx
import React from 'react'

function App() {
  return (
    <React.StrictMode>
      <MyComponent />
    </React.StrictMode>
  )
}
```

### Suspense

The `Suspense` component is used to render a fallback UI while a resource is loading. It helps improve the user experience by preventing users from seeing a blank screen while resources, such as data from an API or a large file, are loading. The `Suspense` component simplifies handling asynchronous operations in your application.

Example Usage:

```jsx
import React, { Suspense } from 'react'

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyComponent />
    </Suspense>
  )
}
```

Feel free to enhance this README file with additional information or customize it according to your needs.

## Side Effects

Updating the screen, starting an animation, changing the data—are called side effects.
In React, side effects usually belong inside event handlers. Event handlers are functions that React runs when you perform some action—for example, when you click a button. Even though event handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.

If you’ve exhausted all other options and can’t find the right event handler for your side effect, you can still attach it to your returned JSX with a useEffect call in your component. This tells React to execute it later, after rendering, when side effects are allowed. However, this approach should be your last resort.

## Why does React care about purity?

Writing pure functions takes some habit and discipline. But it also unlocks marvelous opportunities:

Your components could run in a different environment—for example, on the server! Since they return the same result for the same inputs, one component can serve many user requests.
You can improve performance by skipping rendering components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.

## Rendering In React

Any screen update in a React app happens in three steps:
Trigger
Render
Commit
You can use Strict Mode to find mistakes in your components
React does not touch the DOM if the rendering result is the same as last time

## Batching in React

Setting state does not change the variable in the existing render, but it requests a new render.
React processes state updates after event handlers have finished running. This is called batching.
To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.

## Why is mutating state not recommended in React?

Hide Details
There are a few reasons:

- Debugging: Using console.log and avoiding state mutation allows for clear debugging and tracking of state changes between renders in React.
- Optimizations: React optimization strategies can skip unnecessary work by checking if previous state or props are the same as the next ones, and if state is never mutated, checking if prevObj === obj can confirm that nothing has changed inside it.
- New Features: The new React features we’re building rely on state being treated like a snapshot. If you’re mutating past versions of state, that may prevent you from using the new features.
- Requirement Changes: Using immutable state in React makes it easier to implement features like Undo/Redo, history of changes, and resetting forms to earlier values, as past copies of state can be kept in memory and reused when needed.
- Simpler Implementation: React does not require special handling of objects in state, as it does not rely on mutation and can handle any object without performance or correctness issues.

## Preserving and resetting state

React keeps state for as long as the same component is rendered at the same position.
State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
You can force a subtree to reset its state by giving it a different key.
Don’t nest component definitions, or you’ll reset state by accident.

## Comparing useState and useReducer

We recommend using a reducer if you often encounter bugs due to incorrect state updates in some component, and want to introduce more structure to its code. Reducers require you to write a bit more code, but they help with debugging and testing. Reducers must be pure.

## React Refs vs. State Comparison

|            | React Refs                               | State                                                      |
| ---------- | ---------------------------------------- | ---------------------------------------------------------- |
| API        | `useRef(initialValue)`                   | `useState(initialValue)`                                   |
| Returns    | `{ current: initialValue }`              | `[value, setValue]`                                        |
| Re-render  | No                                       | Yes                                                        |
| Mutability | Mutable                                  | "Immutable"                                                |
| Usage      | - Storing mutable values                 | - Managing component-specific data                         |
|            | - Accessing/manipulating DOM elements    | - Triggering re-renders                                    |
|            | - Caching values/references              | - Storing values affecting component visual representation |
|            |                                          | - Handling user input and maintaining component state      |
|            |                                          |                                                            |
| Notes      | - Avoid reading/writing during rendering | - Each render has its own snapshot of state                |

## When to use refs

Refs are used in React when a component needs to interact with external APIs, such as storing timeout IDs, manipulating DOM elements, or storing other objects that are not necessary to calculate the JSX.
Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.
A component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using forwardRef and passing the second ref argument down to a specific node.

## What are Effects and how are they different from events?

Effects in React are functions that allow you to perform side effects, such as fetching data or manipulating the DOM, after a component has rendered, while events are actions triggered by user interaction, such as clicking a button or typing in a form.

## Infinite loop issue

By default, Effects run after every render. This is why code like this will produce an infinite loop:

const [count, setCount] = useState(0);
useEffect(() => {
setCount(count + 1);
});

useEffect(() => {
// This runs after every render
});

useEffect(() => {
// This runs only on mount (when the component appears)
}, []);

useEffect(() => {
// This runs on mount _and also_ if either a or b have changed since the last render
}, [a, b]);

## React Version Comparison

Here's a comparison of the major updates and differences between React versions 15, 16, 17, and 18:

| React Version | Major Updates and Differences                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| React 15      | - Introduced the concept of React components using classes.                                                                                                     |
|               | - Implemented the virtual DOM diffing algorithm to efficiently update the DOM.                                                                                  |
|               | - Introduced lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.                                                   |
|               | - Supported server-side rendering (SSR) to render React components on the server.                                                                               |
|               | - Used React.createClass for component creation.                                                                                                                |
|               | - Used PropTypes for type checking and validation of props.                                                                                                     |
| React 16      | - Introduced support for returning an array of elements or fragments from components.                                                                           |
|               | - Introduced the concept of "Fiber" - a reimplementation of the React reconciliation algorithm to enable asynchronous rendering and improve performance.        |
|               | - Introduced error boundaries to catch and handle errors in component trees.                                                                                    |
|               | - Replaced `componentWillMount`, `componentWillReceiveProps`, and `componentWillUpdate` with safer alternatives.                                                |
|               | - Introduced the `React.createRef` API for creating refs.                                                                                                       |
|               | - Added support for returning `null` from component render methods.                                                                                             |
| React 17      | - No major breaking changes introduced in React 17.                                                                                                             |
|               | - Focused on improving the existing features, performance, and stability of React.                                                                              |
|               | - Introduced React's official support for the new JSX Transform, which enables a more streamlined and modern syntax for writing JSX.                            |
|               | - Enhanced the error handling experience by providing more helpful error messages and warnings.                                                                 |
| React 18      | - Introduced several new features and improvements, including:                                                                                                  |
|               | - **Automatic Batching**: Improved batching mechanism to reduce re-renders and optimize performance.                                                            |
|               | - **Hooks Refresh**: Improved behavior and performance of hooks, including better handling of dependencies and reduced re-renders.                              |
|               | - **Concurrent Rendering**: Enhanced concurrent rendering capabilities to improve the responsiveness and user experience of React applications.                 |
|               | - **Event Delegation**: Improved event handling and delegation model, making it more efficient and performant.                                                  |
|               | - **New JSX Transform**: Officially introduced the new JSX Transform as the default for transforming JSX code, offering improved performance and compatibility. |
|               | - **Improved Profiling**: Enhanced profiling capabilities to provide better insights into the performance of React components.                                  |

React Hooks were introduced in React version 16.8

## React Lifecycle Methods vs Hooks

Here's a comparison of React lifecycle methods with their equivalent hooks, arranged based on the mounting, updating, and unmounting phases:

### Mounting Phase

| React Lifecycle Methods           | Equivalent Hooks                   |
| --------------------------------- | ---------------------------------- |
| `constructor`                     | N/A (handled differently in hooks) |
| `static getDerivedStateFromProps` | `useState` or `useReducer`         |
| `render`                          | N/A (handled differently in hooks) |
| `componentDidMount`               | `useEffect`                        |

### Updating Phase

| React Lifecycle Methods           | Equivalent Hooks                   |
| --------------------------------- | ---------------------------------- |
| `static getDerivedStateFromProps` | `useState` or `useReducer`         |
| `shouldComponentUpdate`           | `React.memo` and `React.useMemo`   |
| `render`                          | N/A (handled differently in hooks) |
| `componentDidUpdate`              | `useEffect`                        |

### Unmounting Phase

| React Lifecycle Methods | Equivalent Hooks |
| ----------------------- | ---------------- |
| `componentWillUnmount`  | `useEffect`      |

### Error Handling

| React Lifecycle Methods | Equivalent Hooks                                                                 |
| ----------------------- | -------------------------------------------------------------------------------- |
| `componentDidCatch`     | `useErrorBoundary` (ErrorBoundary component with `useEffect` for error handling) |

Please note that hooks are not exact replacements for all lifecycle methods. Some lifecycle methods have no direct equivalent in hooks, and their behavior is achieved through different means or combinations of hooks.

## What are advantages of using functional components over class components in react?

There are several advantages of using functional components over class components in React:

1. **Simplicity and Readability:** Functional components have a simpler and more concise syntax compared to class components. They focus on the core functionality of the component without the need for boilerplate code like constructor, lifecycle methods, or binding.

2. **Ease of Understanding:** Functional components follow the familiar JavaScript function syntax, making them easier to understand for developers who are already familiar with JavaScript. They promote a functional programming style and encourage the use of pure functions.

3. **Improved Performance:** Functional components are generally more lightweight and have better performance compared to class components. They avoid the overhead of creating instances and managing lifecycle methods, resulting in faster rendering and updates.

4. **Easier Testing:** Functional components are easier to test because they are pure functions that take inputs and produce outputs. They can be tested without the need for complex setup or mocking of instance methods.

5. **Better Compatibility with React Features:** React's recent updates and features, such as hooks, are primarily designed to work with functional components. Functional components are the recommended approach for using hooks, which provide a more flexible and scalable way to manage state and side effects.

6. **Improved Debugging:** Functional components have better tooling and debugging support. The React DevTools and other development tools have improved support for functional components, making it easier to inspect and debug component state and props.

7. **Support for React Native:** Functional components are the recommended approach for developing components in React Native, a framework for building mobile applications. Functional components can be easily shared between React and React Native projects, promoting code reusability.

It's important to note that while functional components have many advantages, class components still have their place in React and are necessary for certain scenarios, such as using lifecycle methods not available in hooks or when working with older codebases. The choice between functional components and class components depends on the specific requirements of your project.

## If we are using useState with React functional component then is it the same as the class component? If not whats the difference and advantages or disadvantages?

When using `useState` with a React functional component, it provides similar functionality as managing state in a class component, but there are some differences:

1. **Syntax:** The syntax for managing state with `useState` in functional components is different from using `this.state` and `this.setState` in class components. In functional components, you directly call the `useState` hook and destructure the state value and setter function from the returned array.

2. **Simplicity and Readability:** Functional components with `useState` have a simpler and more concise syntax compared to class components. They focus on the core functionality of the component without the need for a class declaration, constructor, or the `this` keyword.

3. **No Lifecycle Methods:** Functional components don't have lifecycle methods like `componentDidMount`, `componentDidUpdate`, or `componentWillUnmount` that are available in class components. Instead, you can use the `useEffect` hook to handle side effects and perform actions when the component mounts, updates, or unmounts.

4. **Function Scope:** In functional components, state variables declared using `useState` are scoped to the function and persist across re-renders. In contrast, state in class components is managed by the instance and can be accessed through `this.state`. Each instance of a class component maintains its own separate state. ---> IMPORTANT

5. **Performance and Rendering:** Functional components with `useState` can have performance advantages over class components. The React team has optimized functional components with hooks to reduce unnecessary re-renders and improve performance compared to class components. ---> IMPORTANT

Advantages of using `useState` with functional components:

- Simplicity and readability with a more concise syntax.
- Improved performance and optimization compared to class components.
- Easier to understand and reason about since they promote a functional programming style.
- Better compatibility with React features, such as hooks, which are primarily designed for use with functional components.
- Enhanced testing capabilities as functional components are pure functions that can be easily tested.

Disadvantages of using `useState` with functional components:

- Lack of lifecycle methods that are available in class components. However, this can be mitigated by using the `useEffect` hook to handle similar functionalities.
- Functional components may require a shift in mindset and understanding of hooks, especially for developers who are accustomed to working with class components.

It's worth noting that both functional components with hooks and class components have their own use cases and can coexist in a React application. The choice between them depends on factors such as project requirements, team preferences, and familiarity with either approach.
