const initialData = {
    // tasks: {
    //   'task-1': { id: 'task-1', content: 'Take out the garbage' },
    //   'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    //   'task-3': { id: 'task-3', content: 'Charge my phone' },
    //   'task-4': { id: 'task-4', content: 'Cook dinner' }
    // },
    columns: {
      1: {
        id: 1,
        title: 'To do',
        taskIds: []
      },
      2: {
        id:2,
        title: 'In progress',
        taskIds: []
      },
      3: {
        id: 3,
        title: 'Done',
        taskIds: []
      },
      4: {
        id: 4,
        title: 'Close',
        taskIds: []
      },
    },
    columnOrder: [1,2,3, 4]
  }
  
  export default initialData
  