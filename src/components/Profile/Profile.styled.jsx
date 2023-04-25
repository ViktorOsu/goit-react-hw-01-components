import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 300px;
  padding: 50px 0 40px 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.2);
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const ProfileDescr = styled.div`
  text-align: center;
`;

export const PtofileName = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
`;

export const PortfileTag = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: gray;
`;

export const ProfileLocation = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: gray;
  margin-bottom: 40px;
`;

export const ProfileStats = styled.ul`
  list-style: none;
  display: flex;
`;

export const ProfileItem = styled.li`
  min-width: 80px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileLable = styled.span`
  color: grey;
`;

export const ProfileQuant = styled.span`
  margin-top: 16px;
  font-weight: 600;
`;
