import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
`;

export const AdminWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: 50px;
`;

export const Title = styled.h2`
  color: darkslategrey;
`;

export const ItemForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
  text-align: left;

  label {
    margin-bottom: 5px;
    font-weight: 500;
  }
  input {
    margin-bottom: 20px;
    height: 40px;
    font-size: 15px;
    padding-left: 10px;
  }
  textarea {
    margin-bottom: 20px;
    font-size: 15px;
    padding-left: 10px;
  }
`;

export const ErrorWrapper = styled.div`
  margin: 100px;
  line-height: 2;
  font-size: 20px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  height: 50px;
  width: 100%;
  background-color: deepskyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  margin: 25px 0;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background-color: #4cd2ff;
  }
  &:active {
    background-color: #4cd2ff;
  }
`;
