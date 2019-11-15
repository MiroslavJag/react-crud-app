import styled from "styled-components";

/**ITEM TABLE */

export const TableWrapper = styled.div`
  max-height: 800px;
  overflow: auto;
`;

export const Table = styled.table`
  margin: 50px;
  text-align: left;
  table-layout: fixed;
  overflow: auto;
  max-width: 800px;
  width: 100%;

  thead {
    background-color: #ececec;
  }
  td {
    border-bottom: 1pt solid #ececec;
    border-left: none;
    border-right: none;
  }
  tr {
    height: 60px;
    margin: 5px 0 0 5px;
  }
  th,
  td {
    padding-left: 10px;
  }
  button {
    margin-left: 10px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 3px;

  &:hover {
    background-color: #ececec;
  }
  &:active {
    background-color: #ececec;
  }
`;

export const IconAction = styled.img`
  height: 20px;
`;
export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const IdField = styled.th`
  width: 30px;
`;
export const NameField = styled.th`
  width: 200px;
`;

/**IMAGE UPLOAD */
export const UploadImageWrapper = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: row;
`;
export const ActionWrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  justify-content: center;
`;

export const ImageWrapper = styled.img`
  border: 1px solid lightgrey;
`;

export const Progress = styled.progress`
  width: 205px;
`;

export const FileInput = styled.input`
  width: 200px;
  height: 100px;
`;

export const UploadButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: darkgray !important
  font-size: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: lightgrey !important;
  }
  &:active {
    background-color: lightgrey !important;
  }
  &:disabled {
    background-color: lightgrey !important;
    cursor: not-allowed;
  }
`;
