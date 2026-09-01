import React, { useState } from 'react';
import './QAArtifacts.css';

export default function QAArtifacts() {
  const [activeTab, setActiveTab] = useState('test-cases');
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const testCases = [
    {
      id: 'TC-ECOMM-001',
      module: 'E-Commerce / Cart',
      scenario: 'Verify item addition with valid quantity and total recalculation',
      type: 'Functional',
      status: 'PASSED',
      execution: 'Manual & Selenium Script',
      severity: 'High'
    },
    {
      id: 'TC-AUTH-002',
      module: 'User Authentication',
      scenario: 'Validate invalid login attempt with incorrect password hash',
      type: 'Security / Negative',
      status: 'PASSED',
      execution: 'Manual',
      severity: 'Critical'
    },
    {
      id: 'TC-WEATHER-003',
      module: 'Weather API',
      scenario: 'Validate 200 OK status & JSON schema for valid city search',
      type: 'API Testing',
      status: 'PASSED',
      execution: 'Postman Collection',
      severity: 'Medium'
    },
    {
      id: 'TC-TOURISM-004',
      module: 'Booking Form',
      scenario: 'Check boundary values for date selection & form validation',
      type: 'Boundary Value',
      status: 'PASSED',
      execution: 'Manual',
      severity: 'High'
    },
    {
      id: 'TC-CHECKOUT-005',
      module: 'Payment Gateway',
      scenario: 'Verify fallback behavior when network latency exceeds timeout',
      type: 'Performance / Edge Case',
      status: 'PASSED',
      execution: 'JMeter & Chrome DevTools',
      severity: 'High'
    }
  ];

  const bugReports = [
    {
      id: 'BUG-2024-019',
      title: 'Cart item count does not update dynamically when removing items',
      module: 'E-Commerce UI',
      severity: 'HIGH',
      status: 'VERIFIED & CLOSED',
      reproduce: '1. Add 2 items to cart. 2. Click delete icon on item 1. 3. Badge shows old total.',
      expected: 'Badge count updates immediately to 1.'
    },
    {
      id: 'BUG-2024-024',
      title: 'Weather API returns 500 error instead of 404 for unknown city query',
      module: 'Weather API Endpoint',
      severity: 'MEDIUM',
      status: 'RESOLVED',
      reproduce: '1. Send GET request to /api/weather?city=xyz123. 2. Inspect status code.',
      expected: 'API returns HTTP 404 with JSON error message.'
    },
    {
      id: 'BUG-2024-031',
      title: 'Navigation hamburger menu overlaps with search header on mobile viewports (<375px)',
      module: 'Tourism App Responsive UI',
      severity: 'LOW',
      status: 'VERIFIED & CLOSED',
      reproduce: '1. Open chrome devtools mobile simulator. 2. Set width to 360px. 3. Click menu.',
      expected: 'Navbar links expand cleanly below header.'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Requirement Analysis & Review',
      desc: 'Reviewing Functional Requirement Docs (FRD) and User Stories to identify testable criteria and acceptance goals.'
    },
    {
      step: '02',
      title: 'Test Planning & Case Writing',
      desc: 'Designing comprehensive test cases covering smoke, regression, boundary values, and negative edge scenarios.'
    },
    {
      step: '03',
      title: 'Test Execution & API Audit',
      desc: 'Executing manual & automated scripts, testing REST APIs with Postman, and verifying cross-browser UI rendering.'
    },
    {
      step: '04',
      title: 'Defect Logging & Jira Tracking',
      desc: 'Documenting clear bug reports with detailed steps to reproduce, screenshots, and logs in Jira bug lifecycle.'
    },
    {
      step: '05',
      title: 'Re-Testing & Quality Sign-Off',
      desc: 'Verifying bug fixes, performing final regression checks, and issuing formal quality sign-off for release.'
    }
  ];

  const filteredCases = selectedFilter === 'ALL'
    ? testCases
    : testCases.filter(tc => tc.type.includes(selectedFilter) || tc.module.includes(selectedFilter));

  return (
    <section id="qa-artifacts" className="qa-artifacts-section">
      <div className="qa-artifacts-header">
        <h2 className="section-title">Interactive QA Artifacts & Test Matrix</h2>
        <p className="qa-artifacts-subtitle">
          Explore real-world software testing samples, structured test execution matrices, bug reports, and testing methodology workflows.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="qa-tabs">
        <button
          className={`qa-tab-btn ${activeTab === 'test-cases' ? 'active' : ''}`}
          onClick={() => setActiveTab('test-cases')}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          Test Case Matrix ({testCases.length})
        </button>

        <button
          className={`qa-tab-btn ${activeTab === 'bug-reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('bug-reports')}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z" />
          </svg>
          Defect Reports ({bugReports.length})
        </button>

        <button
          className={`qa-tab-btn ${activeTab === 'qa-process' ? 'active' : ''}`}
          onClick={() => setActiveTab('qa-process')}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
          </svg>
          QA Testing Workflow
        </button>
      </div>

      {/* Tab Content 1: Test Cases */}
      {activeTab === 'test-cases' && (
        <div className="qa-tab-content">
          <div className="table-controls">
            <span className="filter-label">Filter Category:</span>
            {['ALL', 'Functional', 'API Testing', 'Boundary Value', 'Security'].map(filter => (
              <button
                key={filter}
                className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="table-responsive">
            <table className="qa-table">
              <thead>
                <tr>
                  <th>Test Case ID</th>
                  <th>Module</th>
                  <th>Test Scenario</th>
                  <th>Test Type</th>
                  <th>Execution Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map(tc => (
                  <tr key={tc.id}>
                    <td className="font-mono text-cyan">{tc.id}</td>
                    <td className="font-bold">{tc.module}</td>
                    <td>{tc.scenario}</td>
                    <td>
                      <span className="type-badge">{tc.type}</span>
                    </td>
                    <td className="text-muted">{tc.execution}</td>
                    <td>
                      <span className="badge-qa badge-pass">
                        <span className="status-dot"></span>
                        {tc.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab Content 2: Bug Reports */}
      {activeTab === 'bug-reports' && (
        <div className="qa-tab-content">
          <div className="bugs-grid">
            {bugReports.map(bug => (
              <div className="bug-card" key={bug.id}>
                <div className="bug-card-header">
                  <span className="bug-id">{bug.id}</span>
                  <span className={`severity-tag ${bug.severity.toLowerCase()}`}>
                    {bug.severity} SEVERITY
                  </span>
                </div>
                <h3 className="bug-title">{bug.title}</h3>
                <div className="bug-meta">
                  <span><strong>Module:</strong> {bug.module}</span>
                  <span className="badge-qa badge-pass">{bug.status}</span>
                </div>
                <div className="bug-details">
                  <p><strong>Steps to Reproduce:</strong></p>
                  <p className="code-snippet">{bug.reproduce}</p>
                  <p><strong>Expected Result:</strong> {bug.expected}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content 3: QA Process */}
      {activeTab === 'qa-process' && (
        <div className="qa-tab-content">
          <div className="workflow-timeline">
            {workflowSteps.map(wf => (
              <div className="workflow-card" key={wf.step}>
                <div className="step-number">{wf.step}</div>
                <div className="step-body">
                  <h3 className="step-title">{wf.title}</h3>
                  <p className="step-desc">{wf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
