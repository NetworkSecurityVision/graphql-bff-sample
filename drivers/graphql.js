import { request, gql } from "graphql-request";

const query = gql`
    {
        books {
            title
            author
        }
    }
`;

request("http://localhost:4000", query).then((data) => console.log(data));
