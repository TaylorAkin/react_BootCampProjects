import React from 'react';
import './ToDo.css';

// var TODOLIST = [];
// var PARSEDDATA;

// function updateLocal() {

//   localStorage.setItem("ToDo's", JSON.stringify(TODOLIST));
// }

// function getLocalArchive() {
//   var archive = localStorage.getItem("ToDo's");
//   if (archive) {

//       archive = JSON.parse(archive);
//       TODOLIST = archive;
//   }
//   else {
//       TODOLIST = [];
//   }

// }



class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ToDos: [], text: '' };
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleFormSubmit.bind(this);
    this.complete = false;
    this.archive = false;
  }

  componentDidMount() {
    var getStorage = localStorage.getItem("ToDos");
      if (getStorage) {
    
          getStorage = JSON.parse(getStorage);
          this.setState(state => ({
            ToDos: getStorage,
            text: ''
          }));
      
      }
    // const user = rememberMe ? localStorage.getItem('ToDos') : '';
    // this.setState({ user, rememberMe });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newToDo = {

      text: this.state.text,
      id: Date.now()
      


    };

    // create var to store state, add the new todo to the new var
    var todos = this.state.ToDos;
    todos.push(newToDo);

    this.setState(state => ({
      ToDos: todos,
      text: ''
    }));

    //set local storage
    localStorage.setItem('ToDos', JSON.stringify(todos));
  }

  
    handleAction() {
  
  
  
  
  
    }
  
    ArchiveButton() {
  
  
    }
  
  
    handleChange(e) {
      this.setState({ text: e.target.value });
  
    }

  render() {
    return (
      <div>
        <h1 className="test">TODO</h1>
        {/* <ListItems items={this.state.ToDos} /> */}
        <form onSubmit={this.onSubmit}>
          {/* <label htmlFor="new-todo">
              What needs to be done?
            </label> */}
          <React.Fragment>
            <input
              id="new-todo"
              onChange={this.onChange}
              value={this.state.text}
              placeholder='What needs to be done?'
              className='input-group mb-3 text-center h4'
            />
            <button className='input-group-append'>
              Add #{this.state.ToDos.length + 1}
            </button>
          </React.Fragment>
        </form>

        <ListItems items={this.state.ToDos} />



      </div>
    );
  }





}





class ListItems extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.items.map(item => (

            <li key={item.id}>
              <input type='checkbox'>
                {this.CompleteButton}
              </input>
              {item.text}
              <input type='checkbox'>
                {this.ArchiveButton}
              </input>
            </li>

          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ToDoList;


