import React, { useEffect, useState } from 'react';
import Telefon from '../assets/images/telefon.svg';
import Sms from '../assets/images/sms.svg';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {

    fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then(response => response.json())
      .then(data => setFaqs(data))
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  useEffect(() => {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
        const parent = question.parentElement;

        if (parent.classList.contains('open')) {
          parent.classList.remove('open');
          return;
        }

        document.querySelectorAll('.faq-card').forEach(answer => {
          answer.classList.remove('open');
        });

        parent.classList.add('open');
      });
    });


    return () => {
      questions.forEach(question => {
        question.removeEventListener('click', () => {});
      });
    };
  }, [faqs]);

  return (
    <section>
      <div className="container">
        <div className="FAQ">
          <div className="faq-left">
            <h2 className="any-questions">Any questions? <br /> Check out the FAQs</h2>
            <p id="unanswered">Still have unanswered questions and need to get <br /> in touch?</p>
            <div className="faq-boxes">
              <div className="faq-box-left">
                <img src={Telefon} alt="Telefon" />
                <p>Still have questions?</p>
                <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
              </div>
              <div className="faq-box-right">
                <img src={Sms} alt="SMS" />
                <p>Don't like phone calls?</p>
                <a id="green" href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="faq-right">
            {faqs.map((faq) => (
              <div className="faq-card" key={faq.id}>
                <div className="question">
                  <h4>{faq.title}</h4>
                  <button className="discover-more2">
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </div>
                <div className="answer">
                  <div className="expandable">
                    {faq.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
