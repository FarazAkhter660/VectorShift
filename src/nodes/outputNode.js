// outputNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const fields = [
    {
      name: 'outputName',
      label: 'Name',
      type: 'text',
      defaultValue: id.replace('customOutput-', 'output_'),
      dataKey: 'outputName'
    },
    {
      name: 'outputType',
      label: 'Type',
      type: 'select',
      defaultValue: 'Text',
      dataKey: 'outputType',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'Image' }
      ]
    }
  ];

  const handles = [
    {
      id: 'value',
      type: 'target',
      position: Position.Left
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Output"
      fields={fields}
      handles={handles}
      customStyles={{
        backgroundColor: '#fff3e0',
        borderColor: '#ff9800'
      }}
    />
  );
};
