// transformNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TransformNode = ({ id, data }) => {
  const fields = [
    {
      name: 'transformType',
      label: 'Transform Type',
      type: 'select',
      defaultValue: 'uppercase',
      dataKey: 'transformType',
      options: [
        { value: 'uppercase', label: 'Uppercase' },
        { value: 'lowercase', label: 'Lowercase' },
        { value: 'reverse', label: 'Reverse' },
        { value: 'trim', label: 'Trim' },
        { value: 'replace', label: 'Replace' },
        { value: 'split', label: 'Split' }
      ]
    },
    {
      name: 'replaceValue',
      label: 'Replace With',
      type: 'text',
      defaultValue: '',
      dataKey: 'replaceValue'
    },
    {
      name: 'splitChar',
      label: 'Split Character',
      type: 'text',
      defaultValue: ',',
      dataKey: 'splitChar'
    }
  ];

  const handles = [
    {
      id: 'input',
      type: 'target',
      position: Position.Left
    },
    {
      id: 'output',
      type: 'source',
      position: Position.Right
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Transform"
      fields={fields}
      handles={handles}
      customStyles={{
        backgroundColor: '#f1f8e9',
        borderColor: '#8bc34a',
        width: 200,
        height: 120
      }}
    />
  );
};
