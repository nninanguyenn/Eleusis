/*

flags = ["happy", "calm", "frustrated", "anxious", "neutral"]

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
        description: "This is a question",
        options: [
            {
                description: "this option is flagged happy",
                flags: ["happy"]
            },
            {
                description: "this option is flagged axious",
                flags: ["anxious"]
            },
        ],
    },

    {
        description: "This is a NEW question",
        options: [
            {
                description: "this option is flagged calm",
                flags: ["calm"]
            },
            {
                description: "this option is flagged frustrated",
                flags: ["frustrated"]
            },
        ],
    },

    {
        description: "This is a BRAND NEW question",
        options: [
            {
                description: "this option is flagged calm AND neutral",
                flags: ["calm", "neutral"]
            },
            {
                description: "this option is flagged frustrated AND anxious",
                flags: ["frustrated", "anxious"]
            },
        ],
    },


];
