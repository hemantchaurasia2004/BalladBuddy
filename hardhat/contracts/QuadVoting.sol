//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint id;
        string name;
        uint numberOfVotes;
    }

    Candidate[] public candidates;

    address public owner;
    mapping(address => uint) public voterTokens;
    mapping(address => bool) public hasVoted;

    uint public votingStart;
    uint public votingEnd;

    bool public electionStarted;

    uint public constant TOKENS_PER_VOTE = 5;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier electionOnGoing() {
        require(electionStarted, "Election has not started yet");
        _;
    }

    function startElection(
        string[] memory _candidates,
        uint _duration
    ) public onlyOwner {
        require(!electionStarted, "Election has already started");
        delete candidates;
        resetAllVoterTokens();

        for(uint i = 0; i < _candidates.length; i++) {
            candidates.push(Candidate({id: i, name: _candidates[i], numberOfVotes: 0}));
        }
        electionStarted = true;
        votingStart = block.timestamp;
        votingEnd = block.timestamp + (_duration * 1 minutes);
    }

    function addCandidate(
        string memory _name
    ) public onlyOwner electionOnGoing {
        require(checkElectionPeriod(), "Election period has ended");
        candidates.push(Candidate({id: candidates.length, name: _name, numberOfVotes: 0}));
    }

    function getTokenBalance(address _voter) public view returns (uint) {
        return voterTokens[_voter];
    }

    function voteTo(uint _id, uint _tokens) public electionOnGoing {
        require(checkElectionPeriod(), "Election period has ended");
        require(!hasVoted[msg.sender], "You have already voted");
        require(_tokens > 0 && _tokens <= getTokenBalance(msg.sender), "Invalid token amount");

        candidates[_id].numberOfVotes += _tokens / TOKENS_PER_VOTE;
        voterTokens[msg.sender] -= _tokens;
        hasVoted[msg.sender] = true;
    }

    function electionTimer() public view electionOnGoing returns(uint) {
        if(block.timestamp >= votingEnd) {
            return 0;
        }
        return votingEnd - block.timestamp;
    }

    function checkElectionPeriod() public view returns(bool) {
        if(electionTimer() > 0) {
            return true;
        }
        return false;
    }

    function resetAllVoterTokens() public onlyOwner {
        for(uint i = 0; i < candidates.length; i++) {
            delete candidates[i];
        }
    }
}
