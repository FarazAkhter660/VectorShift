import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar">
            <div className="toolbar-title">Pipeline Nodes</div>
            <div className="node-palette">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='transform' label='Transform' />
            </div>
        </div>
    );
};
