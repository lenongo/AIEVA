sequenceDiagram
participant backend
participant GitHub
participant ChatGPT
participant frontend

    backend ->> GitHub: Fetch pull request details
    GitHub -->> backend: Return pull request details
    backend ->> GitHub: Fetch associated issues for the pull request
    GitHub -->> backend: Return associated issues
    backend ->> ChatGPT: Provide GitHub information and request AI for review
    ChatGPT -->> backend: Return AI review results
    backend ->> frontend: Return review results

sequenceDiagram
participant frontend
participant contract(solidity)

    frontend ->> contract: Request sign request.
    contract -->> frontend: Send sign requesr.
    frontend ->> contract: Add worker.
    contract -->> frontend: Return the data of worker.
    frontend ->> contract: Request of receiving crypto .
    contract -->> frontend: If signer === worker, send crypto.
