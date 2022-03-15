import "./App.css";
import Side from "./components/Side";
import PersonalCards from "./components/PersonalCards";
import AnalyticReports from "./components/AnalyticReports";
import RecentActive from "./components/RecentActive";
import SendMoney from "./components/SendMoney";
import styled from "styled-components";

const Divide = styled.div`
    height: 100%;
    border-left: 1px solid gray;
`;

function App() {
    return (
        <div className="App">
            <Side />
            <Divide></Divide>
            <div>
                <PersonalCards />
                <AnalyticReports />
            </div>
            <Divide></Divide>
            <div>
                <RecentActive />
                <SendMoney />
            </div>
        </div>
    );
}

export default App;
