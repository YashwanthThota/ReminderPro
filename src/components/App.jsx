import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    text: '',
    dueDate: ''
  }
}

//we are dipatching the action
addReminder() {
  console.log('this.state.dueDate', this.state.dueDate);
  this.props.addReminder(this.state.text, this.state.dueDate);
}

//we are dipatching the action
deleteReminder(id) {
  this.props.deleteReminder(id);
}


//this helper class is used for rendering list
renderReminders() {
  const { reminders } = this.props;
  return(
    <ul className="list-group col-sm-4">
    {
      reminders.map(reminder => {
        return(
          <li key={reminder.id} className="list-group-item">
          <div className="list-item">
          <div>{reminder.text}</div>
          <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
          </div>
          <div
           className="list-item delete-button"
           onClick={() => this.deleteReminder(reminder.id)}
           >
          &#x2715;
          </div>
          </li>
        )
      })
    }
    </ul>
  )
}

render() {
      console.log('this.props', this.props);
  return (
    <div className="App">
    <div className="title">
    Reminder Pro
    </div>
    <div className="form-inline reminder-form">
    <div className="form-group">
    <input
    className="form-control"
    placeholder="I have to..."
    onChange={event => this.setState({text: event.target.value})}
    />
    <input
    className="form-control"
    type="datetime-local"
    onChange={event => this.setState({dueDate: event.target.value})}
    />
    </div>
    <button
    type="button"
    className="btn btn-success"
    onClick={()  => this.addReminder()}
    >
    Add Reminder
    </button>
    </div>
        { this.renderReminders() }
    <div
    className="btn btn-danger"
    onClick={() => this.props.clearReminders()}
    >
    Clear Reminders
    </div>
    </div>
  )
 }
}

//it binds the addreminder to dispatcher and later it is connected to redux
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addReminder}, dispatch);
// }

//export default connect(null, mapDispatchToProp)(App);


  //add the state we got from the global store to props
function mapStateToProps(state) {
  return{
    reminders: state
  }
}

//we are hooking the dispatcher to our app
//{addRemainder} sends the data to action and eventually to global store
//mapStateToPropsis used to get the content from the store and we can access this content in the component
export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);
