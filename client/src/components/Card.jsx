import React from 'react';

const Card = ({ book }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          alt={`Thumbnail for ${book.title}`}
          style={{ height: 225, width: '100%', display: 'block' }}
          src={book.imageUrl} 
        />
        <div className="card-body">
          <p className="card-text">
            {/* Displaying book information here */}
            {`Author: ${book.author}`}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Edit
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Delete
              </button>
            </div>
            <small className="text-muted">{book.title}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
