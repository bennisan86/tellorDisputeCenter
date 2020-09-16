import React, { useState } from 'react';

import { GET_ALL_DISPUTES } from 'utils/queries';
import GraphFetch from 'components/shared/GraphFetch';
import AllDisputes from 'components/disputes/AllDIsputes';

const Disputes = () => {
  const [disputes, setDisputes] = useState();

  return (
    <>
      <GraphFetch query={GET_ALL_DISPUTES} setRecords={setDisputes} />
      {disputes ? (
        <>
          <div className="View">
            <AllDisputes disputes={disputes.disputes} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Disputes;
