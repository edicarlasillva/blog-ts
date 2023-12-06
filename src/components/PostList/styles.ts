import styled from 'styled-components'

export const Title = styled.div`
  margin-bottom: 45px;

  h1 {
    color: ${({theme}) => theme.colors.title};
    font-family: Kumbh Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: -1px;
  }

  span {
    color: ${({theme}) => theme.colors.textColor};
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`

export const Posts = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`