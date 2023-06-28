import React from 'react';
import { faqsData } from '../../components/faqs/faqsData';
import Faqs from '../faqs/Faqs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const FaqPage: React.FC = () => {
    return (
        <div>
            <h1>Preguntas frecuentes</h1>
            <Faqs faqs={faqsData} />
        </div>
    );
};

export default FaqPage;