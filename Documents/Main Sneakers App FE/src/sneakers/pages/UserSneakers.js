import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SneakerList from '../components/SneakerList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserSneakers = () => {
  const [loadedSneakers, setLoadedSneakers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/sneakers/user/${userId}`
        );
        setLoadedSneakers(responseData.sneakers);
      } catch (err) {}
    };
    fetchSneakers();
  }, [sendRequest, userId]);

  const sneakerDeletedHandler = deletedSneakerId => {
    setLoadedSneakers(prevSneakers =>
      prevSneakers.filter(sneaker => sneaker.id !== deletedSneakerId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedSneakers && (
        <SneakerList items={loadedSneakers} onDeleteSneaker={sneakerDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default UserSneakers;
