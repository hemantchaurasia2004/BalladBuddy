# BalladBuddy

Welcome to the Election Portal project! This platform is designed to facilitate fair and transparent elections using the concept of quadratic voting. The project leverages blockchain technology, particularly the Ethereum protocol, to ensure the integrity and immutability of the voting process. The portal is deployed on the Sepolia testnet and utilizes smart contracts compiled using the Hardhat framework on Node.js.

## Overview

The Election Portal enables efficient and secure voting procedures for various entities, such as college students and candidates standing for positions of power. It employs quadratic voting, a novel approach to voting where voters allocate their votes in a quadratic manner, allowing for more nuanced expression of preferences.

![Blank diagram](https://github.com/hemantchaurasia2004/BalladBuddy/assets/115251521/8e2070de-0bfc-4a59-a613-c29e3af27a44)


### Quadratic Voting

Quadratic voting is a voting mechanism in which voters are given a budget of votes that they can distribute among the options available. However, the cost of each additional vote for a particular option increases quadratically with the number of votes allocated to that option. This ensures that voters prioritize their preferences more effectively and prevents the domination of majority preferences.

### Key Players

- **Admin**: The administrator manages the overall functioning of the Election Portal, including setting up elections, managing candidate registrations, and monitoring voting activities.
  
- **College Students (Voters)**: College students are the primary participants in the voting process. Their data is securely stored using MongoDB, and they access the portal through individual sessions authenticated via JWT (JSON Web Tokens).
  
- **Candidates**: Candidates are individuals vying for positions of power in the election. They register their candidacy through the portal and campaign to garner votes from the student body.

## Features

The Election Portal offers a range of features to facilitate a smooth and transparent voting process:

- **Secure Authentication**: College students log in securely using JWT-based authentication, ensuring that only authorized users can participate in the voting process.
  
- **Quadratic Voting**: The portal implements quadratic voting to enable more accurate representation of voter preferences and prevent majority domination.
  
- **Candidate Registration**: Individuals interested in contesting elections can register themselves as candidates through the portal, providing necessary details and campaign information.
  
- **Blockchain-Based Certificates**: The portal generates certificates for election results and voting participation, utilizing blockchain technology to ensure their authenticity and immutability. These certificates are created as ERC721 non-fungible tokens (NFTs), providing a unique digital identity to each certificate.

## Deployment

The Election Portal is deployed on the Sepolia testnet, leveraging the power of Ethereum blockchain for secure and transparent transactions. Smart contracts are compiled using the Hardhat framework on Node.js, ensuring robustness and reliability.

## Usage

To get started with the Election Portal:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure the Ethereum network settings and deploy smart contracts.
4. Set up MongoDB for storing user data.
5. Run the application using `npm start`.

## Contributors

- Team Draco Members

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Thank you for using the Election Portal! Happy voting! 🗳️🎉
