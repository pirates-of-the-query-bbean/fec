import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal.jsx';

function AddAnswerModal({
  product, question, isOpen, onSubmit
}) {
  const initialModalData = {
    title: `${product.name}: ${question.body}`,
    answerBody: '',
    nickname: '',
    email: '',
  };

  const [formState, setFormState] = useState(initialModalData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState(initialModalData);
  };

  return (
    <div>
      <Modal isOpen={isOpen} />
        <form onSubmit={handleSubmit}>
          <h1>{Product.name}: {Question.body}</h1>
          <input
            type="text"
            id="answerBody"
            name="answerBody"
            value={formState.answerBody}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formState.nickname}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

// AddAnswerModal.propTypes = {
//   product: PropTypes.shape({

//   }).isRequired,
//   question: PropTypes.shape({

//   }).isRequired,
//   isOpen: PropTypes.function.isRequired,
//   onSubmit: PropTypes.function.isRequired,
// };

export default AddAnswerModal;
