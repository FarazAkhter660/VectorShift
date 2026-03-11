// textNode.js

import { useState, useEffect, useMemo } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  // Extract variables from text using regex
  const variables = useMemo(() => {
    const regex = /\{\{([^}]+)\}\}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
    return [...new Set(matches)]; // Remove duplicates
  }, [text]);

  // Calculate dynamic height based on text content
  const dynamicHeight = useMemo(() => {
    const lines = text.split('\n').length;
    const baseHeight = 80;
    const lineHeight = 20;
    return Math.max(baseHeight, baseHeight + (lines - 1) * lineHeight);
  }, [text]);

  const fields = [
    {
      name: 'text',
      label: 'Text',
      type: 'textarea',
      defaultValue: '{{input}}',
      dataKey: 'text'
    }
  ];

  const handles = [
    // Output handle
    {
      id: 'output',
      type: 'source',
      position: Position.Right
    },
    // Variable input handles
    ...variables.map((variable, index) => ({
      id: variable,
      type: 'target',
      position: Position.Left,
      style: { 
        top: `${30 + (index * 20)}%`,
        backgroundColor: '#9c27b0',
        borderColor: '#9c27b0'
      }
    }))
  ];

  // Custom content to handle text changes
  const customContent = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <label style={{ fontSize: '11px', color: '#666', fontWeight: '500' }}>
          Text:
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text with {{variables}}"
          style={{ 
            width: '100%', 
            padding: '4px 8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '12px',
            resize: 'vertical',
            minHeight: '60px'
          }}
        />
      </div>
      {variables.length > 0 && (
        <div style={{ fontSize: '10px', color: '#9c27b0', marginTop: '4px' }}>
          Variables: {variables.join(', ')}
        </div>
      )}
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={{ ...data, text }}
      nodeType="Text"
      fields={[]} // Fields are handled in customContent
      handles={handles}
      customContent={customContent}
      customStyles={{
        backgroundColor: '#f3e5f5',
        borderColor: '#9c27b0',
        width: 200,
        height: dynamicHeight,
        minHeight: 80
      }}
    />
  );
};
