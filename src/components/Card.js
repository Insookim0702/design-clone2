import styled from "styled-components";

const Title = styled.header`
    font-weight: 900;
    font-size: 1.7rem;
`;

const Caption = styled.p``;
const NameLavel = styled.p`
    font-size: 10px;
`;
const Name = styled.p``;
const Money = styled.h2`
    font-size: 1.2rem;
    font-weight: 800;
`;
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
`;

const Box = styled.div`
    border-radius: 30px;
    background-color: red;
    padding: 20px;
    width: 200px;
    height: 100px;
    color: whitesmoke;
`;

function SendMoney() {
    return (
        <Box>
            <Title>VISA</Title>
            <Caption>Platinum</Caption>
            <Money>$790,000</Money>
            <Footer>
                <Caption>**** 0212</Caption>
                <div>
                    <NameLavel>Name</NameLavel>
                    <Name>Nile Roberts</Name>
                </div>
            </Footer>
        </Box>
    );
}

export default SendMoney;
