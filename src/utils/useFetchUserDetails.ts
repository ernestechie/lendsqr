import { useState, useEffect } from 'react';
import { userType } from '../types/users';

const useFetchUserDetails = (userID: string) => {
  const [fetchingUser, setFetchingUser] = useState(true);
  const [user, setUser] = useState<userType>();

  const fetchUsersHandler = async () => {
    const allUsers = localStorage.getItem('users');

    if (allUsers !== null) {
      const usersArray = JSON.parse(allUsers);
      const currentUser = usersArray.find(
        (array: userType) => array.id === userID
      );

      if (currentUser) {
        return currentUser;
      } else {
        return null;
      }
    } else {
      try {
        const request = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userID}`
        );
        if (request.ok) {
          const response = await request.json();
          return response;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchUsersHandler()
      .then((snapshot) => {
        setUser(snapshot);
        console.log(snapshot);
      })
      .then(() => setFetchingUser(false));
  }, []);

  return { fetchingUser, user };
};

export default useFetchUserDetails;
