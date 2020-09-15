import React, { useState } from 'react';

import { GET_LATEST_EVENTS, GET_LATEST_DISPUTES } from 'utils/queries';
import RecentMiningEvents from 'components/mining-events/RecentMiningEvents';
import GraphFetch from 'components/shared/GraphFetch';
import RecentDisputes from 'components/disputes/RecentDisputes';
import OpenDisputesFetch from 'components/disputes/OpenDiputesFetch';

const Home = () => {
  const [events, setEvents] = useState();
  const [disputes, setDisputes] = useState();

  return (
    <>
      <OpenDisputesFetch />
      <GraphFetch
        query={GET_LATEST_EVENTS}
        setRecords={setEvents}
        suppressLoading={true}
      />
      <GraphFetch
        query={GET_LATEST_DISPUTES}
        setRecords={setDisputes}
        suppressLoading={true}
      />

      {events ? (
        <div className="View">
          <RecentMiningEvents events={events.miningEvents} />
        </div>
      ) : null}

      {disputes ? (
        <div className="View">
          <RecentDisputes disputes={disputes.disputes} />
        </div>
      ) : null}
    </>
  );
};

export default Home;
