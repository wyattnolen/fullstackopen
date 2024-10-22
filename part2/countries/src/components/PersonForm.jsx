const PersonForm = ({ handleNameSubmit, newName, handleNameInputChange, newPhone, handlePhoneInputChange }) => {
    return (
        <form onSubmit={handleNameSubmit}>
        <div>
            name: <input onChange={handleNameInputChange} value={newName} />
            phone: <input onChange={handlePhoneInputChange} value={newPhone} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
        </form>
    );
};

export default PersonForm;
