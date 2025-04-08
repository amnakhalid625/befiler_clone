import React from 'react';
import './Team.css'; 

const teamMembers = [
  {
    name: 'Imama Siddiqui',
    role: 'Manager Digital Tax',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-1.png' // replace with actual image
  },
  {
    name: 'Muhammad Sharif',
    role: 'Manager Corporate & Tax Services',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-2.png'
  },
  {
    name: 'Muhammad Ameer Ahmad',
    role: 'Manager Tax Services',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-3.png'
  },
  {
    name: 'Muhammad Jamil',
    role: 'CFO',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-4.png'
  },
  {
    name: 'Shahnawaz Samoon',
    role: 'Manager Coordination & Communication',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-5.png'
  },
  {
    name: 'Faisal Nawaz',
    role: 'Manager Sales Tax',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-6.png'
  },
  {
    name: 'Samrah Qazalbash',
    role: 'Supervisor Tax & Account Services',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-7.png'
  },
  {
    name: 'Osama Kaleem',
    role: 'Digital Marketing Specialist',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-8.png'
  },
  {
    name: 'Hina Sheikh',
    role: 'Business Development Executive',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-9.png'
  },
  {
    name: 'Naseem Ahmed',
    role: 'Corporate Tax Associate',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-10.png'
  },
  {
    name: 'Sundus Allah Rakha',
    role: 'HR Manager',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-11.png'
  },
  {
    name: 'Romesha Sultan',
    role: 'AM Sales & Quality',
    img: 'https://www.befiler.com/assets/images/home/consultants/consultant-12.png'
  },
];

const Team = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 heading">
        Team of more than <span className="highlight">100 Talented and Qualified<br></br></span> is available for your <span>Support</span>
      </h2>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
            <div className="team-card text-center shadow-sm p-3 bg-white rounded">
              <div className="team-img mx-auto mb-3">
                <img src={member.img} alt={member.name} className="rounded-circle" width="100" height="100" />
              </div>
              <h5 className="mb-1">{member.name}</h5>
              <p className="text-muted small">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
