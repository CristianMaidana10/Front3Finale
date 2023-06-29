import { GetStaticProps, NextPage } from 'next';
import { FaqsType, faqsData } from '../../components/faqs/faqsData';
import Faqs from '../faqs/Faqs';

type FaqPageProps = {
    faqs: FaqsType[];
};

const FaqPage: NextPage<FaqPageProps> = ({ faqs }) => {
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <Faqs faqs={faqs} />
        </div>
    );
};

export const getStaticProps: GetStaticProps<FaqPageProps> = async () => {
    const faqs: FaqsType[] = faqsData;
    return {
        props: {
            faqs,
        },
    };
};

export default FaqPage;