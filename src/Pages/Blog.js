import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2> Welcome To My Blog</h2>
            <div>
                <h2>Difference between SQL and NoSQL</h2>
                <h2>
                    SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of databases used to store and manage data.

                    SQL databases are relational databases, which means that they store data in tables with predefined relationships between them. These relationships allow SQL databases to maintain data integrity and enforce consistency. SQL databases are good for handling structured data, such as financial records or customer information, where data is highly organized and has a well-defined schema.

                    On the other hand, NoSQL databases are non-relational databases that do not use tables to store data. Instead, NoSQL databases use various data models, such as key-value, document, column-family, or graph models. NoSQL databases are highly scalable and flexible and can handle unstructured and semi-structured data, such as social media data, log files, or sensor data, which can be challenging to organize in a traditional SQL database.

                    In summary, SQL databases are good for structured data with a well-defined schema, while NoSQL databases are better suited for handling unstructured and semi-structured data.
                </h2>
            </div>
            <div>
                <h2>What is JWT, and how does it work?</h2>
                <h2>
                    JWT stands for JSON Web Token. It is a type of token that is used to securely transmit information between parties as a JSON object. JWTs are often used for authentication and authorization purposes in web applications and APIs.

                    JWTs consist of three parts: the header, the payload, and the signature. The header contains information about the type of token and the algorithm used to sign it. The payload contains the actual data that is being transmitted, such as user ID or permissions. The signature is a hash of the header and payload, signed with a secret key that is only known by the issuing authority.

                    When a user logs in to a web application, the server generates a JWT and sends it back to the user as a response. The user then includes the JWT in subsequent requests to the server, typically in the Authorization header of an HTTP request. The server can then verify the authenticity of the token by checking the signature and decode the payload to retrieve the user's information.

                    JWTs are useful because they allow for stateless authentication and authorization. This means that the server does not need to keep track of the user's session or store user information in a database. Instead, the necessary information is contained within the JWT itself, making it easier to scale and distribute web applications.

                </h2>
            </div>
            <div>
                <h2>What is the difference between javascript and NodeJS?</h2>
                <h2>
                    JavaScript and Node.js are related but distinct technologies.

                    JavaScript is a programming language used primarily for front-end web development. It runs in a web browser and allows developers to add interactivity and dynamic behavior to websites. JavaScript is a high-level, dynamic, weakly typed, and interpreted language.

                    Node.js, on the other hand, is a runtime environment that allows developers to run JavaScript on the server-side. It uses the same JavaScript syntax and provides additional APIs and libraries for server-side functionality, such as file system access, networking, and database connectivity. Node.js is built on top of the Google Chrome V8 JavaScript engine and is designed for scalable, event-driven applications.

                    One key difference between JavaScript and Node.js is their execution environments. JavaScript runs in the browser and is limited to the browser's capabilities, such as DOM manipulation and network requests. Node.js, however, runs outside of the browser and has access to the file system, network, and other system resources.

                    Another difference is that JavaScript is primarily used for front-end web development, while Node.js is used for back-end web development. Node.js is also commonly used for building APIs, command-line tools, and real-time applications.
                </h2>
            </div>
            
        </div>
    );
};

export default Blog;