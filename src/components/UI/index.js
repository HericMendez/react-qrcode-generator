import styled from "styled-components";




export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222;
`

export const Input  = styled.textarea`
  height: 20px;
  border-radius: 8px;

  max-width: 300px;
  width: 100%;
  margin: 24px 0;
  padding: 12px;
  outline: none;
  border: 2px solid #222;
  max-height: 200px;

`

export const Box = styled.div`

  padding: 18px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: #fff;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    padding: 50px 50px 20px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: #5c5b5e;
`
export const Button = styled.a`
    border: solid 1px white;
    text-align: center;
    width: 50%;
    border-radius: 0.5rem;
    padding: 12px;
    z-index: 5;
    text-decoration: none;
    cursor: pointer;
    background-color: #222;
    color: white;
    &:hover {
      background: white;
      color: black;
      border: solid 1px black;
    }
`


