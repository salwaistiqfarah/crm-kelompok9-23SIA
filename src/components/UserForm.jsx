import { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [form, setForm] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
    else setForm({ name: '', email: '', role: '' });
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.role) return;

    if (editingUser) {
      updateUser(form);
    } else {
      addUser(form);
    }

    // Reset form setelah submit
    setForm({ name: '', email: '', role: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
      />
      <button type="submit">{editingUser ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
