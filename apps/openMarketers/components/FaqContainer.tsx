import { useState } from 'react';

import faqStyles from './Faq.module.css';
import LinkOm from './LinkOm';

type Props = {
  question: string;
  answer: string;
};

export default function Faq({ question, answer }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [unmounting, setUnmounting] = useState<boolean>(false);
  const [rotate, setRotate] = useState<boolean>(false);

  /**
   * Método para abrir y cerrar la Faq
   */
  const showAnswer = () => {
    if (!isOpen) {
      setIsOpen(true);
      setRotate(true);

      setTimeout(() => setRotate(false), 180);
    } else {
      setIsOpen(false);
      setUnmounting(true);

      setTimeout(() => setUnmounting(false), 175);
    }
  };

  return (
    <div
      onClick={showAnswer}
      className={faqStyles.container}
      style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)', paddingBottom: '20px' }}
    >
      <div className={faqStyles.faq}>
        <div className={faqStyles.questionBox}>
          <h3 className={faqStyles.question}>{question}</h3>

          <div
            className={isOpen ? (rotate ? faqStyles.buttonOpening : faqStyles.buttonOpen) : faqStyles.buttonClose}
            style={{ marginRight: '5px' }}
          >
            <LinkOm iconOnly="caretDown" />
          </div>
        </div>

        <span
          className={isOpen ? faqStyles.isOpen : unmounting ? faqStyles.unmounting : faqStyles.isClose}
          style={{ marginLeft: '5px' }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: answer,
            }}
          />
        </span>
      </div>
    </div>
  );
}
