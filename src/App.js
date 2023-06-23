import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data && <h1>{data.title}</h1>}
    </div>
  );
};

export default App;
