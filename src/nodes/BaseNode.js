import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  data, 
  nodeType, 
  fields = [], 
  handles = [],
  customStyles = {},
  customContent = null 
}) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialValues = {};
    fields.forEach(field => {
      const dataKey = field.dataKey || field.name;
      initialValues[field.name] = data?.[dataKey] || field.defaultValue || '';
    });
    return initialValues;
  });

  const handleFieldChange = (fieldName, value) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const defaultStyles = {
    width: 200,
    height: 80,
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '12px',
    ...customStyles
  };

  const renderField = (field) => {
    const value = fieldValues[field.name];
    
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            style={{ 
              width: '100%', 
              padding: '4px 8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          />
        );
      
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            style={{ 
              width: '100%', 
              padding: '4px 8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          >
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            style={{ 
              width: '100%', 
              padding: '4px 8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px',
              resize: 'vertical',
              minHeight: '40px'
            }}
          />
        );
      
      default:
        return null;
    }
  };

  const renderHandles = () => {
    return handles.map(handle => (
      <Handle
        key={handle.id}
        type={handle.type}
        position={handle.position}
        id={`${id}-${handle.id}`}
        style={handle.style}
      />
    ));
  };

  return (
    <div style={defaultStyles}>
      {renderHandles()}
      
      <div style={{ 
        fontWeight: 'bold', 
        fontSize: '14px', 
        marginBottom: '8px',
        color: '#333'
      }}>
        {nodeType}
      </div>
      
      {customContent || (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {fields.map(field => (
            <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {field.label && (
                <label style={{ fontSize: '11px', color: '#666', fontWeight: '500' }}>
                  {field.label}:
                </label>
              )}
              {renderField(field)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
