import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../models/candidate.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  candidates: Candidate[] = [];
  newCandidate: Candidate = { 
    id: 0, 
    name: 'John Doe', 
    email: 'john.doe@example.com', 
    phone: '123456789', 
    appliedPosition: 'Developer', 
    experienceYears: 5 
  };

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.getAllCandidates();
  }

  getAllCandidates(): void {
    this.candidateService.getCandidates().subscribe((data) => {
      console.log('Fetched Candidates:', data);
      this.candidates = data;
    });
  }

  addCandidate(): void {
    this.candidateService.addCandidate(this.newCandidate).subscribe((data) => {
      console.log('Added Candidate:', data);
      this.getAllCandidates(); // Refresh the list
    });
  }

  updateCandidate(): void {
    const updatedCandidate = { ...this.candidates[0], name: 'Updated Name' };
    this.candidateService.updateCandidate(updatedCandidate).subscribe((data) => {
      console.log('Updated Candidate:', data);
      this.getAllCandidates(); // Refresh the list
    });
  }

  deleteCandidate(): void {
    const candidateId = this.candidates[0]?.id;
    if (candidateId) {
      this.candidateService.deleteCandidate(candidateId).subscribe(() => {
        console.log('Deleted Candidate:', candidateId);
        this.getAllCandidates(); // Refresh the list
      });
    }
  }
}
