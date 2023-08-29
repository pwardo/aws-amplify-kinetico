import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import PersonCard from './PersonCard'

const listPeople = `
  query ListPeople {
    listPeople {
      items {
        id
        dynamicSlug
        fullName
        title
        description
      }
    }
  }
`

const People = () => {

  const [peopleData, setPeopleData] = useState([]);
  
  const loadPeopleData = async () => {
    try {
      const peopleData = await API.graphql(graphqlOperation(listPeople));
      setPeopleData(peopleData.data?.listPeople.items);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadPeopleData();
  }, []);

  return (
    <section id="people" className="section">
      <header className="imageheader"></header>
      <div className="container">
        <h2 className="headline">People</h2>
        <div className="people-cards">
          {
            peopleData?.map((person) => 
              <PersonCard dynamicSlug={`${person.dynamicSlug}`}
                          fullName={`${person.fullName}`}
                          title={`${person.title}`}
                          description={`${person.description}`}
              />)
          }
        </div>
      </div>
    </section>
  );
}

export default People;