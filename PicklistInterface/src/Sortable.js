import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';

function Sortable({ list, setList, children }) {
    
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        

        if (active.id !== over.id) {
            const oldIndex = list.indexOf(active.id);
            const newIndex = list.indexOf(over.id);

            setList(arrayMove(list, oldIndex, newIndex));
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={list}
                strategy={verticalListSortingStrategy}
            >
                {list.map((item, index) => <SortableItem key={item} id={item}>{handle => children(item, index, handle)}</SortableItem>)}
            </SortableContext>
        </DndContext>
    );

    
}

export default Sortable;
