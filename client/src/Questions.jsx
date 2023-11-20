import React, {useState, useEffect} from 'react';
import CustomButton from './sharedComponents/customButton/CustomButton.jsx';
import Search from './questions/Search.jsx';
import QuestionList from './questions/QuestionList.jsx';
import styles from './Questions.module.scss';
import Modal from './questions/Modal.jsx';

function Questions() {
  const questionsObj = [{
    "question_id": 37,
    "question_body": "Why is this product cheaper here than other sites?",
    "question_date": "2018-10-18T00:00:00.000Z",
    "asker_name": "williamsmith",
    "question_helpfulness": 1,
    "reported": false,
    "answers": {
      68: {
        "id": 68,
        "body": "We are selling it here without any markup from the middleman!",
        "date": "2018-08-18T00:00:00.000Z",
        "answerer_name": "Seller",
        "helpfulness": 4,
        "photos": []
      }
    }
  },
  {
    "question_id": 38,
    "question_body": "How long does it last?",
    "question_date": "2019-06-28T00:00:00.000Z",
    "asker_name": "funnygirl",
    "question_helpfulness": 5,
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
]

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

  function handleSubmit(e) {
    console.log('handle submit invoked');
  }

  function showMoreQuestions(e) {
    console.log('button clicked');
  }

  return (
    <section className={styles.questions__container}>
      <h5>Questions & Answers</h5>
      <Search
      handleSubmit={handleSubmit}
      questionAr={questionArr}/>
      <QuestionList
      questionArr={questionArr}
      setQuestionArr={setQuestionArr}
      questionsStartIndex={questionsStartIndex} sort={sort}/>

      <div className={styles.questions__buttons}>
        <CustomButton style={styles.custom__button}
          text={'More Answered Questions'}
          buttonWidth={245}
          onClickFunction={() => { showTwoMoreItems(setQuestionStartIndex, questionsStartIndex); }} />
        <CustomButton style={styles.custom__button}
          text={'Add A Question'}
          Icon={'AddIcon'}
          buttonWidth={200}
          onClickFunction={(e) => { setModalOpen(true); }} />
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        onSubmit={()=> handleSubmit()}/>
    </section>
  )
}

export default Questions;
