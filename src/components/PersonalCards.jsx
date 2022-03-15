import styled from "styled-components";
import Card from "./Card";
const Title = styled.header`
    font-weight: 800;
`;

const CardBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
function PersonalCard() {
    return (
        <>
            <Title>Personal Cards</Title>
            <CardBox>
                <Card />
                <Card />
            </CardBox>
        </>
    );
}

export default PersonalCard;
