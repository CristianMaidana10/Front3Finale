import React from 'react';
import { FaqsType } from '../../components/faqs/faqsData';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type FaqsProps = {
    faqs: FaqsType[];
};

const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
    return (
        <div>
            {faqs.map((faq) => (
                <Accordion key={faq.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-content-${faq.id}`}>
                        <Typography variant="h6">{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default Faqs;