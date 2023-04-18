import ButtonBS from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Button({ label, loading, loadingLabel, ...buttonProps }) {
    return (
        <ButtonBS
            {...buttonProps}
        >
            {
                loading && (
                    <>
                        <Spinner
                            as='span'
                            animation='border'
                            size='sm'
                            role='status'
                            aria-hidden='true'
                        >
                            <span className='visually-hidden'>Loading...</span>
                        </Spinner>
                        &nbsp;
                    </>
                )
            }

            {
                loading ? loadingLabel : label
            }
        </ButtonBS>
    );
}

export default Button;