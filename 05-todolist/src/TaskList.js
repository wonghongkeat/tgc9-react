import React from "react";
import "./App.css";

// uses state, so we need a class-based component
export default class TaskList extends React.Component {
  state = {
    tasks: [
      {
        _id: 1,
        title: "Wash the car",
        date: "2020-01-01",
        done: false
      },
      {
        _id: 2,
        title: "Clean the floor",
        date: "2020-01-02",
        done: false
      },
      {
        _id: 3,
        title: "Pay the bills",
        date: "2020-01-03",
        done: false
      }
    ],
    newTaskTitle: "",
    newTaskDate: "",
    // if 0, means no task is being edited, >0 if otherwise
    taskIdBeingEdited: 0
  };

  // renderTasks() {
  //     let jsx = [];
  //     for (let t of this.state.tasks) {
  //         jsx.push(<React.Fragment>
  //             <li>{t.title} - {t.done ? 'Completed' : 'Incomplete'}</li>
  //         </React.Fragment>)
  //     }
  //     return jsx;
  // }

  render() {
    return (
      <React.Fragment>
        {this.state.tasks.map(t => {
          if (this.state.taskIdBeingEdited != t._id) {
            return (
              <React.Fragment>
                <li>
                  {t.title} - {t.done ? "Completed" : "Incomplete"} (Due:
                  {t.date})
                  <button
                    onClick={() => {
                      this.beginEditTask(t);
                    }}
                  >
                    Edit
                  </button>
                </li>
              </React.Fragment>
            );
          } else {
              return (
                <React.Fragment>
                    <input type="text" value={this.state.modifiedTaskTitle}
                                       onChange={this.updateFormField}
                                       name="modifiedTaskTitle"/>
                    <input type="date" value = {this.state.modifiedTaskDate}
                                       onChange={this.updateFormField}
                                       name="modifiedTaskDate"/>
                    <button>Update</button>
                    <button onClick={this.cancelEdit}>Cancel </button>

                </React.Fragment>
              )
          }
        })}
        <h2>Add a new task</h2>
        <div>
          <label>Task Title:</label>
          <input
            type="text"
            value={this.state.newTaskTitle}
            onChange={this.updateFormField}
            name="newTaskTitle"
          />
        </div>
        <div>
          <label>Task Due Date</label>
          <input
            type="date"
            value={this.state.newTaskDate}
            onChange={this.updateFormField}
            name="newTaskDate"
          />
        </div>
        <button onClick={this.addNewTask}>Add new task</button>
      </React.Fragment>
    );
  }

  // this is a callback function so must be arrow function
  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewTask = () => {
    let newTask = {
      _id: Math.floor(Math.random() * 100000) + 99999,
      title: this.state.newTaskTitle,
      date: this.state.newTaskDate
    };

    // add this new task to the tasks array
    // this.state.tasks.push(newTask);
    // step 1: clone the existing array
    // let cloned = [...this.state.tasks];

    // // step 2: make the changes to the clone
    // cloned.push(newTask);

    // // step 3: replace the original array with clone
    // this.setState({
    //     'tasks' :cloned
    // })

    this.setState({
      tasks: [...this.state.tasks, newTask],
      newTaskTitle: "",
      newTaskDate: ""
    });
  };

  beginEditTask(task) {
    this.setState({
      taskIdBeingEdited: task._id,
      modifiedTaskDate: task.date,
      modifiedTaskTitle: task.title
    });
  }

//   callback function must consists of ()=>
  cancelEdit = () => {
      this.setState({
          taskIdBeingEdited: 0
      })
  }

//   for update and delete will be on the file TaskList(with function)
}
