import { Hoc, Hoc2 } from './Hoc';
import { Quartz, SolarQuartz } from './RenderProps';

function App() {
  return (
    <div className="App">
      <Hoc />
      <hr />
      <Hoc2 />
      <hr />
      <Quartz />
      <hr />
      <SolarQuartz />
    </div>
  );
}

export default App;
