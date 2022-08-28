
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components'
import Column from './Column';
import initital from './init-data'
import { useEffect, useState } from 'react';


const Container = styled.div`
  display:flex;
`
function App() {
  const [state, setState] = useState(initital)
  const [list, setList] = useState('')

  console.log('list', list)

  const dataBE = [
    { id: 1, data: [
      { id: 'task-1', content: 'Take out the garbage' },
      { id: 'task-2', content: 'Watch my favorite show' }
      ] 
    },

    { id: 2, data: [
      { id: 'task-4', content: 'Charge my phone' },
      { id: 'task-5', content: 'Cook dinner' }
      ] 
    },
  ]
  useEffect(() =>{
    const getData = () => {
       dataBE.map(ele => {
       Object.entries(state.columns).map(([columnId, column], index) => {
          if(ele.id == columnId){
            const newColumn = {...state}
            newColumn.columns[columnId].taskIds =ele.data
            setList(newColumn)
          }
        })
      })
    }
    getData()
  }, [])
  const onDragEnd = (result) => { 
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    if (
      destination.droppableId === source.droppableId 
    ) {
      return
    }

    const start = list.columns[source.droppableId]
    const finish = list.columns[destination.droppableId]

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }



    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, start.taskIds[source.index])

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }


    const newList = {
      ...list,
      columns: {
        ...list.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    setList(newList)
  }

  const onDragStart= (e) => {
    console.log(e)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
    <Container>
      {list !== '' && list.columnOrder.map(columnId => {
        const column = list.columns[columnId]
        console.log('column', column)
        const tasks = column.taskIds.map(
          list => list
        )

        return (
          <Column key={column.id} column={column} tasks={tasks} />
        )
      })}
    </Container>
  </DragDropContext>
  );
}

export default App;
