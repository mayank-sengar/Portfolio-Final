import React, {useState,useEffect} from 'react'


function StarBackground() {
    const [stars, setStars] = useState([]);
    const [followingStars, setFollowingStars] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
  
    useEffect(() => {
      generateStars();
      generateMeteors();
      generateFollowingStars();
  
      const handleResize = () => {
        generateStars();
      };
  
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        });
      };
  
      window.addEventListener("resize", handleResize);
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    const generateStars = () => {
      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 8000
      );
  
      const newStars = [];
  
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 4 + 2,
          twinkleDelay: Math.random() * 2,
        });
      }
  
      setStars(newStars);
    };
  
    const generateMeteors = () => {
      const numberOfMeteors = 4;
      const newMeteors = [];
  
      for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 20,
          delay: Math.random() * 15,
          animationDuration: Math.random() * 3 + 3,
        });
      }
  
     
    };
  
    const generateFollowingStars = () => {
      const numberOfFollowingStars = 7;
      const newFollowingStars = [];

      for (let i = 0; i < numberOfFollowingStars; i++) {
        newFollowingStars.push({
          id: `following-${i}`,
          size: 3,
          delay: i * 0.2, 
          opacity: 0.7 - (i * 0.2),
        });
      }

      setFollowingStars(newFollowingStars);
    };
  
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
       <div
  className="star"
  style={{
    "--twinkle-duration": "2s",
    "--twinkle-delay": "0.5s",
  }}
></div>
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              "--twinkle-duration": `${star.animationDuration}s`,
              "--twinkle-delay": `${star.twinkleDelay}s`,
            }}
          />
        ))}
        {followingStars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: `calc(${mousePosition.x}% - ${star.size/2}px)`,
              top: `calc(${mousePosition.y}% - ${star.size/2}px)`,
              opacity: star.opacity,
              transition: `all ${star.delay}s ease-out`,
              position: 'fixed',
            }}
          />
        ))}
      </div>
    );
}

export default StarBackground