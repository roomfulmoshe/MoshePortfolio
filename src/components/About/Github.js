import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useEffect, useState } from 'react';

function Github() {
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/mosheking');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setLeetcodeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="roomfulmoshe"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>

      {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <div>
      {leetcodeData ? (
        <div>
          <h1>{leetcodeData.totalSolved}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      </Row> */}
    </>

    
  );
}

export default Github;
