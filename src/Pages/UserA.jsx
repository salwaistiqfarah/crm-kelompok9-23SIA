import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import { supabase } from '../supabase';

function UserA() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) console.error(error);
    else setUsers(data);
  };

  // Jalankan fetchUsers saat komponen pertama kali dirender
  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (newUser) => {
    const { data, error } = await supabase.from('users').insert([newUser]);
    if (error) console.error(error);
    else fetchUsers();
  };

  const updateUser = async (updatedUser) => {
    const { data, error } = await supabase
      .from('users')
      .update(updatedUser)
      .eq('id', updatedUser.id);

    if (error) console.error(error);
    else {
      setEditingUser(null);
      fetchUsers();
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from('users').delete().eq('id', id);
    if (error) console.error(error);
    else fetchUsers();
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.role}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserA;
