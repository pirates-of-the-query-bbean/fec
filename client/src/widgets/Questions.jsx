import React, { useState } from 'react';
import CustomButton from '../sharedComponents/customButton/CustomButton.jsx';
import Search from './questions/Search.jsx';
import QuestionList from './questions/QuestionList.jsx';
import styles from './Questions.module.scss';
import Modal from './questions/Modals/Modal.jsx';

function Questions({ currentProduct }) {
  const questionsObj = [{
    "question_id": 37,
    "question_body": "Why is this product cheaper here than other sites?",
    "question_helpfulness": 2,
    "reported": false,
    "answers": {
      70: {
        "id": 70,
        "body": "Some of the seams started splitting the first time I wore it!",
        "date": "2019-11-28T00:00:00.000Z",
        "answerer_name": "sillyguy",
        "helpfulness": 6,
        "photos": [],
      },
      78: {
        "id": 78,
        "body": "9 lives",
        "date": "2019-11-12T00:00:00.000Z",
        "answerer_name": "iluvdogz",
        "helpfulness": 31,
        "photos": [],
      }
    }
  },
  {
    "question_id": 39,
    "question_body": "Why is this product cheaper here than other sites?",
    "question_helpfulness": 2,
    "reported": false,
    "answers": {
      99: {
        "id": 70,
        "body": "Some of the seams started splitting the first time I wore it!",
        "date": "2019-11-28T00:00:00.000Z",
        "answerer_name": "sillyguy",
        "helpfulness": 6,
        "photos": [],
      },
      100: {
        "id": 78,
        "body": "9 lives",
        "date": "2019-11-12T00:00:00.000Z",
        "answerer_name": "iluvdogz",
        "helpfulness": 31,
        "photos": [],
      }
    }
  }];

  const [questionArr, setQuestionArr] = useState(questionsObj);
  const [questionsStartIndex, setQuestionStartIndex] = useState(0);
  const [answersStartIndex, setAnswersStartIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  function sort(arr, setState, property) {
    const sortedArr = [...arr].sort((a, b) => b[property] - a[property]);
    setState(sortedArr);
  }

  function showTwoMoreItems(indexToAdjust, stateToAdjust) {
    indexToAdjust(stateToAdjust + 2);
  }

  function handleSubmit() {
    console.log('handle submit invoked');
  }

  return (
    <section className={styles.questions__container}>
      <h5>Questions & Answers</h5>
      <Search
        handleSubmit={handleSubmit}
        questionArr={questionArr}
      />
      <QuestionList
        questionArr={questionArr}
        setQuestionArr={setQuestionArr}
        questionsStartIndex={questionsStartIndex}
        answersStartIndex={answersStartIndex}
        setAnswersStartIndex={setAnswersStartIndex}
        showTwoMoreItems={showTwoMoreItems}
        sort={sort}
      />

      <div className={styles.questions__buttons}>
        <CustomButton
          style={styles.questions__customButton}
          text="More Answered Questions"
          buttonWidth={255}
          onClickFunction={() => {
            showTwoMoreItems(setQuestionStartIndex, questionsStartIndex);
          }}
        />
        <CustomButton
          style={styles.questions__customButton}
          text="Add A Question"
          Icon="AddIcon"
          buttonWidth={200}
          onClickFunction={() => { setModalOpen(true); }}
        />
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        onSubmit={() => handleSubmit()}
      />
    </section>
  );
}

export default Questions;
