function Square({ value }) {
    const handleClick = () => {
        console.log(value)
    }
    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
}

export default Square;