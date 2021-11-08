import styled from '@emotion/styled';


export const ModalContainer = styled.div`
  background-color: ${props => props.theme.colors.light1};
  width: 300px;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  padding: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ModalStyle = {
  overlay: {
    position: 'fixed',
    padding: 0,
    backgroundColor: '#404040CC',
  },
  content: {
    background: 'transparent',
    border: 'none',
    padding: 0,
    top: '50px',
    right: 'initial',
    bottom: 'initial',
    left: 'calc(50% - 150px)',
  },
};
