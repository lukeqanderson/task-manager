import propTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className = "header">
            <h1>{title}</h1>
            <Button 
            color={showAdd ? "red" : "green"} 
            text = {showAdd ? "close" : "+"} 
            onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Manager",
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header
