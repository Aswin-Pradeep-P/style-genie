import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from '@Store/store';
import { ROUTES } from '@Constants/routes';
import { hasAuthToken } from '@Utils/checks';
import { setPrevPath } from '@Containers/Login/loginSlice';
import Loader from '@Components/Loader';

export const ProtectedRoute: React.FC<any> = ({ Component, props }) => {
  const isUserFetched = true;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isUserFetched || !hasAuthToken()) {
      dispatch(setPrevPath(location.pathname + location.search));
      navigate(ROUTES.LOGIN, { replace: true });
    }
  }, [isUserFetched]);

  return <>{isUserFetched ? <Component {...props} /> : <Loader isLoading={true} />}</>;
};
