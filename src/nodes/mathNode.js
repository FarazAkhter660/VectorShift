import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const MathNode = ({ id, data }) => {
  const fields = [
    {
      name: 'operation',
      label: 'Operation',
      type: 'select',
      defaultValue: 'add',
      dataKey: 'operation',
      options: [
        { value: 'add', label: 'Addition (+)' },
        { value: 'subtract', label: 'Subtraction (-)' },
        { value: 'multiply', label: 'Multiplication (*)' },
        { value: 'divide', label: 'Division (/)' }
      ]
    },
    {
      name: 'constant',
      label: 'Constant',
      type: 'text',
      defaultValue: '0',
      dataKey: 'constant'
    }
  ];

  const handles = [
    {
      id: 'input1',
      type: 'target',
      position: Position.Left,
      style: { top: '30%' }
    },
    {
      id: 'input2',
      type: 'target',
      position: Position.Left,
      style: { top: '70%' }
    },
    {
      id: 'result',
      type: 'source',
      position: Position.Right
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Math"
      fields={fields}
      handles={handles}
      customStyles={{
        backgroundColor: '#e8f5e8',
        borderColor: '#4caf50',
        width: 220,
        height: 120
      }}
    />
  );
};
