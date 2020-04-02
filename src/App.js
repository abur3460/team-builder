import React, { useState } from "react";
import "./App.css";
import MemberForm from "./components/MemberForm";

function App() {
    // State to shape members, and hold array of all members.
    const [teamMember, setTeamMember] = useState([]);
    const [team, setTeam] = useState([]);
    const addMember = (form) => {
      const newTeamMember = { 
        name:form.name, 
        email:form.email, 
        role:form.role 
      };
      setTeamMember([...teamMember, newTeamMember]);
    }
    //renderMember function based on simple checks of input
    const renderMember = e => {
        if (teamMember.name === "") {
            e.preventDefault();
        } else if (teamMember.email === "") {
            e.preventDefault();
        } else if (teamMember.role === "") {
            e.preventDefault();
        } else if (!teamMember.email.includes("@")) {
            e.preventDefault();
        } else {
            setTeam([...team, teamMember]);
        }
    };
    return (
        <div className="App">
            <h1 className="title"> Add A Member </h1>
            <MemberForm
                team={team}
                teamMember={teamMember}
                renderMember={renderMember}
                setTeamMember={setTeamMember}
                addMember={addMember}

            />
            {team.map((member, index) => (
                <section className="member-card" key={index}>
                    <h1 className="member-card-text">
                        {member.name}
                    </h1>
                    <h1 className="member-card-text">
                        {member.email}
                    </h1>
                    <h1 className="member-card-text">
                        {member.role}
                    </h1>
                </section>
            ))}
        </div>
    );
}
export default App;

