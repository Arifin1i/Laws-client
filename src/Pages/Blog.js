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
        </div>
    );
};

export default Blog;