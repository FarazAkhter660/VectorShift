import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    
    try {
      // Mock response for testing without backend
      const mockResult = {
        num_nodes: nodes.length,
        num_edges: edges.length,
        is_dag: edges.length === 0 || nodes.length > edges.length // Simple mock logic
      };
      
      // Uncomment these lines when backend is ready
      // const response = await fetch('http://localhost:8000/pipelines/parse', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ nodes, edges }),
      // });
      // const result = await response.json();
      
      const result = mockResult; // Using mock result for now
      
      // Create alert
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert ${result.is_dag ? 'alert-success' : 'alert-error'}`;
      alertDiv.innerHTML = `
        <div class="alert-title">Pipeline Analysis</div>
        <div class="alert-message">
          Nodes: ${result.num_nodes}<br>
          Edges: ${result.num_edges}<br>
          Is DAG: ${result.is_dag ? 'Yes ✓' : 'No ✗'}
        </div>
      `;
      document.body.appendChild(alertDiv);

      setTimeout(() => {
        if (document.body.contains(alertDiv)) {
          document.body.removeChild(alertDiv);
        }
      }, 5000);

    } catch (error) {
      console.error('Error submitting pipeline:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      className="submit-button" 
      type="submit"
      onClick={handleSubmit}
      disabled={loading}
    >
      {loading ? 'Submitting...' : 'Submit Pipeline'}
    </button>
  );
};
