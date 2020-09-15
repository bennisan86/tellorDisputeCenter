import React, { useState } from 'react';

import { GET_ALL_EVENTS } from 'utils/queries';
import AllMiningEvents from 'components/mining-events/AllMiningEvents';
import GraphFetch from 'components/shared/GraphFetch';
import OpenDisputesFetch from 'components/disputes/OpenDiputesFetch';

const Mining = () => {
  const [events, setEvents] = useState();

  return (
    <>
      <OpenDisputesFetch />
      <GraphFetch
        query={GET_ALL_EVENTS}
        setRecords={setEvents}
        suppressLoading={true}
      />

      {events ? (
        <div className="View">
          <AllMiningEvents events={events.miningEvents} />
        </div>
      ) : null}
    </>
  );
};

export default Mining;
