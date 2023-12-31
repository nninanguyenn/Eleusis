/*

flags = ["happy", "calm", "frustrated", "anxious", "neutral", "aggresive", "motivated", "sad"]

option = 
{
    decription: string
    flags: [string, string, ...]
}

question = 
{
    description: string,
    options :
    [
        option1,
        option2,
    ]
}

*/

export const questions = [

    {
        id: 1,
        description: "Imagine yourself walking through a forest.. who do you wish you were walking with?",
        options: [
            {
                description: "Family",
                flags: ["neutral"]
            },
            {
                description: "Significant Other",
                flags: ["neutral"]
            },
            {
                description: "Yourself",
                flags: ["neutral"]
            },
        ],
    },

    {
        id: 2,
        description: "You come across an animal while your walking.. what kind of animal is it?",
        options: [
            {
                description: "Small-sized animal",
                flags: ["calm"]
            },
            {
                description: "Medium-sized animal",
                flags: ["anxious"]
            },
            {
                description: "Large-sized animal",
                flags: ["anxious", "frustrated"]
            },
        ],
    },

    {
        id: 3,
        description: "This animal you've encountered.. what do you imagine it do?",
        options: [
            {
                description: "Peacefully pass by",
                flags: ["calm", "neutral"]
            },
            {
                description: "Attack you",
                flags: ["aggressive", "anxious"]
            },
        ],
    },

    {
        id: 4,
        description: "You spot a house in the forest.. how big is it?",
        options: [
            {
                description: "Small-sized house",
                flags: ["anxious", "sad"]
            },
            {
                description: "Large-sized house",
                flags: ["motivated", "happy"]
            },
        ],
    },

    {
        id: 5,
        description: "Does this house have a fence around it?",
        options: [
            {
                description: "Yes",
                flags: ["anxious"]
            },
            {
                description: "No",
                flags: ["happy", "calm"]
            },
        ],
    },

    {
        id: 6,
        description: "You enter the house and see a table.. what components do you imagine to be on it?",
        options: [
            {
                description: "Flowers",
                flags: ["happy", "calm"]
            },
            {
                description: "Food",
                flags: ["happy", "calm"]
            },
            {
                description: "People",
                flags: ["happy", "calm"]
            },
            {
                description: "None of the above",
                flags: ["anxious", "sad"]
            },
        ],
    },

    {
        id: 7,
        description: "You leave the house through the back door and find a cup in the garden.. what's the cup made out of?",
        options: [
            {
                description: "Flimsy, broken material",
                flags: ["sad", "anxious"]
            },
            {
                description: "Strong, durable material",
                flags: ["happy", "motivated"]
            },
        ],
    },

    {
        id: 8,
        description: "What do you do with the cup?",
        options: [
            {
                description: "Throw it away",
                flags: ["aggressive", "frustrated", "anxious"]

            },
            {
                description: "Put it back",
                flags: ["neutral", "calm"]
            },
            {
                description: "Bring it along with you",
                flags: ["motivated", "happy", "calm"]
            },
        ],
    },

    {
        id: 9,
        description: "As you walk to the end of the garden, you find a body of water.. it's a..",
        options: [
            {
                description: "Pond",
                flags: ["sad", "anxious"]
            },
            {
                description: "Lake",
                flags: ["neutral", "happy"]
            },
            {
                description: "Ocean",
                flags: ["motivated", "happy"]
            },
        ],
    },

    {
        id: 10,
        description: "You must cross the body of water to get home.. how wet do you get?",
        options: [
            {
                description: "Barely any water got on me",
                flags: ["happy", "calm", "motivated"]
            },
            {
                description: "Fully soaked",
                flags: ["frustrated", "anxious", "sad"]
            },
        ],
    },

];
