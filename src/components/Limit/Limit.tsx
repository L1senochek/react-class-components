import React from 'react';
import { useSearchParams } from 'react-router-dom';

interface ILimitProps {
  limit: number;
  onLimitChange: (newLimit: number) => void;
}

const Limit: React.FC<ILimitProps> = ({
  limit,
  onLimitChange,
}): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(e.target.value, 10);
    searchParams.set('limit', newLimit.toString());
    setSearchParams(searchParams);
    onLimitChange(newLimit);
  };

  return (
    <div>
      <label htmlFor="limit-select">Items per page:</label>
      <select id="limit-select" value={limit} onChange={handleLimitChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default Limit;
