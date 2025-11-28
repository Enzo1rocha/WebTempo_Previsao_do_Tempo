import React from 'react';
import * as S from './styles';


const Loading = ({ message = "Carregando..." }) => {
  return (
    <S.Overlay>
      <S.Spinner />
      {message && <S.LoadingText>{message}</S.LoadingText>}
    </S.Overlay>
  );
};

export default Loading;