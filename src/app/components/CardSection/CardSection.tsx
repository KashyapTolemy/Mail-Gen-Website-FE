import React from 'react';
import styles from './style.module.scss';
import { FaBolt, FaEnvelopeOpenText, FaBriefcase } from 'react-icons/fa'; // Example icons

const CardSection = () => {
  const cards = [
    {
      id: 1,
      icon: <FaEnvelopeOpenText />,
      title: 'Auto-Generate Emails',
      text: 'Cold emails, intros, and messages tailored to every job you apply for.',
    },
    {
      id: 2,
      icon: <FaBolt />,
      title: 'Get Shortlisted at Top Companies',
      text: 'From startups to MAANG, craft tailored messages that give you a real edge—automatically.',
      large: true,
      companies: ['meta','amazon', 'apple', 'netflix','google'],
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: 'Built for Job Seekers',
      text: 'Get message templates, autofill support, and integrations to apply faster.',
    },
  ];

  return (
    <div className={styles.wrapper}>
      {cards.map((card) => (
        <div
          key={card.id}
           className={`
            ${styles.card} 
            ${card.large ? styles.large : ''} 
            ${card.id === 1 ? styles.leftCard : ''} 
            ${card.id === 2 ? styles.middleCard : ''} 
            ${card.id === 3 ? styles.rightCard : ''}
          `}
        >
          <div className={styles.icon}>{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.text}</p>

          {card.large && (
            <div className={styles.curvedLogosWrapper}>
                {card.companies?.map((company, index) => (
                <img
                    key={company}
                    src={`/companies/${company}.jpg`}
                    alt={company}
                    className={`${styles.logo} ${styles[`pos${index + 1}`]}`}
                />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardSection;
