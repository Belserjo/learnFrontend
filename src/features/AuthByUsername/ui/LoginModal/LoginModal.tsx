import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import LoginFormAsync from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props:LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
