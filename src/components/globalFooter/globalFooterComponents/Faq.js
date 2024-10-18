import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";


import '../../../css/components/globalFooter/globalFooterComponent/faq.scss'

export default function Faq() {

  const { t } = useTranslation('faq')

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className='faq-questions-container'>
      <div className='questions-title'>
        <h2>{t('faq_title')}</h2>
      </div>
      <div className='questions'>
        <Accordion className='question'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='question-summary'
          >
            {t('questions.0.question')}
          </AccordionSummary  >
          <AccordionDetails className='question-infos'>
            {t('questions.0.answer')}
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
            {t('questions.1.question')}
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            {renderTextWithLineBreaks(t('questions.1.answer'))}
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
           {t('questions.2.question')}
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            {t('questions.2.answer')}
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
            {t('questions.3.question')}
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            {t('questions.3.answer')}
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
           {t('questions.4.question')}
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
          {t('questions.4.answer')}
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
            {t('questions.5.question')}
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            {t('questions.5.answer')}
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
            {t('questions.6.question')}
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            {t('questions.6.answer')}
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
            {t('questions.7.question')}
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            {t('questions.7.answer')}
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
            {t('questions.8.question')}
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            {t('questions.8.answer')}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
