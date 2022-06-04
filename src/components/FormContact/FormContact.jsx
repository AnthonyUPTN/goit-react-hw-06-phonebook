import { useState } from 'react';
import PropTypes from 'prop-types';

import './formContact.module.css';

const FormContact = ({ addContact }) => {
  const [formState, setFormState] = useState({ name: '', number: '' });

  const { name, number } = formState;

  const handleChange = e => {
    setFormState(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const resetForm = () => {
    setFormState({
      name: '',
      number: '',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact(name, number);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default FormContact;

FormContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};

// export class FormContact extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   resetForm() {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   }

//   handleSubmit = e => {
//     const name = e.target.name.value;
//     const number = e.target.number.value;
//     e.preventDefault();

//     this.props.addContact(name, number);
//     this.resetForm();
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Phone
//           <input
//             type="tel"
//             name="number"
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default FormContact;
