import { PipelineConsumer } from 'modules/boards/containers/PipelineContext';
import DealItem from 'modules/deals/components/DealItem';
import React from 'react';
import { IDeal } from '../types';

type Props = {
  stageId: string;
  item: IDeal;
  isFormVisible: boolean;
  isDragging: boolean;
  provided;
  onTogglePopup: () => void;
};

export default (props: Props) => {
  return (
    <PipelineConsumer>
      {({ onAddItem, onRemoveItem, onUpdateItem, options }) => {
        return (
          <DealItem
            options={options}
            stageId={props.stageId}
            item={props.item}
            isFormVisible={props.isFormVisible}
            isDragging={props.isDragging}
            provided={props.provided}
            onTogglePopup={props.onTogglePopup}
            onAdd={onAddItem}
            onRemove={onRemoveItem}
            onUpdate={onUpdateItem}
          />
        );
      }}
    </PipelineConsumer>
  );
};