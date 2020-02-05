const events = [
//add description info
  {
    id: 1,
    title:'Dangerous Meetup',
    location: 'Dangerous Man Brewing',
    date: new Date(),
    attendees: [1],
    description:'Come live dangerously at dangerous man in NE Minneapolis etc. etc. etc.',
  },
  {
    id: 2,
    title:'Dangerous Meetup',
    location: 'Dangerous Man Brewing 2',
    date: new Date(),
    attendees: [2],
    description:'Come live dangerously at dangerous man in NE Minneapolis etc. etc. etc.',

  },
  {
    id: 3,
    title:'Dangerous Meetup',
    location: 'Dangerous Man Brewing 3',
    date: new Date(),
    attendees: [1,3],
    description:'Come live dangerously at dangerous man in NE Minneapolis etc. etc. etc.',

  }
]


const users = [
  {
    id: 1,
    userName: 'a',
    attended: [2],
    attending: [3],
    events: [2]
  },
  {
    id: 2,
    userName: 'b',
    attended: [1],
    attending: [2],
    events: [1]
  },
  {
    id: 3,
    userName: 'c',
    attended: [2],
    attending: [1],
    events: [2]
  }
]

export default { events, users };