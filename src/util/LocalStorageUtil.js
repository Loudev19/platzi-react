import React from "react";

function useLocalStorageState(name, defaultValue) {
  const [item, setItem] = React.useState(defaultValue);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const persistedData = localStorage.getItem(name);
        if (persistedData) {
          setItem(JSON.parse(persistedData));
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
    // eslint-disable-next-line
  }, []);

  const saveItem = (object) => {
    setItem(object);
    localStorage.setItem(name, JSON.stringify(object));
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorageState };
