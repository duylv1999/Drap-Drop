import { Draggable } from "react-beautiful-dnd";
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDragDisabled
      ? 'lightgrey'
      : props.isDragging
        ? 'lightgreen'
        : 'white'};
`

function Task({index,task}) {

    console.log('task.id', task.id)
    return ( 
        <Draggable
        draggableId={task.id}
        index={index}
        // isDragDisabled={task.id === 'task-1'}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
              ref={provided.innerRef}
              style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
          >
            {task.content}
          </Container>
        )}
      </Draggable>
     );
}

export default Task;