import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.secondary};
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.10);
  padding: 20px 0;
`

export const Container = styled.div`
  width: 1250px;
  padding: 0 25px;
`