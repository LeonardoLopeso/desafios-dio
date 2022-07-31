import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    width:100vw;
    justify-content:center;
    align-items:center;
    color:#EBEBEB;
    padding:4px;
    background-color:#101611;

    input {
        height:45px;
        width:350px;
        font-size: 0.7rem;
        border-radius:6px;
        margin-left:15px;
        padding-left: 8px;
    }

    .bisearch {
        font-size:2rem;
        margin-left: 10px;
        cursor: pointer;
        transition: all .2s;

        &:hover {
            transform: scale(1.2);
        }
    }

    button {
        color: #FFF;
        background: transparent;
    }
`;