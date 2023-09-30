```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message": "noted created"}
    deactivate server

    Note right of browser: spa.js now renders the new note to the DOM. 
```