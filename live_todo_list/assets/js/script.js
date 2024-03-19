const { createApp } = Vue
createApp({
  data() {
    return {
      newTask: '',
      completed: '',
      completedTasks: [

      ],
      error: false,
      tasks: [
        'learn php',
        'learn js',
        'learn mysql'
      ]
    }
  },
  methods: {
    addTask() {

      console.log('Add this task to the list', this.newTask);
      if (this.newTask.length > 3) {
        this.tasks.unshift(this.newTask)
        this.newTask = ''
        this.error = false

        //this.completedTasks = this.completedTasks.map(taskIndex => taskIndex + 1)


      } else {
        this.error = 'Error! You must add at least 4 charaters'
        alert(this.error)
      }



    },



    removeTask(taskId) {
      console.log('Remove this task please', taskId); //taskId = 0


      const taskText = this.tasks[taskId]
      console.log(taskText);
      this.tasks.splice(taskId, 1)

      // ? what if the task is not inside the completed
      // ? 
      //this.completedTasks.splice(taskId, 1) // [2, 4]


      /* 
      for (let i = taskId; i < this.completedTasks; i++) {
        this.completedTasks = this.completedTasks.map(taskIndex => taskIndex - 1)
      } */

    },

    taskCompleted(taskId) {
      console.log('Complete this task', taskId);


      console.log(this.tasks[taskId]);

      this.completed = taskId
      const taskText = this.tasks[taskId];

      if (this.completedTasks.includes(taskText)) {
        // remove the element
        this.completedTasks.splice(taskId, 1);
      } else {
        this.completedTasks.push(taskText)
      }


    }


  }
}).mount('#app')