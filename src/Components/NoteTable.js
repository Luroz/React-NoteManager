import React from 'react';

const NoteTable = ({
  notes = [],
  onChange,
  onDelete,
  onDeleteAll,
  onEdit,
  onEditChange,
  onFilter,
  onComplete,
  filterer = '',
}) => (
    <React.Fragment>
      {(filterer !== '' || notes.length > 1) && (
        <button
          className="btn btn-danger btn-sm rounded m-3"
          onClick={onDeleteAll}>Delete All Notes</button>
      )}
      <div className="form-group card p-2">
        <input
          className='form-control mb1-3'
          placeholder='Search'
          type="text"
          name='filter'
          value={filterer}
          onChange={onChange}
        />
      </div>
      <div className="list-group card p-4">
        {notes.map((note, index) => (
          !note.edit ? (

            <div key={index} className="list-group-item">
              <div>
                <span className={!note.completed ? "text-success mr-1" : "text-info mr-1"}>Title:</span>
                {note.title}
              </div>
              <div>
                <span className={!note.completed ? "text-success mr-1" : "text-info mr-1"}>
                  Description:
              </span>
                {note.description}
                {!note.completed && <div className="text-success text-small">Task Completed</div>}
              </div>
              <div className="mt-3">
                {note.completed && (
                  <React.Fragment>
                    <button
                      className='btn btn-danger btn-sm mr-3'
                      onClick={() => onDelete(index)}
                    >
                      Delete
          </button>
                    <button
                      className='btn btn-success btn-sm'
                      onClick={() => onEdit(index)}
                    >
                      Edit
          </button>
                    <button
                      className='btn btn-warning btn-sm ml-3'
                      onClick={() => onComplete(index)}
                    >
                      Complete Task
          </button>
                  </React.Fragment>
                )}
              </div>
            </div>
          ) : (
              <div key={index} className="list-group-item">
                <form onSubmit={onEdit}>
                  <label><small>Title</small></label>
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    onChange={(e) => onEditChange(e, index)}
                    value={note.title}
                  />
                  <label className=""><small>Description</small></label>
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    value={note.description}
                    onChange={(e) => onEditChange(e, index)}
                  />
                </form>
                <div className="mt-3">
                  <button
                    className='btn btn-success btn-sm'
                    onClick={() => onEdit(index)}
                  >
                    Edit
                </button>
                </div>
              </div>
            )
        ))}
      </div>
    </React.Fragment>
  );

export default NoteTable;