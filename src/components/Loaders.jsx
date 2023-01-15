import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Loaders() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-black">
          <BeatLoader
            color="#36d7b7"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <h1>Test test</h1>
        </div>
      )}
    </div>
  );
}

export default Loaders;
