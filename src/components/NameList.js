import React from 'react'

function NameList() {
    const persons=[{
        id:1,
        name:'Bruce',
        age:30,
        skill:'React'
    },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:2,
            name:'Diana',
            age:20,
            skill:'Vue'
        }
    ];
    const listName= persons.map(person => <h2>I am {person.name}. I am {person.age}. My Skill is {person.skill}</h2>);

    return <div>{listName}</div>
}

export default NameList