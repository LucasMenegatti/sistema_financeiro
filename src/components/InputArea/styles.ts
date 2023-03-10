import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
`

export const Form = styled.form`
    display: flex;
    align-items: flex-end;
    button {
        flex: 1;
        background-color: #a5b2e7;
        border: none;
        border-radius: 5px;
        padding: 6px;
        height: 30px
    }
`

export const FormItem = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ItemLabel = styled.div`
    font-weight: bold;
    color: #000;
    margin: 5px;
`

export const FormInput = styled.input<{empty: boolean}>`
    flex: 1;
    margin: 0 5px;
    padding: 6px;
    border: 1px solid ${props => props.empty ? 'red' : '#a5b2e7' };
    border-radius: 5px;
`

export const FormSelect = styled.select<{empty: boolean}>`
    flex: 1;
    margin: 0 5px;
    padding: 6px;
    border: 1px solid ${props => props.empty ? 'red' : '#a5b2e7' };
    border-radius: 5px;
`