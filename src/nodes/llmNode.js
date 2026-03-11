// llmNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const customContent = (
    <div>
      <span style={{ fontSize: '12px', color: '#666' }}>This is a LLM.</span>
    </div>
  );

  const handles = [
    {
      id: 'system',
      type: 'target',
      position: Position.Left,
      style: { top: `${100/3}%` }
    },
    {
      id: 'prompt',
      type: 'target',
      position: Position.Left,
      style: { top: `${200/3}%` }
    },
    {
      id: 'response',
      type: 'source',
      position: Position.Right
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="LLM"
      fields={[]}
      handles={handles}
      customContent={customContent}
      customStyles={{
        backgroundColor: '#e3f2fd',
        borderColor: '#2196f3'
      }}
    />
  );
};
