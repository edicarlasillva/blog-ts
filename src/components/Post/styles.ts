import styled from 'styled-components'

export const PostItem = styled.div`
  .category {
    color: ${({theme}) => theme.colors.primary};
    font-family: Open Sans;
    font-size: 13px;
    font-weight: 400;
    line-height: 19.5px; 
    margin-top: 20px;

    span {
      font-style: italic;
      color: ${({theme}) => theme.colors.textColor};
    }
  }

  .title {
    color: ${({theme}) => theme.colors.title};
    font-family: Kumbh Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 30.8px;
    letter-spacing: -1px;
  }

  .post-info {
    margin: 20px 0;
    display: flex;
    gap: 10px;

    img {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      border-radius: 50%;
    }

    div {
      display:flex;
      flex-direction: column;
    }

    .author {
      color: ${({theme}) => theme.colors.title};
      font-family: Open Sans;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 19.5px;
    }

    span {
      color: ${({theme}) => theme.colors.textColor};
      font-family: Open Sans;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 19.5px; /* 150% */
    }
  }

  .description { 
    color: ${({theme}) => theme.colors.textColor};
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.6px;
  }
`