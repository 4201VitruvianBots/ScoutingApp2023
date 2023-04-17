import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import 'material-icons/iconfont/outlined.css';

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    
    <tr ref={setNodeRef} style={style} {...attributes}>
      <td>
        {props.children(<span className="material-icons-outlined" {...listeners}>drag_indicator</span>)}
      </td>
    </tr>
  );
}
