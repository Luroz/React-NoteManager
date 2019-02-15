import React, { Component } from 'react';
import NoteNav from './Components/NoteNav'
import NoteForm from './Components/NoteForm';
import NoteTable from './Components/NoteTable';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      highImportance: '',
      filter: '',
      notes: [
        {
          title: 'Class Notes',
          description: 'Notes taken in class are most useful',
          highImportance: false,
          edit: false,
          completed: false,
        },
        {
          title: 'Work Notes',
          description: 'Notes taken at work are most important',
          highImportance: true,
          edit: false,
          completed: true
        }
      ],
      results: []
    }
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    }, () => {
      if (name === 'filter') {
        this.onFilter(value);
      }
    });

  }

  onClear = () => {
    this.setState({
      title: '',
      description: ''
    })
  }

  onSubmit = (e) => {
    const { title, description, notes } = this.state;
    console.log('asdasd');
    e.preventDefault();
    if (title.lenght !== 0 && description.length !== 0) {
      const newNote = notes.concat({ title, description, edit: false })
      this.setState({
        notes: newNote
      }, () => {
        this.onClear();
      })
      return;
    };

  };

  onDelete = (noteIndex) => {
    const { notes } = this.state;
    const residue = notes.filter((note, index) => index !== noteIndex);
    this.setState({
      notes: residue
    });
  }

  onDeleteAll = () => {
    if (window.confirm("Want to delete all notes?")) {
      this.setState({
        notes: []
      })
    }
  }

  onEditChange = (e, noteIndex) => {
    const { notes } = this.state;
    const editNote = notes.map((note, index) => {
      if (noteIndex === index) {
        return Object.assign({}, note, { [e.target.name]: [e.target.value] })
      }
      return note;
    })
    this.setState({
      notes: editNote
    })
  }

  onEdit = (noteIndex) => {
    const { notes } = this.state;
    const noteEdit = notes.map((note, index) => {
      if (noteIndex === index) {
        const { edit } = note;
        return { ...note, edit: !edit };
      }
      return note;
    })
    this.setState({
      notes: noteEdit
    });
  }

  onFilter = (value) => {
    const { notes } = this.state;
    const filter = notes.filter((notes) => notes.title.includes(value));
    this.setState({
      results: filter
    });
  }

  onAlphabetic = (noteIndex) => {
    const { notes } = this.state;
    const alphaNotes = [...notes, {}].sort((a, b) => a.note > b.note)
    this.setState({
      notes: alphaNotes
    });
  }

  onComplete = (noteIndex) => {
    const { notes } = this.state;
    const completed = notes.map((note, index) => {
      if (index === noteIndex) {
        return { ...note, completed }
      }
      return note;
    });
    this.setState({
      notes: completed
    })
  }


  render() {
    const { title, description, notes, results, filter } = this.state;
    return (
      <React.Fragment>
        <div className='Navbar'>
          <NoteNav />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-3">
              <NoteForm
                title={title}
                description={description}
                onChange={this.onChange}
                onClear={this.onClear}
                submit={this.onSubmit}

              />
            </div>
            <div className="col-md-6 mt-3">
              <NoteTable
                notes={filter === '' ? notes : results}
                onDelete={this.onDelete}
                onDeleteAll={this.onDeleteAll}
                onEditChange={this.onEditChange}
                onEdit={this.onEdit}
                filterer={filter}
                onFilter={this.onFilter}
                onChange={this.onChange}
                onComplete={this.onComplete}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NoteView;