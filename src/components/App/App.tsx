import * as React from "react";

interface Todo {
  done: boolean;
  label: string;
}

interface ListProps {
  todos: Array<Todo>;
  setTodo: Function;
}

// State Component
const TodoState: React.FC = props => {
  const [todos, setTodo] = React.useState<Array<Todo>>([]);
  console.log("TodoState", props);
  return props.render({ todos, setTodo });
};

const List: React.FC = (props: ListProps) => {
  console.log("List", props);
  return (
    <ul>{props.todos && props.todos.map(todo => <li>{todo.label}</li>)}</ul>
  );
};

const ListContainer = () => {
  return <TodoState render={props => <List {...props} />} />;
};

const Form: React.FC = (props: ListProps) => {
  console.log("Form", props);
  const { todos, setTodo } = props;
  const inputEl = React.useRef(null);
  const handleClick = () => {
    if (inputEl.current.value.trim().length !== 0)
      setTodo(todos.concat({ done: false, label: inputEl.current.value }));
  };

  return (
    <React.Fragment>
      <input type="text" ref={inputEl} />
      <button onClick={handleClick}>Add</button>
    </React.Fragment>
  );
};

const FormContainer = () => {
  return <TodoState render={props => <Form {...props} />} />;
};

// Alternative State Component, this works
// const TodoState: React.FC = props => {
//   const [todos, setTodo] = React.useState<Array<Todo>>([]);

//   return (
//     <div>
//       <List todos={todos} setTodo={setTodo} />
//       <Form todos={todos} setTodo={setTodo} />
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <span>Todo</span>
      <ListContainer />
      <FormContainer />
      {/* <TodoState /> */}
    </div>
  );
}

export default App;
