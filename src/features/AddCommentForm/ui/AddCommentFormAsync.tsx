import { lazy } from 'react';

const AddCommentFormAsync = lazy(() => new Promise(
    (res) => {
        // @ts-ignore
        setTimeout(() => res(import('./AddCommentForm')), 1500);
    },
));

export default AddCommentFormAsync;
