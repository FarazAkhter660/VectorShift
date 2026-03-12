import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const fields = [
    {
      name: 'inputName',
      label: 'Name',
      type: 'text',
      defaultValue: id.replace('customInput-', 'input_'),
      dataKey: 'inputName'
    },
    {
      name: 'inputType',
      label: 'Type',
      type: 'select',
      defaultValue: 'Text',
      dataKey: 'inputType',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'File' }
      ]
    }
  ];

  const handles = [
    {
      id: 'value',
      type: 'source',
      position: Position.Right
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="Input"
      fields={fields}
      handles={handles}
      customStyles={{
        backgroundColor: '#e8f5e9',
        borderColor: '#4caf50'
      }}
    />
  );
};
