import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 200px;
  padding: 50px 0 40px 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.2);
`;

export const StatisticsTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.3;
  margin-left: 150px;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  margin-top: 30px;
  margin-left: 25px;
  margin-right: 20px;
  display: flex;
  padding: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 25px 30px;
  background-color: ${props => {
    switch (props.prop) {
      case '.docx':
        return `#3374ecc9`;
      case '.pdf':
        return `#bd2fda`;
      case '.mp3':
        return `#ec3d3d`;
      case '.psd':
        return `#21d1dd`;
      default:
        return `#FFFFFF`;
    }
  }};
`;

export const StatisticsLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const StatisticsPercentage = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
