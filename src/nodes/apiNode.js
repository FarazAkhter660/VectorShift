import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ApiNode = ({ id, data }) => {
  const fields = [
    {
      name: 'url',
      label: 'API URL',
      type: 'text',
      defaultValue: 'https://api.example.com',
      dataKey: 'url'
    },
    {
      name: 'method',
      label: 'Method',
      type: 'select',
      defaultValue: 'GET',
      dataKey: 'method',
      options: [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' },
        { value: 'PUT', label: 'PUT' },
        { value: 'DELETE', label: 'DELETE' }
      ]
    },
    {
      name: 'headers',
      label: 'Headers (JSON)',
      type: 'textarea',
      defaultValue: '{"Content-Type": "application/json"}',
      dataKey: 'headers'
    }
  ];

  const handles = [
    {
      id: 'request',
      type: 'target',
      position: Position.Left,
      style: { top: '50%' }
    },
    {
      id: 'response',
      type: 'source',
      position: Position.Right,
      style: { top: '50%' }
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="API"
      fields={fields}
      handles={handles}
      customStyles={{
        backgroundColor: '#e1f5fe',
        borderColor: '#03a9f4',
        width: 240,
        height: 140
      }}
    />
  );
};
