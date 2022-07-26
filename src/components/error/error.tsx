export const Error = (error: {error: string}) => {

    return <div className="error_container">{error.error}</div>

}