import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const FilterNode = ({ id, data }) => {
  const fields = [
    {
      name: 'filterType',
      label: 'Filter Type',
      type: 'select',
      defaultValue: 'contains',
      dataKey: 'filterType',
      options: [
        { value: 'contains', label: 'Contains' },
        { value: 'startsWith', label: 'Starts With' },
        { value: 'endsWith', label: 'Ends With' },
        { value: 'equals', label: 'Equals' },
        { value: 'regex', label: 'Regex' }
      ]
    },
    {
      name: 'filterValue',
      label: 'Filter Value',
      type: 'text',
      defaultValue: '',
      dataKey: 'filterValue'
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
      nodeType="Filter"
      fields={fields}
      handles={handles}
      customStyles={{
        backgroundColor: '#fff8e1',
        borderColor: '#ffc107',
        width: 200,
        height: 100
      }}
    />
  );
};
