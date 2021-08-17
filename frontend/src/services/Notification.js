

const Notification = ({ message }) => {
    const noticeStyle = {
        color: '#202a25',
        background: '#85BDA6',
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: 37,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: "10px 25px",
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    if (message === null) {
        return null
    }

    return (
        <div style={noticeStyle}>
            {message}
        </div>
    )
}

export default Notification;