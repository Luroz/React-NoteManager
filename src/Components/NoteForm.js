import React from 'react';

const NoteForm = ({ title, description, onChange, onClear, submit }) => {
  return (
    <React.Fragment>

      <form className="bg-light card p-3 mt1" onSubmit={submit}>
        <div className="form-group">
          <label>Note Title</label>
          <input
            className='form-control mb1-3'
            type="text"
            name='title'
            value={title}
            onChange={onChange}
          />
          <label>Description</label>
          <input
            className='form-control mb1-3'
            type="text"
            name='description'
            value={description}
            onChange={onChange}
          />
          <div className='checkbox disabled'>

          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-success btn-md mr-3">
              Add note
          </button>
            <button
              type="button"
              className="btn btn-danger btn-md"
              onClick={onClear}
            >
              Clear
          </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default NoteForm;