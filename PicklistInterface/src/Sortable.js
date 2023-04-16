import React, { useState } from 'react';
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

function Sortable(props) {

    const [teamList,  setTeamList] = useState(props.initialTeamList);
    
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        

        if (active.id !== over.id) {
            setTeamList((teamList) => {
                const oldIndex = teamList.indexOf(active.id);
                const newIndex = teamList.indexOf(over.id);

                return arrayMove(teamList, oldIndex, newIndex);
            });
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={teamList}
                strategy={verticalListSortingStrategy}
            >
                {teamList.map(team => <SortableItem key={team} id={team} />)}
            </SortableContext>
        </DndContext>
    );

    
}

export default Sortable;