import './Error.css';

export function Error({message}) {

    return (
        <div className="error">
            <div className="error__message">
                {message}
            </div>
        </div>
    )

}