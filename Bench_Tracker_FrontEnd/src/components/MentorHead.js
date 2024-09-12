import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MentorHead.css';

function MentorHead() {
    const [candidates, setCandidates] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [mentorId, setMentorId] = useState('');
    const [newMentor, setNewMentor] = useState({ name: '', availability: 'Available' });

    useEffect(() => {
        fetchCandidates();
        fetchMentors();
    }, []);

    const fetchCandidates = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/bench-candidates');
            setCandidates(response.data);
        } catch (error) {
            console.error('Error fetching candidates:', error);
        }
    };

    const fetchMentors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/mentors');
            setMentors(response.data);
        } catch (error) {
            console.error('Error fetching mentors:', error);
        }
    };

    const assignMentor = async (candidateId) => {
        try {
            await axios.post(`http://localhost:8080/api/assignments/${mentorId}/${candidateId}`);
            alert('Mentor assigned successfully!');
            setSelectedCandidate(null);
            setMentorId('');
            fetchCandidates();
        } catch (error) {
            console.error('Error assigning the mentor:', error);
        }
    };

    const addMentor = async () => {
        try {
            await axios.post('http://localhost:8080/api/mentors', newMentor);
            alert('Mentor added successfully!');
            setNewMentor({ name: '', availability: 'Available' });
            fetchMentors();
        } catch (error) {
            console.error('Error adding mentor:', error.response ? error.response.data : error.message);
            alert('Failed to add mentor: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    const updateMentorAvailability = async (id, availability) => {
        try {
            await axios.put(`http://localhost:8080/api/mentors/${id}`, { availability });
            fetchMentors();
        } catch (error) {
            console.error('Error updating mentor availability:', error);
        }
    };

    const deleteMentor = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/mentors/${id}`);
            alert('Mentor deleted successfully!');
            fetchMentors();
        } catch (error) {
            console.error('Error deleting mentor:', error);
            alert('Failed to delete mentor: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    return (
        <div className="mentor-head-container">
            <h2>Mentor Head - Manage Candidates and Mentors</h2>

            <div className="section">
                <h3>Bench Candidates</h3>
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
                                <th>Assign Mentor</th>
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
                                    <td>
                                        <button onClick={() => setSelectedCandidate(candidate)}>
                                            Assign Mentor
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {selectedCandidate && (
                    <div className="form-container">
                        <h3>Assign Mentor to {selectedCandidate.name}</h3>
                        <label>Select Mentor:</label>
                        <select value={mentorId} onChange={(e) => setMentorId(e.target.value)}>
                            <option value="">Select a mentor</option>
                            {mentors.map(mentor => (
                                <option key={mentor.id} value={mentor.id} disabled={mentor.availability !== 'Available'}>
                                    {mentor.name} - {mentor.availability}
                                </option>
                            ))}
                        </select>
                        <button onClick={() => assignMentor(selectedCandidate.id)} disabled={!mentorId}>
                            Assign
                        </button>
                    </div>
                )}
            </div>

            <div className="section">
                <h3>Mentor List</h3>
                <div className="table-container">
                    <table className="mentors-table">
                        <thead>
                            <tr>
                                <th>Mentor ID</th>
                                <th>Mentor Name</th>
                                <th>Availability</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mentors.map(mentor => (
                                <tr key={mentor.id}>
                                    <td>{mentor.id}</td>
                                    <td>{mentor.name}</td>
                                    <td>
                                        <select
                                            value={mentor.availability}
                                            onChange={(e) => updateMentorAvailability(mentor.id, e.target.value)}
                                        >
                                            <option value="Available">Available</option>
                                            <option value="Unavailable">Unavailable</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteMentor(mentor.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="section">
                <h3>Add New Mentor</h3>
                <div className="form-container">
                    <label>Mentor Name:</label>
                    <input
                        type="text"
                        placeholder="Mentor Name"
                        value={newMentor.name}
                        onChange={(e) => setNewMentor({ ...newMentor, name: e.target.value })}
                    />
                    <label>Availability:</label>
                    <select
                        value={newMentor.availability}
                        onChange={(e) => setNewMentor({ ...newMentor, availability: e.target.value })}
                    >
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                    </select>
                    <button onClick={addMentor}>Add Mentor</button>
                </div>
            </div>
        </div>
    );
}

export default MentorHead;
