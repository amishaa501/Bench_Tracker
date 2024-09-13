
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AllCandidatesTable = () => {
    const [candidates, setCandidates] = useState([]);

    const fetchUsersData = async () => {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:8080", // Your API base URL
        });

        try {
            // Make GET request to your API endpoint
            const response = await axiosInstance.get("/getAllCandidates");
            console.log(response);
            setCandidates(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUsersData();
    }, []);

    return (
        <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Emp ID</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Name</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Skills</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Process Status</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Is Blocked</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Blocked By</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Onboarding Date</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Bench Start Date</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Aging (days)</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Interviews Scheduled</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Client</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Comments</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Mentor Rating</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Mentor Feedback</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>Location</TableCell>
                        <TableCell sx={{ backgroundColor: '#ADD8E6', color: 'black', fontWeight: 'bold', borderBottom: '2px solid #ADD8E6' }}>ThLink</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {candidates.map((candidate, index) => (
                        <TableRow key={index}>
                            <TableCell>{candidate.empId}</TableCell>
                            <TableCell>{candidate.name}</TableCell>
                            <TableCell>{candidate.skills.join(', ')}</TableCell>
                            <TableCell>{candidate.processStatus}</TableCell>
                            <TableCell>{candidate.isBlocked ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{candidate.blockedBy}</TableCell>
                            <TableCell>{new Date(candidate.onboardingDate).toLocaleDateString()}</TableCell>
                            <TableCell>{new Date(candidate.benchStartDate).toLocaleDateString()}</TableCell>
                            <TableCell>{candidate.aging}</TableCell>
                            <TableCell>
                                {Object.entries(candidate.interviewsScheduled).map(([date, clientId]) => (
                                    <div key={date}>{date} -> {clientId}</div>
                                ))}
                            </TableCell>
                            <TableCell>{candidate.client}</TableCell>
                            <TableCell>
                                {Object.entries(candidate.comment).map(([empId, comment]) => (
                                    <div key={empId}>{empId} -> {comment}</div>
                                ))}
                            </TableCell>
                            <TableCell>{candidate.mentorRating}</TableCell>
                            <TableCell>
                                {Object.entries(candidate.mentorFeedback).map(([mentorId, feedback]) => (
                                    <div key={mentorId}>{mentorId} -> {feedback}</div>
                                ))}
                            </TableCell>
                            <TableCell>{candidate.Location}</TableCell>
                            <TableCell>
                                <a href={candidate.ThLink} target="_blank" rel="noopener noreferrer">
                                    {candidate.ThLink}
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AllCandidatesTable;
