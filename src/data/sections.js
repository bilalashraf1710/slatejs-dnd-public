import { v4 as uuidv4 } from 'uuid';

const sections = [
    {
        id: uuidv4(),
        title: "Section 1",
        items: [
            { id: uuidv4(), item: { type: 'paragraph', children: [{ text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." }] } },
            { id: uuidv4(), item: { type: 'paragraph', children: [{ text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.." }] } }
        ]
    },
    {
        id: uuidv4(),
        title: "Section 2",
        items: [
            { id: uuidv4(), item: { type: 'paragraph', children: [{ text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." }] } },
            { id: uuidv4(), item: { type: 'paragraph', children: [{ text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.." }] } }
        ]
    },
]

export default sections;