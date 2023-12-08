import React ,{ useState, useEffect }from 'react'

const ProfilePic = () => {
  const [borderRadiusIndex, setBorderRadiusIndex] = useState(0);

  useEffect(() => {
    const profilePic = document.getElementById('profilePic');

    const animateProfile = () => {
      setBorderRadiusIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const intervalId = setInterval(animateProfile, 4000); // Adjust the interval as needed

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const borderRadiusValues = [
    '60% 40% 30% 70% 60% 30% 70% 40%',
    '30% 60% 70% 40% 50% 60% 30% 60%',
    '60% 40% 30% 70% 60% 30% 70% 40%',
  ];

  return (
    <div className="profile_pic" id="profilePic" >
    </div>
  );
}

export default ProfilePic
