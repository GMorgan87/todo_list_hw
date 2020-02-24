import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {title: "Buy Shopping", priority: true, isCompleted: false},
        {title: "Clean Car", priority: true, isCompleted: false},
        {title: "Car MOT", priority: false, isCompleted: false}
      ],
      newTask: "",
      priorityInput: "low"
    },
    methods: {
      completeTask: function (index) {
        this.tasks[index].isCompleted = true;
      },
      addTask: function () {
        this.tasks.push({
          title:this.newTask,
          priority: this.priorityInput === "high" ? true:false,
          isCompleted: false
        })
      }
    }
  })
});
