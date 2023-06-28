import React from 'react';
import { GetServerSideProps } from 'next';
import { FaqsType } from '../../components/faqs/faqsData';
import Faqs from '../faqs/Faqs';

type FaqPageProps = {
    faqs: FaqsType[];
};

const FaqPage: React.FC<FaqPageProps> = ({ faqs }) => {
    return (
        <div>
            <h1>Preguntas frecuentes</h1>
            <Faqs faqs={faqs} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<FaqPageProps> = async () => {
    const response = await fetch('components\faqs\faqsData.ts');
    const faqsData: FaqsType[] = await response.json();

    return {
        props: {
            faqs: faqsData,
        },
    };
};

export default FaqPage;