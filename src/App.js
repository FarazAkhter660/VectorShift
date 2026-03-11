import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-container">
      <PipelineToolbar />
      <div className="pipeline-container">
        <PipelineUI />
      </div>
      <div className="submit-section">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
