import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletedUser, updateUser } from '../features/UserSlice';

const AllUsers = () => {
  const users = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editableUsers, setEditableUsers] = useState(users);
  const [editingUserId, setEditingUserId] = useState(null);

  const newUser = () => {
    navigate('/customerform');
  };

  const handleInputChange = (id, field, value) => {
    const updatedUsers = editableUsers.map(user =>
      user.id === id ? { ...user, [field]: value } : user
    );
    setEditableUsers(updatedUsers);
  };

  const handleEdit = (id) => {
    setEditingUserId(id);
  };

  const handleSave = (id) => {
    const userToSave = editableUsers.find(user => user.id === id);
    dispatch(updateUser(userToSave));
    setEditingUserId(null);
  };

  const handleDelete = (id) => {
    dispatch(deletedUser(id));
  };
  
  return (
    <div className='table-container'>
      <h2>All Users</h2>
      <div className='user-button'>
        <button onClick={newUser}>New User</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Order</th>
            <th>Address</th>
            <th>City</th>
            <th>Gender</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="text"
                  value={editableUsers.find(u => u.id === user.id)?.name || ''}
                  readOnly={editingUserId !== user.id}
                  onChange={(e) => handleInputChange(user.id, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editableUsers.find(u => u.id === user.id)?.email || ''}
                  readOnly={editingUserId !== user.id}
                  onChange={(e) => handleInputChange(user.id, 'email', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editableUsers.find(u => u.id === user.id)?.number || ''}
                  readOnly={editingUserId !== user.id}
                  onChange={(e) => handleInputChange(user.id, 'number', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editableUsers.find(u => u.id === user.id)?.order || ''}
                  readOnly={editingUserId !== user.id}
                  onChange={(e) => handleInputChange(user.id, 'order', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editableUsers.find(u => u.id === user.id)?.address || ''}
                  readOnly={editingUserId !== user.id}
                  onChange={(e) => handleInputChange(user.id, 'address', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editableUsers.find(u => u.id === user.id)?.city || ''}
                  readOnly={editingUserId !== user.id}
                  onChange={(e) => handleInputChange(user.id, 'city', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editableUsers.find(u => u.id === user.id)?.gender || ''}
                  readOnly={editingUserId !== user.id}
                  onChange={(e) => handleInputChange(user.id, 'gender', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editableUsers.find(u => u.id === user.id)?.payment || ''}
                  readOnly={editingUserId !== user.id}
                  onChange={(e) => handleInputChange(user.id, 'payment', e.target.value)}
                />
              </td>
              <td>
                {editingUserId === user.id ? (
                  <button onClick={() => handleSave(user.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                )}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
