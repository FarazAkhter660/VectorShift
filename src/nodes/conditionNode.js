import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ConditionNode = ({ id, data }) => {
  const fields = [
    {
      name: 'condition',
      label: 'Condition',
      type: 'select',
      defaultValue: 'equals',
      dataKey: 'condition',
      options: [
        { value: 'equals', label: '==' },
        { value: 'notEquals', label: '!=' },
        { value: 'greaterThan', label: '>' },
        { value: 'lessThan', label: '<' },
        { value: 'greaterThanOrEqual', label: '>=' },
        { value: 'lessThanOrEqual', label: '<=' }
      ]
    },
    {
      name: 'compareValue',
      label: 'Compare Value',
      type: 'text',
      defaultValue: '',
      dataKey: 'compareValue'
    }
  ];

  const handles = [
    {
      id: 'input',
      type: 'target',
      position: Position.Left,
      style: { top: '50%' }
    },
    {
      id: 'true',
      type: 'source',
      position: Position.Right,
      style: { top: '30%' }
    },
    {
      id: 'false',
      type: 'source',
      position: Position.Right,
      style: { top: '70%' }
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Condition"
      fields={fields}
      handles={handles}
      customStyles={{
        backgroundColor: '#fce4ec',
        borderColor: '#e91e63',
        width: 200,
        height: 100
      }}
    />
  );
};
