import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BenchCandidateList.css';

function BenchCandidateList() {
    const [candidates, setCandidates] = useState([]);
    const [newCandidate, setNewCandidate] = useState({
        name: '',
        doj: '',
        skills: '',
        remarks: '',
        benchStartDate: '',
        interviewsScheduled: '',
        aging: '',
        resume: ''
    });

    useEffect(() => {
        fetchCandidates();
    }, []);

    const fetchCandidates = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/bench-candidates');
            setCandidates(response.data);
        } catch (error) {
            console.error('Error fetching candidates:', error);
        }
    };

    const addCandidate = async () => {
        try {
            await axios.post('http://localhost:8080/api/bench-candidates', newCandidate);
            alert('Candidate added successfully!');
            setNewCandidate({
                name: '',
                doj: '',
                skills: '',
                remarks: '',
                benchStartDate: '',
                interviewsScheduled: '',
                aging: '',
                resume: ''
            });
            fetchCandidates();
        } catch (error) {
            console.error('There was an error adding the candidate!', error);
        }
    };

    return (
        <div className="bench-candidate-list-container">
            <h2>Bench Candidates</h2>
            <div className="table-container">
                <table className="candidates-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Joining</th>
                            <th>Bench Start Date</th>
                            <th>Skills</th>
                            <th>Interviews Scheduled</th>
                            <th>Remarks</th>
                            <th>Aging</th>
                            <th>Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map(candidate => (
                            <tr key={candidate.id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.doj}</td>
                                <td>{candidate.benchStartDate}</td>
                                <td>{candidate.skills}</td>
                                <td>{candidate.interviewsScheduled}</td>
                                <td>{candidate.remarks}</td>
                                <td>{candidate.aging}</td>
                                <td>{candidate.resume}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="new-candidate-form">
                <h3>Add New Candidate</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={newCandidate.name}
                    onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Date of Joining"
                    value={newCandidate.doj}
                    onChange={(e) => setNewCandidate({ ...newCandidate, doj: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Skills"
                    value={newCandidate.skills}
                    onChange={(e) => setNewCandidate({ ...newCandidate, skills: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Remarks"
                    value={newCandidate.remarks}
                    onChange={(e) => setNewCandidate({ ...newCandidate, remarks: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Bench Start Date"
                    value={newCandidate.benchStartDate}
                    onChange={(e) => setNewCandidate({ ...newCandidate, benchStartDate: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Interviews Scheduled"
                    value={newCandidate.interviewsScheduled}
                    onChange={(e) => setNewCandidate({ ...newCandidate, interviewsScheduled: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Aging"
                    value={newCandidate.aging}
                    onChange={(e) => setNewCandidate({ ...newCandidate, aging: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Resume"
                    value={newCandidate.resume}
                    onChange={(e) => setNewCandidate({ ...newCandidate, resume: e.target.value })}
                />
                <button onClick={addCandidate}>Add Candidate</button>
            </div>
        </div>
    );
}

export default BenchCandidateList;
