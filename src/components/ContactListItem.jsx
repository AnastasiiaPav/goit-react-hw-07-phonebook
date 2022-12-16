import propTypes from 'prop-types'

export const ContactListItem = ({name, number,id, deleteContact}) => {
    return (
        <div>
            {name}: {number}
            <button
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  {' '}
                 🚮 Delete
                </button>{' '}
        </div>
    )
}

ContactListItem.propTypes = {
    name: propTypes.string,
    number: propTypes.string,
    id: propTypes.string,
    onDelete: propTypes.func,
}