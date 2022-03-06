import List from "./List";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Lists = (props) => {
  const handleEnd = (result) => {
    if (!result.destination) return;

    const newTodoData = props.todoData;
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    props.setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="to-dos">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {props.todoData.map((data, i) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <List
                      key={data.id}
                      provided={provided}
                      snapshot={snapshot}
                      completed={data.completed}
                      id={data.id}
                      todoData={props.todoData}
                      setTodoData={props.setTodoData}
                      title={data.title}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Lists;
