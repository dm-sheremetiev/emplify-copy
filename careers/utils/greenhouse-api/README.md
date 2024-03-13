Provides abstraction for Greenhouse.io Job Board API. Loads entities hierarchy from single payload and keeps data in
memory. Mutation is not supported, hierarchy is supposed to be rebuilt from scratch upon refresh.

The process is as following:

1. Deserialize entities:
   - Create ID maps for root departments, locations (offices), and positions (jobs)
   - Create hierarchy tree of departments for reparenting positions
   - Deduplicate entities under single reference
2. Reparent positions to root departments
3. Create views to create some common structures for querying data and centralize filtering logic.
