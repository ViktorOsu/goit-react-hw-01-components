import styled from '@emotion/styled';

export const FriendsListEl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  margin-left: 270px;
  padding: 0;
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  width: 250px;
  background-color: white;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  gap: 30px;
`;

export const FriendStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.prop) {
      case true:
        return `#09f13b`;
      default:
        return `#f30808`;
    }
  }};
`;

export const FriendsName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-left: 10px;
  letter-spacing: 0.2em;
`;
