import React, { useEffect } from "react";

const RefreshPage = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return <div>Page is refreshing every 5 seconds</div>;
};
export default RefreshPage;
